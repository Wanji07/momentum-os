import PriorityBadge from "./PriorityBadge"

interface TaskCardProps {
    title: string,
    description: string,
    priority: "low" | "medium" | "high",
    completed?: boolean,
    dueDate: string
}

const TaskCard = ({
    title,
    description,
    priority,
    dueDate
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
                    <button type="button" className="btn btn-soft btn-warning cursor-pointer">View</button>
                    <button type="button" className="btn btn-soft btn-info cursor-pointer">Edit</button>
                    <button type="button" className="btn btn-soft btn-success cursor-pointer">Complete</button>
                    <button type="button" className="btn btn-soft btn-error cursor-pointer">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default TaskCard