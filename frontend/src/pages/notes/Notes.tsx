import { useState, useEffect } from 'react'

import AppLayout from "../../layouts/AppLayout"
import NoteCard from "../../components/NoteCard"
import RateLimitedUI from '../../components/RateLimitedUI'

import AureoTip from '../../assets/Aureo/AureoTip.png'

import { Link } from 'react-router'
import api from "../../lib/axios"
import axios from 'axios'
import toast from 'react-hot-toast'

interface NotesProps {
    _id: string,
    title: string,
    content: string,
    updatedAt: string,
    icon?: string,
    url: string
}

const Notes = () => {

    const [notes, setNotes] = useState<NotesProps[]>([])
    const [isRateLimited, setIsRateLimited] = useState(true)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchNotes = async() => {
            try {
                const res = await api.get("/notes")
                console.log(res.data)
                setNotes(res.data)
                setIsRateLimited(false)
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    if (error.response?.status === 429) {
                        setIsRateLimited(true)
                        toast.error("Youa are requesting too fast!", {
                            duration: 4000
                        })
                    } else {
                        toast.error("Error in fetching notes!")
                        console.log("Error on fetching notes:", error)
                    }
                } else {
                    toast.error("Something went wrong!")
                    console.log("Unexpected Error:", error)
                }
            }
        }

        fetchNotes()
        setLoading(false)
    }, [])

    const handleDelete = async(id: string, e: React.MouseEvent<HTMLButtonElement>) => {

        if (!window.confirm("Are you sure you want to delete this note?")) return;

        e.preventDefault()
        e.stopPropagation()

        try {
            await api.delete(`/notes/${id}`)
            toast.success("Successfully deleted note!")
            setNotes((prev) => prev.filter(note => note._id !== id));
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log("Error in deleting note!", error)
                toast.error("Failed to delete note!")
            }
        }
    }

    if (loading || !notes) {
        return(
            <div className="min-h-screen bg-base-200 flex items-center justify-center">
                <span className="loading loading-spinner loading-md"></span>
            </div>
        )
    }

    if (notes.length === 0 && !isRateLimited) {
        return(
            <AppLayout
            title="Notes"
            actionLabel="Create Note"
            url="/notes/create"
            >
                    <div className="bg-base-100 flex items-center justify-center">
                        <div className="container px-4 py-8">
                            <div className='max-w-2xl mx-auto'>
                                <div className="card card-xl border-2 border-dashed border-yellow-500/20">
                                    <div className="card-body flex flex-col items-center">
                                        <div className="card-title flex flex-row gap-2 items-center justify-center">
                                            <img src={AureoTip} className="size-15"/>
                                            <h1 className="tracking-wide font-semibold">You don't have any notes yet!</h1>
                                        </div>
                                        <p className="font-medium tracking-wide">Start building momentum today.</p>
                                        <Link to="/tasks/create" className="btn btn-soft px-10 mt-5">Create Note</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </AppLayout>
        )
    }
    return (
        <AppLayout
        title="Notes"
        actionLabel="Create Note"
        url="/notes/create"
        >
            {isRateLimited ? <RateLimitedUI /> : (
                <div className="container max-w-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {notes.map(note => (
                        <NoteCard
                        key={note._id}
                        _id={note._id}
                        title={note.title}
                        content={note.content}
                        updatedAt={note.updatedAt}
                        icon={note.icon}
                        handleDelete={handleDelete}
                        />
                    ))}
                </div>
            )}
        </AppLayout>
    )
}

export default Notes