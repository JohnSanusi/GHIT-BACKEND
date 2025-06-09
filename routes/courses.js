import express from "express";
const router = express.Router();

const courses = [
  {
    id: 1,
    name: "Analogue Electronics",
    type:"course"
    price: 120.99,
    duration: "15 weeks",
    stack: "master everything on analogue electronics ",
  },
  {
    id: 2,
    name: "Digital Electronics",
    type:"course"
    price: 500.0,
    duration: "12 weeks",
    stack: "master everything on digital electronics ",
  },
  {
    id: 3,
    name: "Micro Controller",
    type:"course"
    price: 1000.0,
    duration: "20 weeks",
    stack: "master everything on Micro controllers ",
  },
  {
    id: 4,
    name: "Computer Engineering",
    type:"course"
    price: 2000.0,
    duration: "27 weeks",
    stack: "master everything on computer engineering ",
  },
  {
    id: 5,
    name: "AutoCad",
    type:"course"
    price: 2500.99,
    duration: "13 weeks",
    stack: "master everything on autocad ",
  },
  {
    id: 6,
    name: "Corel Draw",
    type:"course"
    price: 500.57,
    duration: "10 weeks",
    stack: "master everything on Corel Draw ",
  },
  {
    id: 7,
    name: "3ds Max",
    type:"course"
    price: 999.99,
    duration: "12 weeks",
    stack: "master everything on 3ds Max ",
  },
  {
    id: 8,
    name: "Photoshop",
    type:"course"
    price: 2000.0,
    duration: "17 weeks",
    stack: "master everything on Photoshop ",
  },
  {
    id: 9,
    name: "Power Automation",
    type:"course"
    price: 1500.0,
    duration: "20 weeks",
    stack: "master everything on Power Automation ",
  },
  {
    id: 10,
    name: "House wiring",
    type:"course"
    price: 999.99,
    duration: "22 weeks",
    stack: "master everything on House wiring ",
  },
  {
    id: 11,
    name: "CCTV",
    type:"course"
    price: 2500.0,
    duration: "15 weeks",
    stack: "master everything on CCTV ",
  },
  {
    id: 12,
    name: "Solar Engineering",
    type:"course"
    price: 6000.0,
    duration: "17 weeks",
    stack: "Inverters, panels, battries, charge controllers ",
  },
  {
    id: 13,
    name: "Office Applications",
    type:"course"
    price: 800.0,
    duration: "16 weeks",
    stack: "MS word, MS excel, MS publisher ",
  },
  {
    id: 14,
    name: "Android App Dev",
    type:"course"
    price: 6000.0,
    duration: "25 weeks",
    stack: "java, Kotlin, MIT Blocks ",
  },
  {
    id: 15,
    name: "Front-End Web Dev",
    type:"course"
    price: 1000.0,
    duration: "12 weeks",
    stack: "Master HTML, CSS, JavaScript, React",
  },
  {
    id: 16,
    name: "C Lanuguage",
    type:"course"
    price: 4000.0,
    duration: "20 weeks",
    stack: "C, C#, C++ ",
  },
];

router.get("/", (req, res) => {
  res.status(200).json(courses);
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const course = courses.find((course) => course.id === id);

  if (!course) {
    return res
      .status(404)
      .json({ msg: ` A course with the id of ${id} was not found` });
  }
  res.status(200).json(course);
});

export default router;
