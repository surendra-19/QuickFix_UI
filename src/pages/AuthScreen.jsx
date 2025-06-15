import { useState } from 'react';
import coverImage from '../assets/Cover.jpg'
import LoginForm from '../components/LoginForm';
import '../index.css'
import SignUpForm from '../components/SignUpForm';
import ServiceProviderSignup from '../components/ServiceProviderSignup';
import { useLocation } from 'react-router-dom';
export default function AuthScreen() {
    const location = useLocation();
    const initialFormstate = location.state?.formType === 'serviceProvider' ? 'serviceProvider' : 'login';
    const [formType, setFormType] = useState(initialFormstate);
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
                        { formType == 'login' && <LoginForm setFormType={setFormType} /> }
                        { formType == 'signup' && <SignUpForm setFormType={setFormType} /> }
                        { formType == 'serviceProvider' && <ServiceProviderSignup setFormType = {setFormType} /> }
                    </div>
                </div>
            </>
    );
};