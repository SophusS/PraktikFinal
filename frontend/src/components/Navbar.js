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
            <h1 className='text-dark'>Samlingspunktet</h1>
          </Link>
          <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
            {user && (
              <div className="container d-flex">
                <Link to="/skabbegivenhed" className='nav-link mx-3'>Skab begivenhed</Link>
                <Link to="/about" className='nav-link mx-3'>Omkring os</Link>
                <div className="d-flex align-items-center">
                <span style={{ marginRight: '10px' }}>{user.email}</span>
                <button onClick={handleClick} className='btn btn-danger'>Log ud</button>
                </div>
              </div>
            )}
            {!user && (
              <div className="">
                <Link to="/login" className='nav-link mx-3'>Login</Link>
                <Link to="/signup" className='nav-link mx-3'>Tilmeld</Link>
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