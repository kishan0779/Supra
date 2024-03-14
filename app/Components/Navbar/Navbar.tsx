import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className=' absolute inset-x-0 top-0 flex justify-between items-center h-16 px-20 bg-gradient-to-b from-black to-black/0  '>
       <div className=' w-60'>
       <Image
        src="/logo.svg"
        alt="Logo" 
        width={500}
        height={300}
        />
    </div>

        <div className='flex gap-6'> 
            <Link href='#'>Air</Link>
            <Link href='#'>Gravity</Link>
            <Link href='#'>Experience</Link>
            <Link href='#'>Shop</Link>
        </div>
    </nav>
  )
}


export default Navbar