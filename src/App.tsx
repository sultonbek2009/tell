import { Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/navbar";
import KidsStyle from "./components/pages/kidsStyle";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<KidsStyle />} />
      </Routes>
    </div>
  );
}

export default App;
