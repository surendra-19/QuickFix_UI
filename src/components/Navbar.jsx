import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
import LogoComponent from './LogoComponent';
export default function Navbar({setFormType}) {
    
    return (
        <>
            <nav>
                <div className='navbarcontainer'>
                    <LogoComponent/>
                    <div className='nav-menu'>
                        <h6>Home</h6>
                        <h6>About Us</h6>
                        <h6>Get Started</h6>
                        <Link className='service-provider' to='/authorization' state={{formType:'serviceProvider'}}>
                            <h6>Work With Us</h6>
                        </Link>
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