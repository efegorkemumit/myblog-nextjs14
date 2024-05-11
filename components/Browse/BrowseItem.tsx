import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '../ui/badge'
 



interface BrowseItemProps{
    title:string;
    image:string;
    url:string;
    price:string;
    description?:string
}

const BrowseItem = ({image,price,title,url, description}:BrowseItemProps) => {
  return (

    <div className='col-span-1'>
        <Link href={url}>
        
            <Card>
            <CardHeader>
                <Image alt={title}
                src={image}
                width={500}
                height={500}
                />
                <p className='mt-2 text-base font-semibold'>{title}</p>

            </CardHeader>
            <CardContent>

                <Badge>{price}</Badge>

            </CardContent>
           
        </Card>
  </Link>
  </div>
  )
}

export default BrowseItem