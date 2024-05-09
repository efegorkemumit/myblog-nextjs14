import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavLinksProps{
    IsActive:boolean;
    label:string;
    route:string;
    icon:string




}

const NavLinks = ({IsActive,icon,label,route}:NavLinksProps) => {
    const IconComponent = icon;

  return (
    <Button asChild
    variant="ghost"
    className={cn("w-full h-12 justify-center",
     IsActive && "bg-mycolor-300 dark:hover:bg-mycolor-300 text-mycolor-100 border border-mycolor-100"
    )}
    >
     <Link href={route}>
         <div className={cn("flex items-center w-full gap-2 text-mycolor-100 dark:text-mycolor-500 text-lg",
             IsActive && "text-mycolor-100 dark:text-mycolor-100 dark:hover:text-mycolor-100"
         )}>
             <IconComponent className='h-6 w-6'/>
             <p>{label}</p>


         </div>
     
     </Link>

    </Button>
  )
}

export default NavLinks