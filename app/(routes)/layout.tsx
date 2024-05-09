import Sidebar from '@/components/Sidebar'
import React from 'react'

interface RootLayoutProps{
    children:React.ReactNode
}

const RoutesLayout = ({children}:RootLayoutProps) => {
  return (
    <main className='flex min-h-screen'>
        <Sidebar/>
        mobilemenu
        <div className='flex-1 overflow-auto lg:max-h-screen py-8'>
            <div className='mx-auto px-5 w-full'>
                         {children}
            </div>

        </div>
      
        
        </main>
  )
}

export default RoutesLayout