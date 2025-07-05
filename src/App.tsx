import { Route, Routes } from "react-router-dom";
 import Navbar from "./components/shared/navbar";
import KidsStyle from "./components/pages/kidsStyle";
import Hero from "./components/hero/hero";
import FooterCard from "./components/footercard/footercard";

function App() {
  return (
    <div>
       <Navbar /> 
       <Hero/>
      <Routes>
        <Route path="/" element={<KidsStyle />} />
        <Route path="/footercard" element={<FooterCard/>} />
      </Routes>
    </div>
  );
}

export default App;
