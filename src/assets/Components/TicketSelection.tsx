import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const TicketElection = () => {
    
  // const { ticket, setTicket } = useState('')

  return (
    <div className='flex justify-center items-center flex-col lg:mt-[10rem] mt-[3rem] text-amber-50'>
        <div className=''>
        <div className='bg-[#052b31] lg:w-[30rem] lg:h-[55rem] h-full w-[22rem] lg:p-10 p-4 rounded-3xl border-[#0E464F] border-1'> 
          <p className=' flex justify-between font-serif lg:text-2xl text-lg items-center text-[#FAFAFA]'>Ticket Selection <span className='lg:text-[13px] text-[10px] font-sans text-2xl'>Step1/3</span></p>
          <div className='bg-[#24A0B5] rounded-2xl mt-1 h-[3px]'></div>
          <div className='w-full h-[32rem] mt-3 rounded-2xl bg-[#07373F] p-5 border-[#0E464F] border-1'>
            <div className='text-[10px] font-normal lg:p-3 mb-4 flex flex-col items-center border-[#0E464F] border-1 bg-[#052b31] rounded-2xl lg:h-30 md:h-30 h-23 w-full'>
              <p className='font-mono lg:text-2xl text-[1.5rem]' >Techember Fest"25</p>
              <p>Join us for an unforgetable experience at</p>
              <p>[Event Name]! secure your spot now.</p>
              <p>📍[Event Location] || March 15th, 2025 | 7:00pm</p>
            </div>
            <div className='bg-[#0E464F] rounded-3xl h-[2px]'></div>
            <p className='text-[12px] mt-2'>Select Ticket Type:</p>
            <div className='border-[#0E464F] border-1 w-full h-23 mt-1 rounded-2xl bg-[#052b31] flex justify-between items-center p-2' >
              <div className='border-[#24A0B5] border-1 w-full h-full p-2 mx-1  rounded-2xl bg-[#052b31] flex flex-col'><span className='font-bold lg:text-[1rem] text-0.5 '>Free</span> <span className='font-mono text-[0.55rem] lg:text-[0.6rem] '>REGULAR ACCESS <br /> 20/52 </span> </div>
              <div className='border-[#24A0B5] border-1 w-full h-full p-2 mx-1  rounded-2xl bg-[#052b31] flex flex-col'><span className='font-bold lg:text-[1rem] text-0.5 '>$150</span> <span className='font-mono text-[0.6rem] '>VIP ACCESS <br /> 20/52 </span> </div>
              <div className='border-[#24A0B5] border-1 w-full h-full p-2 mx-1  rounded-2xl bg-[#052b31] flex flex-col'><span className='font-bold lg:text-[1rem] text-0.5 '>$150</span> <span className='font-mono text-[0.6rem] '>VVIP ACCESS <br /> 20/52 </span> </div>
            </div>
            <p className='text-[12px] mt-2'>Number of Tickets:</p>
            <select className="block w-full px-4 py-2 mt-5 border border-[#24A0B5] rounded-md shadow-sm ">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <div className='flex justify-between pt-2'>
              <button className=' lg:w-[10rem] w-[7rem] h-10 border-[#24A0B5] border-1 rounded-lg mt-2 outline-0'> Cancel</button>
              <button className=' lg:w-[10rem] w-[7rem] h-10 border-[#24A0B5] bg-[#24A0B5] border-1 rounded-lg mt-2 outline-0'> Next</button>
            </div>
          </div>
        </div>
        </div>
      </div>
  )
}

export default TicketElection