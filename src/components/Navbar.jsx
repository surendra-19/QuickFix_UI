import '../index.css'
import Logo from '../assets/Logo.png'

export default function Navbar() {
    return (
        <>
            <nav className="navbarcontainer">
                <div className="container-padding"> 
                    <div className='nav-image'>
                        <img src={Logo} alt='QuickFix-Logo' />
                        <h5>QuickFix</h5>
                    </div>
                    <div>
                        <h6>Home</h6>
                        <h6>About Us</h6>
                        <h6>Get Started</h6>
                    </div>
                    <div>
                        <button>Login/signup</button>
                    </div>
                </div>
            </nav>
        </>
    );
}