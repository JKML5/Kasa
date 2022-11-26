import AboutSubheader from '../../components/AboutSubheader';
import Collapsible from '../../components/Collapsible';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import datas from '../../data/about.json';

function About() {
  return (
    <>
      <Header />
      <div className="content">
        <AboutSubheader />
        {datas.map((data) => (
          <Collapsible
            key={data.id}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default About;
