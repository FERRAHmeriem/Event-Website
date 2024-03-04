import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Userlists = ({ userList }) => {
  const [following, setFollowing] = useState(userList);

  const onToggleFollow = (id) => {
    setFollowing((prevFollowing) => {
      return prevFollowing.map((user) =>
        user.id === id ? { ...user, isFollowed: !user.isFollowed } : user
      );
    });
  };

  return (
    <div className='flex flex-col  items-center'>
      {following.map((user) => (
        <div key={user.id} className='flex items-center justify-between bg-white mb-1 p-4 w-full'>
          <div className='flex items-center'>
            <img src={user.imgUrl} alt='' className='h-[60px] w-[60px]' />
            <Link to={`/UserProfile/${user.id}`} className='ml-4'>
              {user.username}
            </Link>
          </div>
          <p
            onClick={() => onToggleFollow(user.id)}
            className={`cursor-pointer ${user.isFollowed ? 'text-red-500' : 'text-blue-500'}`}
          >
            {user.isFollowed ? 'Unfollow' : 'Follow back'}
          </p>
        </div>
      ))}
    </div>
  );
};

Userlists.propTypes = {
  userList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imgUrl: PropTypes.string.isRequired,  // Corrected typo in imgUrl
      username: PropTypes.string.isRequired,
      isFollowed: PropTypes.bool.isRequired,  // Corrected boolean
    })
  ).isRequired,
};

export default Userlists;
