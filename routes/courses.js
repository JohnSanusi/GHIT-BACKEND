import express from "express";
import Course from "../models/courses.js";
const router = express.Router();

const courses = [
  {
    id: 1,
    name: "Analogue Electronics",
    type: "course",
    price: 120,
    duration: "15 weeks",
    stack: "master everything on analogue electronics ",
    quantity: 1,
  },
  {
    id: 2,
    name: "Digital Electronics",
    type: "course",
    price: 500,
    duration: "12 weeks",
    stack: "master everything on digital electronics ",
    quantity: 1,
  },
  {
    id: 3,
    name: "Micro Controller",
    price: 1000,
    type: "course",
    duration: "20 weeks",
    stack: "master everything on Micro controllers ",
    quantity: 1,
  },
  {
    id: 4,
    name: "Computer Engineering",
    type: "course",
    price: 2000,
    duration: "27 weeks",
    stack: "master everything on computer engineering ",
    quantity: 1,
  },
  {
    id: 5,
    name: "AutoCad",
    type: "course",
    price: 2500,
    duration: "13 weeks",
    stack: "master everything on autocad ",
    quantity: 1,
  },
  {
    id: 6,
    name: "Corel Draw",
    type: "course",
    price: 500,
    duration: "10 weeks",
    stack: "master everything on Corel Draw ",
    quantity: 1,
  },
  {
    id: 7,
    name: "3ds Max",
    type: "course",
    price: 999,
    duration: "12 weeks",
    stack: "master everything on 3ds Max ",
    quantity: 1,
  },
  {
    id: 8,
    name: "Photoshop",
    price: 2000,
    type: "course",
    duration: "17 weeks",
    stack: "master everything on Photoshop ",
    quantity: 1,
  },
  {
    id: 9,
    name: "Power Automation",
    type: "course",
    price: 1500,
    duration: "20 weeks",
    stack: "master everything on Power Automation ",
    quantity: 1,
  },
  {
    id: 10,
    name: "House wiring",
    type: "course",
    price: 999,
    duration: "22 weeks",
    stack: "master everything on House wiring ",
    quantity: 1,
  },
  {
    id: 11,
    name: "CCTV",
    price: 2500,
    type: "course",
    duration: "15 weeks",
    stack: "master everything on CCTV ",
    quantity: 1,
  },
  {
    id: 12,
    name: "Solar Engineering",
    type: "course",
    price: 6000,
    duration: "17 weeks",
    stack: "Inverters, panels, battries, charge controllers ",
    quantity: 1,
  },
  {
    id: 13,
    name: "Office Applications",
    type: "course",
    price: 800,
    duration: "16 weeks",
    stack: "MS word, MS excel, MS publisher ",
    quantity: 1,
  },
  {
    id: 14,
    name: "Android App Dev",
    type: "course",
    price: 6000,
    duration: "25 weeks",
    stack: "java, Kotlin, MIT Blocks ",
    quantity: 1,
  },
  {
    id: 15,
    name: "Front-End Web Dev",
    type: "course",
    price: 1000,
    duration: "12 weeks",
    stack: "Master HTML, CSS, JavaScript, React",
    quantity: 1,
  },
  {
    id: 16,
    name: "C Lanuguage",
    type: "course",
    price: 4000,
    duration: "20 weeks",
    stack: "C, C#, C++ ",
    quantity: 1,
  },
];

const insertCourses = async () => {
  try {
    const existing = await Course.find();
    if (existing.length === 0) {
      await Course.insertMany(courses);
      console.log("courses inserted successfully");
    } else {
      console.log("courses already exists, skipping insert");
    }
  } catch (error) {
    console.error("failed to insert courses", error.message);
    process.exit(1);
  }
};

insertCourses();

router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (err) {
    res
      .status(500)
      .json({ message: "failed to fetch courses", error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const course = await Course.findOne({ id: parseInt(req.params.id) });

    if (!course) {
      return res
        .status(404)
        .json({ msg: ` A course with the id of ${id} was not found` });
    }
    res.status(200).json(course);
  } catch (err) {
    res
      .status(500)
      .json({ message: "error fetching course", erroe: err.message });
  }
});

export default router;
