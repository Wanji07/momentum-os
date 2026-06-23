import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router'
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
}

const ViewTasksPage = () => {


    const [task, setTask] = useState<TaskProps | null>(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
 
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
                                <button type="button" className="btn btn-soft btn-info cursor-pointer">Edit</button>
                                <button type="button" className="btn btn-soft btn-success cursor-pointer">Complete</button>
                                <button type="button" className="btn btn-soft btn-error cursor-pointer">Delete</button>
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