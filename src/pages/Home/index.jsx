import Baseline from '../../components/Baseline';
import Rentals from '../../components/Rentals';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Home() {
  return (
    <>
      <Header />
      <div className="content">
        <Baseline />
        <Rentals />
      </div>
      <Footer />
    </>
  );
}

export default Home;
