import AboutSubheader from '../../components/AboutSubheader';
import Collapsible from '../../components/Collapsible';
import datas from '../../data/about.json';

function About() {
  return (
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
  );
}

export default About;
