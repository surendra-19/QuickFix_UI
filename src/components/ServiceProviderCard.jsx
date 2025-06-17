import '../styles/ServiceProviderCard.css';
import '../index.css';
import DP from '../assets/demoCard.jpg';

export default function ServiceProviderCard() {
    return (
        <div className="service-card-container">
            <div className="left-section">
                <img 
                    src={DP}
                    alt="service-provider"
                    className="service-provider-image"
                />
            </div>
            <div className="right-section">
                <div className="details-section">
                    <h2 className="title">Service Provider Name</h2>
                    <div className="info-group">
                        <p>Service</p>
                        <span>4.8</span>
                    </div>
                    <div className="info-group1">
                        <span>Location</span>
                        <p>120 Orders</p>
                    </div>
                </div>
                <div className="action-section">
                    <button className="orange-btn">Book Now</button>
                </div>
            </div>
        </div>
    );
}
