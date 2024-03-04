import {useState , useEffect} from 'react'
import Navbar from '../Components/CustomNavbar';
import Like from '../Assets/images/like.svg';
import UserIcon from '../Assets/images/userIcon.svg'; 
import EventCardImg from '../Assets/images/EventImage.svg'; 
import Report from '../Assets/images/Flag.svg';
import EmptyLike from '../Assets/images/Heart.svg';
import { useParams } from 'react-router-dom';
import Notfound from './notfound';
const EventPage = () => {
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []); 
    const data = [
        {
          id: 1,
          imgSrc: EventCardImg,
          alt: 'img1',
          EventName: 'Event Name1',
          like : 150 ,
          price: 'Price',
          Organizer: 'user X',
          description : "THIS EVENT Is .... and you know that it is ..... you can reserve you place by clicking get ticket",
          Followers: '100',
          Date: 'Sep 12',
        },
        {
          id: 2,
          imgSrc: EventCardImg,
          alt: 'img1',
          EventName: 'Event Name2',
          like : 150 ,
          price: 'Price',
          Organizer: 'user X',
          description : "THIS EVENT Is .... and you know that it is ..... you can reserve you place by clicking get ticket",
          Followers: '100',
          Date: 'Sep 12',
        },
        {
          id: 3,
          imgSrc: EventCardImg,
          alt: 'img1',
          EventName: 'Event Name3',
          like : 150 ,
          price: 'Price',
          Organizer: 'user X',
          description : "THIS EVENT Is .... and you know that it is ..... you can reserve you place by clicking get ticket",
          Followers: '100',
          Date: 'Sep 12',
        },
        {
          id: 4,
          imgSrc: EventCardImg,
          alt: 'img1',
          EventName: 'Event Name4',
          like : 150 ,
          price: 'Price',
          Organizer: 'user X',
          description : "THIS EVENT Is .... and you know that it is ..... you can reserve you place by clicking get ticket",
          Followers: '100',
          Date: 'Sep 12',
        },
        // ... (Other event objects)
      ];
    const [showReportPopup, setShowReportPopup] = useState(false);
    const { id } = useParams();
    const eventId = parseInt(id);
    const eventInfo = data.find((item) => item.id === eventId);
    
    const toggleReportPopup = () => {
        setShowReportPopup(!showReportPopup);
    };
   
    const comments = [
        {
            id: 1,
            username: 'User1',
            time: '10:30 AM',
            content: 'Comment 1: This is a great event!',
        },
        {
            id: 2,
            username: 'User2',
            time: '11:45 AM',
            content: 'Comment 2: Looking forward to attending!',
        },
        {
            id: 3,
            username: 'User2',
            time: '11:45 AM',
            content: 'Comment 2: Looking forward to attending!',
        },
        {
            id: 4,
            username: 'User2',
            time: '11:45 AM',
            content: 'Comment 2: Looking forward to attending!',
        },
        {
            id: 5,
            username: 'User2',
            time: '11:45 AM',
            content: 'Comment 2: Looking forward to attending!',
        }
        // Add more comments as needed
    ];

    return (
        <>
    {eventInfo && (<span className={`h-screen ${showReportPopup ? 'brightness-50' : ''}`}>
        <Navbar/>
        <main className='min-h-rest bg-[#E9E9E9]'>
            <div className={`flex flex-col items-center justify-center mb-5 h-fit p-16 bg-[#D9D9D9]`}>
                <span className='relative z-0'>
                    <div className='absolute flex items-center justify-center w-full h-full'>
                        <h1 className='text-6xl font-bold text-white'>{eventInfo.EventName}</h1>
                    </div>
                    <img className='rounded-lg h-[350px]' src={eventInfo.imgSrc} alt="" />
                    <img className='absolute right-0 cursor-pointer bottom-0' src={Like} alt="" />
                    <div className='absolute flex flex-row justify-between p-2 space-x-[650px]'>
                        <div className='flex flex-row'>
                            <img src={EmptyLike} alt="" />
                            <p className='text-sm'>{eventInfo.like}</p>
                        </div>
                        <div className='right-0 flex flex-row cursor-pointer' onClick={toggleReportPopup}>
                            <img className='cursor-pointer' src={Report} alt="" />
                            <button className='text-sm'>Report</button>
                        </div>
                    </div>
                </span>
                
            </div>
            <div className='flex flex-row justify-between p-4 px-16'>
                <div className='w-[500px] space-y-2'>
                    <div className='flex items-center justify-start ps-5 bg-white rounded-lg h-16'>
                        <p>{eventInfo.Date}</p>
                    </div>
                    <div className='flex items-center justify-start bg-white rounded-lg '>
                        <p className='px-4 py-5 overflow-auto max-h-35 wrapper'>
                        {eventInfo.description}
                        </p>
                    </div>
                    <div className='flex items-center justify-between px-2 bg-white rounded-lg h-16'>
                        <div className='flex flex-row items-center space-x-2'>
                            <img className='rounded-full h-9 w-9' src={UserIcon} alt="" />
                            <p>{eventInfo.Organizer}</p>
                        </div>
                        <p>{eventInfo.Followers} Followers</p>
                    </div>
                </div>
                <div className='flex flex-col space-y-2'>
                    <button className='bg-[#2157BE] text-white px-8 py-1 rounded-xl'>Get Ticket</button>
                    <button className='bg-[#D20D00] text-white px-8 py-1 rounded-xl'>Edit Event</button>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center mt-32'>
                <div className='bg-gray-400 h-[50px] w-[1200px] rounded-t-lg flex justify-center items-center'>
                    Comments                    
                </div>
            <div className='mb-10 Container'>
                <div className='bg-white border-[#BDBDBD] border-b-2 w-[1200px] rounded-b-lg'>
                    {comments.map((comment) => (
                        <div className=' border-2 border-[#E9E9E9] p-5' key={comment.id}>
                            <div className='flex flex-row justify-between'>
                                <span className='flex flex-row'>
                                    <img className='rounded-full h-9 w-9' src={UserIcon} alt="" />
                                    <div className='flex flex-col mt-1 space-y-[-4px] ml-1'>
                                        <p>{comment.username}</p>
                                        <p className='text-xs font-light'>{comment.time}</p>
                                    </div>
                                </span>
                            </div>
                            <div className='px-10 py-3'>
                                <p>{comment.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </main>
    </span>)}
    {showReportPopup && (
        <div className='fixed top-0 left-0 z-30 flex items-center justify-center w-full h-full'>
            <form className="flex flex-col bg-white rounded-3xl py-2 h-[600px] w-[900px]">
                <h2 className='flex items-center justify-center'>Report Event</h2>
                <span className='p-4 ml-16 space-y-2'>
                    <h2 className='font-semibold'>Reasons of Report :</h2>
                    <div className='ml-2 space-y-3'>
                        <div className='space-x-2'>
                            <input className='cursor-pointer' type="radio" name="report" id="spam" />
                            <label htmlFor="spam">Harmful Content</label>
                        </div>
                        <div className='space-x-2'>
                            <input className='cursor-pointer' type="radio" name="report" id="spam" />
                            <label htmlFor="spam">Illegal Content</label>
                        </div>
                        <div className='space-x-2'>
                            <input className='cursor-pointer' type="radio" name="report" id="spam" />
                            <label htmlFor="spam">Spam</label>
                        </div>
                        <div className='space-x-2'>
                            <input className='cursor-pointer' type="radio" name="report" id="spam" />
                            <label htmlFor="spam">Hateful Content</label>
                        </div>
                        <div className='space-x-2'>
                            <input className='cursor-pointer' type="radio" name="report" id="spam" />
                            <label htmlFor="spam">Violence</label>
                        </div>
                        <div className='space-x-2'>
                            <input className='cursor-pointer' type="radio" name="report" id="spam" />
                            <label htmlFor="spam">Copyright or Trademark Infringement</label>
                        </div>
                        <div className='space-x-2'>
                            <input className='cursor-pointer' type="radio" name="report" id="spam" />
                            <label htmlFor="spam">Canceled Event</label>
                        </div>
                    </div>
                    <h2 className='font-semibold'>Anything to add?</h2>
                    <textarea className="bg-[#A9A9A9] wrapper h-[180px] w-[750px] outline-none resize-none p-2 text-wrap" cols="30" rows="10"></textarea>
                </span>
                <div className='flex justify-end mr-6'>
                    <button className='bg-[#0046CE] text-white px-11 py-1 rounded-xl'>Submit</button>
                </div>
            </form>
        </div>
    )}
    {!eventInfo && <Notfound/>}
        </>
    );
};

export default EventPage;
