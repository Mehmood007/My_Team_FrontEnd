
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Playerprofile from "./pages/PlayersProfile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/playerprofile" element={<Playerprofile />} />
      </Routes>
    </BrowserRouter>
  );
}
