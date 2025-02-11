

const Ticket = () => {
  return (
    <div className="flex justify-center  items-center">
      <div className='w-full bg-indigo-500  h-[20rem] '>
        
      </div>
    
        <div className="bg-white h-[10rem] w-[20rem] lg:pb-5  md:w-2xl md:h-[20rem] lg:w-3xl lg:h-[20rem]  mt-[20rem] flex justify-center items-center flex-col absolute rounded-2xl  ">
          <p className="font-mono font-bold md:text-3xl lg:text-3xl ">HI-TECH CONFERENCE TICKET</p>
            <div className="font-mono flex pt-3 md:p-4">
              <div className="font-bold text-[18px] pt-1.5 lg:text-3xl md:text-4xl" >
                <p className="pt-2 md:pt-5 lg:text-[2.5rem]">Full Name: JOHN DOE</p>
                <p className="text-[15px] md:text-3xl lg:text-4xl">Email: johndoe@gmail.com</p>
              </div>
              <img className='w-20 h-20 bg-amber-300 ml-2 lg:ml-10 md:ml-10 md:h-35 md:w-35 rounded-[10px]' src="" alt="avatar image" />
            </div>
          <p className="text-[12px] pt-2 md:text-2xl md:pt-0 lg:pt-0  ">Date: 13th February, 2025  Time:11:59pm</p>
        </div>
        

               
    
    </div>
  )
}

export default Ticket