import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import CreateDict from "./pages/CreateDict";
import LearnWords from "./pages/LearnWords";
import Repeat from "./pages/Repeat";
import SidePanel from "./components/SidePanel";
import ScrollToTop from "./utils/scrollToTop";
import List from "./pages/List";
import Reset from "./pages/Reset";

const App = () => {
  return (
    <main className="flex flex-col justify-between bg-gradient-to-tr from-color_one via-color_three to-color_one">
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
