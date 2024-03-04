import image from '../Assets/imageLogin.png'
import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [animationClass, setAnimationClass] = useState('translate-y-[1000px]');
  useEffect(() => {
      // Update the animation class after a delay
      const timeout = setTimeout(() => {
        setAnimationClass('');
      }, 250);
  
      return () => clearTimeout(timeout);
    }, []);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
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
    
  return (
    <div className='relative overflow-hidden w-screen h-screen flex justify-center items-center' >
        <img  className='w-screen h-fit' src={image} alt="image" />
        <div className={`transition duration-700 absolute top-32 h-fit w-fit bg-white rounded-lg ${animationClass}`}>
         <h1 className='text-3xl font-bold text-center m-16'>Login</h1>
          <div className='flex flex-col gap-4 items-center justify-center m-16 '>
            <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
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
            <button className='h-8 bg-gradient-to-r from-sky-500 to-indigo-500 hover:scale-[1.05] text-md rounded-full text-white mb-4' type="submit" >Continue</button>
    </form>
           <h2 className='text-md  text-gray-500'>Do not you have an account?</h2> 
            <h2 className='hover:underline cursor-pointer' onClick={()=>{navigate('/SignUp')}}>Sign Up</h2>
            </div>
        </div>
       
        
    </div>
  )
}
