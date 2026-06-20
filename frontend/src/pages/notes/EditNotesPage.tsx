import AppLayout from "../../layouts/AppLayout"
import { useParams, useNavigate, Link } from 'react-router'
import { useState, useEffect } from 'react'
import type { FormEvent } from "react"

import { ArrowLeftIcon} from 'lucide-react'
import api from "../../lib/axios"
import axios from "axios"
import toast from 'react-hot-toast'

interface NoteProps {
    _id: string
    title: string
    content: string
    updatedAt: string
    icon: string
}

const EditNotesPage = () => {

    const [note, setNote] = useState<NoteProps | null>(null)
    const [loading, setLoading] = useState(true)

    const { id } = useParams()
    const navigate = useNavigate()

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
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!note) return

        if (!note.title?.trim() || !note.content?.trim()) {
            toast.error("All fields are required!")
            return
        }

        setLoading(true)

        try {
            await api.put(`/notes/${id}`, note)

            toast.success("Successfully updated note!")
            navigate(`/notes/${id}`)

        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response?.status === 429) {
                    toast.error("You are requesting too fast!", {
                        duration: 4000
                    })
                } else {
                    console.log("Error in updating note!", error)
                    toast.error("Failed to update note!")
                }
            } else {
                console.log("Unexpected Error:", error)
                toast.error("Something went wrong!")
            } 
        } finally {
            setLoading(false)
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
        title="Edit Notes"
        >
            <div className="bg-base-100 flex flex-col justify-center">
                <div className="container px-4 py-8">
                    <div className="max-w-2xl mx-auto">
                        <Link to="/notes" type="button" className="btn btn-soft mb-6 max-w-50">
                            <ArrowLeftIcon className="size-5" />
                            Back to Notes
                        </Link>
                        <div className="card bg-base-200 card-lg">
                            <div className="card-body flex flex-col gap-5">
                                <form onSubmit={handleSubmit}>
                                    <div className='form-control mb-4 flex flex-col items-start gap-3'>
                                        <label className="label">
                                            <span className="label-text">Title</span>
                                        </label>
                                        <input type="text"
                                        placeholder="Note Title"
                                        className="input input-bordered w-full"
                                        value={note.title}
                                        onChange={(e) => setNote({ ...note, title: e.target.value })}
                                        />
                                    </div>

                                    <div className='form-control mb-4 flex flex-col items-start gap-3'>
                                        <label className="label">
                                            <span className="label-text">Icon</span>
                                        </label>
                                        <input type="text"
                                        placeholder="Add Icon here  "
                                        className="input input-bordered w-full"
                                        value={note.icon}
                                        onChange={(e) => setNote({ ...note, icon: e.target.value })}
                                        />
                                    </div>

                                    <div className='form-control mb-4 flex flex-col items-start gap-3'>
                                        <label className="label">
                                            <span className="label-text">Content</span>
                                        </label>
                                        <textarea
                                        placeholder="Write your Note here..."
                                        className="textarea textarea-bordered h-32 w-full"
                                        value={note.content}
                                        onChange={(e) => setNote({ ...note, content: e.target.value })}
                                        />
                                    </div>

                                    <div className="card-actions justify-end">
                                        <button type="submit" className="btn btn-soft" disabled={loading}>
                                            {loading ? "Creating..." : "Update Note"}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default EditNotesPage