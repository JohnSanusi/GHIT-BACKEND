import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 100,
  },

  type: {
    type: String,
    required: true,
    default: "course",
  },
  price: {
    type: Number,
    required: true,
    minLength: 0,
  },
  duration: {
    type: String,
    required: true,
  },
  stack: {
    type: String,
    require: true,
    minLength: 2,
    maxLength: 200,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
});

const Course = mongoose.model("Course", courseSchema);

export default Course;
