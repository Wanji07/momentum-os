import { Routes, Route } from "react-router"
import Dashboard from "./pages/Dashboard"

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