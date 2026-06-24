import AppLayout from '../../layouts/AppLayout'

import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'

import { useParams, useNavigate } from 'react-router'
import axios from 'axios'
import api from '../../lib/axios'
import toast from 'react-hot-toast'

interface TasksProps {
    _id: string
    title: string,
    description: string,
    completed: boolean,
    priority: "high" | "medium" | "low" | string,
    dueDate: string
}

const EditTasksPage = () => {

    const [task, setTask] = useState<TasksProps | null>(null)
    const [loading, setLoading] = useState(false)


    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchTask = async() => {
            try {
                const res = await api.get(`/tasks/${id}`)
                console.log(res.data)
                setTask(res.data)
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    if (error.response?.status === 429) {
                        toast.error("You are fetching tasks too fast!", {
                            duration: 4000
                        })
                    } else {
                        toast.error("Failed to fetch task!")
                        console.log("Error in fetching task:", error)
                    }
                } else {
                    toast.error("Something went wrong!")
                    console.log("Unexpected Error:", error)
                }
            } finally {
                setLoading(false)
            }
        }

        fetchTask()

    }, [id])

    const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        if (!task) return

        if (!task.title?.trim() || !task.description?.trim()) {
            toast.error("All fields are required!")
            return
        }

        try {
            await api.put(`/tasks/${id}`, task)
            
            toast.success("Successfully updated task!")
            navigate("/tasks")
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response?.status === 429) {
                    toast.error("You are fetching tasks too fast!", {
                        duration: 4000
                    })
                } else {
                    toast.error("Failed to fetch task!")
                    console.log("Error in fetching task:", error)
                }
            } else {
                    toast.error("Something went wrong!")
                    console.log("Unexpected Error:", error)
                } 
            } finally {
                setLoading(false)
        }
    }

    if (loading || !task) {
        return(
            <div className="min-h-screen bg-base-200 flex items-center justify-center">
                <span className="loading loading-spinner loading-md"></span>
            </div>
        )
    }


    return (
        <AppLayout
        title='Edit Tasks'
        >
            <div className="min-h-screen bg-base-100">
                <div className="container px-4 py-8">
                    <div className="max-w-2xl mx-auto">
                        <div className="card card-xl">
                            <div className="card-body flex flex-col gap-5">
                                    <form onSubmit={handleSubmit}>
                                        <div className='form-control mb-4 flex flex-col items-start gap-3'>
                                            <label className="label">
                                                <span className="label-text">Title</span>
                                            </label>
                                            <input type="text"
                                            placeholder="Task Title"
                                            className="input input-bordered w-full"
                                            value={task.title}
                                            onChange={(e) => setTask({ ...task, title: e.target.value })}
                                            />
                                        </div>

                                        <div className='form-control mb-4 flex flex-col items-start gap-3'>
                                            <label className="label">
                                                <span className="label-text">Description</span>
                                            </label>
                                            <textarea
                                            placeholder="Write your Note here..."
                                            className="textarea textarea-bordered h-32 w-full"
                                            value={task.description}
                                            onChange={(e) => setTask({ ...task, description: e.target.value })}
                                            />
                                        </div>

                                        <div className='form-control mb-4 flex flex-col items-start gap-3'>
                                            <label className="label">
                                                <span className="label-text">Priority</span>
                                            </label>
                                            <select 
                                            value={task.priority}
                                            className="select"
                                            onChange={(e) => setTask({ ...task, priority: e.target.value})}
                                            >
                                                <option value="high">High</option>
                                                <option value="medium">Medium</option>
                                                <option value="low">Low</option>
                                            </select>
                                        </div>


                                        <div className='form-control mb-4 flex flex-col items-start gap-3'>
                                            <label className="label">
                                                <span className="label-text">Due Date</span>
                                            </label>
                                            <input
                                            type="date"
                                            className="input input-bordered"

                                            value={task.dueDate}

                                            onChange={(e) => setTask({ ...task, dueDate: e.target.value})}
                                            />
                                        </div>

                                        <div className="card-actions justify-end">
                                            <button type="submit" className="btn btn-soft" disabled={loading}>
                                                {loading ? "Updating..." : "Update Task"}
                                            </button>
                                        </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default EditTasksPage