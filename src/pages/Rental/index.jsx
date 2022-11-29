import { useParams, Navigate } from 'react-router-dom';
import Collapsible from '../../components/Collapsible';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Host from '../../components/Host';
import Rating from '../../components/Rating';
import Slider from '../../components/Slider';
import Tag from '../../components/Tag';
import rentals from '../../data/rentals.json';
import '../../styles/RentalPage.css';

function Rental() {
  const parems = useParams();

  const rental = rentals.filter((data) => data.id === parems.id).pop();

  if (rental === undefined) {
    return <Navigate to="/error404" />;
  }

  return (
    <>
      <Header />
      <div className="content rental-page">
        <Slider pictures={rental.pictures} />
        <div className="profile">
          <div className="left">
            <h1>{rental.title}</h1>
            <h2>{rental.location}</h2>
            <div className="tags">
              {rental.tags.map((tag) => (
                <Tag value={tag} />
              ))}
            </div>
          </div>
          <div className="right">
            <Host name={rental.host.name} picture={rental.host.picture} />
            <Rating value={parseInt(rental.rating, 10)} />
          </div>
        </div>
        <div className="collapsible-wrapper">
          <Collapsible title="Description" description={rental.description} />
          <Collapsible
            title="Equipements"
            description={rental.equipments.join('###')}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Rental;
