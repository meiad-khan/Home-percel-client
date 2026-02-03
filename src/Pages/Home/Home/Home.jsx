import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import OurServices from './OurServices/OurServices';
import Brands from '../Brands/Brands';
import SpecialSection from '../SpecialSection/SpecialSection';
import Reviews from '../Reviews/Reviews';

const reviewPromise = fetch('/reviews.json').then(res => res.json());

const Home = () => {
  return (
    <div>
      <div className="mt-8">
        <Banner></Banner>
      </div>
      <div className="max-w-6xl mx-auto mt-8">
        <HowItWorks></HowItWorks>
      </div>
      <div className="mt-20">
        <OurServices></OurServices>
      </div>
      <div className="mt-20">
        <Brands></Brands>
      </div>
      <div className="mt-20">
        <SpecialSection></SpecialSection>
      </div>
      <div>
        <Reviews reviewPromise={reviewPromise}></Reviews>
      </div>
    </div>
  );
};

export default Home;