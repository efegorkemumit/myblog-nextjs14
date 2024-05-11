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
