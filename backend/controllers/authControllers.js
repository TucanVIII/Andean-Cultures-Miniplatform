import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

// @desc Login
// @route POST /auth
// @access Public
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email and password are obligatory" });
  }

  const foundUser = await User.findOne({ email }).exec();
  if (!foundUser) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const match = await bcrypt.compare(password, foundUser.password);
  if (!match) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const accessToken = jwt.sign(
    {
      UserInfo: { email: foundUser.email },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" }
  );
  // Create secure cookie with refresh token
  res.cookie("jwt", refreshToken, {
    httpOnly: true, // accessible only for web server
    secure: true, //https
    sameSite: "None", //cross-site-cookie
    maxAge: 7 * 24 * 60 * 60 * 1000, // cookie expiry
  });

  // Send access token containing username and roles
  res.json({ accessToken });
});

// @desc Refresh
// @route GET /auth/refresh
// @access Private
const refresh = (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const refreshToken = cookies.jwt;
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    asyncHandler(async (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: "Forbidden" });
      }

      const foundUser = await UserModel.findOne({
        username: decoded.username,
      }).exec();
      if (!foundUser) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const accessToken = jwt.sign(
        {
          UserInfo: { email: foundUser.email },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "15m" }
      );
      res.json({ accessToken });
    })
  );
};

// @desc Logout
// @route GET /auth/logout
// @access Public
const logout = (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) {
    //return res.sendStatus(204) // No content
    return res.json({ message: "No cookie found" });
  }

  res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });

  res.json({ message: "Cookie cleared - Logged out successfully" });
};

export { login, refresh, logout };
