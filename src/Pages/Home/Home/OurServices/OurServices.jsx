import React from 'react';
import serviceImg from '../../../../assets/service.png'

const OurServices = () => {

  const deliveryServices = [
    {
      id: 1,
      title: "Express & Standard Delivery",
      description:
        "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
      icon: serviceImg,
    },
    {
      id: 2,
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
      icon: serviceImg,// this one is green in UI
    },
    {
      id: 3,
      title: "Fulfillment Solution",
      description:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
      icon: serviceImg,
    },
    {
      id: 4,
      title: "Cash on Home Delivery",
      description:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
      icon: serviceImg,
    },
    {
      id: 5,
      title: "Corporate Service / Contract In Logistics",
      description:
        "Customized corporate services which includes warehouse and inventory management support.",
      icon: serviceImg,
    },
    {
      id: 6,
      title: "Parcel Return",
      description:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
      icon: serviceImg,
    },
  ];
  
  return (
    <div className="bg-secondary rounded-2xl text-white p-14">
      <div className=" flex flex-col items-center space-y-2.5 mb-5">
        <h2 className="text-4xl font-bold">Our Services</h2>
        <p className="text-[16px] text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
          <br></br>
          repellat accusamus qui temporibus earum nulla.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-center">
        {deliveryServices.map((service) => (
          <div
            key={service.id}
            className="p-5 bg-base-100 space-y-2.5 rounded-xl hover:bg-primary"
          >
            <div className='flex items-center justify-center'>
              <div className="flex justify-center items-center w-15 h-15  rounded-full bg-base-300">
                <img src={service.icon} alt="" />
              </div>
            </div>
            <div>
              <h3 className="text-xl text-secondary font-medium">
                {service.title}
              </h3>
            </div>
            <div>
              <p className="text-sm text-[#606060]">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;