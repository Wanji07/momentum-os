import PriorityBadge from "./PriorityBadge"

interface TaskCardProps {
    title: string,
    description: string,
    priority: "low" | "medium" | "high",
    completed?: boolean,
    dueDate: string
}

const CompletedTaskCard = ({
    title,
    description,
    priority,
    dueDate
}:TaskCardProps) => {
    return (
        <div className="container relative card bg-base-200/30 w-full card-lg overflow-hidden opacity-60">
            <div className="card-body flex flex-col gap-5">
                <div className="card-content flex flex-col gap-3">
                    <div className="card-header flex w-full flex-row items-center justify-between  gap-60">
                        <h1 className="card-title text-xl font-semibold tracking-wide">
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
            </div>
        </div>
    )
}

export default CompletedTaskCard