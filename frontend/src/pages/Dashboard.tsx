import Navbar from "../components/Navbar"


const Dashboard = () => {
    return (
        <>
            <Navbar
            title="📝 Notes"
            searchContent="Note"
            actionLabel="Create Note"
            showSearch={true}
            />
        </>
    )
}

export default Dashboard