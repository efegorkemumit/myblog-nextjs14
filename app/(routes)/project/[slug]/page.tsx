import Category from '@/components/Category/Category';
import { Button } from '@/components/ui/button';
import { Products } from '@/constans';
import { AppWindow, Code, Code2, Coins, TimerIcon, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FiYoutube } from 'react-icons/fi';



interface ProjectPageDetailProps{
    params:{
        slug:string;
    }
}


export async function generateMetadata({ params }) {
    const project = Products.find(product=> product.href.includes(params.slug))

    if(!project){
        return <div>project not found</div>
    }

    return {
      title: project.title,
      description:project.description,
    }
  }


const ProjectPageDetail = ({ params}:ProjectPageDetailProps) => {
    const project = Products.find(product=> product.href.includes(params.slug))

    if(!project){
        return <div>project not found</div>
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        title:project.title,
        name: project.title,
        image: project.image,
        description: project.description,
        publishedAt: project.publishedAt,
        updatedAt: project.updatedAt,
        author: project.author,
        isPublished: project.isPublished,
        tags: project.tags,
      }
    
  return (
    <div className='mt-8'>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <div className='grid grid-cols-1 lg:grid-cols-8 gap-5'>
        <div className='lg:col-span-5'>
            <div className='bg-mycolor-400
        dark:bg-mycolor-100 border-2 dark:border-mycolor-400/20 p-3 rounded-lg'>
            <Image
            src={project.image}
            alt='about us'
            className='w-full rounded-xl'
            width={500}
            height={500}
            />

            <h2 className=' text-3xl mt-4 font-semibold  py-4'>{project.title}</h2>
            <div className='space-y-3'>
            <p>
            {project.description}
            </p>

            <div className='h-8'></div>

            <div className='flex flex-row gap-12 items-center mt-12'>

                <div className='flex items-center justify-center gap-3 text-base'>
                    <Coins/> {project.price}

                </div>

                <div className='flex items-center justify-center gap-3 text-base'>
                    <TimerIcon/> {project.publishedAt}

                </div>

                <div className='flex items-center justify-center gap-3 text-base'>
                    <User/> {project.author}

                </div>


            </div>

           
                

            </div>


            </div>

        </div>

        <div className='lg:col-span-3'>
            <div className='bg-mycolor-400
        dark:bg-mycolor-100 border-2 dark:border-mycolor-400/20 p-3 rounded-lg'>
                     <p>Watch This Course For Free on Youtube</p> 
                     <p className='font-semibold'> Subscribe to Our Youtube Channel</p> 
                     <Button
                     variant="destructive"
                     className='w-full mt-3 gap-4' asChild
                     >
                        <Link href={project.video} target='_blank'>
                        <FiYoutube/> Watch on youtube
                        </Link>


                     </Button>




            </div>

            <div className='grid grid-cols-3 gap-4 mt-3 text-center'>

<Button variant="mybutton" className='h-14 font-semibold'>
    <Code className='mr-2 font-semibold'/> Code 

</Button>

<Button variant="mybutton" className='h-14 font-semibold'>
    <AppWindow className='mr-2 font-semibold'/> Demo 

</Button>

<Button variant="mybutton" className='h-14 font-semibold'>
    <FiYoutube className='mr-2 font-semibold'/> Youtube

</Button>



</div>

       

       

        </div>



    </div>


</div>
  )
}

export default ProjectPageDetail