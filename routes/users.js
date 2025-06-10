import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send({ message: "GET all users" });
});
router.get("/:id", (req, res) => {
  res.send({ message: "GET user details" });
});
router.post("/:id", (req, res) => {
  res.send({ message: "CREATE new user" });
});
router.put("/:id", (req, res) => {
  res.send({ message: "UPDATE user" });
});
router.delete("/:id", (req, res) => {
  res.send({ message: "DELETE user" });
});

export default router;
