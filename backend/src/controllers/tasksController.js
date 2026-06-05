import Task from "../models/Task.js";

export async function getAllTasks(_, res) {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });
        res.status(200).json(tasks);
    } catch (error) {
        console.error("Error in getAllTasks controller:", error);
        
        res.status(500).json({
            message: "Internal Server error!"
        });
    }
}

export async function getTaskById(req, res) {
    try {
        const task = await Task.findById(req.params.id);
        res.status(200).json(task);

        if (!task) return res.status(401).json({
            message: "Task not found!"
        });

    } catch (error) {
        console.error("Error in GetTaskById controller:", error);

        res.status(500).json({
            message: "Internal Server Error!"
        });
    }
}

export async function createTask(req, res) {
    try {
        const { title, description, priority, completed, dueDate } = req.body;
        const task = new Task({title, description, priority, completed, dueDate});

        const savedTask = await task.save();
        
        res.status(200).json(savedTask);

    } catch (error) {
        console.error("Error in createTask controller:", error);

        res.status(500).json({
            message: "Internal Server Error!"
        });
    }
}

export async function updateTask(req, res) {
    try {
        const { title, description, priority, completed, dueDate } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            {title, description, priority, completed, dueDate},
            {
                returnDocument: "after"
            }
        );

        if (!updatedTask) return res.status(401).json({
            message: "Task not found!"
        });
        
        res.status(200).json(updatedTask);
    } catch (error) {
        console.error("Error in updateTask controller:", error);
        res.status(500).json({
            message: "Internal Server Error!"
        });
    }
}

export async function deleteTask(req, res) {
    try {
        const deleteTask = await Task.findByIdAndDelete(req.params.id);
        if (!deleteTask) return res.status(401).json({
            message: "Task not found!"
        });

        res.status(200).json({
            message: "Task successfully deleted!"
        });
    } catch (error) {
        console.error("Error in deleteTask controller:", error);
        res.status(501).json({
            message: "Internal Server Error!"
        });
    }
}