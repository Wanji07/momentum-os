import AppLayout from "../layouts/AppLayout"
import Aureo from "../assets/Aureo/Aureo.png"
import AureoTip from '../assets/Aureo/AureoTip.png'
import { ChevronRight } from "lucide-react"
import StatCard from "../components/StatCard"
import ListWidget from "../components/ListWidget"
import { Link } from "react-router"

import { useEffect, useState } from 'react'
import axios from 'axios'
import api from "../lib/axios"
import toast from "react-hot-toast"

import RateLimitedUI from "../components/RateLimitedUI"

interface GeneralProps {
    _id: string,
    title: string,
    description: string,
    priority: "low" | "medium" | "high",
    dueDate: string,
    completed: boolean
    content: string,
    updatedAt: string,
    icon?: string,
    url: string
}

const Dashboard = () => {

    const [tasks, setTasks] = useState<GeneralProps[]>([])
    const [notes, setNotes] = useState<GeneralProps[]>([])
    const [isRateLimited, setIsRateLimited] = useState(true)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchNotes = async() => {
            try {
                const res = await api.get("/notes")
                console.log("Notes fetched: ", res.data)
                setIsRateLimited(false)
                setNotes(res.data)
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    if (error.response?.status === 429) {
                        setIsRateLimited(true)
                        toast.error("You are requesting note data too fast!", {
                            duration: 4000
                        })
                    } else {
                        toast.error("Failed to fetch note data!")
                        console.log("Error in fetching note data: ", error)
                    }
                } else {
                    toast.error("Something went wrong")
                    console.log("Unexpected Error: ", error)
                }
            }
        }

        const fetchTasks = async() => {
            try {
                const res = await api.get("/tasks")
                console.log("Tasks fetched: ", res.data)
                setIsRateLimited(false)
                setTasks(res.data)
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    if (error.response?.status === 429) {
                        setIsRateLimited(true)
                        toast.error("You are requesting task data too fast!", {
                            duration: 4000
                        })
                    } else {
                        toast.error("Failed to fetch task data!")
                        console.log("Error in fetching task data: ", error)
                    }
                } else {
                    toast.error("Something went wrong")
                    console.log("Unexpected Error: ", error)
                }
            }
        }

        fetchNotes()
        fetchTasks()
        setLoading(false)
    }, [])

            const handleDeleteNotes = async(_id: string, e: React.MouseEvent<HTMLButtonElement>) => {
            
            if (!window.confirm("Are you sure you want to delete this task?")) return

            e.preventDefault()
            e.stopPropagation()

            try {
                await api.delete(`/notes/${_id}`)
                setNotes((prev) => prev.filter((note) => note._id !== _id))
                toast.success("Successfully deleted note!")
                setIsRateLimited(false)

            } catch (error) {
                if (axios.isAxiosError(error)) {
                    if (error.response?.status === 429) {
                        setIsRateLimited(true)
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

            const handleDeleteTask = async(_id: string, e: React.MouseEvent<HTMLButtonElement>) => {
            
            if (!window.confirm("Are you sure you want to delete this task?")) return

            e.preventDefault()
            e.stopPropagation()

            try {
                await api.delete(`/tasks/${_id}`)
                setTasks((prev) => prev.filter((task) => task._id !== _id))
                toast.success("Successfully deleted note!")
                setIsRateLimited(false)
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    if (error.response?.status === 429) {
                        setIsRateLimited(true)
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

    if (loading || !notes || !tasks) {
        return(
            <div className="min-h-screen bg-base-200 flex items-center justify-center">
                <span className="loading loading-spinner loading-md"></span>
            </div>
        )
    }

    return (
        <>
            <AppLayout
            title="Dashboard"
            >
            <div className="container max-w-screen max-h-15 flex flex-col">
                {isRateLimited ? <RateLimitedUI /> : (
                    <>
                <div className="hero w-full">
                    <div className="hero-content flex flex-row items-center gap-5">
                        <img src={Aureo} className="size-25" />
                        <div className="flex flex-col justify-start gap-4">
                            <h1 className="tracking-wide font-semibold lg:text-3xl">Welcome back, Wanji 👋</h1>
                            <h2 className="tracking-normal font-medium lg:text-xl">Here's your momentum for today.</h2>
                        </div>
                    </div>
                </div>
                <section className="stats-section flex flex-row justify-center gap-10">
                    <div className="card w-full card-xl flex flex-row justify-center gap-12">
                            <StatCard
                            title="Notes"
                            icon="📝"
                            value={`${notes.length} Total Notes`} 

                            />
                            <StatCard
                            title="Tasks"
                            icon="✅"
                            value={`${tasks.length} Total Tasks`} 
                            />
                    </div>
                </section>
                <section className="recent-section grid grid-cols-2 gap-6 mt-5">
                    <div className="notes-container card bg-base-200/50 card-xl">
                        <div className="card-body">
                            <h1 className="card-title">📝 Recent Notes</h1>
                                <ul className="list bg-base-200/20 rounded-box shadow-md">

                                    {notes.slice(0,3).map(note => (
                                        <ListWidget
                                        _id={note._id}
                                        title={note.title}
                                        timestamp={note.updatedAt}
                                        handleDelete={handleDeleteNotes}
                                        />
                                    ))}

                                    {notes.length === 0 ? (
                                        <div className="card card-xl border-2 border-dashed border-yellow-500/20">
                                            <div className="card-body flex flex-col items-center">
                                                <div className="card-title flex flex-row gap-2 items-center justify-center">
                                                    <img src={AureoTip} className="size-15"/>
                                                    <h1 className="tracking-wide font-semibold">You don't have any notes yet!</h1>
                                                </div>
                                                <p className="font-medium tracking-wide">Start building momentum today.</p>
                                                <Link to="/notes/create" className="btn btn-soft px-10 mt-5">Create Note</Link>
                                            </div>
                                        </div>
                                    ): (
                                        <Link to="/notes" className="btn btn-ghost w-full">
                                            <div className="list-title tracking-wider font-semibold">View All</div>
                                            <ChevronRight
                                            size={18} 
                                            />
                                        </Link>
                                    )}
                                </ul>
                        </div>
                    </div>
                    <div className="tasks-container card bg-base-200/50 card-xl">
                        <div className="card-body">
                            <h1 className="card-title">✅ Today's Tasks</h1>
                                <ul className="list bg-base-200/20 rounded-box shadow-md">

                                    {tasks.slice(0, 3).map(task => (
                                        <ListWidget
                                        _id={task._id}
                                        title={task.title}
                                        timestamp={task.updatedAt}
                                        handleDelete={handleDeleteTask}
                                        />
                                    ))}

                                    {tasks.length === 0 ? (
                                        <div className="card card-xl border-2 border-dashed border-yellow-500/20">
                                            <div className="card-body flex flex-col items-center">
                                                <div className="card-title flex flex-row gap-2 items-center justify-center">
                                                    <img src={AureoTip} className="size-15"/>
                                                    <h1 className="tracking-wide font-semibold">You don't have any tasks yet!</h1>
                                                </div>
                                                <p className="font-medium tracking-wide">Start building momentum today.</p>
                                                <Link to="/tasks/create" className="btn btn-soft px-10 mt-5">Create Task</Link>
                                            </div>
                                        </div>
                                    ): (
                                        <Link to="/tasks" className="btn btn-ghost w-full">
                                            <div className="list-title tracking-wider font-semibold">View All</div>
                                            <ChevronRight
                                            size={18} 
                                            />
                                        </Link>
                                    )}
                                    
                                </ul>
                        </div>
                    </div>
                </section>
                    </>
                )}
            </div>
            </AppLayout>
        </>
    )
}

export default Dashboard