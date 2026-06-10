import AppLayout from "../layouts/AppLayout"
import Aureo from "../assets/Aureo/Aureo.png"
import AureoTip from '../assets/Aureo/AureoTip.png'
import { ChevronRight } from "lucide-react"
import StatCard from "../components/StatCard"
import ListWidget from "../components/ListWidget"
import { Link } from "react-router"


const Dashboard = () => {
    return (
        <>
            <AppLayout
            title="Dashboard"
            showSearch={false}
            >
            <div className="container max-w-screen max-h-15 flex flex-col">
                <div className="hero w-full">
                    <div className="hero-content flex flex-row items-center gap-5">
                        <img src={Aureo} className="size-25" />
                        <div className="flex flex-col justify-start gap-4">
                            <h1 className="tracking-wide font-semibold lg:text-3xl">Welcome back, Wanji 👋</h1>
                            <h2 className="tracking-normal font-medium lg:text-xl">Here's your momentum for today.</h2>
                        </div>
                    </div>
                </div>
                <section className="stats-section flex flex-row justify-center gap-10">
                    <div className="card w-full card-xl flex flex-row justify-center gap-12 shadow-md">
                            <StatCard
                            title="Notes"
                            icon="📝"
                            value="0 Total Notes"

                            />
                            <StatCard
                            title="Tasks"
                            icon="✅"
                            value="0 Total Tasks"
                            />

                            <StatCard
                            title="Streak"
                            icon="🔥"
                            value="12 Days"
                            />
                    </div>
                </section>
                <section className="recent-section grid grid-cols-2 gap-6 mt-5">
                    <div className="notes-container card bg-base-200/50 card-xl">
                        <div className="card-body">
                            <h1 className="card-title">📝 Recent Notes</h1>
                                <ul className="list bg-base-200/20 rounded-box shadow-md">
                                    <ListWidget
                                    title="React Props"
                                    timestamp="1 hour ago"
                                    />
                                    <ListWidget
                                    title="Typescript Interfaces"
                                    timestamp="8 hours ago"
                                    />
                                    <ListWidget 
                                    title="MongoDB Class Notes"
                                    timestamp="1 day ago"
                                    />
                                    <li className="list-row flex flex-row items-center justify-center bg-base-100/30 relative h-10">
                                        <button className="btn btn-ghost w-full">
                                            <div className="list-title tracking-wider font-semibold">View All</div>
                                            <ChevronRight
                                            size={18} 
                                            />
                                        </button>
                                    </li>
                                </ul>
                        </div>
                    </div>
                    <div className="tasks-container card bg-base-200/50 card-xl">
                        <div className="card-body">
                            <h1 className="card-title">✅ Today's Tasks</h1>
                                <ul className="list bg-base-200/20 rounded-box shadow-md">
                                    <ListWidget
                                    title="Build Recent Notes Widget"
                                    timestamp="2 hours ago"
                                    />
                                    <ListWidget
                                    title="Refactor Dashboard Components"
                                    timestamp="Yesterday"
                                    />
                                    <ListWidget 
                                    title="Review React TypeScript Interfaces"
                                    timestamp="2 days ago"
                                    />
                                    <li className="list-row flex flex-row items-center justify-center bg-base-100/30 relative h-10">
                                        <button className="btn btn-ghost w-full">
                                            <div className="list-title tracking-wider font-semibold">View All</div>
                                            <ChevronRight
                                            size={18} 
                                            />
                                        </button>
                                    </li>
                                </ul>
                        </div>
                    </div>
                </section>
                <footer className="card bg-base-200/40 w-max m-auto my-5">
                    <div className="card-body flex flex-row items-center justify-start gap-5">
                        <img
                        src={AureoTip} 
                        className="size-24"
                        />
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                                <h1 className="tracking-wide text-lg opacity-75 font-semibold">Quick Actions</h1>
                                <p className="text-md">Need something new? Start here.</p>
                            </div>
                            <div className="btn-group flex flex-row gap-5 ">
                                <Link
                                to="/"
                                className="btn btn-soft p-6">Create Notes</Link>

                                <Link
                                to="/"
                                className="btn btn-soft p-6">Create Tasks</Link>

                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            </AppLayout>
        </>
    )
}

export default Dashboard