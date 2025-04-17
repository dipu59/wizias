import React from 'react'
import footerimg from '/Logo2.png'
function Footer() {
  return (
      <div className='flex flex-col md:flex-row justify-center md:justify-between gap-2 items-center md:px-20 h-[140px] md:h-[109px] bg-[#07292F]'>
          <img src={footerimg} alt="FooterImg" />
          <p className='text-[#96ACAF] text-sm'>Copyright © {new Date().getFullYear() } Wizia. All rights reserved.</p>
    </div>
  )
}

export default Footer