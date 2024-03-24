import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <nav className="w-full">
        <div>
          <Image src="logo.svg" alt="logo" height={50} width={120} />
        </div>
      </nav>  
  <div>
      <div className=" flex flex-col gap-y-4">
        <div>
          This is a screen for authenticated users only!
        </div>
        <div>
          <UserButton />
        </div>
      </div>
    </div>
   </div>
  );
}
