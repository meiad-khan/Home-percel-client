import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
  
  // console.log(review);
  const { review: testimonial, user_photoURL, userName } = review;

  return (
    <div className="card bg-base-100 shadow-md rounded-2xl max-w-md">
      <div className="card-body space-y-4">
        {/* Quote Icon */}
        <FaQuoteLeft className="text-4xl text-primary/30" />

        {/* Testimonial Text */}
        <p className="text-gray-600 leading-relaxed">{testimonial}</p>

        {/* Divider */}
        <div className="border-t border-dashed border-primary/40 pt-4" />

        {/* User Info */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full ">
            <img src={user_photoURL} alt="" className='rounded-full'/>
          </div>
          <div>
            <h4 className="font-semibold text-base-content">{userName}</h4>
            <p className="text-sm text-gray-500">Senior Product Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;