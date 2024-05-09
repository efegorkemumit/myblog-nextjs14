import React from 'react'

interface BrowseDetailPageProps{
    params:{
        slug:string;
    }
}

const BrowseDetailPage = ({params}:BrowseDetailPageProps) => {
  return (
    <div>{params.slug}</div>
  )
}

export default BrowseDetailPage