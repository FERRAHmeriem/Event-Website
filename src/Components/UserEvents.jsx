import AddBtn from '../Assets/images/add.svg'; 
import EventCardImg from '../Assets/EventCardImg.png'; 
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const data = [
  {
    id: 1,
    imgSrc: EventCardImg,
    alt: 'img1',
    EventName: 'Event Name1',
    price: 'Price',
    Organizer: 'user X',
    Followers: '100',
    Date: 'Sep 12',
  },
  {
    id: 2,
    imgSrc: EventCardImg,
    alt: 'img1',
    EventName: 'Event Name1',
    price: 'Price',
    Organizer: 'user X',
    Followers: '100',
    Date: 'Sep 12',
  },
  {
    id: 3,
    imgSrc: EventCardImg,
    alt: 'img1',
    EventName: 'Event Name1',
    price: 'Price',
    Organizer: 'user X',
    Followers: '100',
    Date: 'Sep 12',
  },
  {
    id: 4,
    imgSrc: EventCardImg,
    alt: 'img1',
    EventName: 'Event Name1',
    price: 'Price',
    Organizer: 'user X',
    Followers: '100',
    Date: 'Sep 12',
  },
  // ... (Other event objects)
];
const CreateNewEvent = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <Link to="/createEvent">
        <img
        src={AddBtn}
        alt="Add Button"
        className="transition duration-300 ease-in-out transform cursor-pointer hover:scale-110"
      /></Link>
    </div>
  );
};
const ShowingEventCard = ({ data }) => {
  const navigate = useNavigate();

  return (
    <>
      {data.map((card) => (
         <div className="cards" onClick={ navigate(`/EventPage/${card.id}`)} key={card.id}>
          <img src={card.imgSrc} alt={card.alt} />
                <div className="absolute top-0 left-0 bg-white pt-0.5 pb-0.5 pe-2 ps-2"><p className="text-base font-medium">{card.price}</p></div>
                <div className="flex justify-between items-center pt-4 pb-4 ps-1 pe-2">
                    <div className="basis-1/6 font-medium text-lg text-center">{card.Date}</div>
                    <div className="basis-3/6 ps-1">
                        <h3 className="text-lg font-medium">{card.EventName}</h3>
                        <h4 >{card.Organizer}</h4>
                    </div>
                    <div className="basis-2/6"> <span className="font-medium ps-4">{card.Followers} </span>Followers</div>
                </div>
                <div className="absolute top-2 right-2 bg-white hover:scale-[1.1] transition duration-500 p-1 rounded-3xl z-10">
                    <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 14" fill="none">
                        <path d="M11.6458 0.699707C10.1567 0.699707 8.84484 1.44425 8.1003 2.61425C7.35575 1.44425 6.04393 0.699707 4.55484 0.699707C2.21484 0.699707 0.300293 2.61425 0.300293 4.95425C0.300293 9.17334 8.1003 13.4633 8.1003 13.4633C8.1003 13.4633 15.9003 9.2088 15.9003 4.95425C15.9003 2.61425 13.9858 0.699707 11.6458 0.699707Z" fill="#C2C2C2"/>
                    </svg>
                </div>
            </div>
      ))}
      </>
  );
};
ShowingEventCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imgSrc: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      EventName: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      Organizer: PropTypes.string.isRequired,
      Followers: PropTypes.string.isRequired,
      Date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const UserEvents = ({isUser}) => {
  return (
    <section className="flex flex-col py-4 gap-y-8">
      <div>
        <h3 className="text-lg font-semibold">Upcoming</h3>
        <div className="grid grid-cols-3 gap-4 justify-items-center mt-4 mb-4">
          <ShowingEventCard data={data} />
          {isUser && <CreateNewEvent />}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Passed</h3>
        <div className="grid grid-cols-3 gap-4 justify-items-center mt-4 mb-4">
          <ShowingEventCard data={data } />
        </div>
      </div>
    </section>
  );
};

export default UserEvents;
