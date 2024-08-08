'use client'
import Logo from '@/assets/logo.svg'
import links from '@/utils/links'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'

function SideBar() {
  const pathname = usePathname()

  return (
    <aside className='py-4 px-8 bg-muted h-full'>
      <Image
        src={Logo}
        alt='logo'
        className='mx-auto'
      />
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
