import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router'
import axios from 'axios'
import toast from 'react-hot-toast'
import { ArrowLeftIcon } from 'lucide-react'
import api from '../../lib/axios'
import AppLayout from '../../layouts/AppLayout'
import PriorityBadge from '../../components/PriorityBadge'

interface TaskProps {
    _id: string,
    title: string,
    description: string,
    priority: "high" | "medium" | "low",
    dueDate: string
    handleComplete: (
        _id: string,
        e: React.MouseEvent<HTMLButtonElement>
    ) => void
    handleDelete: (
        _id: string,
        e: React.MouseEvent<HTMLButtonElement>
    ) => void
}

const ViewTasksPage = () => {


    const [task, setTask] = useState<TaskProps | null>(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const navigate = useNavigate()

    const priorityDotColor = {
        high: "status-error",
        medium: "status-warning",
        low: "status-success"
    }

    useEffect(() => {
        const fetchTask = async() => {
            try {
                const res = await api.get(`/tasks/${id}`)
                setTask(res.data)
                console.log(res.data)
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    if (error.response?.status === 429) {
                        toast.error("You are requesting too fast!", {
                            duration: 4000
                        })
                    } else {
                        toast.error("Failed to fetch task!")
                        console.log("Error in fetching task:", error)
                    }
                } else {
                    toast.error("Unexpected error!")
                    console.log("Unexpected error:", error)
                }
            } finally {
                setLoading(false)
            }
        }
        fetchTask()

    }, [id])

        const handleComplete = async(_id: string, e: React.MouseEvent<HTMLButtonElement>) => {
        
        if (!window.confirm("Are you sure you want to complete this note?")) return;

        e.preventDefault()
        e.stopPropagation()
        
        try {
            await api.put(`/tasks/${_id}`, {
                completed: true
            })
            navigate("/tasks")
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response?.status === 429) {
                    toast.error("You are requesting too fast!", {
                        duration: 4000
                    })
                } else {
                    toast.error("Failed to complete task!")
                    console.log("Error in completing task:", error)
                }
            } else {
                toast.error("Something went wrong!")
                console.log("Unexpected Error:", error)
            }
        }
    }
        const handleDelete = async(_id: string, e: React.MouseEvent<HTMLButtonElement>) => {
            
            if (!window.confirm("Are you sure you want to delete this task?")) return

            e.preventDefault()
            e.stopPropagation()

            try {
                await api.delete(`/tasks/${_id}`)
                navigate("/tasks")
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    if (error.response?.status === 429) {
                        toast.error('You are deleting too fast!', {
                            duration: 4000
                        })
                    } else {
                        toast.error("Failed to delete task!")
                        console.log("Error in deleting task:", error)
                    }
                } else {
                    toast.error('Something went wrong!')
                    console.log('Unexpected Error:', error)
                }
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
        <AppLayout title="View Notes">
        <div className="min-h-screen bg-base-100">
            <div className="container px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <Link to="/tasks" type="button" className="btn btn-soft mb-6 max-w-50">
                    <ArrowLeftIcon className="size-5" />
                    Back to Tasks
                    </Link>
                    <div className="card bg-base-200">
                        <div className="card-body flex flex-col gap-5">
                            <div className="card-content flex flex-col gap-3">
                                <div className="card-header flex w-full flex-row items-center justify-between  gap-60">
                                    <h1 className="card-title text-xl font-semibold tracking-wide">
                                        <div className="status-container inline-grid *:[grid-area:1/1]">
                                            <div aria-label="status" className={`status animate-ping ${priorityDotColor[task.priority]} opacity-50`}/>
                                            <div aria-label="status" className={`status ${priorityDotColor[task.priority]}`}/>
                                        </div>
                                        {task.title}
                                    </h1>
                                </div>
                                <h2 className="text-md font-medium">{task.description}</h2> 
                                <div className="task-misc flex flex-row gap-5 items-center">
                                    <p className="text-sm shrink-0 font-semibold">📅 {task.dueDate}</p>
                                    <PriorityBadge
                                    priority={task.priority}
                                    />
                                </div>
                            </div>
                            <div className="card-actions">
                                <Link to={`/tasks/${id}/edit`} type="button" className="btn btn-soft btn-info cursor-pointer">Edit</Link>
                                <button type="button" 
                                className="btn btn-soft btn-success cursor-pointer"
                                onClick={(e) => handleComplete(task._id, e)}> Complete</button>
                                <button type="button" 
                                className="btn btn-soft btn-error cursor-pointer"
                                onClick={(e) => handleDelete(task._id, e )}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </AppLayout>
    )
}

export default ViewTasksPage