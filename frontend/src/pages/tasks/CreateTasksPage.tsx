import AppLayout from "../../layouts/AppLayout"
import toast from 'react-hot-toast'

import { useState } from 'react'
import type { FormEvent } from 'react'

import { useNavigate, Link } from 'react-router'
import { ArrowLeftIcon } from 'lucide-react'
import api from '../../lib/axios'
import axios from 'axios'


const CreateTasksPage = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("medium")
    const [dueDate, setDueDate] = useState("")

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        if (!title.trim() || !description.trim()) {
            toast.error("All fields are required!")
            return
        }

        setLoading(false)

        try {
            await api.post("/tasks", {
                title,
                description,
                priority,
                dueDate
            })

            toast.success("Successfully created task!")
            navigate("/tasks")

        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response?.status === 429) {
                    toast.error("You are creating tasks too fast!", {
                        duration: 4000
                    })
                } else {
                    toast.error("Failed to create task!")
                    console.log("Error in creating task", error)
                }
            } else {
                toast.error("Something went wrong!")
                console.log("Unexpected error:", error)
            }
        } finally {
            setLoading(false)
        }
    }
    return (
        <AppLayout
        title="Create Tasks"
        >
            <div className="min-h-screen bg-base-100">
                <div className="container px-4 py-8">
                    <div className="max-w-2xl mx-auto">
                    <Link to="/tasks" type="button" className="btn btn-soft mb-6 max-w-50">
                    <ArrowLeftIcon className="size-5" />
                    Back to Tasks
                    </Link>
                        <div className="card bg-base-200">
                            <div className="card-body flex flex-col gap-4">
                                <form onSubmit={handleSubmit}>
                                    <div className='form-control mb-4 flex flex-col items-start gap-3'>
                                        <label className="label">
                                            <span className="label-text">Title</span>
                                        </label>
                                        <input type="text"
                                        placeholder="Note Title"
                                        className="input input-bordered w-full"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        />
                                    </div>

                                    <div className='form-control mb-4 flex flex-col items-start gap-3'>
                                        <label className="label">
                                            <span className="label-text">Description</span>
                                        </label>
                                        <input type="text"
                                        placeholder="Add Description here  "
                                        className="input input-bordered w-full"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </div>

                                    <div className='form-control mb-4 flex flex-col items-start gap-3'>
                                        <label className="label">
                                            <span className="label-text">Priority</span>
                                        </label>
                                        <select 
                                        value={priority}
                                        className="select"
                                        onChange={(e) => setPriority(e.target.value)}
                                        >
                                            <option value="high">High</option>
                                            <option value="medium">Medium</option>
                                            <option value="low">Low</option>
                                        </select>
                                    </div>

                                    <div className='form-control mb-4 flex flex-col items-start gap-3'>
                                        <label className="label">
                                            <span className="label-text">Description</span>
                                        </label>
                                        <input
                                        type="date"
                                        className="input input-bordered"

                                        value={dueDate}

                                        onChange={(e)=>
                                        setDueDate(e.target.value)
                                        }
                                        />
                                    </div>

                                    <div className="card-actions justify-end">
                                        <button type="submit" className="btn btn-soft" disabled={loading}>
                                            {loading ? "Creating..." : "Create Task"}
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

export default CreateTasksPage