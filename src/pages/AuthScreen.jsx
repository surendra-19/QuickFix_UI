import coverImage from '../assets/Cover.jpg'
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import '../index.css'
export default function AuthScreen() {
    return (
            <>
                <div className="auth-container">
                    <div className="image-section">
                        <div className="text-content">
                            <h1>Find Trusted</h1>
                            <h1>Service Providers</h1>
                            <p>Connect with reliable professionals for your various service needs.</p>
                        </div>
                        <img src={coverImage} alt="Cover" />
                    </div>
                    <div className="content-section">
                        {/* <LoginForm/> */}
                        <SignUpForm/>
                    </div>
                </div>
            </>
    );
};