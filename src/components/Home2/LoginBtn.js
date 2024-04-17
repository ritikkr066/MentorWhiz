import React from 'react';
import Link from 'next/link';

const LoginBtn = () => {
  return (
    <>
      <div className='text-black  border-[1px] border-gray-500 px-2 py-1'>
        <Link href={"/login"}><button className='px-4 py-1  rounded-[8px]'> Login/Signup</button></Link>
      </div>
    </>
  );
}

export default LoginBtn;
