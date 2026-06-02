import express from "express"

export const healthCheck = (req, res) => {
    res.status(200).json({
        status: "ok",
        message: "MomentumOS API is running!"
    });
};