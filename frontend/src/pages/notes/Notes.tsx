import { useState, useEffect } from 'react'

import AppLayout from "../../layouts/AppLayout"
import NoteCard from "../../components/NoteCard"
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
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchNotes = async() => {
            try {
                const res = await api.get("/notes")
                console.log(res.data)
                setNotes(res.data)
            } catch (error) {
                console.log("Error fetching notes!", error)
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

    return (
        <AppLayout
        title="Notes"
        actionLabel="Create Note"
        url="/notes/create"
        >
        
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

        </AppLayout>
    )
}

export default Notes