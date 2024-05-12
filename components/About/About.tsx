import Image from 'next/image'
import React from 'react'
import Category from '../Category/Category'

const About = () => {
  return (
    <div className='mt-8'>
        <div className='grid grid-cols-1 lg:grid-cols-8 gap-5'>
            <div className='lg:col-span-6'>
                <div className='bg-mycolor-400
            dark:bg-mycolor-100 border-2 dark:border-mycolor-400/20 p-3 rounded-lg'>
                <Image
                src="/banner.jpg"
                alt='about us'
                className='w-full rounded-xl'
                width={500}
                height={500}
                />

                <h2 className='text-center text-3xl mt-4 font-semibold px-4 py-4'>About</h2>
                <div className='space-y-3'>
                <p>
                Toffee croissant icing toffee. Sweet roll chupa chups marshmallow muffin liquorice chupa chups soufflé bonbon. Liquorice gummi bears cake donut chocolate lollipop gummi bears. Cotton candy cupcake ice cream gummies dessert muffin chocolate jelly. Danish brownie chocolate bar lollipop cookie tootsie roll candy canes. Jujubes lollipop cheesecake gummi bears cheesecake. Cake jujubes soufflé.

                </p>

                <p>
                Toffee croissant icing toffee. Sweet roll chupa chups marshmallow muffin liquorice chupa chups soufflé bonbon. Liquorice gummi bears cake donut chocolate lollipop gummi bears. Cotton candy cupcake ice cream gummies dessert muffin chocolate jelly. Danish brownie chocolate bar lollipop cookie tootsie roll candy canes. Jujubes lollipop cheesecake gummi bears cheesecake. Cake jujubes soufflé.

                </p>
                    

                </div>


                </div>

            </div>

            <div className='lg:col-span-2'>
                <div className='bg-mycolor-400
            dark:bg-mycolor-100 border-2 dark:border-mycolor-400/20 p-3 rounded-lg'>
                 <Image
                src="/images/camp.jpg"
                alt='about us'
                className='w-full rounded-xl'
                width={500}
                height={500}
                />


                </div>

                <div className='bg-mycolor-400
            dark:bg-mycolor-100 border-2 dark:border-mycolor-400/20 p-3 rounded-lg'>
               <Category/>


                </div>

                <div className='bg-mycolor-400
            dark:bg-mycolor-100 border-2 dark:border-mycolor-400/20 p-3 rounded-lg'>
                 <Image
                src="/youtube.png"
                alt='about us'
                className='w-full rounded-xl'
                width={500}
                height={500}
                />


                </div>

            </div>



        </div>


    </div>
  )
}

export default About