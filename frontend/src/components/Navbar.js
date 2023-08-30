import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar bg-primary" data-bs-theme="dark">
            <div className="container d-flex align-items-center">
                <span className="navbar-brand h1">Ungdom</span>
                <Link to="/" className='mx-3'>Hjem</Link>
                <Link to="/skabbegivenhed" className='mx-3'>Skab begivenhed</Link>
                <Link to="/about" className='mx-3'>Omkring os</Link>
            </div>
        </nav>
    );
}

export default Navbar;