import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';

const Home = () => {
  return (
    <div>
      <div className='mt-8'>
        <Banner></Banner>
      </div>
      <div className='max-w-6xl mx-auto mt-8'>
        <HowItWorks></HowItWorks>
      </div>
    </div>
  );
};

export default Home;