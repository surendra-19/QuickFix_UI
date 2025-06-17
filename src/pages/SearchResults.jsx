import '../styles/SearchResults.css';
import sample from '../assets/demoCard.jpg'
import Footer from '../sections/Footer';
import Navbar from '../components/Navbar';
import ServiceProviderCard from '../components/ServiceProviderCard';

const sampleData = [
  { id: 1,image:sample, name: 'Ayesha Khan', service: 'Beautician', rating: 4.9, location: 'Hyderabad', orders: 132 },
  { id: 2,image:sample, name: 'Ravi Kumar', service: 'Electrician', rating: 4.8, location: 'Delhi', orders: 120 },
  { id: 3,image:sample, name: 'Sneha Patil', service: 'Cleaner', rating: 4.7, location: 'Mumbai', orders: 98 },
  { id: 4,image:sample, name: 'Arun Verma', service: 'Plumber', rating: 4.6, location: 'Chennai', orders: 87 },
  { id: 5,image:sample, name: 'Nisha Thomas', service: 'Tutor', rating: 4.9, location: 'Bangalore', orders: 143 },
];

export default function SearchResults() {
  return (
    <div className="results-page">
      <Navbar />
      <div className="results-container">
        {sampleData.map((item) => (
          <ServiceProviderCard
            key={item.id}
            image={item.image}
            name={item.name}
            service={item.service}
            rating={item.rating}
            location={item.location}
            orders={item.orders}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}