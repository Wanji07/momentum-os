import AppLayout from "../../layouts/AppLayout"

import TaskCard from "../../components/TaskCard"
import CompletedTaskCard from "../../components/CompletedTaskCard"

import { useEffect, useState } from 'react'
import api from "../../lib/axios"
import axios from 'axios'
import toast from 'react-hot-toast'


interface TasksProps {
    _id: string,
    title: string,
    description: string,
    priority: "low" | "medium" | "high",
    dueDate: string,
    completed: false
}

const Tasks = () => {

    const [tasks, setTasks] = useState<TasksProps[]>([])
    const [completedTasks, setCompletedTasks] = useState<TasksProps[]>([])

    useEffect(() => {
        const fetchTasks = async() => {
            try {
                const res = await api.get("/tasks")
                console.log(res.data)
                setTasks(res.data)
            } catch (error) {
                console.log("Error fetching tasks!", error)
            }
        }

        const fetchCompletedTasks = async() => {
            try {
                const res = await api.get("/tasks/completed")
                console.log(res.data)
                setCompletedTasks(res.data)
            } catch (error) {
                console.log("Error fetching completed tasks!", error)
            }
        }

        fetchTasks()
        fetchCompletedTasks()
    }, [])

        const handleComplete = async(_id: string, e: React.MouseEvent<HTMLButtonElement>) => {
        
        if (!window.confirm("Are you sure you want to complete this note?")) return;

        e.preventDefault()
        e.stopPropagation()
        
        try {
            await api.put(`/tasks/${_id}`, {
                completed: true
            })
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


    return (
        <AppLayout
        title="Tasks"
        showSearch={true}
        searchContent="Tasks"
        actionLabel="Create Task"
        url="/tasks/create"
        >
            <div className="container max-w-screen flex flex-col gap-2 justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {tasks.map(task => (
                        <TaskCard 
                        key={task._id}
                        _id={task._id}
                        title={task.title}
                        description={task.description}
                        priority={task.priority}
                        dueDate={task.dueDate}
                        handleComplete={handleComplete}
                        />
                    ))}
                </div>

                <div className="divider opacity-50">Completed Tasks</div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {completedTasks.map(completedTask => (
                        <CompletedTaskCard
                        key={completedTask._id}
                        title={completedTask.title}
                        description={completedTask.description}
                        priority={completedTask.priority}
                        dueDate={completedTask.dueDate}
                        />
                    ))}
                </div>

            </div>
        </AppLayout>
    )
}

export default Tasks