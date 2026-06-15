import { Routes, Route } from "react-router"
import Dashboard from "./pages/Dashboard"

import Notes from "./pages/notes/Notes"
import CreateNotesPage from "./pages/notes/CreateNotesPage"

import Tasks from "./pages/tasks/Tasks"
import Settings from './pages/Settings'

const App = () => {
  return (
    <>
      <div data-theme="luxury" className="relative w-full h-screen">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes/create" element={<CreateNotesPage />} />

          <Route path="/tasks" element={<Tasks />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </>
  )
}

export default App