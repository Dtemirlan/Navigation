import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Project1 from "./Project1/Project1.tsx";

const Portfolio = () => (
    <div>
        <h2>Portfolio</h2>
        <nav>
            <ul>
                <li>
                    <Link to="project1">Project 1</Link>
                </li>
                <li>
                    <Link to="project2">Project 2</Link>
                </li>
                <li>
                    <Link to="project3">Project 3</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>
);

const PortfolioContainer = () => (
    <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="project1" element={<Project1 />} />
    </Routes>
);

export default PortfolioContainer;
