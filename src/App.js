import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/Settings.css';
import './styles/Colors.css';
import './styles/App.css';
import './styles/Icons.css';

import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './pages/Home';
import CreateDict from './pages/CreateDict';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/createdict' element={<CreateDict />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
