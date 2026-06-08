import AppLayout from "../layouts/AppLayout"
import Aureo from "../assets/Aureo.png"
import { SquarePen, Eraser, ChevronRight } from "lucide-react"


const Dashboard = () => {
    return (
        <>
            <AppLayout
            title="Dashboard"
            showSearch={false}
            >
            <div className="container max-w-screen flex flex-col p-5">
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
                    <div className="card w-max bg-base-200/50 card-xl shadow-md">
                        <div className="card-body flex gap-5">
                            <h2 className="card-title tracking-wider">📝 Notes</h2>
                            <p className="tracking-wide font-medium">0 Total Notes</p>
                            </div>
                        </div>

                    <div className="card w-max bg-base-200/50 card-xl shadow-md">
                        <div className="card-body flex gap-5">
                            <h2 className="card-title tracking-wider">✅ Tasks</h2>
                            <p className="tracking-wide font-medium">0 Total Tasks</p>
                            </div>
                        </div>

                    <div className="card w-max bg-base-200/50 card-xl shadow-md">
                        <div className="card-body flex flex-col items-center gap-5">
                            <h2 className="card-title tracking-wider">🔥 Streak</h2>
                            <p className="tracking-wide font-medium">12 Days</p>
                            </div>
                        </div>
                </section>
                <section className="recent-section grid grid-cols-2 gap-6 mt-5">
                    <div className="notes-container card bg-base-200/50 card-xl">
                        <div className="card-body">
                            <h1 className="card-title">📝 Recent Notes</h1>
                                <ul className="list bg-base-200/20 rounded-box shadow-md">
                                    <li className="list-row flex flex-row justify-between">
                                        <div className="note-bullet">
                                            <div className="list-title tracking-wider font-semibold">React Props</div>
                                            <div className="text-xs uppercase font-semibold opacity-60">2 hours ago</div>
                                        </div>
                                        <div className="action-container flex gap-5">
                                            <button className="btn btn-square btn-ghost">
                                                <SquarePen 
                                                size={24}
                                                />
                                            </button>
                                            <button className="btn btn-square btn-ghost">
                                                <Eraser 
                                                size={24}
                                                />
                                            </button>
                                        </div>
                                    </li>

                                    <li className="list-row flex flex-row justify-between">
                                        <div className="note-bullet">
                                            <div className="list-title tracking-wider font-semibold">TypeScript Interfaces</div>
                                            <div className="text-xs uppercase font-semibold opacity-60">Yesterday</div>
                                        </div>
                                        <div className="action-container flex gap-5">
                                            <button className="btn btn-square btn-ghost">
                                                <SquarePen 
                                                size={24}
                                                />
                                            </button>
                                            <button className="btn btn-square btn-ghost">
                                                <Eraser 
                                                size={24}
                                                />
                                            </button>
                                        </div>
                                    </li>

                                    <li className="list-row flex flex-row justify-between">
                                        <div className="note-bullet">
                                            <div className="list-title tracking-wider font-semibold">MongoDB Notes</div>
                                            <div className="text-xs uppercase font-semibold opacity-60">3 days ago</div>
                                        </div>
                                        <div className="action-container flex gap-5">
                                            <button className="btn btn-square btn-ghost">
                                                <SquarePen 
                                                size={24}
                                                />
                                            </button>
                                            <button className="btn btn-square btn-ghost">
                                                <Eraser 
                                                size={24}
                                                />
                                            </button>
                                        </div>
                                    </li>
                                    
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
                                    <li className="list-row flex flex-row justify-between">
                                        <div className="task-bullet">
                                            <div className="list-title tracking-wider font-semibold">React Props</div>
                                            <div className="text-xs uppercase font-semibold opacity-60">2 hours ago</div>
                                        </div>
                                        <div className="action-container flex gap-5">
                                            <button className="btn btn-square btn-ghost">
                                                <SquarePen 
                                                size={24}
                                                />
                                            </button>
                                            <button className="btn btn-square btn-ghost">
                                                <Eraser 
                                                size={24}
                                                />
                                            </button>
                                        </div>
                                    </li>

                                    <li className="list-row flex flex-row justify-between">
                                        <div className="task-bullet">
                                            <div className="list-title tracking-wider font-semibold">TypeScript Interfaces</div>
                                            <div className="text-xs uppercase font-semibold opacity-60">Yesterday</div>
                                        </div>
                                        <div className="action-container flex gap-5">
                                            <button className="btn btn-square btn-ghost">
                                                <SquarePen 
                                                size={24}
                                                />
                                            </button>
                                            <button className="btn btn-square btn-ghost">
                                                <Eraser 
                                                size={24}
                                                />
                                            </button>
                                        </div>
                                    </li>

                                    <li className="list-row flex flex-row justify-between">
                                        <div className="task-bullet">
                                            <div className="list-title tracking-wider font-semibold">MongoDB Notes</div>
                                            <div className="text-xs uppercase font-semibold opacity-60">3 days ago</div>
                                        </div>
                                        <div className="action-container flex gap-5">
                                            <button className="btn btn-square btn-ghost">
                                                <SquarePen 
                                                size={24}
                                                />
                                            </button>
                                            <button className="btn btn-square btn-ghost">
                                                <Eraser 
                                                size={24}
                                                />
                                            </button>
                                        </div>
                                    </li>

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
            </div>
            </AppLayout>
        </>
    )
}

export default Dashboard