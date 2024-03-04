import {useState} from 'react'
import { Link } from 'react-router-dom'
import UserIcon from '../Assets/images/userIcon.svg'
import Doorbell from '../Assets/images/Doorbell.svg'
import Active from '../Assets/images/Active.svg'
import { useProfileImage } from './ProfileImageContext';
import { useParams } from 'react-router-dom';

const CustomNavbar = () => {
  const {id} = useParams();
  const [toogleDropdown, setToogleDropdown] = useState(false);
  const [notificationToogleDropdown, setNotificationToogleDropdown] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, content: 'Notification Content 1', time: 'time 1', newNote: false },
    { id: 2, content: 'Notification Content 2', time: 'time 2', newNote: true },
    { id: 3, content: 'Notification Content 2', time: 'time 2', newNote: false },
    { id: 4, content: 'Notification Content 2', time: 'time 2', newNote: true },
  ]);

  const handleNotificationClick = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, newNote: false } : notification
      )
    );
  };
  const {profileImage} = useProfileImage();
  console.log(profileImage);
  
  return (
    <nav className='flex justify-between items-center p-9 h-[74px] bg-white border border-[#9f9f9f]'>
            <div className=''>
              <Link to="/">
                <img src="" alt="Logo" />
              </Link>
            </div>
            <ul className='flex gap-20'>
            {[
            ['Explore', '/'],
            ['About', ''],
            ['Contact', ''],
            ].map(([title,url], index)=> (
            <li key={index}><a href={url} className='border-black hover:border-b-2'>{title}</a></li>
            ))}
            </ul>
            <ul className="flex gap-24">
                <li className='flex gap-12 mt-2'>
                    <img 
                    src={Doorbell} 
                    alt="" 
                    onClick={()=>setNotificationToogleDropdown((prev) => !prev)}
                    className='transition duration-300 ease-in-out transform cursor-pointer h-7 w-7 hover:scale-110' 
                  />
                  {notificationToogleDropdown && 
                    <div className='wrapper text-[#393939] absolute z-20 overflow-y-auto top-14 right-24 rounded-lg bg-[#E1E1E1] w-[230px] max-h-[229px] flex flex-col items-center'>
                      <p className='left-0 w-full pb-1 pl-3 border-b border-slate-100'>Notifications</p>
                      {notifications.map((notification) => (
                        <span
                          key={notification.id}
                          onClick={() => handleNotificationClick(notification.id)}
                          className='flex flex-row items-center justify-center w-full border rounded-lg cursor-pointer border-slate-100'
                        >
                          {notification.newNote && <img src={Active} alt="" />}
                          <img className='w-10 h-10 mr-2' src={UserIcon} alt="" />
                          <div className='flex flex-col'>
                            <p>{notification.content}</p>
                            <p>{notification.time}</p>
                          </div>
                        </span>
                      ))}
                    </div>
                  }
                </li>
                <li>
                {profileImage ? (
                  <img 
                    className='w-12 h-12 rounded-full cursor-pointer'
                    src={profileImage} 
                    alt=''
                    onClick={() => setToogleDropdown((prev) => !prev)}
                  />
                ):(
                  <img
                    className='w-12 h-12 cursor-pointer'
                    src={UserIcon}
                    alt=''
                    onClick={() => setToogleDropdown((prev) => !prev)}
                  />
                )}
                  {toogleDropdown && 
                  <div className='absolute z-20 top-2 right-24 rounded-lg bg-[#E1E1E1] w-[230px] h-[250px] flex flex-col gap-4 items-center'>
                    <span className='flex flex-row items-center justify-center my-2 mt-4 mr-11'>
                      
                    {profileImage ? (
                      <img 
                        className='w-10 h-10 rounded-full cursor-pointer'
                        src={profileImage} 
                        alt=''
                      />
                    ):(
                      <img
                        className='w-10 h-10 cursor-pointer'
                        src={UserIcon}
                        alt=''
                      />
                    )}
                      <p>Account Name</p>
                    </span>
                    <Link
                      to={`/Profile/${id}`}
                      className='font-medium text-gray-700 text font-inter hover:text-gray-500'
                      onClick={() => setToogleDropdown(false)}
                    >
                      View Account
                    </Link>
                    <Link
                      to='/CreateEvent'
                      className='font-medium text-gray-700 text font-inter hover:text-gray-500'
                      onClick={() => setToogleDropdown(false)}
                    >
                      Create Event
                    </Link>
                    <Link
                      to={`/EditProfile/${id}`}
                      className='font-medium text-gray-700 text font-inter hover:text-gray-500'
                      onClick={() => setToogleDropdown(false)}
                    >
                      Edit Profile
                    </Link>
                    <button
                      type='button'
                      onClick={() => { setToogleDropdown(false);
                        //* Call your log out function here
                      }}
                      className='font-medium text-gray-700 text font-inter hover:text-gray-500'
                    >
                      Log Out
                    </button>
                  </div>
                  }
                </li>
            </ul>
    </nav>
  )
}

export default CustomNavbar