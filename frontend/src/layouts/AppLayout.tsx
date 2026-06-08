import Navbar from "../components/Navbar"
import { NotebookPen, BoltIcon, SquareCheck, LayoutDashboard } from "lucide-react"
import Banner from '../assets/branding/BannerTransparent.png'


interface AppLayoutProps {
    children: React.ReactNode,
    title: string,
    showSearch?: boolean,
    searchContent?: string,
    actionLabel?: string
}

const AppLayout = ({
    children,
    title,
    showSearch,
    searchContent,
    actionLabel
}: AppLayoutProps) => {
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            {/* Navbar */}

            <Navbar
            title={title}
            showSearch={showSearch}
            actionLabel={actionLabel}
            searchContent={searchContent}
            />

            {/* Page content here */}
            <div className="p-4">
                {children}
            </div>
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible">
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>

            <div className="flex min-h-full flex-col items-start bg-base-200/50 shadow-sm is-drawer-close:w-14 is-drawer-open:w-64">
            
            <img src={Banner} 
            className="is-drawer-close:hidden"
            />

            <ul className="menu w-full grow gap-5">
                <li>
                <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Dashboard">
                    <LayoutDashboard
                    strokeWidth={1.8}
                    size={24}
                    />
                    <span className="is-drawer-close:hidden">Dashboard</span>
                </button>
                </li>
                <li>
                <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Notes">
                    <NotebookPen
                    strokeWidth={1.8}
                    size={24}
                    />
                    <span className="is-drawer-close:hidden">Notes</span>
                </button>
                </li>

                <li>
                <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Tasks">
                    <SquareCheck
                    strokeWidth={1.8}
                    size={24}
                    />
                    <span className="is-drawer-close:hidden">Tasks</span>
                </button>
                </li>

                <li>
                <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
                    <BoltIcon 
                    strokeWidth={1.8}
                    size={24}
                    />
                    <span className="is-drawer-close:hidden">Settings</span>
                </button>
                </li>
            </ul>
            </div>
        </div>
        </div>
    )
}

export default AppLayout