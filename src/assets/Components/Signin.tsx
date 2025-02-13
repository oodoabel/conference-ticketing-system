import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
    
    useEffect(() =>{
        localStorage.getItem(JSON.stringify('fullname')),
        localStorage.getItem(JSON.stringify('email')),
        localStorage.getItem(JSON.stringify('url'))
        }, [])
    
    
      const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('fullname', JSON.stringify(fullname))
        localStorage.setItem('email', JSON.stringify(email))
        localStorage.setItem('url', JSON.stringify(url))
        console.log({fullname, email, url})
      }
    
      const [fullname, setFullname ] = useState('');
      const [email, setEmail ] = useState('');
      const [url, setUrl ] = useState('');

  return (
    <div className='flex justify-center items-center flex-col mt-[10rem] text-amber-50'>
        <div className=''>
          
        <form onSubmit={handleSubmit} action="" className='border-gray-300 solid text'>
          <p className='font-extrabold font-mono text-3xl text-indigo-500'>HI-TECH CONFERENCE </p> <br />

          <label htmlFor="fullname"  className=''>Full Name<span className='text-red-500'>*</span></label> 
          <input onChange = {(e) => setFullname(e.target.value)} value={fullname} required type="text"  id='fullname' className='mb-3 w-[20rem]  block  px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500' />
          <label htmlFor="email" className=''>Email <span className='text-red-500'>*</span></label> 
          <input onChange = {(e) => setEmail(e.target.value)} required type="email" id='email' className='mb-3 w-[20rem]  block  px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500' />
          <label htmlFor="url" className=''>URL <span className='text-red-500'>*</span></label> 
          <input onChange = {(e) => setUrl(e.target.value)} value={url} required type="url" id='url' className='mb-3 w-[20rem]  block  px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500' />

          <a href="">
          <button type='submit' className='bg-indigo-500 w-[20rem] py-2 mt-3 hover:cursor-pointer rounded-md hover:bg-indigo-400'>Generate Ticket</button>
          </a>
        </form>
        </div>
      </div>
  )
}

export default Signin