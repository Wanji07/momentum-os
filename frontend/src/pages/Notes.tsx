import { useState, useEffect } from 'react'

import AppLayout from "../layouts/AppLayout"
import NoteCard from "../components/NoteCard"
import api from "../lib/axios"
import toast from "react-hot-toast"

interface NotesProps {
    title: string,
    content: string,
    updatedAt: string,
    icon?: string
}

const Notes = () => {

    const [notes, setNotes] = useState<NotesProps[]>([])

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
    }, [])


    return (
        <AppLayout
        title="Notes"
        showSearch={true}
        searchContent="Notes"
        actionLabel="Create Note"
        >
        
        <div className="container max-w-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {notes.map(note => (
                <NoteCard
                title={note.title}
                content={note.content}
                updatedAt={note.updatedAt}
                // icon={note.icon}
                />
            ))}

        </div>

        </AppLayout>
    )
}

export default Notes