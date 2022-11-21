import rentals from '../data/rentals.json';

function Rentals() {
  return (
    <section className="rentals">
      <div className="card rental">Titre de la location</div>
      {rentals.map((rental) => (
        <p key={rental.id}>{rental.title}!</p>
      ))}
    </section>
  );
}

export default Rentals;
