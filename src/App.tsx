import Navbar from "./components/shared/navbar";
import KidsStyle from "./components/pages/kidsStyle";
import Hero from "./components/hero/hero";
import FooterCard from "./components/footercard/footercard";
import Footer from "./components/footer/footer";
import { Card } from "./components/ui/card";

import SocialMedia from "./components/pages/woman";

function App() {
  return (
    <div>
      <Navbar />

      <Hero />
      <FooterCard />
      <KidsStyle />
      <SocialMedia />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
