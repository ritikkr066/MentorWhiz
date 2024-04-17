"use client"
import { useState } from 'react';
import Image from 'next/image';

const DropdownMenu = ({ onSearch }) => {
  const [pgHostel, setPGHostel] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');

  const handlePGHostelChange = (e) => {
    setPGHostel(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSearch = () => {
    if (pgHostel && location && price) {
      // Pass selected filters to the parent component
      onSearch({ pgHostel, location, price });
    }
  };

  return (
    <>
   
    <div className="flex flex-col items-center px-4 py-3 space-y-2 bg-white md:justify-center sm:flex-row sm:space-y-0 sm:space-x-4">
      <div className="relative">
        <select
          value={pgHostel}
          onChange={handlePGHostelChange}
          className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-400 rounded shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline"
        >
          <option value="">Select PG/Hostel</option>
          <option value="PG">PG</option>
          <option value="Hostel">Hostel</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pl-2 text-gray-700 pointer-events-none">
         
          <Image src="images/arrow.svg" width={30} height={50} alt='arrow'/>
        </div>
      </div>
      <div className="relative">
        <select
          value={location}
          onChange={handleLocationChange}
          className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-400 rounded shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline"
        >
          <option value="">Select Location</option>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Chicago">Chicago</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pl-2 text-gray-700 pointer-events-none">
         
         <Image src="images/arrow.svg" width={30} height={50} alt='arrow'/>
       </div>
      </div>
      <div className="relative">
        <select
          value={price}
          onChange={handlePriceChange}
          className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-400 rounded shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline"
        >
          <option value="">Select Price</option>
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pl-2 text-gray-700 pointer-events-none">
         
          <Image src="images/arrow.svg" width={30} height={50} alt='arrow'/>
        </div>
      </div>
      <button
        onClick={handleSearch}
        disabled={!pgHostel || !location || !price}
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${(!pgHostel || !location || !price) && 'opacity-50 cursor-not-allowed'}`}
      >
        Search
      </button>
    </div>
    </>
  );
};

export default DropdownMenu;
