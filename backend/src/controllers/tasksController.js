import Task from "../models/Task.js";

export async function getAllTasks(_, res) {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });
        res.status(200).json(tasks);
    } catch (error) {
        console.error("Error in getAllTasks controller:" + error);
        res.status(500).json({
            message: "Internal Server error!"
        });
    }
}