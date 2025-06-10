import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
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
    default: "product",
  },
  price: {
    type: Number,
    required: true,
    minLength: 0,
  },

  description: {
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

const Product = mongoose.model("Product", productSchema);

export default Product;
