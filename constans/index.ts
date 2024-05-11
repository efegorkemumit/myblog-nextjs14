import { CarFront, CodeIcon, Compass, Contact, Store } from 'lucide-react';
import {   FiInstagram, FiGithub, FiYoutube, FiLinkedin } from 'react-icons/fi';

export const navLinks = [
  {
    label: "Browse",
    route: "/",
    icon: Compass,
  },
  {
    label: "About",
    route: "/about",
    icon: CodeIcon,
  },
  {
    label: "Store",
    route: "/store",
    icon: Store,
  },
  
  {
    label: "Contact",
    route: "/contact",
    icon: Contact,
  },
  
];


export const socialMedia = [
    {
        route: "https://www.youtube.com/@EfeGorkemUmit",
        icon: FiYoutube,
    },
    {
      route: "https://www.instagram.com/efegorkemumit/",
      icon: FiInstagram,
    },
    {

      route: "https://www.linkedin.com/in/efe-g%C3%B6rkem-%C3%BCmit-a084009b/",
      icon: FiGithub,
    },
   
    
    {
      route: "https://www.linkedin.com/in/efe-g%C3%B6rkem-%C3%BCmit-a084009b/",
      icon: FiLinkedin,
    },
    
  ];
  

  export const BrowseCategory = [
    {
      label: "All",
      route: "/",
    },
    {
      label: "Next.js",
      route: "/browse/nextjs",
    },
    {
      label: "React.js",
      route: "/browse/reactjs",
    },
    {
      label: "Shdcn",
      route: "/browse/shdcn",
    },
    {
      label: "Mysql",
      route: "/browse/mysql",
    },
    {
      label: "MongoDb",
      route: "/browse/mongodb",
    },
    {
      label: "Prisma",
      route: "/browse/prisma",
    },
    {
      label: "TailwindCss",
      route: "/browse/tailwindcss",
    },
    {
      label: "NextAuth",
      route: "/browse/nextauth",
    },
    {
      label: "PostgreSql",
      route: "/browse/postgreSql",
    },
    {
      label: "Clerk",
      route: "/browse/clerk",
    },
    {
      label: "Strapi",
      route: "/browse/strapi",
    },
    {
      label: "Sanity",
      route: "/browse/sanity",
    },
    
  ];

  export const Products = [
    {
      id:1,
      title: "Netflix Clone Full Stack ",
      description: "Netflix Clone Full Stack React, Tailwind CSS, Next.JS, Prisma, MongoDB, Vercel (2024)",
      image: "/images/netflix.jpg",
      tags: ["nextjs", "reactjs", "tailwindcss", "prisma", "mongobdb", "nextauth"],
      publishedAt: "2023-01-04",
      updatedAt: "2024-01-04",
      author: "efegorkemumit",
      isPublished: true,
      href:"/project/netflix-clone-full-stack",
      video:"https://youtu.be/9DcOvsFNSwg",
      price:"Free",

    },
    {
      id:2,
      title: "Messenger Clone Full Stack ",
      description: "Messenger Clone | Full Stack |  React, Next Js  Prisma Pusher Js MongoDB TailwindCss  Vercel (2024)",
      image: "/images/messenger.png",
      tags: ["nextjs", "reactjs", "tailwindcss", "prisma", "mongobdb", "prisma","nextauth"],
      publishedAt: "2023-01-04",
      updatedAt: "2024-01-04",
      author: "efegorkemumit",
      isPublished: true,
      href:"/project/messenger-clone-full-stack",
      video:"https://youtu.be/LpsY80QBlek",
      price:"Free",

    },
    {
      id:3,
      title: "Coffe Pub Frontend",
      description: "Coffe Pub | Kahve Sitesi | Frontend |  NextJS, TailwindCSS, Swipper JS , AOS  and Vercel Deploy",
      image: "/images/coffee.jpg",
      tags: ["nextjs", "reactjs", "tailwindcss"],
      publishedAt: "2023-01-04",
      updatedAt: "2024-01-04",
      author: "efegorkemumit",
      isPublished: true,
      href:"/project/coffee-pub",
      video:"https://youtu.be/F8UQMePob-o",
      price:"Free",
    },
    {
      id:4,
      title: "NextAuth V5",
      description: "Next Auth V5 ile Giriş İşlemleri |Doğrulama ve Yetkilendirme |  React, NextJS, TailwindCSS,  Shdnc",
      image: "/images/nextauth.jpg",
      tags: ["nextjs", "reactjs", "tailwindcss", "shdcn","nextauth"],
      publishedAt: "2023-01-04",
      updatedAt: "2024-01-04",
      author: "efegorkemumit",
      isPublished: true,
      href:"/project/coffee-pub",
      video:"https://youtu.be/MBsfKFD8W1Y",
      price:"Free",
    },
    {
      id:5,
      title: "Next Js Tutorial",
      description: "2 saate NEXT.Js  |  Next Js Öğreniyorum  | Next Js Tutorial",
      image: "/images/nextjstuttorial.jpg",
      tags: ["nextjs", "reactjs"],
      publishedAt: "2023-01-04",
      updatedAt: "2024-01-04",
      author: "efegorkemumit",
      isPublished: true,
      href:"/project/next-js-tuttorial",
      video:"https://youtu.be/imyp0H_rMBA",
      price:"Free",
    },
    {
      id:6,
      title: "E-Ticaret Sitesi",
      description: "E-Ticaret Sitesi | Full Stack| React, NextJS, TailwindCSS,  Shdnc, Stripe, Mysql, Prisma, Clerk",
      image: "/images/ecommerce.jpg",
      tags: ["nextjs", "reactjs", "tailwindcss", "shdcn","mysql", "prisma", "clerk"],
      publishedAt: "2023-01-04",
      updatedAt: "2024-01-04",
      author: "efegorkemumit",
      isPublished: true,
      href:"/project/e-commerce-website",
      video:"https://youtu.be/X-TaxHALtVE",
      price:"Free",
    },
    {
      id:7,
      title: "Twitch Clone",
      description: "Twitch Clone  | Full Stack  | React NextJs  Prisma Livekit, Mysql, Tailwindcss, Prisma Clerk",
      image: "/images/twitch.jpg",
      tags: ["nextjs", "reactjs", "tailwindcss", "shdcn","mysql", "prisma", "clerk"],
      publishedAt: "2023-01-04",
      updatedAt: "2024-01-04",
      author: "efegorkemumit",
      isPublished: true,
      href:"/project/twitch-clone",
      video:"https://youtu.be/GKrfPeeqjKw",
      price:"Free",
    },
    {
      id:8,
      title: "Udemy Clone",
      description: "Udemy Clone | Full Stack  | React NextJs  Prisma , MongoDB, Tailwindcss, Prisma, Clerk, Shdcn",
      image: "/images/udemy.jpg",
      tags: ["nextjs", "reactjs", "tailwindcss", "shdcn","mysql", "prisma", "clerk", "mongodb"],
      publishedAt: "2023-01-04",
      updatedAt: "2024-01-04",
      author: "efegorkemumit",
      isPublished: true,
      href:"/project/udemy-clone",
      video:"https://youtu.be/13D9ugoRf_w",
      price:"Free",
    },
    {
      id:9,
      title: "Market Sitesi",
      description: "Online Bakkal ve Market Sitesi | E-Ticaret Sitesi | Full Stack | Strapi, NextJS, TailwindCSS, Shdnc",
      image: "/images/strapi.jpg",
      tags: ["nextjs", "reactjs", "tailwindcss", "shdcn","mysql",  "strapi"],
      publishedAt: "2023-01-04",
      updatedAt: "2024-01-04",
      author: "efegorkemumit",
      isPublished: true,
      href:"/project/market-sitesi-strapi",
      video:"https://youtu.be/eaQ9_v-92ng",
      price:"Free",
    },
    {
      id:10,
      title: "Portfolio  | Frontend",
      description: "Portfolio  | Frontend | Portfolio Website | NextJS, TailwindCSS,  Vercel Deploy",
      image: "/images/port.jpg",
      tags: ["nextjs", "reactjs", "tailwindcss", "shdcn"],
      publishedAt: "2023-01-04",
      updatedAt: "2024-01-04",
      author: "efegorkemumit",
      isPublished: true,
      href:"/project/portfolio",
      video:"https://youtu.be/lI7DWcSIODA",
      price:"Free",
    },
    {
      id:11,
      title: "Quiz Uygulaması Quiz App ",
      description: "Quiz Uygulaması | Quiz App  | Full Stack | Next.js 14, TypeScript, Sanity, Prisma, TailwindCss",
      image: "/images/quizapp.jpg",
      tags: ["nextjs", "reactjs", "tailwindcss", "shdcn", "sanity", "prisma"],
      publishedAt: "2023-01-04",
      updatedAt: "2024-01-04",
      author: "efegorkemumit",
      isPublished: true,
      href:"/project/quiz-app",
      video:"https://youtu.be/rtSvsPy2MDg",
      price:"Free",
    },
    {
      id:12,
      title: "Yapay Zeka SaaS Platformu ",
      description: "Yapay Zeka SaaS Platformu | Full Stack | Next.js 14, TypeScript ve Stripe ile Tam Yığın AI SaaS",
      image: "/images/saas.jpg",
      tags: ["nextjs", "reactjs", "tailwindcss", "shdcn",  "prisma"],
      publishedAt: "2023-01-04",
      updatedAt: "2024-01-04",
      author: "efegorkemumit",
      isPublished: true,
      href:"/project/saas-platform",
      video:"https://youtu.be/R85sL79n1Rs",
      price:"Free",
    },
    {
      id:13,
      title: "Camp Traveller ",
      description: "Camp Traveller | Frontend | Travel Website | NextJS, TailwindCSS, Swipper JS , AOS and Vercel Deploy",
      image: "/images/camp.jpg",
      tags: ["nextjs", "reactjs", "tailwindcss", "shdcn"],
      publishedAt: "2023-01-04",
      updatedAt: "2024-01-04",
      author: "efegorkemumit",
      isPublished: true,
      href:"/project/camp-frontend",
      video:"https://youtu.be/zXmo4s2aasQ",
      price:"Free",
    },

  ];