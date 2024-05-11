import Category from "@/components/Category/Category";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
  <div className="flex items-center gap-1 overflow-y-auto mt-4">
      <Category/>

  </div>
  );
}
