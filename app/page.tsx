import Link from 'next/link'
import React from 'react'
import { IoIosChatbubbles } from 'react-icons/io'
import Navbar from './profile/Navbar'
import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/nextjs'

const page = () => {
  return (
    <ClerkProvider>
    <div className="flex flex-wrap bg-[#B3C1F0] relative">
    <div className="w-full sm:w-7/12 rounded-2xl bg-white">
      <div className="container mx-auto h-full sm:p-6">
        <nav className="flex px-4 justify-between items-center">
          <Link href='/'><div className="text-4xl font-bold px-4">
                aura:me
            </div></Link>
          <div>
            <img src="https://image.flaticon.com/icons/svg/497/497348.svg" alt="" className="w-8" />
          </div>
        </nav>
        <header className="container px-4 lg:flex mt-20 mb-10 items-center h-full lg:-mt-10">
          <div className="w-full flex justify-center flex-col items-center text-center gap-8 relative">
            <img src='/doodle.svg' alt='' className='size-24 -rotate-45 absolute top-[13vh] right-[17vw]' />
            <h1 className="text-4xl lg:text-6xl max-w-lg"><span className='font-semibold'>Care</span> your mind with <span className='font-semibold'>aura:me</span></h1>
            
            <Link href='/chat'><button className="flex
             items-center bg-black text-white text-2xl font-medium px-4 py-2 rounded-full mt-16">Chat now <div className='bg-white p-1 rounded-full ml-2'><IoIosChatbubbles className='text-black' /></div></button></Link>
          </div>
        </header>
      </div>
    </div>
    <img src="/Landing.svg" alt="Leafs" className="w-full h-60 object-cover sm:h-screen sm:w-5/12" />
    {/* <button className='border-2 border-white rounded-full px-8 py-2 font-medium text-white text-xl absolute top-6 right-6'><SignedOut><SignInButton /></SignedOut></button> */}
    <div className='transition-all duration-150 px-8 py-2 font-medium text-neutral-200 hover:text-white text-xl absolute top-6 right-6 flex items-center'><SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
    </div>
  </div>
  </ClerkProvider>
  )
}

export default page
