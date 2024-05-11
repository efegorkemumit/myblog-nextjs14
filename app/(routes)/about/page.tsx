import { Metadata } from 'next'
import React from 'react'

export const metadata:Metadata={
  title:"About",
  description:"Here are some about us",
  robots:{
    index:false,
    follow:false,
  },
 
}

const AboutPage = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: "About",
    image: "asdsssssssss",
    description: "adasssssssssss",
    publishedAt: "2023-01-04",
    updatedAt: "2024-01-04",
    author: "efegorkemumit",
    isPublished: true,
    tags: ["web development", "nextjs"]
  }
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      asd



    </div>
  )
}

export default AboutPage