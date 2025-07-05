import { Route, Routes } from "react-router-dom";
 import Navbar from "./components/shared/navbar";
import KidsStyle from "./components/pages/kidsStyle";
import Hero from "./components/hero/hero";
import FooterCard from "./components/footercard/footercard";

function App() {
  return (
    <div>
       <Navbar /> 
      <div className="py-10">
         <Hero/>
      </div>
      <Routes>
        <Route path="/" element={<KidsStyle />} />
        <Route path="/footercard" element={<FooterCard/>} />
      </Routes>
    </div>
  );
}

export default App;
