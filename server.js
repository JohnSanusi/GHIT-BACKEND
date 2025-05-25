import express from "express";
import courses from "./routes/courses.js";
import prodcuts from "./routes/products.js";
const port = process.env.PORT;

const app = express();

app.use("/api/courses", courses);
app.use("/api/products", prodcuts);
app.listen(port, () => console.log(`server is running on port ${port}`));
