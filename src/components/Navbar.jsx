import Logo from '../assets/Logo.png'
import './Navbar.css'
export default function Navbar() {
    return (
        <>
            <nav>
                <div>
                    <div className='navbarcontainer'>
                        <div className='nav-image'>
                            <img src={Logo} alt='QuickFix-Logo' />
                            <h5>QuickFix</h5>
                        </div>
                        <div className='nav-menu'>
                            <h6>Home</h6>
                            <h6>About Us</h6>
                            <h6>Get Started</h6>
                        </div>
                        <div className='nav-button'>
                            <button>Login/signup</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}