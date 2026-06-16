

interface NoteCardProps {
    title: string,
    content: string,
    updatedAt: string,
    icon?: string
}

const NoteCard = ({
    title,
    content,
    updatedAt,
    icon
}:NoteCardProps) => {
    return (
        <div className="card bg-base-200/30 w-full card-lg overflow-hidden">
            <div className="card-body flex flex-col gap-5">
                <div className="card-content flex flex-col gap-2">
                    <h1 className="card-title text-xl font-semibold tracking-wide flex flex-row">
                        <div className="icon-container bg-base-200/50 p-1 rounded-xl avatar">{icon}</div>
                        {title}
                    </h1>
                    <h2 className="text-md font-normal">{content}</h2>
                    <p className="text-md font-semibold opacity-80">{updatedAt}</p>
                </div>
                <div className="card-actions">
                    <button type="button" className="btn btn-soft btn-warning cursor-pointer">View</button>
                    <button type="button" className="btn btn-soft btn-info cursor-pointer">Edit</button>
                    <button type="button" className="btn btn-soft btn-error cursor-pointer">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default NoteCard