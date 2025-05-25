import express from "express";
import cors from "cors";
import courses from "./routes/courses.js";
import prodcuts from "./routes/products.js";
const port = process.env.PORT;

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
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
app.use("/api/courses", courses);
app.use("/api/products", prodcuts);
app.listen(port, () => console.log(`server is running on port ${port}`));
