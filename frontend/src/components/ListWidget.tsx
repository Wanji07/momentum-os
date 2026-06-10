import { SquarePen, Eraser } from "lucide-react"


// This widget requires a parent element of ul with list as its className!
// eg. <ul className="list bg-base-200/20 rounded-box shadow-md">{widget}</ul>

interface ListWidgetProps {
    title: string,
    timestamp: string
}

const ListWidget = ({
    title,
    timestamp
}:ListWidgetProps) => {
    return (
    <li className="list-row flex flex-row justify-between">
        <div className="note-bullet">
            <div className="list-title tracking-wider font-semibold">{title}</div>
            <div className="text-xs uppercase font-semibold opacity-60">{timestamp}</div>
        </div>
        <div className="action-container flex gap-5">
            <button className="btn btn-square btn-ghost">
                <SquarePen 
                size={24}
                />
            </button>
            <button className="btn btn-square btn-ghost">
                <Eraser 
                size={24}
                />
            </button>
        </div>
    </li>
    )
}

export default ListWidget