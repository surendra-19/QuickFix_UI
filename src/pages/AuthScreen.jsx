import coverImage from '../assets/Cover.jpg'
import LoginForm from '../components/LoginForm';
import '../index.css'
export default function AuthScreen() {
    return (
            <>
                <div className="auth-container">
                    <div className="image-section">
                        <img src={coverImage} alt="Cover" />
                    </div>
                    <div className="content-section">
                        <LoginForm/>
                    </div>
                </div>
            </>
    );
};