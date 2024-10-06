import React from 'react'
import Link from 'next/link'
import { Home } from 'lucide-react'
import questions from '@/questions.json'
import { Separator } from '@/components/ui/separator'

const Page = () => {
  return (
    <div className='flex flex-col items-center justify-center px-10 bg-white h-full'>
        <div className='text-5xl font-bold w-screen border-b-2 border-neutral-300 text-center p-8 bg-blue-100 '>Mental Health Test</div>
        <Link href='/'>
        <div className="border-2 border-black p-2 rounded-full absolute top-8 right-8">
            <Home className="size-6" />
        </div></Link>

        <div className='text-md mt-8 mb-4 text-neutral-500 flex items-center border py-2 px-4 rounded-lg'>
            Instructions: <div className="size-6 bg-red-500 rounded-full ml-4" defaultChecked /> <span className='text-xs ml-2'>DISAGREE</span>
            <div className="size-6 bg-green-500 rounded-full ml-4" defaultChecked /> <span className='text-xs ml-2'>AGREE</span>
        </div>

        <div className='h-full w-full mt-10 px-10'>
            <div className='flex flex-col gap-14'>
                {questions.map((question) => (
                  <div key={question.id} className='flex flex-col gap-6'>
                    <p className='text-xl font-semibold'>{question.id}. {question.question}</p>
                    <div className='flex items-center gap-4'>
                        <input type="radio" name={`radio-${question.id}`} className="radio  radio-lg radio-error" />
                        <input type="radio" name={`radio-${question.id}`} className="radio radio-primary radio-md" />
                        <input type="radio" name={`radio-${question.id}`} className="radio radio-primary radio-sm" />
                        <input type="radio" name={`radio-${question.id}`} className="radio radio-primary radio-md" />
                        <input type="radio" name={`radio-${question.id}`} className="radio radio-success radio-lg" />
                    </div>
                  </div>
                ))}
                <Separator />
            </div>
        </div>
    </div>
  )
}

export default Page