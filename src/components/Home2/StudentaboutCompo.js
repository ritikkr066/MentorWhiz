import React from 'react';
import Image from 'next/image';

const Studentaboutcompo = (props) => {
  return (
    <>
       <div className="flex flex-row ">
      <div className="p-4 sm:w-[600px] w-[280px] ">
        <div className="flex flex-col items-center justify-center h-full text-center sm:flex-row sm:justify-start sm:text-left">
          <Image width={200} height={200} alt="team" className="flex-shrink-0 object-cover object-center w-48 h-48 mb-4 rounded-lg sm:mb-0" src={"/images/man2.svg"}/>
          <div className="flex-grow sm:pl-8">
           
            <p className="mb-4">{props.desc}</p>
            <h2 className="text-lg font-medium text-gray-900 title-font">{props.name}</h2>
            <h3 className="mb-3 text-gray-500">{props.role}</h3>
            
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Studentaboutcompo;
