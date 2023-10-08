import React from 'react'

const Seventh = () => {
  return (
    <div className='w-full h-screen flex items-center justify-evenly flex-col  bg-white  '>
      <div className='w-[60%] h-[40%] flex items-center justify-center flex-col'>
      <span className='text-[20px] font-bold'>Caring is new marketing</span>
      <span className='text-[14px] '>The Nexcent blog is the best place to read about the</span>
      <span className='text-[14px] '>trends ad more see who is joining the community read about, how our community</span>
      <span className='text-[14px] '>are increasing there membership and income and lots more</span>
      </div>
      
      <div className='w-[60%] h-[40%]  flex items-center justify-center flex-row gap-10 mb-44'>
        <img className='w-[30%] h-[92%] rounded-lg shadow-lg' src="data:image/jpeg;base64,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" alt="" />
        <img className='w-[30%] h-[92%] rounded-lg shadow-lg ' src="data:image/jpeg;base64,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" alt="" />
        <img className='w-[30%] h-[92%] rounded-lg shadow-lg ' src="data:image/jpeg;base64,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" alt="" />
      </div>

      


        
 
    </div>
  )
}

export default Seventh