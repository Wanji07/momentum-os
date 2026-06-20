import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router'

import AppLayout from '../../layouts/AppLayout'
import { ArrowLeftIcon } from 'lucide-react'
import api from '../../lib/axios'
import toast from 'react-hot-toast'
import axios from 'axios'

interface NoteProps {
    _id: string
    title: string
    content: string
    updatedAt: string
    icon?: string
}

const ViewNotesPage = () => {

    const [note, setNote] = useState<NoteProps | null>(null)
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    const { id } = useParams()

    useEffect(() => {
        const fetchNote = async() => {
            try {
                const res = await api.get(`/notes/${id}`)
                console.log(res.data)
                setNote(res.data)
            } catch (error) {
                console.log("Error in fetching note!", error)
                toast.error("Failed to fetch note!")
            } finally {
                setLoading(false)
            }
        }

        fetchNote()

    }, [id])

    const handleDelete = async(id: string, e: React.MouseEvent<HTMLButtonElement>) => {

        if (!window.confirm("Are you sure you want to delete this note?")) return;

        e.preventDefault()
        e.stopPropagation()

        try {
            await api.delete(`/notes/${id}`)
            toast.success("Successfully deleted note!")
            navigate("/notes")
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log("Error in deleting note!", error)
                toast.error("Failed to delete note!")
            }
        }
    }

    if (loading || !note) {
        return(
            <div className="min-h-screen bg-base-200 flex items-center justify-center">
                <span className="loading loading-spinner loading-md"></span>
            </div>
        )
    }

    return (
        <AppLayout
        title="View Notes">

            <div className="bg-base-100 flex flex-col justify-center">
                <div className="container px-4 py-8">
                    <div className="max-w-2xl mx-auto">
                        <Link to="/notes" type="button" className="btn btn-soft mb-6 max-w-50">
                        <ArrowLeftIcon className="size-5" />
                        Back to Notes
                        </Link>
                        <div className="card bg-base-200/30 w-full card-lg overflow-hidden">
                            <div className="card-body flex flex-col gap-5">
                                <div className="card-content flex flex-col gap-2">
                                    <h1 className="card-title text-xl font-semibold tracking-wide flex flex-row">
                                        <div className="icon-container bg-base-200/50 p-1 rounded-xl avatar">{note.icon}</div>
                                        {note.title}
                                    </h1>
                                    <h2 className="text-md font-normal">{note.content}</h2>
                                    <p className="text-md font-semibold opacity-80">{note.updatedAt}</p>
                                </div>
                                <div className="card-actions flex">
                                    <Link to={`/notes/${id}/edit`}type="button" className="btn btn-soft btn-info cursor-pointer">Edit</Link>
                                    <button type="button" 
                                    onClick={(e) => {handleDelete(note._id, e)}}
                                    className="btn btn-soft btn-error cursor-pointer"
                                    >Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default ViewNotesPage