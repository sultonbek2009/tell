 import Navbar from "./components/shared/navbar";
import KidsStyle from "./components/pages/kidsStyle";
import Hero from "./components/hero/hero";
import FooterCard from "./components/footercard/footercard";
import Footer from "./components/footer/footer";
import { Card } from "./components/ui/card";

function App() {
  return (
    <div>
       <Navbar /> 
  
         <Hero/>
         <FooterCard/>
         <KidsStyle />
         <Card/>
         <Footer/>
 
    </div>
  );
}

export default App;
