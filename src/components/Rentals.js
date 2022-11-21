import '../styles/Rentals.css';
import rentals from '../data/rentals.json';
import RentalsItem from './Rental';

function Rentals() {
  return (
    <section className="rentals">
      {rentals.map((rental) => (
        <RentalsItem
          key={rental.id}
          id={rental.id}
          title={rental.title}
          imgSrc={rental.cover}
          rating={parseInt(rental.rating, 10)}
        />
      ))}
    </section>
  );
}

export default Rentals;
