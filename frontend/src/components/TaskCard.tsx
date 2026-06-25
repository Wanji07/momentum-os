import PriorityBadge from "./PriorityBadge"
import { Link } from 'react-router'

interface TaskCardProps {
    _id: string
    title: string,
    description: string,
    priority: "low" | "medium" | "high",
    completed?: boolean,
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

const TaskCard = ({
    title,
    description,
    priority,
    dueDate,
    _id,
    handleComplete,
    handleDelete
}:TaskCardProps) => {

    const priorityDotColor = {
        high: "status-error",
        medium: "status-warning",
        low: "status-success"
    }


    return (
        <div className="container relative card bg-base-200/30 w-full card-lg overflow-hidden">
            <div className="card-body flex flex-col gap-5">
                <div className="card-content flex flex-col gap-3">
                    <div className="card-header flex w-full flex-row items-center justify-between  gap-60">
                        <h1 className="card-title text-xl font-semibold tracking-wide">
                            <div className="status-container inline-grid *:[grid-area:1/1]">
                                <div aria-label="status" className={`status animate-ping ${priorityDotColor[priority]} opacity-50`}/>
                                <div aria-label="status" className={`status ${priorityDotColor[priority]}`}/>
                            </div>
                            {title}
                        </h1>
                    </div>
                    <h2 className="text-md font-medium">{description}</h2> 
                    <div className="task-misc flex flex-row gap-5 items-center">
                        <p className="text-sm shrink-0 font-semibold">📅 {dueDate}</p>
                        <PriorityBadge
                        priority={priority}
                        />
                    </div>
                </div>
                <div className="card-actions">
                    <Link to={`/tasks/${_id}`} type="button" className="btn btn-soft btn-warning cursor-pointer">View</Link>
                    <Link to={`/tasks/${_id}/edit`} type="button" className="btn btn-soft btn-info cursor-pointer">Edit</Link>
                    <button type="button" 
                    className="btn btn-soft btn-success cursor-pointer"
                    onClick={(e) => {
                        handleComplete(_id, e)
                    }}> Complete</button>
                    <button type="button" 
                    className="btn btn-soft btn-error cursor-pointer"
                    onClick={(e) => {
                        handleDelete(_id, e)
                    }}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default TaskCard