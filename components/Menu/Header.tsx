import React from 'react'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <div className='bg-mycolor-400 dark:bg-mycolor-100 border-b-2
    dark:border-b-mycolor-400/30 h-16 mx-auto flex justify-end pr-2 items-center'>
        <div className='justify-end items-center'>
            <Button variant="mybutton">Login</Button>


        </div>


    </div>
  )
}

export default Header