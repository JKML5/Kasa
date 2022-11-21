import { useParams } from 'react-router-dom';

function Rental() {
  const parems = useParams();

  return (
    <>
      <h1>Fiche location</h1>
      <p>Location id : {parems.id}</p>
    </>
  );
}

export default Rental;
