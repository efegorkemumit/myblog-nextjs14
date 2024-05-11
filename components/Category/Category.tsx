import { BrowseCategory } from '@/constans'
import React from 'react'
import CategoryItem from './CategoryItem'

const Category = () => {
  return (
    <div className='flex items-center gap-1 flex-wrap'>
        {BrowseCategory.map((item)=>(

            <CategoryItem key={item.route}  href={item.route} label={item.label} />
        ))}


    </div>
  )
}

export default Category