import { Router } from "express";
import { getUser, getUsers } from "../controllers/users.js";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUser);
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
