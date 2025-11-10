// Server libraries
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";
import corsOptions from "./config/corsOptions.js";

// Routes imports
import rootRouter from "./routes/root.js";
import userRoutes from "./routes/userRoutes.js";
import sectionRoutes from "./routes/sectionRoutes.js";
import quizAnswersRoutes from "./routes/quizAnswersRoutes.js";
import questionsRoutes from "./routes/questionsRoutes.js";

// Middlewares to handle logs and log errors
import { logger, logEvents } from "./middleware/loggers.js";
import errorHandler from "./middleware/errorHandler.js";

// Connection to DB
import connectionDB from "./config/db.js";

// Path log events
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Dotenv
dotenv.config();

// DB connection
connectionDB();

const app = express();

// Middlewares
app.use(logger);
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/", express.static(path.join(__dirname, "public")));

// Routes management
app.use("/", rootRouter);
app.use("/users", userRoutes);
app.use("/users/progress", sectionRoutes);
app.use("/users/quiz", quizAnswersRoutes);
app.use("/questions",questionsRoutes);
app.use(/.*/, (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else {
    res.type("txt").send("404 not found");
  }
});

app.use(errorHandler);

// Testing DB connection
mongoose.connection.once("open", () => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
});

mongoose.connection.on("error", (err) => {
  console.error(err);
  logEvents(
    `${err.no}:${err.code}\t${err.syscall}\t${err.hostname}`,
    "mongoErrLog.log"
  );
});
