'use client'
import React from 'react';
import Link from 'next/link';


const ButtonLink = () => {
  return (
    <div className=' flex flex-col'>
    <Link href={`/dashboard/analytics`} className=' bg-blue-200 hover:cursor-pointer text-lg'>Analytics</Link>
    <Link href={`/about`} className=' bg-blue-200 hover:cursor-pointer text-lg'>about</Link>
    </div>

  )
}

export default ButtonLink