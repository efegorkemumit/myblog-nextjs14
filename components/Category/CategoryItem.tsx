'use client'

import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';

interface CategoryItemProps{
    href:string;
    label:string;
    
}

const CategoryItem = ({href,label}:CategoryItemProps) => {

    const pathname = usePathname();

    const isActive = href === pathname
  return (
   <Button asChild variant={isActive ? "secondary" : "outline"}>
    <Link href={href}>
        {label}
    </Link>


   </Button>
  )
}

export default CategoryItem