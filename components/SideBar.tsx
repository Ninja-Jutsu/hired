'use client'
import Logo from '@/assets/logo.svg'
import links from '@/utils/links'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'

import { MedievalSharp } from 'next/font/google'

const medievalSharp = MedievalSharp({ weight: ['400'], subsets: ['latin'] })

function SideBar() {
  const pathname = usePathname()

  return (
    <aside className='py-4 px-8 bg-muted h-full'>
      <div className='flex justify-center items-center'>
        <Link href='/'>
          <Image
            src={Logo}
            alt='logo'
            className='mx-auto opacity-75'
            width={200}
            height={200}
          />
        </Link>
      </div>

      <div className='flex flex-col mt-20 gap-y-4'>
        {links.map(({ href, icon, label }) => {
          return (
            <Button
              asChild
              key={href}
              variant={pathname === href ? 'default' : 'link'}
            >
              <Link
                href={href}
                className='flex items-center gap-x-2 '
              >
                {icon} <span className='capitalize'>{label}</span>
              </Link>
            </Button>
          )
        })}
      </div>
    </aside>
  )
}

export default SideBar
