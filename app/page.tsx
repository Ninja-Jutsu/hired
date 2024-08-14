import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../assets/logo.svg'
import LandingImg from '../assets/main.svg'

import { Inter, MedievalSharp } from 'next/font/google'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
const inter = Inter({ subsets: ['latin'] })
const medievalSharp = MedievalSharp({ weight: ['400'], subsets: ['latin'] })

export default function Home() {
  return (
    <main className='max-w-6xl mx-auto relative'>
      {/* <header className='px-4 sm:px-8 py-6 absolute top-[20vh] left-[20vw]'>
        <Image
          src={Logo}
          alt='Hired Logo'
          priority
          width={500}
          height={500}
          className='opacity-5 dark:bg-white'
        />
      </header> */}
      <section className='px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center gap-6'>
        <div className='flex flex-col gap-6'>
          <h1 className={`text-3xl md:text-6xl font-bold ${inter.className}`}>
            <span className={`text-4xl md:text-7xl font-bold ${medievalSharp.className}`}>Hired</span>. A Job{' '}
            <span className='text-primary'>Tracking</span> App
          </h1>
          <TextGenerateEffect
            words={
              'Streamline your job search and boost your chances of landing your dream job with our intuitive job tracking app. Organize applications, schedule interviews, and stay on top of your job search journey.'
            }
          />

          <Button
            asChild
            className='mt-4 p-6 text-xl max-w-max'
          >
            <Link  href='/add-job'>Get Started</Link>
          </Button>
        </div>
        <Image
          src={LandingImg}
          alt='landing image'
          className='hidden lg:block'
          
        />
      </section>
    </main>
  )
}
