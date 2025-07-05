import { Route, Routes } from "react-router-dom"
import Home from "./components/home/home"
import Navbar from "./components/shared/navbar"

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
