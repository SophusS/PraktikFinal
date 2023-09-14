import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()
  
    const handleClick = () => {
      logout()
    }

    return (
        <header>
        <div className="container">
          <Link to="/">
            <h1>Ungdom</h1>
          </Link>
          <nav>
            {user && (
              <div>
                <span>{user.email}</span>
                <button onClick={handleClick}>Log out</button>
              </div>
            )}
            {!user && (
              <div>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
              </div>
            )}
          </nav>
        </div>
      </header>
    );
}

export default Navbar;



/*        <nav className="navbar bg-primary" data-bs-theme="dark">
            <div className="container d-flex align-items-center">
                <span className="navbar-brand h1">Ungdom</span>
                <Link to="/" className='mx-3'>Hjem</Link>
                <Link to="/skabbegivenhed" className='mx-3'>Skab begivenhed</Link>
                <Link to="/about" className='mx-3'>Omkring os</Link>
            </div>
        </nav>*/