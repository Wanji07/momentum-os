
interface SettingsCardProps {
    title: string,
    children: React.ReactNode
}

const SettingsCard = ({
    title,
    children
}:SettingsCardProps) => {
    return (
        <div className="card card-md w-full max-w-3xl bg-base-200/30 overflow-hidden">
            <div className="card-body">
                <div className="card-title">
                    <h1 className="text-2xl font-bold tracking-wider">
                        {title}
                    </h1>
                </div>
                <div className="flex flex-col gap-2">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default SettingsCard