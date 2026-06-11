import AppLayout from "../layouts/AppLayout"
import TaskCard from "../components/TaskCard"


const Tasks = () => {
    return (
        <AppLayout
        title="Tasks"
        showSearch={true}
        searchContent="Tasks"
        actionLabel="Create Task"
        >
            <div className="container max-w-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                <TaskCard 
                title="Update Database"
                description="Connect MongoDB to Frontend"
                priority="low"
                />
                <TaskCard 
                title="Update Database"
                description="Connect MongoDB to Frontend"
                priority="medium"
                />
                <TaskCard 
                title="Update Database"
                description="Connect MongoDB to Frontend"
                priority="high"
                />
                <TaskCard 
                title="Update Database"
                description="Connect MongoDB to Frontend"
                priority="medium"
                />
                <TaskCard 
                title="Update Database"
                description="Connect MongoDB to Frontend"
                priority="high"
                />
                <TaskCard 
                title="Update Database"
                description="Connect MongoDB to Frontend"
                priority="low"
                />
            </div>
        </AppLayout>
    )
}

export default Tasks