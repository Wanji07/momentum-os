import PriorityBadge from "./PriorityBadge"
import { TrashIcon } from "lucide-react"

interface TaskCardProps {
    _id: string
    title: string,
    description: string,
    priority: "low" | "medium" | "high",
    completed?: boolean,
    dueDate: string,
    handleDelete: (
        _id: string,
        e: React.MouseEvent<HTMLButtonElement>
    ) => void
}

const CompletedTaskCard = ({
    _id,
    title,
    description,
    priority,
    dueDate,
    handleDelete
}:TaskCardProps) => {
    return (
        <div className="container relative card bg-base-200/30 w-full card-lg overflow-hidden opacity-60">
            <div className="card-body flex flex-col gap-5">
                <div className="card-content flex flex-col gap-3">
                    <div className="card-header flex w-full flex-row items-center justify-between  gap-60">
                        <div className="flex flex-row justify-between w-full">
                            <h1 className="card-title text-xl font-semibold tracking-wide">
                            {title}
                            </h1>
                            <button type="button" 
                            className="btn btn-ghost btn-error cursor-pointer w-max p-2 opacity-80"
                            onClick={(e) => {
                                handleDelete(_id, e)
                            }}><TrashIcon /></button>
                        </div>

                    </div>
                    <h2 className="text-md font-medium">{description}</h2> 
                    <div className="task-misc flex flex-row gap-5 items-center">
                        <p className="text-sm shrink-0 font-semibold">📅 {dueDate}</p>
                        <PriorityBadge priority={priority} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompletedTaskCard