import express from "express"
import { getAllTasks, getTaskById, getCompletedTasks, createTask, updateTask, deleteTask } from "../controllers/tasksController.js"

const router = express.Router();

router.get("/", getAllTasks);
router.get('/completed', getCompletedTasks);
router.get("/:id", getTaskById);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router