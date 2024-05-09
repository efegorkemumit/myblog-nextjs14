'use client'

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'
import { ModeToggle } from './ModeToggle';
import { navLinks, socialMedia } from '@/constans';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Input } from './ui/input';
import { Search } from 'lucide-react';

const Sidebar = () => {

    const pathname = usePathname();
  return (
    <aside className='hidden lg:flex h-screen w-72 bg-mycolor-400
     dark:bg-mycolor-100 border-r-2 dark:border-r-mycolor-400/30'>

        <div className='flex flex-col gap-4 justify-center items-center w-full'>
            <div className='mx-auto ml-14 justify-center items-center mt-12'>
                <Link href="/">
                    <Image
                    alt=''
                    src="/pp.png"
                    className='rounded-full'
                    width={160}
                    height={160}
                    />
                <div className='mt-6 text-center'>
                    <ModeToggle/>

                </div>
                
                </Link>


            </div>

            <nav className='w-[90%] h-full flex-col justify-between md:flex gap-3'>

                <ul className='hidden md:flex w-full flex-col items-start gap-4 mt-14'>
                    {navLinks.map((link)=>{
                        const IsActive = link.route === pathname;

                        const IconComponent = link.icon;

                        return(
                           <Button asChild
                           variant="ghost"
                           key={link.route}
                           className={cn("w-full h-12 justify-center",
                            IsActive && "bg-mycolor-300 dark:hover:bg-mycolor-300 text-mycolor-100 border border-mycolor-100"
                           )}
                           >
                            <Link href={link.route}>
                                <div className={cn("flex items-center w-full gap-2 text-mycolor-100 dark:text-mycolor-500 text-lg",
                                    IsActive && "text-mycolor-100 dark:text-mycolor-100 dark:hover:text-mycolor-100"
                                )}>
                                    <IconComponent className='h-6 w-6'/>
                                    <p>{link.label}</p>


                                </div>
                            
                            </Link>

                           </Button>

                        )



                    })}


                </ul>


                <ul className='hidden md:flex w-full  flex-wrap items-start gap-2'>
                    <div className='w-full relative'>
                        <Input className='w-full rounded-full'/>
                        <Button variant="link" className='absolute right-0 top-0'>
                            <Search width={15} height={15}/>
                        </Button>


                    </div>


                    {socialMedia.map((link)=>{

                            const IconComponent = link.icon;

                            return(
                            <div key={link.route}>
                                <li className='flex items-center font-semibold w-full'>
                                    <Link href={link.route} className='p-4 font-semibold flex gap-1'>
                                        <IconComponent className='text-mycolor-100 dark:text-mycolor-500 text-2xl'/>

                                    </Link>

                                </li>


                            </div>
                            )

                            })}
                


                </ul>
                


            </nav>

            

        </div>

    </aside>
  )
}

export default Sidebar