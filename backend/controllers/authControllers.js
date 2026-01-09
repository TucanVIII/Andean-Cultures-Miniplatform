import User from "../models/UserModel.js";
import Section from "../models/SectionModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

// @desc Signup
// @route POST /auth/signup
// @access Public
const signup = asyncHandler(async(req,res) => {
  const { email,firstName,lastName,password } = req.body;
  if(!email || !firstName || !lastName || !password) {
    return res.status(400).json({ message:"All fields are required" });
  }

  const duplicate = await User.findOne({ email }).lean();
  if(duplicate) {
    return res.status(409).json({ message:"Duplicate email user already registered" })
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  
  const sections = await Section.find().lean();

  const sectionsProgress = sections.map(section => ({
    sectionId: section._id,
    sectionTitle: section.sectionTitle,
    order: section.order,
    progress: "pending",
    theoryCompleted: false,
    videoCompleted: false,
    quiz: {
      status: "pending",
      grade: 0,
      totalQuestions: 4,
      completionDate: null,
      userAnswers: []
  }
  }))

  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    roles: ["User"],
    sections: sectionsProgress,
  });

  res.status(201).json({ message: `User registered successfully: ${user.email}` });
})

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
      "UserInfo": {
        "id": foundUser._id.toString(),
        "email": foundUser.email,
        "role": foundUser.role,
        "firstName": foundUser.firstName,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" }
  );
  const refreshToken = jwt.sign(
    { UserInfo: { id: foundUser._id.toString(),email: foundUser.email, role: foundUser.role, firstName: foundUser.firstName } },
    process.env.REFRESH_TOKEN,
    { expiresIn: "1d" }
  );
  // Create secure cookie with refresh token
  res.cookie("jwt", refreshToken, {
    httpOnly: true, // accessible only for web server
    secure: process.env.NODE_ENV === "production", //https
    sameSite: "Lax", //cross-site-cookie
    maxAge: 7 * 24 * 60 * 60 * 1000, // cookie expiry
  });

  // Send access token containing username and roles
  res.json({ accessToken });
});

// @desc Refresh
// @route GET /auth/refresh
// @access Private
const refresh = asyncHandler(async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.status(401).json({ message: "Unauthorized" });

  const refreshToken = cookies.jwt;
  let decoded;
  try {
    decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN);
  } catch (err) {
    return res.status(403).json({ message: "Forbidden" });
  }

  const email = decoded?.UserInfo?.email;
  if (!email) return res.status(401).json({ message: "Unauthorized" });

  const foundUser = await User.findOne({ email }).exec();
  if (!foundUser) return res.status(401).json({ message: "Unauthorized" });

  const accessToken = jwt.sign(
    { UserInfo: { id: foundUser._id.toString(),email: foundUser.email, role: foundUser.role } },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" }
  );
  res.json({ accessToken });
});

// @desc Logout
// @route GET /auth/logout
// @access Public
const logout = (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204).json({ message:"Not cookie found"}) // No content
  res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
  res.json({ message: "Cookie cleared - Logged out successfully" });
};

export { signup,login, refresh, logout };
