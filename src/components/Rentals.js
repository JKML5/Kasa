import rentals from '../data/rentals.json';
import RentalsItem from './RentalsItem';

function Rentals() {
  return (
    <section className="rentals">
      {rentals.map((rental) => (
        <RentalsItem
          key={rental.id}
          title={rental.title}
          rating={parseInt(rental.rating, 10)}
        />
      ))}
    </section>
  );
}

export default Rentals;
