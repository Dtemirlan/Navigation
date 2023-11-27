import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Home from './pages/Home/Home.tsx';
import About from './pages/About/About.tsx';
import Contacts from './pages/Contacts/Contacts.tsx';
import PortfolioContainer from "./pages/Portfolio/Portfolio.tsx";

const App = () => (
    <Router>
            <Navbar />
            <div className="container-fluid">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/portfolio/*" element={<PortfolioContainer />} />
                </Routes>
            </div>
    </Router>
);

export default App;
