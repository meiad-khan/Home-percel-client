import React from 'react';
import liveTracking from '../../../assets/live-tracking.png';
import safeDelivery from '../../../assets/safe-delivery.png';
import topMerchent from '../../../assets/be-a-merchant-bg.png';
import rightMerchent from '../../../assets/location-merchant.png';

const featureHighlights = [
  {
    id: 1,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    image: liveTracking, // replace with actual image import
  },
  {
    id: 2,
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    image: safeDelivery,
  },
  {
    id: 3,
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    image: safeDelivery,
  },
];


const SpecialSection = () => {
  return (
    <div>
      <div className="space-y-5 p-8 border-b border-dashed">
        {featureHighlights.map((feature) => (
          <div
            key={feature.id}
            className="flex bg-base-100 rounded-2xl gap-6 p-6 items-center"
          >
            <div className="border-r border-dashed border-r-gray-400 p-4">
              <img src={feature.image} alt="" />
            </div>
            <div>
              <h3 className="text-2xl font-medium text-secondary">
                {feature.title}
              </h3>
              <p className="text-sm font-normal text-gray-400">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* merchent */}
      <div className="relative bg-secondary p-10 mb-10 rounded-2xl mt-10">
        {/* content */}
        <div className="relative z-10 space-y-5">
          <h3 className="text-3xl text-white font-bold z-30">
            Merchant and Customer Satisfaction<br></br> is Our First Priority
          </h3>
          <p className="text-gray-300">
            We offer the lowest delivery charge with<br></br> the highest value
            along with 100% safety of your product. Pathao courier delivers your
            parcels in every<br></br> corner of Bangladesh right on time.
          </p>
          <div className="flex gap-5">
            <button className="btn btn-primary text-secondary rounded-xl">
              Become a Merchant
            </button>
            <button className="btn text-primary rounded-xl">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>

        {/* bg-image */}
        <div
          className="absolute top-0 left-0 bg-no-repeat bg-cover w-full h-32 opacity-70 z-0"
          style={{
            backgroundImage: `url(${topMerchent})`,
          }}
        />
        <div
          className="absolute right-5 top-1/2 -translate-y-1/2 w-[300px] h-[200px] bg-contain bg-no-repeat"
          style={{
            backgroundImage: `url(${rightMerchent})`,
          }}
        />
      </div>
    </div>
  );
};

export default SpecialSection;