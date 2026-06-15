import mongoose from "mongoose"


const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        default: ""
    },

    priority: {
        type: String,
        enum: ["low", "medium", "high"],
        default: "medium"
    },

    completed: {
        type: Boolean,
        default: false
    },

    // dueDate: {
    //     type: Date,
    //     min: Date.now, // Prevents adding dates from the past
    // },

    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    //     required: true
    // }

},
    {
        timestamps: true
    }
);

const Task = mongoose.model("Task", taskSchema);

export default Task