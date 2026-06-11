import AppLayout from "../layouts/AppLayout"
import NoteCard from "../components/NoteCard"

const Notes = () => {
    return (
        <AppLayout
        title="Notes"
        showSearch={true}
        searchContent="Notes"
        actionLabel="Create Note"
        >
        
        <div className="container max-w-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            <NoteCard
            title="Lecture Notes"
            content="Computer Programming 101"
            updatedAt="2 days ago"
            icon="🖥️"
            />
            <NoteCard
            title="Lecture Notes"
            content="Computer Programming 101"
            updatedAt="2 days ago"
            icon="🖥️"
            />
            <NoteCard
            title="Lecture Notes"
            content="Computer Programming 101"
            updatedAt="2 days ago"
            icon="🖥️"
            />
            <NoteCard
            title="Lecture Notes"
            content="Computer Programming 101"
            updatedAt="2 days ago"
            icon="🖥️"
            />
            <NoteCard
            title="Lecture Notes"
            content="Computer Programming 101"
            updatedAt="2 days ago"
            icon="🖥️"
            />
            <NoteCard
            title="Lecture Notes"
            content="Computer Programming 101"
            updatedAt="2 days ago"
            icon="🖥️"
            />
            <NoteCard
            title="Lecture Notes"
            content="Computer Programming 101"
            updatedAt="2 days ago"
            icon="🖥️"
            />
        </div>

        </AppLayout>
    )
}

export default Notes