import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/Settings.css";
import "./styles/Colors.css";
import "./styles/App.css";

import { ThemeProvider } from "styled-components";

import Footer from "./pages/pageComponents/Footer/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import CreateDict from "./pages/CreateDict";
import LearnWords from "./pages/LearnWords";
import Repeat from "./pages/Repeat";
import SidePanel from "./pages/pageComponents/SidePanel/SidePanel";
import ScrollToTop from "./utils/scrollToTop";
import List from "./pages/List";
import Reset from "./pages/Reset";

const theme = {
  colors: {
    text: "#e7ebee",
    background: "#0f0f0f",
    backgroundContrast: "#1a1a1a",
    button: "#e1860e",
    buttonDark: "#1a1919",
  },
};
const App = () => {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default App;
