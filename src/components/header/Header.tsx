import React from 'react'
import headerStyle from "./header.module.css";
import Link from 'next/link';

const Header = (props:any) => {
    console.log(props.abc)//app ko component mein data pass karty hen to props banaty hen us ko dynamic banay k lye
  return (
    //<div className={headerStyle.h1} >{props.abc}
    <div className='bg-gray-600 h-12 '>
      <div className='text-yellow-400 flex justify-between items-center'>
      <h1 className='text-xl m-2 cursor-pointer'>Saima Waheed</h1>
      <ul className= 'flex gap-3 mr-4 cursor pointer' >
   <Link className='hover:text-blue-600 'href="/">Home</Link>
   <Link className='hover:text-orange-600' href="/About">About</Link>
   <Link className='hover:text-orange-600' href="/Services">Services</Link>
   <Link className='hover:text-orange-600'href="/Contect us">Contect us</Link>
   </ul>
   </div>


    </div>
  )
}

export default Header

