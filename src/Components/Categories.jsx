import { useState } from "react";
import { Link} from 'react-router-dom';
import Image from "../Assets/EventCardImg.png" ;
import search from '../Assets/images/search.svg';
import cat1 from '../Assets/images/Business.svg';
import cat2 from '../Assets/images/Cultural.svg';
import cat4 from '../Assets/images/Politics.svg';
import cat5 from '../Assets/images/Sports.svg';
import cat6 from '../Assets/images/Educational.svg';
import cat7 from '../Assets/images/Health&Care.svg';
import notFound from '../Assets/not-found.png';
import { useNavigate } from "react-router-dom";
const CardsData  = [
  {
      id: 1,
      imgSrc : Image,  
      alt: "img1",
      EventName: "Event Name1",
      price: "Price",
      Organizer :"user X",
      Followers:"100",
      Date:" sep 12",
      liked : false
    
  }, 
  {
      id: 2,
      imgSrc : Image,  
      alt: "img1",
      EventName: "Event Name2",
      price: "150$",
      Organizer :"user X",
      Followers:"100",
      Date:" sep 12",
      liked : true
    
  },
  {
      id: 3,
      imgSrc : Image, 
      alt: "img1",
      EventName: "Event Name3",
      price: "150$",
      Organizer :"user X",
      Followers:"100",
      Date:" sep 12",
      liked : false
    
  }, {
      id: 4,
      imgSrc : Image,  
      alt: "img1",
      EventName: "Event Name4",
      price: "150$",
      Organizer :"user X",
      Followers:"100",
      Date:" sep 12",
      liked : true
    
  }, {
      id: 5,
      imgSrc : Image,  
      alt: "img1",
      EventName: "Event Name5",
      price: "150$",
      Organizer :"user X",
      Followers:"100",
      Date:" sep 12",
      liked : false
    
  }, {
      id: 6,
      imgSrc : Image,  
      alt: "img1",
      EventName: "Event Name6",
      price: "150$",
      Organizer :"user X",
      Followers:"100",
      Date:" sep 12",
      liked : false
    
  }, {
      id: 7,
      imgSrc : Image,  
      alt: "img1",
      EventName: "Event Name7",
      price: "150 $",
      Organizer :"user X",
      Followers:"100",
      Date:" sep 12",
      liked : true
    
  },
]

const categoriesData = [
  ['Business', cat1],
  ['Cultural', cat2],
  ['Art', cat2],
  ['Politics', cat4],
  ['Sports', cat5],
  ['Educational', cat6],
  ['Health & Care', cat7],
];


export default function Categories({isLoggedIn}) {
  const navigate = useNavigate();
  const [click, setclick] = useState(false);
  const [data , setCardsData] = useState(CardsData);
  const [searchInput, setSearchInput] = useState('');
  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search Input:', searchInput);
    const filteredEvents = CardsData.filter((event) => {
      const searchTerm = searchInput.toLowerCase();
      return (
        (event.EventName && event.EventName.toLowerCase().includes(searchTerm))
      );
    });
    setCardsData(filteredEvents);
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };
  return (
    <>
    <div className='categories_box h-96 space-y-11'>
      <div className='relative flex items-center justify-center'>
        <img className='absolute mt-7 mr-[430px] h-5' src={search} alt="" />
        <input
          className=' pr-10 px-4 py-2 transition-colors duration-1000 ease-in-out outline-none text-slate-900 ps-10 placeholder:text-slate-700 placeholder:text-sm mt-7 bg-slate-300 rounded-3xl hover:shadow-lg'
          type="text"
          size="50"
          placeholder='Enter Event Name'
          value={searchInput}
          onChange={handleSearchInputChange}
          onKeyPress={handleKeyPress}
        />
      </div>
      <h2 className='font-bold text-center text-4xl text-[#001C51]'>Categories</h2>
      <span className='flex items-center justify-center space-x-16'>
        {categoriesData.map(([title, url], index) => (
          <div key={index} className='flex-row'>
            <div className='p-6 transition duration-200 ease-in-out delay-200 bg-white rounded-full cursor-pointer ellipse hover:shadow-lg hover:-translate-y-1'>
              <img src={url} alt={title} />
            </div>
            <p className='flex items-center justify-center mt-1'>{title}</p>
          </div>
        ))}
      </span>
    </div>
  <div className="relative">
        <h1 className="pt-8 pb-8 text-3xl font-bold text-center text-indigo-950" >Upcoming Events</h1>
        {data.length > 0  ? (
          <div className="grid grid-cols-3 justify-items-center mt-16 mb-16" >
  {data.map((card) => (
    <div onClick={()=>{ if (!isLoggedIn) {setclick(true)}}} className="cards" key={card.id}>
                <img src={card.imgSrc} alt="" />
                <div className="absolute top-0 left-0 bg-white pt-0.5 pb-0.5 pe-2 ps-2"><p className="text-base font-medium">{card.price}</p></div>
                <div onClick={()=>{ if (isLoggedIn){navigate(`/EventPage/${card.id}`)}}} className="flex cursor-pointer  justify-between items-center pt-4 pb-4 ps-1 pe-2">
                    <div className="basis-1/6 font-medium text-xl text-center">{card.Date}</div>
                    <div className="basis-3/6 ps-1">
                        <h3   className="text-xl font-medium ">{card.EventName}</h3>
                        <h4 >{card.Organizer}</h4>
                    </div>
                    <div className="basis-2/6"> <span className="font-medium">{card.Followers} </span>Followers</div>
                </div>
                <div onClick={() => { if (!isLoggedIn) {setclick(true);} else {setCardsData(prevData => prevData.map(item => item.id === card.id ? { ...item, liked: !item.liked } : item ));}}} className="absolute z-40 top-2 right-2 bg-white hover:scale-[1.1] transition duration-500 p-1 rounded-3xl ">
                  { !card.liked && <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 14" fill="none">
                        <path d="M11.6458 0.699707C10.1567 0.699707 8.84484 1.44425 8.1003 2.61425C7.35575 1.44425 6.04393 0.699707 4.55484 0.699707C2.21484 0.699707 0.300293 2.61425 0.300293 4.95425C0.300293 9.17334 8.1003 13.4633 8.1003 13.4633C8.1003 13.4633 15.9003 9.2088 15.9003 4.95425C15.9003 2.61425 13.9858 0.699707 11.6458 0.699707Z" fill="#C2C2C2"/>
                  </svg>}
                  { card.liked && <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 14" fill="none">
                        <path d="M11.6458 0.699707C10.1567 0.699707 8.84484 1.44425 8.1003 2.61425C7.35575 1.44425 6.04393 0.699707 4.55484 0.699707C2.21484 0.699707 0.300293 2.61425 0.300293 4.95425C0.300293 9.17334 8.1003 13.4633 8.1003 13.4633C8.1003 13.4633 15.9003 9.2088 15.9003 4.95425C15.9003 2.61425 13.9858 0.699707 11.6458 0.699707Z" fill="#ff0000"/>
                  </svg> }
                </div>
            </div>
  ))}
  </div>
) : (
  <div className="flex flex-col justify-center items-center h-fit ">
  <img className="w-60 h-60 " src={notFound} />
    <h1 className="text-5xl font-bold text-gray-800 pt-10 pb-10">Ooops,</h1>
    <p className="text-lg text-gray-600">There is no result for your search.</p>
    <p className="text-lg text-gray-600 space-x-2 pb-10">Come on, try again !</p>
  </div>
  
)}

        <div className={`${ click  ? 'fixed inset-0 z-50 flex backdrop-blur-md justify-center items-center w-screen h-screen' : 'hidden' }`}>
            <div className=" bg-gray-200 shadow-xl rounded-lg w-[500px] h-[230px] ">
            <h1 className="ps-[480px] cursor-pointer text-xl" onClick={()=>{setclick(false)}}>×</h1>
             <div className="flex flex-col m-4 justify-center items-center">
             <h1 className="text-2xl font-bold text-center pt-4 pb-4"> You need an account.</h1>
                <Link className=" font-semibold bg-blue-500  pb-1 shadow-md rounded-md mb-2 text-center text-white text-lg w-32 hover:scale-[1.05] " to="/Login" >login</Link>
                <Link className=" font-semibold bg-gold2 pb-1 shadow-md rounded-md text-center text-white text-lg w-32 hover:scale-[1.05] " to="/SignUp" > Signup</Link>
             </div>
            </div>
        </div>
    </div>
  </>
   );
}
