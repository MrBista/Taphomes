import React from 'react';

const Register = () => {
  const [userForm, setUserForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };
  return (
    <div className='flex justify-center items-center h-screen w-full'>
      <div className='flex flex-col items-center gap-y-4'>
        <h3 className='uppercase text-[1.3rem] w-[250px] leading-tight text-center'>
          Register
        </h3>
        <div className='w-[350px]'>
          <form>
            <input
              type='text'
              placeholder='Email address'
              className='border w-full px-4 py-2 outline-none my-2'
              name='email'
              value={userForm.email}
              onChange={handleChange}
            />
            <input
              type='text'
              placeholder='First name'
              className='border w-full px-4 py-2 outline-none my-2'
              name='firstName'
              value={userForm.firstName}
            />
            <input
              type='text'
              placeholder='Last Name'
              className='border w-full px-4 py-2 outline-none my-2'
              name='lastName'
              value={userForm.lastName}
              onChange={handleChange}
            />
            <input
              type='text'
              placeholder='Password'
              className='border w-full px-4 py-2 outline-none my-2'
              name='password'
              value={userForm.password}
              onChange={handleChange}
            />

            <button className='mt-4 bg-black text-white w-full px-4 py-2 rounded'>
              JOIN US
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
