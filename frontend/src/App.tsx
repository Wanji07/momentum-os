import { Routes, Route } from "react-router"
import Dashboard from "./pages/Dashboard"
import Notes from "./pages/Notes"

const App = () => {
  return (
    <>
      <div data-theme="luxury" className="relative w-full h-screen">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path ="/notes" element={<Notes />} />
        </Routes>
      </div>
    </>
  )
}

export default App