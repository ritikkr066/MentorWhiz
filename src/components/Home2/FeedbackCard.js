// "use client"
// import React from 'react';
// import Image from 'next/image';
// function FeedbackCard({ title, content, id, setOpened, opened }) {
// 	return (
// 		<div onClick={() => setOpened(id)} className="border-2 cursor-pointer ">
// 			<div className="flex justify-between p-4 mt-1">
// 				<h1 className="text-xl ">{title}</h1>
// 				{opened === id ? (
// 					<Image
// 						width={20}
// 						height={50}
// 						src="/icons/up.svg"
// 						alt="+"
// 						className="h-5 "
// 					/>
// 				) : (
// 					<Image
// 						width={20}
// 						height={50}
// 						src="/icons/down.svg"
// 						alt="+"
// 						className="h-5 "
// 					/>
// 				)}
// 			</div>
// 			{opened === id && <p className="max-w-3xl p-4">{content}</p>}
// 		</div>
// 	);
// }

// export default FeedbackCard;

"use client"
import { useState } from 'react';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-300 rounded-lg">
      <button
        className="flex items-center justify-between w-full px-6 py-4 focus:outline-none"
        onClick={toggleAccordion}
      >
        <span className="text-lg">{question}</span>
        <svg
          className={`w-6 h-6 transition-transform transform ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}
          />
        </svg>
      </button>
      {isOpen && <p className="px-6 py-2">{answer}</p>}
    </div>
  );
};

export default FaqItem;
