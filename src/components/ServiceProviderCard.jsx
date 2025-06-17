import '../styles/ServiceProviderCard.css';
import '../index.css';

export default function ServiceProviderCard({image,name,service,rating,location,orders}) {
    return (
        <div className="service-card-container">
            <div className="left-section">
                <img 
                    src={image}
                    alt="service-provider"
                    className="service-provider-image"
                />
            </div>
            <div className="right-section">
                <div className="details-section">
                    <h2 className="title">{name}</h2>
                    <div className="info-group">
                        <p>{service}</p>
                        <span>{rating}</span>
                    </div>
                    <div className="info-group1">
                        <span>{location}</span>
                        <p>{orders}</p>
                    </div>
                </div>
                <div className="action-section">
                    <button className="orange-btn">Book Now</button>
                </div>
            </div>
        </div>
    );
}
