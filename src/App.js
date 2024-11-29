import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import useInterval from "use-interval";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import CreateDict from "./pages/CreateDict";
import LearnWords from "./pages/LearnWords/LearnWords";
import Repeat from "./pages/Repeat";
import SidePanel from "./components/SidePanel";
import ScrollToTop from "./utils/scrollToTop";
import List from "./pages/List";
import Reset from "./pages/Reset";

const App = () => {
  const [isDeg, setDeg] = useState(0);

  useInterval(() => {
    if (isDeg >= 360) {
      setDeg(0);
    } else {
      setDeg(isDeg + 1);
    }
  }, 200);

  const gradientAnimation = {
    // backgroundImage: `conic-gradient(from ${isDeg}deg, #0d041e, #181136, #1c1a37, #0d041e)`
    background: "rgb(2,0,36)",
    background: `linear-gradient(${isDeg}deg, #0d041e 0%, #181136 35%, #181136 100%)`
  };
  return (
    <main className="flex flex-col justify-between w-screen h-screen" style={gradientAnimation}>
      <Router>
        <ScrollToTop />
        <Header />
        <SidePanel />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createdict" element={<CreateDict />} />
          <Route path="/university" element={<LearnWords />} />
          <Route path="/repeat" element={<Repeat />} />
          <Route path="/list" element={<List />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
