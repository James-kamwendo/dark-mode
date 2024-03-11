import Image from 'next/image'
import { Poppins } from 'next/font/google'
import DarkModeToggle from '@/components/DarkModeToggle'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700']
})

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${poppins.className}`}
    >
      <div className='text-center leading-1'>
        <h1 className='font-semibold text-4xl mb-2'>Greetings <b>NextJs</b> Developers!</h1>
        <small className='text-gray-500 text-sm font-thin'>Is this how you're using the dark mode feature?</small>
        <div className='w-full flex items-center justify-center mt-8'>
          <DarkModeToggle />
        </div>
      </div>
    </main>
  )
}
