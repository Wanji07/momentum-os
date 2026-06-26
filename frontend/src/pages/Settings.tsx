import AppLayout from "../layouts/AppLayout"
import SettingsCard from "../components/SettingsCard"
import { Pencil } from "lucide-react"
import { Link } from "react-router"

const Settings = () => {
    return (
        <AppLayout
        title="Settings"
        >
        <div className="container flex flex-col items-center justify-center gap-5">
            <SettingsCard title="👤 Profile">
                <div className="card card-xl">
                    <div className="card-body">
                        <h1 className="text-2xl font-bold btn btn-soft">COMING SOON!</h1>
                    </div>
                </div>
                {/* <div role="avatar" className="avatar flex flex-row items-center gap-3 mt-3">
                    <div className="w-14 rounded-full">
                    <img
                        alt="Profile Picture"
                        src="https://i.pinimg.com/1200x/c6/d2/c1/c6d2c1df5d9999d93fd91951714e40bd.jpg" />
                    </div>
                    <Link to="/">
                        <Pencil
                        size={24}
                        className="cursor-pointer"
                        />
                    </Link>
                </div>
                <h1 className="text-xl font-semibold tracking-wide">Username: Wanji</h1>
                <h1 className="text-lg font-semibold tracking-wide">Email: ewilliammiguel@gmail.com</h1> */}
            </SettingsCard>
            <SettingsCard title="🎨 Theme">
                <div className="card card-xl">
                    <div className="card-body">
                        <h1 className="text-2xl font-bold btn btn-soft">COMING SOON!</h1>
                    </div>
                </div>
                {/* <p className="text-lg font-semibold mb-4 mt-3">
                    Current Theme: Luxury
                </p>

                <div className="flex flex-col gap-3">
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="theme"
                            className="radio radio-warning"
                            value="luxury"
                        />
                        <span className="text-lg font-semibold tracking-wide">Luxury</span>
                    </label>

                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="theme"
                            className="radio radio-warning"
                            value="light"
                        />
                        <span className="text-lg font-semibold tracking-wide">Light</span>
                    </label>

                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="theme"
                            className="radio radio-warning"
                            value="dark"
                        />
                        <span className="text-lg font-semibold tracking-wide">Dark</span>
                    </label>
                </div> */}
            </SettingsCard>
            <SettingsCard title="🦅 About MomentumOS">
                <div className="flex flex-col gap-3 mt-3">
                    <p className="text-xl font-semibold tracking-wide">MomentumOS v0.1 Alpha</p>
                    <p className="text-lg font-normal">A productivity workspace designed to help students and creators maintain momentum.</p>                    
                    <div className="divider my-2"></div>
                    <p className="text-lg tracking-wide font-semibold">Focus. Organize. Elevate.</p>
                    <p className="text-sm font-semibold mt-5 opacity-70">Built by: Wanji</p>
                </div>

            </SettingsCard>
        </div>
        </AppLayout>
    )
}

export default Settings