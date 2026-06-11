
interface PriorityBadgeProps {
    priority: "low" | "medium" | "high"
}

const PriorityBadge = ({
    priority
}:PriorityBadgeProps) => {

    const priorityColor = {
        high: "bg-red-500/10 border border-red-500/20 text-red-400",
        medium: "bg-yellow-500/10 border border-yellow-500/20 text-yellow-400",
        low: "bg-green-500/10 border border-green-500/20 text-green-400"
    }

    const priorityColorText = {
        high: "text-red-90",
        medium: "text-yellow-90",
        low: "text-green-90"
    }
    
    const autoCapitalize = {
        high: "HIGH",
        medium: "MEDIUM",
        low: "LOW"
    }

    return (
        <div className="container flex flex-row items-center gap-2 shrink-0">
            <div className={`card card-xs w-max ${priorityColor[priority]}`}>
                <div className={`card-body ${priorityColorText[priority]}`}>
                    <h1 className={`text-xs ${priorityColorText[priority]}`}>{autoCapitalize[priority]} PRIORITY</h1>
                </div>
            </div>
        </div>
    )
}

export default PriorityBadge