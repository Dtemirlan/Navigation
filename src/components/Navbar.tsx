import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-link">
                            About Us
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contacts" className="nav-link">
                            Contacts
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolio" className="nav-link">
                            Portfolio
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;
