

const Ready = () => {
  return (
    <div>
      <div className='flex justify-center items-center flex-col  lg:mt-[10rem] mt-[3rem] text-amber-50'>
        <div className=''>
        <div id="ticket" className='bg-[#052b31] lg:w-[30rem] lg:h-[55rem] w-[22rem] lg:p-10 p-4 rounded-3xl border-[#0E464F] border-1'> 
          <p className=' flex justify-between font-serif lg:text-2xl text-lg items-center text-[#FAFAFA]'>Ready <span className='lg:text-[13px] text- font-sans text-sm'>Step3/3</span></p>
          <div className='bg-[#24A0B5] rounded-2xl mt-1 h-[3px]'></div>
          
          <div className="flex justify-center flex-col items-center mt-10">
            
            <div className='lg:w-[20rem] lg:h-[33rem] w-[18rem] h-[31rem] rounded-2xl bg-[#07373F] p-4  border-[#24A0B5] border-1 flex flex-col justify-center items-center'>
                <div className='w-full h-full rounded-2xl bg-transparent border-[#24A0B5] border-1 '>
                  <div className='flex text-[12px] justify-center flex-col items-center p-4'>

                    <p className='font-bold text-2xl ' >Techember Fest"25</p>
                    <p>📍04 Rumens road, Ikoyi, Lagos</p>
                    <p>March 15th, 2025 | 7:00pm</p>

                    <img src="../react.svg" alt="" className="w-[10rem] h-[10rem] m-4 border-[#24A0B5] border-4 rounded-2xl" />

                    <div className="bg-[#07373F] w-full h-full border-1 border-[#12464E] text-gray-400 rounded-2xl mb-4 p-2">
                      <div className=" grid grid-cols-2 text-[10px]">
                        <p className="flex flex-col  pb-2 pl-1 pt-1 border-gray-600 border-b-[1px]">Full Namee <span className="font-bold text-sm text-gray-300">Avi Chukwu</span></p>
                        <p className="flex flex-col  pb-2 pl-1 pt-1 border-gray-600 border-b-[1px] border-l-[1px] ">Email <span className="font-bold text-sm text-gray-300">Avi Chukwu</span></p>
                        <p className="flex flex-col  pb-2 pl-1 pt-1 border-gray-600 border-b-[1px]">Ticket Type <span className="font-bold text-sm text-gray-300">Avi Chukwu</span></p>
                        <p className="flex flex-col  pb-2 pl-1 pt-1 border-gray-600 border-b-[1px] border-l-[1px]">Ticket admits <span className="font-bold text-sm text-gray-300">Avi Chukwu</span></p>
                      </div>
                      <div className="pt-2">
                        <p>Special Request</p>
                        <p className="text-gray-300">
                          Nil? or the user sad story they wrote to fix things up
                        </p>
                      </div>
                    </div>


                  </div>
                </div>
            </div>

            <div className='lg:w-[20rem] lg:h-[7rem] h-[7rem] pb-3 w-[18rem] rounded-2xl bg-[#07373F] p-4 border-[#24A0B5] border-1 flex flex-col justify-center items-center'>
                
            </div>
            
          </div>

          <div className='flex justify-between m-0  lg:pt-3 pt-2 text-sm'>
              <button  className='w-[9.5rem] lg:w-[12rem] h-10 border-[#24A0B5] border-1 rounded-lg mt-2 outline-0'> Book Another Ticket</button>
            <a href="./assets/components/TicketSelection"></a>
              <button onClick={() => {
                window.print();
              }} className='w-[9.5rem] lg:w-[12rem] h-10 border-[#24A0B5] bg-[#24A0B5] border-1 rounded-lg mt-2 outline-0'> Download Ticket</button>
          </div>

        </div>
        </div>
      </div>
    </div>
 )
}

export default Ready