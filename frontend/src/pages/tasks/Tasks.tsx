import AppLayout from "../../layouts/AppLayout"
import TaskCard from "../../components/TaskCard"
import { useEffect, useState } from 'react'
import api from "../../lib/axios"


interface TasksProps {
    _id: string,
    title: string,
    description: string,
    priority: "low" | "medium" | "high",
    dueDate: string
}

const Tasks = () => {

    const [tasks, setTasks] = useState<TasksProps[]>([])

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

        fetchTasks()
    }, [])


    return (
        <AppLayout
        title="Tasks"
        showSearch={true}
        searchContent="Tasks"
        actionLabel="Create Task"
        url="/tasks/create"
        >
            <div className="container max-w-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                
                {tasks.map(task => (
                    <TaskCard 
                    key={task._id}
                    title={task.title}
                    description={task.description}
                    priority={task.priority}
                    dueDate={task.dueDate}
                    />
                ))}
            </div>
        </AppLayout>
    )
}

export default Tasks