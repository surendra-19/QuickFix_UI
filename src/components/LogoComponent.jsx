import Logo from '../assets/Logo.png'
import '../styles/LoginForm.css'
import { Link } from 'react-router-dom'
function LogoComponent() {
  return (
    <Link style={{textDecoration:"none"}} to='/'>
      <div className="topSection">
            <img src={Logo} alt="Logo" />
            <h3>Quick Fix</h3>
      </div>
    </Link>
  )
}

export default LogoComponent