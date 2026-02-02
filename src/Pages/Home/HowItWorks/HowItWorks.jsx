import React from "react";
import { TbTruckDelivery } from "react-icons/tb";

const HowItWorks = () => {
  const services = [
    {
      id: 1,
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      icon: "pick-drop", // you can replace with icon component or image path
    },
    {
      id: 2,
      title: "Cash On Delivery",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      icon: "cash-on-delivery",
    },
    {
      id: 3,
      title: "Delivery Hub",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      icon: "delivery-hub",
    },
    {
      id: 4,
      title: "Booking SME & Corporate",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      icon: "sme-corporate",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-3">How It Works</h2>

      <div className="flex flex-col lg:flex-row gap-5">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-5 bg-base-100 space-y-2.5 rounded-xl"
          >
            <div className="flex items-center">
              <TbTruckDelivery className="text-3xl" />
            </div>
            <div>
              <h3 className="text-xl font-medium">{service.title}</h3>
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

export default HowItWorks;
