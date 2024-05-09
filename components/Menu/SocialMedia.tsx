import Link from 'next/link';
import React from 'react'

interface SocialMediaProps{
    route:string;
    icon:string;

}

const SocialMedia = ({icon,route}:SocialMediaProps) => {
    const IconComponent = icon;

  return (
    <div>
    <li className='flex items-center font-semibold w-full'>
        <Link href={route} className='p-4 font-semibold flex gap-1'>
            <IconComponent className='text-mycolor-100 dark:text-mycolor-500 text-2xl'/>

        </Link>

    </li>


</div>
  )
}

export default SocialMedia