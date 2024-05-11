'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { MenuIcon, Search } from 'lucide-react'
import { ModeToggle } from '../ModeToggle'
import { navLinks, socialMedia } from '@/constans'
import NavLinks from './NavLinks'
import { usePathname } from 'next/navigation'
import SocialMedia from './SocialMedia'

const MobileMenu = () => {
    const pathname = usePathname();

  return (
    <header className='flex lg:hidden p-3 justify-between items-center fixed w-full border-b 
    bg-mycolor-400 dark:bg-mycolor-100 border-r-2 dark:border-r-mycolor-400/30'>
        <Link
        href="/"
        className='flex items-center justify-center gap-3'>
            <Image
            alt='Efe Görkem Logo'
            className='rounded-full'
            src="/pp.png"
            width={40}
            height={40}
            />
            Efe Görkem Ümit
        
        </Link>

<div className='flex gap-4'>


        <Button variant="mybutton">
          Login
        </Button>

        <Sheet>
  <SheetTrigger>
    <MenuIcon/>
  </SheetTrigger>
  <SheetContent className='flex w-80 flex-col h-screen bg-mycolor-400
     dark:bg-mycolor-100 border-r-2 dark:border-r-mycolor-400/30'>

        <>
            <div className='text-center mt-16 mb-16'>
            <ModeToggle/>
            </div>

            <nav className='w-full h-full flex-col flex justify-between gap-3'>
                <ul className='w-full flex-col items-start gap-4 mt-4'>
                {navLinks.map((link)=>{
                        const IsActive = link.route === pathname;

                        const IconComponent = link.icon;

                        return(
                    <NavLinks
                    key={link.route}
                    IsActive={IsActive}
                    icon={link.icon}
                    label={link.label}
                    route={link.route}
                    />

                        )



                    })}


                </ul>

                <ul className='flex w-full flex-wrap items-start gap-2'>
                    <div className='w-full relative'>
                        <Input className='w-full rounded-full'/>
                        <Button variant="link" className='absolute right-0 top-0'>
                            <Search width={15} height={15}/>
                        </Button>


                    </div>


                    {socialMedia.map((link)=>{

                            const IconComponent = link.icon;

                            return(
                            <SocialMedia
                            icon={link.icon}
                            route={link.route}
                            key={link.route}
                            />
                            )

                            })}
                


                </ul>
                





            </nav>
        
        
        </>
    
  </SheetContent>
</Sheet>

</div>


        


    </header>
  )
}

export default MobileMenu