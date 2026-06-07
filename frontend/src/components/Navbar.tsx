
import { SearchIcon } from "lucide-react";

interface NavbarProps {
    title: string,
    actionLabel?: string;
    searchContent?: string,
    showSearch?: boolean;
    onActionClick?: () => void;
}

const Navbar = ({
    title,
    actionLabel,
    showSearch,
    searchContent
}: NavbarProps) => {
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm px-6 py-4 flex justify-between select-none">
            <div>
                <a className="text-2xl font-semibold tracking-wider">{title}</a>
            </div>
            <div className="flex gap-3">
                {showSearch && (

                    <label className="input input-bordered flex flex-row items-center">
                        <SearchIcon
                            size={18}
                            className="text-base-content/80"
                        />
                        <div className="w-px h-5 bg-base-300"></div>

                        <input
                            type="text" 
                            placeholder={`Search ${searchContent}s`} 
                            className="w-auto"
                        />

                    </label>
                )}
                <button type="button" className="btn btn-soft">{actionLabel}</button>
                <div role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img
                        alt="Profile"
                        src="https://i.pinimg.com/1200x/c6/d2/c1/c6d2c1df5d9999d93fd91951714e40bd.jpg" />
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Navbar