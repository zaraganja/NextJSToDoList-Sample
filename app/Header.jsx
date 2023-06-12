import Link from 'next/link'
import React from 'react'


const Header =  () => {

  return (
    <div className={` bg-pink-50 w-full text-red-400 font-bold text-lg h-10`} >
      <nav className={` flex flex-row self-center justify-center`}>
        <ul className={` flex flex-row w-[40%] justify-between bg-blue-300 self-center `}  >
          <Link href={`/dashboard`} className=' hover:cursor-pointer'>Dashboard</Link>
          <Link href={`/about`} className=' hover:cursor-pointer'>about</Link>
          <Link href={`/contactus`} className=' hover:cursor-pointer'>contact us</Link>
          <Link href={`/todo`} >ToDo blog</Link>
        </ul>
      </nav>

    </div>
  )
}

export default Header