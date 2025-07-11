import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox';
import Loader from '../components/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';


const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({name: '', email: '', message: ''});
  const [isLoading,setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');

  const {alert, showAlert, hideAlert} = useAlert();
  const handleFocus=()=> setCurrentAnimation('walk');
  const handleBlur=()=> setCurrentAnimation('idle');

 const handleSubmit = (e) => {
  e.preventDefault();
  setIsLoading(true);
  setCurrentAnimation('hit');

  emailjs.send(
    import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
    import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,  
    {
      from_name: form.name,
      to_name: "Mandar Deshmukh",
      from_email: form.email,
      to_email: 'mandardeshmukh863@gmail.com',
      message: form.message,
    },
    import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
  ).then(() => {
    setIsLoading(false);
    showAlert({ show: true, text: 'Mali sent Successfully..!', type: 'success' });

    setTimeout(()=>{
      hideAlert();
      setCurrentAnimation('idle');
      setForm({ from_name: '', from_email: '', message: '' });
    },[3000]);
    // alert("Message sent successfully!");
    
  }).catch((err) => {
    setIsLoading(false);
    currentAnimation('idle');
    showAlert({ show: true, text: 'Error in sending mail..!', type: 'danger' });

    console.error(err);

    // alert("Failed to send message. Please try again.");
  });
};


  const handleChange=(e)=>{
    setForm({...form, [e.target.name] : e.target.value })
  };



  return (
    <section className='relative flex lg:flex-row flex-col max-container h-[100vh]'>

      {alert.show && <Alert {...alert}/>}
      <div className='flex-1 min-w-[50%] flex flex-col'>

        <h1 className='head-text'>Get In Touch</h1>


        <form action="" className='w-full flex flex-col gap-7 mt-14' onSubmit={handleSubmit}>


          <label htmlFor="" className='text-black-500 font-semibold'>Name
            <input type="text" name='name' className='input' placeholder='John' required value={form.name} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
          </label>


          <label htmlFor="" className='text-black-500 font-semibold'>Email
            <input type="email" name='email' className='input' placeholder='john@gmail.com' required value={form.email} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
          </label>


          <label htmlFor="" className='text-black-500 font-semibold'>Message
            <textarea rows={4} name='message' className='input' placeholder='Let me know how I can help you!' required value={form.message} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
          </label>


          <button type='submit' className='btn' onFocus={handleFocus} onBlur={handleBlur} disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>


        </form>


      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[55px] h-[350px]'>
        <Canvas camera={{position: [0,0,5], fov: 75, near: 0.1, far: 1000}}>
          <directionalLight intensity={2.5} position={[0,0,1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader/>}>
            <Fox position={[0.5, 0.35, 0]} rotation={[12.6,-0.6,0]} scale={[0.5, 0.5, 0.5 ]} currentAnimation={currentAnimation}/>

          </Suspense>

        </Canvas>
      </div>


    </section>
  )
}

export default Contact;