import express from "express";
import cors from "cors";
import courses from "./routes/courses.js";
import prodcuts from "./routes/products.js";
import users from "./routes/users.js";
import auth from "./routes/auth.js";
import likes from "./routes/likes.js";
import connectToDatabase from "./database/mongodb.js";
import { PORT } from "./config/env.js";
import errorhandler from "./middleware/errorHandler.js";
import cookieParser from "cookie-parser";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://ghit.vercel.app",
  "https://ghit-admin.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("not alowd by CORS"));
      }
    },
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api/courses", courses);
app.use("/api/products", prodcuts);
app.use("/api/auth", auth);
app.use("/api/users", users);
app.use("/api/likes", likes);
app.use(errorhandler);

app.listen(PORT, async () => {
  console.log(`server is running on port ${PORT}`);
  await connectToDatabase();
});
