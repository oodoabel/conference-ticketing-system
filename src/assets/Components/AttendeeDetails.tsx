import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const onSubmit =() => {

}

const TicketElection = () => {
    
    

  return (
    <form action="">
        <div className='flex justify-center items-center flex-col lg:mt-[10rem] mt-[3rem] text-amber-50'>
        <div className=''>
        <div className='bg-[#052b31] lg:w-[30rem] lg:h-full] h-full w-[22rem] lg:p-10 p-4 rounded-3xl border-[#0E464F] border-1'> 
          <p className=' flex justify-between font-serif lg:text-2xl text-lg items-center text-[#FAFAFA]'>Ticket Selection <span className='lg:text-[13px] text-[10px] font-sans text-2xl'>Step2/3</span></p>
          <div className='bg-[#24A0B5] rounded-2xl mt-1 h-[3px]'></div>
          <div className='w-full h-full mt-3 rounded-2xl bg-[#07373F] p-5 border-[#0E464F] border-1'>
            <div className='text-[10px] font-normal lg:p-3 mb-4 flex flex-col items-center border-[#0E464F] border-1 bg-[#052b31] rounded-2xl lg:h-30 md:h-30 h-23 w-full'>
              dropzoehere
            </div>
            <div className='bg-[#0E464F] rounded-3xl h-[2px]'></div>
                <label htmlFor="name">Enter your name</label>
                <input type="text" id='name' className='block outline-0 w-full px-4 py-2  border border-[#24A0B5] rounded-md shadow-sm ' /> <br />

                <label htmlFor="specialRequest">Enter your email *</label>
                <input type="email" id='email' placeholder='hello@email.com' className='block outline-0 w-full px-4 py-2  border border-[#24A0B5] rounded-md shadow-sm ' /><br />

                <label htmlFor="specialRequest">Special request? *</label>
                <input type="text" id='specialRequest' className='block outline-0 h-[5] py-2  lg:h-[5rem] w-full px-4   border border-[#24A0B5] rounded-md shadow-sm ' />
           
            <div className='flex justify-between pt-2'>
              <button className=' lg:w-[10rem] w-[7rem] h-10 border-[#24A0B5] border-1 rounded-lg mt-2 outline-0'> Cancel</button>
              <button type='submit' className=' lg:w-[10rem] w-[7rem] h-10 border-[#24A0B5] bg-[#24A0B5] border-1 rounded-lg mt-2 outline-0'> Next</button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </form>
  )
}

export default TicketElection