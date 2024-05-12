import { Button } from '@/components/ui/button'
import { ShieldAlertIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <div className='bg-mycolor-400 flex  justify-center  dark:bg-mycolor-100'>
      <div className='w-1/3 h-screen hidden lg:block'>
        <Image
        alt='not found'
        src="/notfound.jpg"
        width={1080}
        height={1920}
        className='w-full h-full object-cover object-bottom'
        />

      </div>

      <div className='w-full h-screen lg:p-36 md:p-52 sm:p-20 p-8 lg:w-2/3 flex flex-col items-center '>
        <h1 className='text-3xl font-semibold mb-4'>Not Found</h1>
        <ShieldAlertIcon  className='h-96 w-96'/>

        <Button asChild variant="mybutton" className='mt-7'>
          <Link href="/">
            Go Back
          </Link>
        </Button>
        
      </div>



    </div>
  )
}

export default NotFoundPage