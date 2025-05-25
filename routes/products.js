import express from "express";
const router = express.Router();

const products = [
  {
    id: 1,
    name: "Product One",
    quantity: 1,
    price: 5000,
    description: "Lorem ipsum dolor sit amet consectetur  ",
  },
  {
    id: 2,
    name: "Product Two",
    quantity: 1,
    price: 1000,
    description: "Lorem ipsum dolor sit amet consectetur   ",
  },
  {
    id: 3,
    name: "Product Three",
    quantity: 1,
    price: 1500,
    description: "Lorem ipsum dolor sit amet consectetur   ",
  },
  {
    id: 4,
    name: "Product Four",
    quantity: 1,
    price: 500,
    description: "Lorem ipsum dolor sit amet consectetur   ",
  },
  {
    id: 5,
    name: "Product Five",
    quantity: 1,
    price: 520,
    description:
      "Lorem ipsum dolor sit amet consectetur sit amet consectetur   ",
  },
  {
    id: 6,
    name: "Product Six",
    quantity: 1,
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur sit amet consectetur   ",
  },
  {
    id: 7,
    name: "Product Seven",
    quantity: 1,
    price: 8900,
    description:
      "Lorem ipsum dolor sit amet consectetur sit amet consectetur   ",
  },
  {
    id: 8,
    name: "Product Eight",
    quantity: 1,
    price: 450,
    description:
      "Lorem ipsum dolor sit amet consectetur sit amet consectetur   ",
  },
  {
    id: 9,
    name: "Product Nine",
    quantity: 1,
    price: 45,
    description:
      "Lorem ipsum dolor sit amet consectetur sit amet consectetur   ",
  },
  {
    id: 10,
    name: "Product Ten",
    quantity: 1,
    price: 999,
    description:
      "Lorem ipsum dolor sit amet consectetur sit amet consectetur   ",
  },
];

router.get("/", (req, res) => {
  res.status(200).json(products);
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const product = products.find((product) => product.id === id);

  if (!product) {
    return res
      .status(404)
      .json({ msg: ` A product with the id of ${id} was not found` });
  }
  res.status(200).json(product);
});

export default router;
