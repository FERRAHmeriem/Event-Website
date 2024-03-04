import {useState} from 'react'
import LikedEvents from '../Components/LikedEvents';
import Events from '../Components/UserEvents';
import Userlists from '../Components/FollowersAndFollowing';
import Navbar from '../Components/CustomNavbar';
import UserIcon from '../Assets/images/userIcon.svg';
import { useParams } from 'react-router-dom';
export default function UserProfile () {
    const { id } = useParams();
   const usersInfo =[{
        id:  1,
        name : "meriem 1",
        imgUrl : UserIcon ,
        description : "hi am meriem i wish you like my event hhhhh",
        email : "meriem@gmail.com",
        number: "0667358203",
      }, {
        id:  2,
        name : "meriem 1",
        imgUrl : UserIcon ,
        description : "hi am meriem i wish you like my event hhhhh",
        email : "meriem@gmail.com",
        number: "0667358203",
      }];
    const userInfo = usersInfo.filter((item) => item.id === parseInt(id));

    console.log(userInfo);
    const following = [
        { id: 1, username: 'UserA',imgUrl : UserIcon , isFollowed: false },
        { id: 2, username: 'UserB',imgUrl : UserIcon , isFollowed: true },
        { id: 3, username: 'UserC',imgUrl : UserIcon , isFollowed: true },
        { id: 4, username: 'UserC',imgUrl : UserIcon , isFollowed: true },
        { id: 5, username: 'UserC',imgUrl : UserIcon , isFollowed: false },
        { id: 6, username: 'UserC',imgUrl : UserIcon , isFollowed: true },
        { id: 7, username: 'UserC',imgUrl : UserIcon , isFollowed: false },
        { id: 8, username: 'UserC',imgUrl : UserIcon , isFollowed: true }
        ];
        const [showLiked, setShowLiked] = useState(false);
        const [showEvents, setShowEvents] = useState(true);
        const [showFollowers, setShowFollowers] = useState(false);
        const [showFollowing, setShowFollowing] = useState(false);
      
        const handleLikedClick = (e) => {
            e.preventDefault();
          setShowLiked(true);
          setShowEvents(false);
            setShowFollowers(false);
            setShowFollowing(false);
        };
      
        const handleEventsClick = (e) => {
            e.preventDefault();
          setShowEvents(true);
          setShowLiked(false);
            setShowFollowers(false);
            setShowFollowing(false);
        };
        
        const handleFollowersClick = (e) => {
            e.preventDefault();
          setShowFollowers(true);
          setShowEvents(false);
          setShowLiked(false);
            setShowFollowing(false);
        }
        
        const handleFollowingClick = (e) => {
            e.preventDefault();
          setShowFollowing(true);
          setShowEvents(false);
          setShowLiked(false);
          setShowFollowers(false);
        }
 return (
    <div className='wrapper overflow-y-auto bg-[#E1E1E1]'>
        <div className='h-screen'>
        <Navbar/>
        <span className='flex justify-center h-rest gap-x-6'>
            <div className='mt-8'>
                <div className='h-80 w-[440px] rounded-lg p-4 px-6 border border-[#bdbdbd] bg-white'>
                    <div className='flex flex-col items-center justify-center mb-6'>
                        <img src={userInfo.imgUrl} alt="" className='h-[130px] w-[140px]' />
                        <h2 className='mb-5 text-[#414141]'>{userInfo.name}</h2>
                    </div>
                    <hr className='border border-[#00000080]' />
                    <div className='flex justify-between mt-1 text-[#414141]'>
                        <p>Email</p>
                        <p>{userInfo.email}</p>
                    </div>
                    <div className='flex justify-between text-[#414141]'>
                        <p>Phone Number</p>
                        <p>{userInfo.number}</p>
                    </div>
                </div>
                <div className='overflow-auto wrapper h-[170px] w-[440px] bg-white border border-[#bdbdbd] rounded-lg px-4 py-2 mt-4'>
                    <h2 className='mb-1 font-semibold'>Description</h2>
                    <p className='w-full overflow-y-auto break-words outline-none' placeholder='Your Description...'>{userInfo.description}</p>
                </div>
            </div>
            <section className='flex-col w-1/2 mt-8'>
                <div className='h-[60px] rounded-lg p-2 flex items-center justify-evenly border border-[#bdbdbd] bg-white'>
                    <a href="" className={`${showLiked ? 'pt-[17px] pb-3 border-b-4 border-[#0047ff]' : ''}`} onClick={handleLikedClick}>Liked</a>
                    <a href="" className={` ${showEvents ? 'pt-[17px] pb-3 border-b-4 border-[#0047ff]' : ''}`} onClick={handleEventsClick}>Events</a>
                    <a href=""className={` ${showFollowers ? 'pt-[17px] pb-3 border-b-4 border-[#0047ff]' : ''}`} onClick={handleFollowersClick}>Followers</a>
                    <a href=""className={` ${showFollowing ? 'pt-[17px] pb-3 border-b-4 border-[#0047ff]' : ''}`} onClick={handleFollowingClick}>Following</a>
                </div>
                {showLiked && <LikedEvents />}

                {showEvents && <Events  isUser ={false} />}

                {showFollowers && <Userlists userList={following}  />}

                {showFollowing && <Userlists userList={following}  />}
            </section>
        </span>
        
    </div>
    </div>
    
    
  )
}

