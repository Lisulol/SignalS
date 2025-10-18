import { Button } from "@/components/ui/button";
import { IconChevronRightPipe } from "@tabler/icons-react";
import Link from "next/link";

export default function Main() {


  return(
    <div className="flex h-screen w-full items-center justify-center">
     <div 
        className="absolute inset-0 pointer-events-none z-50"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.4) 0px,
            rgba(0, 0, 0, 0.2) 2px,
            transparent 2px,
            transparent 4px
          )`
        }}
      ></div>
      <div className="flex flex-col h-9/12 w-9/12 bg-black border-8 border-[#00ff41] rounded-3xl gap-y-50">
           <div className="flex left-3 top-2.5 relative flex-col gap-y-50">

            <div className="flex items-center">
              <IconChevronRightPipe className="text-[#00ff41] "/><p className="flex text-[#00ff41] ">Hi for this week i made some quick functions/ <q>games</q></p>
            </div> 
          <div className="flex  gap-y-10  justify-center flex-col">
          <div className="flex items-center">
          <IconChevronRightPipe className="text-[#00ff41] "/><Link href="/Morse"><Button className="bg-black border-2 border-[#00ff41] text-[#00ff41]  border-dashed rounded-none hover:scale-105">Morse Code Translator</Button></Link>
          </div>
          <div className="flex items-center">
          <IconChevronRightPipe className="text-[#00ff41] "/><Link href="/"><Button className="bg-black border-2 border-[#00ff41]  text-[#00ff41]  border-dashed rounded-none hover:scale-105">Message Degradation</Button></Link>
          </div>
           <div className="flex items-center">
          <IconChevronRightPipe className="text-[#00ff41]"/><Link href="/About"><Button className="bg-black border-2 border-[#00ff41]  text-[#00ff41]  border-dashed rounded-none hover:scale-105">About</Button></Link>
          </div>
           </div>
          </div>
      </div>
    </div>
  )






  
}