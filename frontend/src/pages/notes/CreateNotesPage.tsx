import AppLayout from "../../layouts/AppLayout"
import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router'
import { ArrowLeftIcon } from "lucide-react"
import toast from 'react-hot-toast'
import api from '../../lib/axios'
import axios from "axios"
import { useNavigate } from "react-router"

const CreateNotesPage = () => {

const [title, setTitle] = useState("")
const [content, setContent] = useState("")
const [icon, setIcon] = useState("")

const [loading, setLoading] = useState(false)

const navigate = useNavigate()

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!title.trim() || !content.trim()) {
        toast.error("All fields are required!")
        return
    }

    setLoading(true)

    try {
        await api.post("/notes", {
            title,
            content,
            icon
        })

        toast.success("Note created successfully!");
        navigate("/notes")

    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response?.status === 429) {
                toast.error("You are creating notes too fast!", {
                    duration: 4000
                })
            } else {
                console.log("Error creating note!", error)
                toast.error("Failed to create note!")
            }
        } else {
            console.log("Unexpected error:", error)
            toast.error("Something went wrong!")
        }
    } finally {
        setLoading(false)
    }

}


return (
    <AppLayout
    title="Create Notes"
    
    >
        <div className="bg-base-100 flex flex-col justify-center">
            <div className="container px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <Link to="/notes" type="button" className="btn btn-soft mb-6 max-w-50">
                    <ArrowLeftIcon className="size-5" />
                    Back to Notes
                    </Link>
                    <div className="card bg-base-200 card-lg max-w-5xl">
                        <div className="card-body flex flex-col gap-5">
                            <form onSubmit={handleSubmit}>
                                <div className='form-control mb-4 flex flex-col items-start gap-3'>
                                    <label className="label">
                                        <span className="label-text">Title</span>
                                    </label>
                                    <input type="text"
                                    placeholder="Note Title"
                                    className="input input-bordered w-full"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>

                                <div className='form-control mb-4 flex flex-col items-start gap-3'>
                                    <label className="label">
                                        <span className="label-text">Icon</span>
                                    </label>
                                    <input type="text"
                                    placeholder="Add Icon here  "
                                    className="input input-bordered w-full"
                                    value={icon}
                                    onChange={(e) => setIcon(e.target.value)}
                                    />
                                </div>

                                <div className='form-control mb-4 flex flex-col items-start gap-3'>
                                    <label className="label">
                                        <span className="label-text">Content</span>
                                    </label>
                                    <textarea
                                    placeholder="Write your Note here..."
                                    className="textarea textarea-bordered h-32 w-full"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    />
                                </div>

                                <div className="card-actions justify-end">
                                    <button type="submit" className="btn btn-soft" disabled={loading}>
                                        {loading ? "Creating..." : "Create Note"}
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

export default CreateNotesPage