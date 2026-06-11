import { Routes, Route } from "react-router"
import Dashboard from "./pages/Dashboard"
import Notes from "./pages/Notes"
import Tasks from "./pages/Tasks"

const App = () => {
  return (
    <>
      <div data-theme="luxury" className="relative w-full h-screen">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </div>
    </>
  )
}

export default App