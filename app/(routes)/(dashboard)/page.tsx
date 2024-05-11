import BrowseItem from "@/components/Browse/BrowseItem";
import Category from "@/components/Category/Category";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Products } from "@/constans";
import Image from "next/image";

export default function Home() {
  const filtedProdoucts = Products.filter(product =>{
    return product;
  })

  filtedProdoucts.sort((a,b)=>b.id - a.id);
  return (
    <div className='mt-4'>
    <Category/>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-2 mt-2'>
        {filtedProdoucts.map((product)=>(
          <>
         <BrowseItem
         key={product.id}
         image={product.image}
         price={product.price}
         title={product.title}
         url={product.href}
         description={product.description}
         
         />
          </>
        ))}


      </div>

  </div>
  );
}
