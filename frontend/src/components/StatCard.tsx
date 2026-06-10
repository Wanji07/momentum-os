interface StatCardProps {
    title: string,
    icon: string,
    value: string
}

const StatCard = ({
    title, icon, value
}: StatCardProps) => {
    return (
        <div className="card w-max bg-base-200/50 card-xl shadow-md">
            <div className="card-body flex gap-5">
                <h2 className="card-title tracking-wider">{icon} {title}</h2>
                <p className="tracking-wide font-medium">{value}</p>
            </div>
        </div>
    )
}

export default StatCard