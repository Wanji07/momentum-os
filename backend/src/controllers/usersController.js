import User from "../models/User.js";

export async function getAllUsers(_, res) {
    try {
        const users = await User.find().sort({ createdAt: -1 });
        res.status(200).json(users);
    } catch (error) {
        console.error("Error in getAllUsers controller:", error);

        res.status(500).json({
            message: "Internal Server error!"
        });
    }
}

export async function getUserById(req, res) {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);

        if (!user) return res.status(401).json({
            message: "User not found!"
        });
    } catch (error) {
        console.error("Error in GetUserById controller:", error);

        res.status(500).json({
            message: "Internal Server Error!"
        });
    }
}

export async function createUser(req, res) {
    try {
        const {username, email, password} = req.body;
        const user = new User({username, email, password});

        const savedUser = await user.save();

        res.status(201).json(savedUser);

    } catch (error) {
        console.error("Error in createUser controller:", error);

        res.status(500).json({
            message: "Internal Server Error!"
        });
    }
}

export async function updateUser(req, res) {
    try {
        const { username, email, password } = req.body;
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {username, email, password},
            {
                returnDocument: "after"
            })
        
        if (!updatedUser) return res.status(401).json({ message: "User not found!" });

        res.status(200).json(updatedUser);

    } catch (error) {
        console.error("Error in updateUser controller:", error);

        res.status(500).json({
            message: "Internal Server Error!"
        });
    }
}

export async function deleteUser(req, res) {
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id);
        if (!deleteUser) return res.status(401).json({ message: "User not found!" });

        res.status(201).json({ 
            message: "User successfully deleted!"
        });

    } catch (error) {
        console.error("Erorr in deleteUser controller:". error);

        res.status(500).json({
            message: "Internal Server Error!"
        });
    }
}