import image from '../Assets/imageSignInUp.png'
import Preference from '../Components/preference'
import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
export default function SignUp() {
    const [animationClass, setAnimationClass] = useState('translate-y-[1000px]');
    const [placemet, setplacement] = useState('');
    const [hidden , sethidden] = useState(false);
    useEffect(() => {
        // Update the animation class after a delay
        const timeout = setTimeout(() => {
          setAnimationClass('');
        }, 250);
    
        return () => clearTimeout(timeout);
      }, []);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });
      const[confirm, setConfirm] =useState('');
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
      };
      const isFormValid = () => {
        return (
          formData.firstName.trim() !== '' &&
          formData.lastName.trim() !== '' &&
          formData.email.trim() !== '' &&
          formData.password.trim() !== '' &&
          confirm.trim() !== '' &&
          formData.password === confirm
        );
      };
      
    
  return (
    <div className='relative h-screen overflow-hidden flex justify-center items-center' >
        <img  className='w-screen h-fit z-0' src={image} alt="image" />
        
        <div className={`transition duration-700 absolute top-16 h-fit w-fit bg-white rounded-lg ${animationClass} ${placemet}`}>
         <h1 className='text-3xl font-bold text-center m-16'>Sign Up</h1>
          <div className='flex flex-col gap-4 items-center justify-center m-16 '>
            <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
                <div className=' flex gap-8 '>
                <input
                className='w-36'
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
            />
            <input
            className='w-36'
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
            />
                </div>
           
            <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <input
                type="password"
                placeholder="Confirm Password"
                name="Confirm-password"
                onChange={(e) => setConfirm(e.target.value)}
                value={confirm}
                required
            />
            <button className='h-8 bg-gradient-to-r from-sky-500 to-indigo-500 hover:scale-[1.05] text-md rounded-full text-white mb-4' type="submit" onClick={()=> { if (isFormValid()) { sethidden(true) ; setplacement('translate-y-[-10000px]')} else { sethidden(false)}}}>Continue</button>
    </form>
           <h2 className='text-md  text-gray-500'>Do you already have an account?</h2> 
            <h2 className='hover:underline cursor-pointer' onClick={()=>{navigate('/Login')}}>Login</h2>
            </div>
        </div>
        { hidden && <Preference/>} 
    </div>
    
  )
}
