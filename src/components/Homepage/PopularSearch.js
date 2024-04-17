import React from 'react';

const PopularSearchComponent = () => {
  return (
    <div className="flex items-center justify-center">
      <div className='mr-2 text-white '>Popular Search : </div>
      <div className="flex justify-between space-x-2">
        <button className="px-1 py-0 boder-[2px] border-gray-50 bg-white  text-black rounded-md focus:outline-none hover:bg-blue-600">Apartment</button>
        <button className="px-1 py-0 boder-[2px] border-gray-50 bg-white  text-black rounded-md focus:outline-none hover:bg-blue-600">Room</button>
        <button className="px-1 py-0 boder-[2px] border-gray-50 bg-white  text-black rounded-md focus:outline-none hover:bg-blue-600">PG</button>
        <button className="px-1 py-0 boder-[2px] border-gray-50 bg-white  text-black rounded-md focus:outline-none hover:bg-blue-600">Redident House</button>
        <button className="px-1 py-0 boder-[2px] border-gray-50 bg-white  text-black rounded-md focus:outline-none hover:bg-blue-600">Redident House</button>
        <button className="px-1 py-0 boder-[2px] border-gray-50 bg-white  text-black rounded-md focus:outline-none hover:bg-blue-600">PG</button>
        <button className="px-1 py-0 boder-[2px] border-gray-50 bg-white  text-black rounded-md focus:outline-none hover:bg-blue-600">Room</button>
        <button className="px-1 py-0 boder-[2px] border-gray-50 bg-white  text-black rounded-md focus:outline-none hover:bg-blue-600">PG</button>
      </div>
    </div>
  );
};

export default PopularSearchComponent;
