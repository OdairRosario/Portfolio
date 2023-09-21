'use client'

import { NavData } from '@/interfaces/nav-data.interface';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { navData } from './nav-data';

const Nav: React.FC = () => {
  const pathname = usePathname()

  return (
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-2-md xl:h-screen '>
      <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px]  xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full '>
        {navData.map((data: NavData, index: number) => {
          return (
            <Link
              className={`${data.path === pathname && 'text-teal-400'} relative flex items-center group hover:text-teal-400 translate-all duration-300`}
              href={data.path}
              key={index}>

              <div className='absolute pr-14 right-0 hidden xl:group-hover:flex' >
                <div className='bg-white relative flex text-primary items-center p-[6px] rounded-md'>
                  <div className='text-[12px] leading-none font-semibold capitalize'>
                    {data.name}
                  </div>
                  <div className='border-solid border-l-withe border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'>
                  </div>
                </div>
              </div>
              <div>{data.icon}</div>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default Nav