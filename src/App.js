import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/Settings.css";
import "./styles/Colors.css";
import "./styles/App.css";

import Footer from "./components/componentsPage/Footer/Footer";
import Header from "./components/componentsPage/Header/Header";
import Home from "./pages/Home/Home";
import CreateDict from "./pages/CreateDict";
import LearnWords from "./pages/LearnWords";
import Repeat from "./pages/Repeat";
import SidePanel from "./components/componentsPage/SidePanel/SidePanel";
import ScrollToTop from "./utils/scrollToTop";
import List from "./pages/List";
import Reset from "./pages/Reset";

const App = () => {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />
        <SidePanel />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createdict" element={<CreateDict />} />
            <Route path="/university" element={<LearnWords />} />
            <Route path="/repeat" element={<Repeat />} />
            <Route path="/list" element={<List />} />
            <Route path="/reset" element={<Reset />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
