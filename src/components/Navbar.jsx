import { Link } from 'react-router-dom';
import './Navbar.css'
import LogoComponent from './LogoComponent';
export default function Navbar() {
    return (
        <>
            <nav>
                <div className='navbarcontainer'>
                    <LogoComponent/>
                    <div className='nav-menu'>
                        <h6>Home</h6>
                        <h6>About Us</h6>
                        <h6>Get Started</h6>
                    </div>
                    <div className='nav-button'>
                        <Link to='/authorization'>
                            <button>Login</button>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}