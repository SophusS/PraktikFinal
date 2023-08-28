import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="" data-bs-theme="">
            <div className="container">
                <Link to="/">Hjem</Link>
                <Link to="/create">Skab begivenhed</Link>
                <Link to="/about">Omkring os</Link>
            </div>
        </nav>
    );
}

export default Navbar;