import { Routes, Route } from "react-router"
import Dashboard from "./pages/Dashboard"
import toast from 'react-hot-toast'

const App = () => {
  return (
    <>
      <div data-theme="luxury" className="relative w-full h-screen">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  )
}

export default App