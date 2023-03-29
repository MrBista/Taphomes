import React from 'react';

const Login = () => {
  return (
    <div className='flex justify-center items-center h-screen w-full border-2 border-pink-500'>
      <div className='flex flex-col items-center gap-y-4'>
        <h3 className='uppercase text-[1.3rem] w-[250px] leading-tight text-center'>
          Logi
        </h3>
        <form>
          <input
            type='text'
            placeholder='Email address'
            className='border w-full px-4 py-2 outline-none my-2'
          />
          <input
            type='text'
            placeholder='Password'
            className='border w-full px-4 py-2 outline-none my-2'
          />

          <button className='mt-4 bg-black text-white w-full px-4 py-2 rounded'>
            JOIN US
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
