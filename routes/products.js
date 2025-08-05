import express from "express";
import Product from "../models/products.js";
const router = express.Router();

const products = [
  {
    id: 1,
    name: "Product One",
    type: "product",
    quantity: 1,
    price: 5000,
    description: "Lorem ipsum dolor sit amet consectetur  ",
  },
  {
    id: 2,
    name: "Product Two",
    type: "product",
    quantity: 1,
    price: 1000,
    description: "Lorem ipsum dolor sit amet consectetur   ",
  },
  {
    id: 3,
    name: "Product Three",
    type: "product",
    quantity: 1,
    price: 1500,
    description: "Lorem ipsum dolor sit amet consectetur   ",
  },
  {
    id: 4,
    name: "Product Four",
    type: "product",
    quantity: 1,
    price: 500,
    description: "Lorem ipsum dolor sit amet consectetur   ",
  },
  {
    id: 5,
    name: "Product Five",
    type: "product",
    quantity: 1,
    price: 520,
    description:
      "Lorem ipsum dolor sit amet consectetur sit amet consectetur   ",
  },
  {
    id: 6,
    name: "Product Six",
    type: "product",
    quantity: 1,
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur sit amet consectetur   ",
  },
  {
    id: 7,
    name: "Product Seven",
    type: "product",
    quantity: 1,
    price: 8900,
    description:
      "Lorem ipsum dolor sit amet consectetur sit amet consectetur   ",
  },
  {
    id: 8,
    name: "Product Eight",
    type: "products",
    quantity: 1,
    price: 450,
    description:
      "Lorem ipsum dolor sit amet consectetur sit amet consectetur   ",
  },
  {
    id: 9,
    name: "Product Nine",
    type: "product",
    quantity: 1,
    price: 45,
    description:
      "Lorem ipsum dolor sit amet consectetur sit amet consectetur   ",
  },
  {
    id: 10,
    name: "Product Ten",
    type: "product",
    quantity: 1,
    price: 999,
    description:
      "Lorem ipsum dolor sit amet consectetur sit amet consectetur   ",
  },
];
const insertProducts = async () => {
  try {
    const existing = await Product.find();
    if (existing.length === 0) {
      await Product.insertMany(products);
      console.log("products inserted successfully");
    } else {
      console.log("products already exists, skipping insert");
    }
  } catch (error) {
    console.log("failed to insert products", error.message);
    process.exit(1);
  }
};

insertProducts();

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res
      .status(500)
      .json({ message: "failed to fetch products", error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findOne({ id: parseInt(req.params.id) });

    if (!product) {
      return res
        .status(404)
        .json({ msg: ` A product with the id of ${id} was not found` });
    }
    res.status(200).json(product);
  } catch (err) {
    res
      .status(500)
      .json({ message: "error fetching product", erroe: err.message });
  }
});

export default router;
