import { User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="w-[98vw] flex items-center justify-between p-4 text-white bg-black rounded-full mt-2">
            <Link href='/' className="hover:cursor-pointer"><div className="text-2xl font-bold px-4">
                aura:me
            </div></Link>
            <Link href='/profile/journaling'>
            <div className="px-4"><button className='border border-white rounded-full py-2 px-6 font-medium text-white text-xl hover:cursor-pointer flex gap-2 items-center'><span className="text-sm">Wanna write?</span><Image src='/Pen.png' alt='' width={20} height={20} className="size-6 invert" /></button></div></Link>
        </div>
  )
}

export default Navbar
