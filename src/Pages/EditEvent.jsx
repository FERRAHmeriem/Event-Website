import {useState, useRef} from 'react';
import Navbar from '../Components/CustomNavbar';
import { useParams } from 'react-router-dom';
const EditEvent = () => {

  const [charCount, setCharCount] = useState(0);
  const {event} = useParams();
  const handleInputChange = (event) => {
    const inputText = event.target.value;
    const currentLength = inputText.length;

    //? Ensure the character count doesn't exceed the maximum limit
    if (currentLength <= 500) {
      setCharCount(currentLength);
    }
  };
  
  const [isDateInputVisible, setIsDateInputVisible] = useState(false);
  
  const handleFocus = () => {
     setIsDateInputVisible(true);
  };
    
  const handleBlur1 = () => {
     setIsDateInputVisible(false);
  };

const [isTimeInputVisible, setIsTimeInputVisible] = useState(false);

const handleFocus1 = () => {
   setIsTimeInputVisible(true);
};

const handleBlur = () => {
   setIsTimeInputVisible(false);
};

//* Date and Time input state
const [dateValue, setDateValue] = useState('');
const [timeValue, setTimeValue] = useState('');
//? Date and Time input change handlers
const handleDateChange = (e) => {
  setDateValue(e.target.value);
};

const handleTimeChange = (e) => {
  setTimeValue(e.target.value);
};

//* Category input state
const [selectedCategory, setSelectedCategory] = useState('');
//? Category input change handler
const handleCategoryChange = (e) => {
  setSelectedCategory(e.target.value);
};

//* image Upload with input validation
const [images, setImages] = useState([]);
const [errorMsg, setErrorMsg] = useState('');

const handleImageChange = (e) => {
  const files = e.target.files;
  const selectedImages = Array.from(files);

  if (selectedImages.length + images.length > 1) {
    setErrorMsg('You can upload only 1 image');
    return;
  }

  setErrorMsg('');

  setImages((prevImages) => [...prevImages, ...selectedImages]);
  };

const handleImageRemove = (e, index) => {
  e.preventDefault(); // prevent the form submission event from bubbling up
  const newImages = images.filter((_, i) => i !== index);
  setImages(newImages);
  };
  const accessToken = 'pk.eyJ1IjoibmFkamliOSIsImEiOiJjbHNwNmhjNXQwazU0MmxwOWQyaXBwZDd4In0.c87ovcwxlxl2ZyOeZC0OJQ';
  const inputRef = useRef(null);
  const [location, setLocation] = useState(null);
  const handleLocationChange = (location) => {
    setLocation(location);
  };
  
  //! Form Submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent the refresh of the page
    if (!dateValue || !timeValue) {
      setErrorMsg('Please enter both date and time');
      return;
    } else {
      if (images.length === 0) {
        setErrorMsg('Please upload at least one image');
        return;
      }
    }
    console.log('Form Submitted');
    alert('Form successfully Submitted, now please wait for admin approval to publish the event.');
    e.target.reset();
    setImages([]);
    setDateValue('');
    setTimeValue('');
    setSelectedCategory('');
    setErrorMsg('');
    setCharCount(0);
  };

 
  return (
    <form className='bg-[#E1E1E1]  h-screen w-full wrapper' onSubmit={handleSubmit}>
      <Navbar />
      <main className='px-10 py-4 mx-32 my-8 bg-white rounded-lg min-h-rest'>
        <h1 className='flex justify-center text-3xl text-blue-950 font-semibold'>Edit Your Event</h1>
        <span className='flex flex-col mt-4 space-y-3'>
          <input type="text" required className='p-2 outline-none border border-[#bdbdbd] rounded-lg placeholder:text-gray-600 focus:outline-none focus:text-black focus:bg-white focus:border-gray-500' placeholder='Title' />
          <input
            className='p-2 outline-none border border-[#bdbdbd] rounded-lg placeholder:text-gray-600 focus:outline-none focus:text-black focus:bg-white focus:border-gray-500'
            type="text"
            placeholder="Date Month/Day/Year"
            onFocus={handleFocus}
            value={dateValue}
            onChange={handleDateChange}
            style={{ display: isDateInputVisible ? 'none' : 'block'} }
          />
          <input
            className='p-2 outline-none border border-[#bdbdbd] rounded-lg focus:outline-none focus:text-black focus:bg-white focus:border-gray-500'
            type="date"
            onBlur={handleBlur}
            value={dateValue}
            onChange={handleDateChange}
            style={{ display: isDateInputVisible ? 'block' : 'none'} }
          />
                    
          <input
            className='p-2 outline-none border border-[#bdbdbd] rounded-lg placeholder:text-gray-600 focus:outline-none focus:text-black focus:bg-white focus:border-gray-500'
            type="text"
            placeholder="Time HH:MM AM/PM"
            onFocus={handleFocus1}
            value={timeValue}
            onChange={handleTimeChange}
            style={{ display: isTimeInputVisible ? 'none' : 'block'} }
          />
          <input
            className='p-2 outline-none border border-[#bdbdbd] rounded-lg focus:outline-none focus:text-black focus:bg-white focus:border-gray-500'
            type="time"
            onBlur={handleBlur1}
            value={timeValue}
            onChange={handleTimeChange}
            style={{ display: isTimeInputVisible ? 'block' : 'none'} }
          />
          <input
            type="text"
            required
            ref={inputRef}
            className="p-2 outline-none border border-[#bdbdbd] rounded-lg placeholder:text-gray-600 focus:outline-none focus:text-black focus:bg-white focus:border-gray-500"
            placeholder="Location"
          />
          <div className='border w-full border-[#bdbdbd] overflow-hidden h-28 rounded-lg focus:outline-none focus:text-black focus:bg-white focus:border-gray-500'>
            <div className='flex flex-row justify-between mx-2'>
              <p className='text-gray-600'>Description</p>
              <p className='text-gray-600'>{charCount}/500</p>
            </div>
            <textarea
              className="w-full h-[75px] px-2 outline-none wrapper text-wrap"
              maxLength={500}
              onChange={handleInputChange}
              required
              style={{ resize: 'none' }}
            />
          </div>
          <select value={selectedCategory} onChange={handleCategoryChange} required class="block appearance-none w-full cursor-pointer bg-white border border-[#bdbdbd] text-gray-600 py-2 px-2 pr-8 rounded-lg shadow-sm leading-tight focus:outline-none focus:text-black focus:bg-white focus:border-gray-500">
            <option value="" selected disabled hidden className=''>Select a Category</option>
            <option value="category1">Business</option>
            <option value="category2">Cultural</option>
            <option value="category3">Cultural</option>
            <option value="category3">Politics</option>
            <option value="category3">Sports</option>
            <option value="category3">Educational</option>
            <option value="category3">Health & Care</option>
          </select>
          <input type="url" required className='p-2 outline-none border border-[#bdbdbd] rounded-lg placeholder:text-gray-600 focus:outline-none focus:text-black focus:bg-white focus:border-gray-500' placeholder='Event Form Link' />
          
          <section className='flex flex-row'>
            <label className='flex flex-col items-center bg-[#0000001A] justify-center text-[#696969] h-24 p-2 text-xs border border-[#00000080] border-dashed cursor-pointer w-26 rounded-xl'>
              <b className='text-xl'>+</b> 
              <br/>
              <span>only 1 image</span>
              <input 
                type="file"
                className='w-0 h-0 opacity-0'
                onChange={handleImageChange}
                multiple
                accept='image/*' />  
            </label>
            <div className='flex flex-row ml-4 space-x-1'>
                {images.map((image, index) => (
                <div className='flex flex-col space-y-1' key={index}>
                  <img src={URL.createObjectURL(image)} alt='' className='w-20 h-20' />
                  <button onClick={(e) => handleImageRemove(e, index)} className='text-xs text-white transition duration-100 ease-in-out bg-red-400 cursor-pointer rounded-xl hover:bg-red-500'>Remove</button>
                </div>
                ))}
            </div>
            {errorMsg && <p className='ml-4 text-red-600'>{errorMsg}</p>}
          </section>
          
        </span>
        <div className='flex justify-end w-full'>
          <button className='w-32 p-1 mt-4 text-white transition duration-300 ease-in-out  bg-blue-500 rounded-lg hover:scale-[1.01]'>Save Changes</button>
        </div>
      </main>
    </form>
  )
}

export default EditEvent;