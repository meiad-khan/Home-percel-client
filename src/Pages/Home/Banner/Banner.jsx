import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from '../../../assets/banner/banner1.png';
import bannerImg2 from '../../../assets/banner/banner2.png';
import bannerImg3 from '../../../assets/banner/banner3.png';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';

const Banner = () => {
  return (
    <div className="relative">
      <Carousel autoPlay={true} infiniteLoop={true}>
        <div>
          <img src={bannerImg1} />
        </div>
        <div>
          <img src={bannerImg2} />
        </div>
        <div>
          <img src={bannerImg3} />
        </div>
      </Carousel>
      <div className="hidden lg:flex items-center gap-2 absolute bottom-40 left-22">
        <button className="btn bg-primary rounded-xl">Track Your Parcel</button>
        <BsArrowUpRightCircleFill className="text-3xl" />
        <button className="btn">Be A Rider</button>
      </div>
    </div>
  );
};

export default Banner;