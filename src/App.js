import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './styles/Settings.css';
import './styles/App.css';
import './styles/Icons.css';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/Home';
import CreateDict from './pages/CreateDict';
import LearnWords from './pages/LearnWords';
import Repeat from './pages/Repeat';
import SidePanel from './components/side_panel/SidePanel';
import ScrollToTop from './utils/scrollToTop';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />

        <SidePanel />
        <div className="home-container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/createdict' element={<CreateDict />} />
            <Route path='/university' element={<LearnWords />} />
            <Route path='/repeat' element={<Repeat />} />
          </Routes>
        </div>
        <Footer />
      </Router>


    </div>
  );
}

export default App;
