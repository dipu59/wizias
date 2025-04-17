import React from 'react'

function Magic() {
    const Magicinfo = [
        { path: '/magic.png', alt:'magic', heading: 'You’re in Control', description: 'aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.' },
        
        { path: '/link.png', alt:'link', heading: 'Infinitely Scalable', description: 'Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.' },
        
        { path: '/selector.png', alt:'selector', heading: 'Incredibly Flexible', description:' Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.'},
    ]
  return (
      <div>
          <div className='py-10 md:py-16'>
              <ul className='grid grid-cols-1 md:grid-cols-3 lg:w-[1200px] mx-auto px-7 md:px-0'>
                  {Magicinfo.map((item, index) => (
                      <li key={index} className='hover:-translate-y-3 transition-all cursor-pointer hover:shadow-lg hover:shadow-gray-950 py-6 space-y-1 md:space-y-2 px-3'>
                          <div><img className='size-[40px] md:size-[45px]' src={item.path} alt={item.alt} /></div>
                          <div><h2 className='text-lg text-white md:text-xl font-semibold font-heading'>{item.heading}</h2></div>
                          <div><p className='text-gray-400 leading-snug'>{item.description }</p></div>
                      </li>
                  ))}
              </ul>
          </div>
    </div>
  )
}

export default Magic