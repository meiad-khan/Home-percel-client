import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import OurServices from './OurServices/OurServices';

const Home = () => {
  return (
    <div>
      <div className='mt-8'>
        <Banner></Banner>
      </div>
      <div className='max-w-6xl mx-auto mt-8'>
        <HowItWorks></HowItWorks>
      </div>
      <div className='mt-20 mb-20'>
        <OurServices></OurServices>
      </div>
    </div>
  );
};

export default Home;