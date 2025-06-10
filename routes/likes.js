import { Router } from "express";

const router = Router();

router.get("/:id", (req, res) => {
  res.send({ message: " GET item likes " });
});

export default router;
