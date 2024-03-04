import { useState } from 'react';
import { Link } from 'react-router-dom';
import UserIcon from '../Assets/images/userIcon.svg';
import { useParams } from 'react-router-dom';
const Navbar = ({ isLoggedIn , useInfo  }) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const {id} = useParams();
  const navigationItems = [
    ['Explore', ''],
    ['About', ''],
    ['Contact', ''],
  ];

  return (
    <nav className='absolute z-40 flex justify-between w-full py-4 px-14'>
      <div className='text-white'>
        <img src="" alt="Logo" />
      </div>
      <span className='space-x-20 text-slate-300'>
        {navigationItems.map(([title, url], index) => (
          <Link key={index} to={url} className='hover:border-b-2 hover:text-white'>
            {title}
          </Link>
        ))}
      </span>
      {isLoggedIn ? (
        <img
          className='w-12 h-12 cursor-pointer'
          src={UserIcon}
          alt=''
          onClick={() => setToggleDropdown((prev) => !prev)}
        />
      ) : (
        <div className='space-x-3'>
          <Link className='px-6 py-1 bg-yellow-500 pb-2 rounded-3xl hover:bg-yellow-600 ' to="/signup">
            Sign Up
          </Link>
          <Link className='py-1 bg-white rounded-3xl pb-2 px-7 hover:bg-slate-300 ' to="/login">
            Log In
          </Link>
        </div>
      )}
      {isLoggedIn && toggleDropdown && (
        <div className='absolute top-2 right-28 rounded-lg bg-white w-[230px] h-[250px] flex flex-col gap-4 items-center'>
          <span className='flex flex-row items-center justify-center my-2 mt-4 mr-11'>
            <img
              className='w-10 h-10 mr-2 cursor-pointer'
              src={UserIcon}
              alt=''
            />
            <p>Account Name</p>
          </span>
          <Link
            to={`/Profile/${id}`}
            className='font-medium text-gray-700 text font-inter hover:text-gray-500'
            onClick={() => setToggleDropdown(false)}
          >
            View Account
          </Link>
          <Link
            to='/CreateEvent'
            className='font-medium text-gray-700 text font-inter hover:text-gray-500'
            onClick={() => setToggleDropdown(false)}
          >
            Create Event
          </Link>
          <Link
           to={`/EditProfile/${id}`}
            className='font-medium text-gray-700 text font-inter hover:text-gray-500'
            onClick={() => setToggleDropdown(false)}
          >
            Edit Profile
          </Link>
          <button
            type='button'
            onClick={() => {
              setToggleDropdown(false);
              // Call your log out function here
            }}
            className='font-medium text-gray-700 text font-inter hover:text-gray-500'
          >
            Log Out
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
