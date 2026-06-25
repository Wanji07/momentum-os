import { SquarePen, Eraser } from "lucide-react"
import { Link } from 'react-router'


// This widget requires a parent element of ul with list as its className!
// eg. <ul className="list bg-base-200/20 rounded-box shadow-md">{widget}</ul>

interface ListWidgetProps {
    _id: string,
    title: string,
    timestamp: string
    handleDelete: (
        id: string,
        e: React.MouseEvent<HTMLButtonElement>
    ) => void
}

const ListWidget = ({
    _id,
    title,
    timestamp,
    handleDelete
}:ListWidgetProps) => {
    return (
    <li className="list-row flex flex-row justify-between">
        <div className="note-bullet">
            <div className="list-title tracking-wider font-semibold">{title}</div>
            <div className="text-xs uppercase font-semibold opacity-60">{timestamp}</div>
        </div>
        <div className="action-container flex gap-5">
            <Link to={`/notes/${_id}`} className="btn btn-square btn-ghost">
                <SquarePen 
                size={24}
                />
            </Link>
            <button
                type="button"
                className="btn btn-square btn-ghost"
                onClick={(e) => handleDelete(_id, e)}
            >
                <Eraser 
                size={24}
                />
            </button>
        </div>
    </li>
    )
}

export default ListWidget