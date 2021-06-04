import { Router } from "express";
import {
  createStudent,
  getStudents,
  updateStudent,
  deleteStudent,
} from "../controller/studentController";

const router = Router();

router.post("/", createStudent);
router.get("/", getStudents);
router.patch("/:id", updateStudent);
router.delete("/:id", deleteStudent);

export default router;
