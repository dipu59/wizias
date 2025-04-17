import React from 'react'

function Allocate() {
    const items = [
        {percent : '32%', disc:'Improvement in Open Rates'},
        {percent : '75%', disc:'Improvement in Ramp Time'},
        {percent : '35%', disc:'Improvement in Meetings Booked'},
    ]
  return (
      <div>
          <div className=' bg-[url(/section13.png)] bg-no-repeat bg-cover  md:w-[740px] w-[327px] lg:w-[1300px] rounded-3xl   mx-auto h-[480px] md:h-[500px]  flex  items-center   px-6'>
              <div className='md:ml-20 space-y-3'>
                  <h1 className='text-2xl text-white w-[279px]  md:w-[580px] md:text-4xl font-semibold font-heading'>Allocate effort where your reps make an inpact.</h1>
                  <h3 className='text-2xl md:text-4xl font-heading text-primary italic font-medium pb-3'>Let us handle the rest.</h3>
                  <p className='text-gray-400 w-[279px] text-sm md:text-lg  md:w-[580px]'>Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.</p>

                  <ul className='flex flex-col md:flex-row md:gap-1 gap-2 md:pt-20 pt-4'>
                      {items.map((item, index) => (
                          <li key={index} className='hover:shadow-xl   hover:shadow-primary/20 hover:-translate-y-3 transition-all cursor-pointer'>
                              <div className='md:p-3'>
                                  <h1 className=' text-primary text-3xl md:text-5xl font-semibold font-heading'>{item.percent }</h1>
                                  <p className='md:w-[174px] text-gray-400 leading-tight md:text-lg'>{item.disc}</p>
                              </div>
                          </li>
                      ))}
                  </ul>
          </div>
          </div>
    </div>
  )
}

export default Allocate