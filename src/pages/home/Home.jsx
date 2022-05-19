import Header from '../../components/header/Header';
import Properties from '../../components/properties/Properties';
import Capabilities from '../../components/capabilities/Capabilities';
import Company from '../../components/company/Company';
import WhatWeDo from '../../components/whatwedo/WhatWeDo';
import Insights from '../../components/insights/Insights';
import Carrer from '../../components/carrer/Carrer';
import Footer from '../../components/footer/Footer';
import ContactMobile from '../../components/ContactMobile';

const Home = () => {
  return (
    <div>
      <Header />
      <Properties />
      <Capabilities />
      <Company />
      <WhatWeDo />
      <Insights />
      <Carrer />
      <ContactMobile />
      <Footer />
    </div>
  );
};

export default Home;
