import Category from '@/components/Category/Category';
import React from 'react'

interface BrowseDetailPageProps{
    params:{
        slug:string;
    }
}

const BrowseDetailPage = ({params}:BrowseDetailPageProps) => {
  return (
    <div className='mt-4'>
      <Category/>
      
      {params.slug}
      
      </div>
  )
}

export default BrowseDetailPage