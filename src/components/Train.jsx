import React from 'react'
import Done from '/done.png'
function Train() {
    const List = [
        {names:"Quick to ramp"},
        {names:"Easy to optimize"},
        {names:"Quick to scale up"},
        {names:"Works with all your existing tools"},
    ]

  return (
      <main className=''>
          <div className=' bg-[url(/section14.png)] bg-no-repeat bg-cover  md:w-[740px] w-[327px] lg:w-[1300px] rounded-3xl  my-10 mx-auto h-[405px] md:h-[500px]  flex  items-center md:justify-center px-6'>
              
              <div className=''>
              <h1 className='font-heading md:text-3xl w-[279px] md:w-[410px] mb-2 text-2xl px-3 font-semibold text-white'>Train your aiDR on your...</h1>
                  <h2 className=' font-heading text-2xl font-semibold text-primary italic  mb-4 md:mb-5'>prefered email st|</h2>
                  <p className='text-lg md:text-xl md:w-[440px] text-gray-400 font-extralight w-[279px] mb-4 md:mb-8'>You’re in control. Train your aiDR on elements of your Marketing strategy.</p>

                  <ul className=' grid grid-cols-1 md:grid-cols-2 gap-2 '>
                      {List.map((item, index) => (
                          <li key={index} className=''>
                              <div className='flex gap-2  items-center'>
                                  <img src={Done} alt="Done" />
                                  <p className='text-[#14BCB2]'> {item.names} </p>
                              </div>
                          </li>
                      ))}
                  </ul>
              </div>
          </div>
    </main>
  )
}

export default Train