import { Routes, Route } from "react-router"
import Dashboard from "./pages/Dashboard"

import Notes from "./pages/notes/Notes"
import ViewNotesPage from "./pages/notes/ViewNotesPage"
import CreateNotesPage from "./pages/notes/CreateNotesPage"
import EditNotesPage from "./pages/notes/EditNotesPage"


import Tasks from "./pages/tasks/Tasks"
import ViewTasksPage from "./pages/tasks/ViewTasksPage"
import CreateTasksPage from "./pages/tasks/CreateTasksPage"

import Settings from './pages/Settings'

const App = () => {
  return (
    <>
      <div data-theme="luxury" className="relative w-full h-screen">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes/:id" element={<ViewNotesPage />} />
          <Route path="/notes/create" element={<CreateNotesPage />} />
          <Route path="/notes/:id/edit" element={<EditNotesPage />} />

          <Route path="/tasks" element={<Tasks />} />
          <Route path="/tasks/:id" element={<ViewTasksPage />} />
          <Route path="/tasks/create" element={<CreateTasksPage />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </>
  )
}

export default App