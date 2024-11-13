import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/Settings.css";
import "./styles/Colors.css";
import "./styles/App.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import CreateDict from "./pages/CreateDict";
import LearnWords from "./pages/LearnWords";
import Repeat from "./pages/Repeat";
import SidePanel from "./components/SidePanel/SidePanel";
import ScrollToTop from "./utils/scrollToTop";
import List from "./pages/List";
import Reset from "./pages/Reset";

const baseUrl = "http://127.0.0.1:8000/api/v1/worsalist/";

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
