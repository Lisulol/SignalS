import { Button } from "@/components/ui/button";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";

export default function Page(){
    return(

        <div className ='flex items-center justify-center h-screen w-full flex-col'>
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
        <div className="flex flex-col h-9/12 w-9/12 bg-black border-8 border-[#00ff41]  rounded-3xl text-[#00ff41]  gap-y-5" style={{
     boxShadow: '0 0 30px rgba(0, 255, 65, 0.5), inset 0 0 30px rgba(0, 255, 65, 0.1)'
   }}>
            <div className="flex justify-center relative top-2">
                 <IconChevronRight className="text-[#00ff41] "/><p>Something about this project little blog i guess. I know this project doesnt really have sense but i didnt have any good ideas for this theme. So i took 2 lamest ones and put  it together to meet the time qouta.Build for week 7 or 3 depends on what you count for siege</p>
            </div>
            <div className="flex border-t-2 border-b-2 border-[#00ff41]  h-4/6 w-full">
                <div className="flex relative flex-col top-2">
                  <div className="flex items-center">

                 <IconChevronRight className="text-[#00ff41] "/><p> day 6 of the week: made this page and the morse code translator</p>
                  </div>
                  <div className="flex items-center">

                 <IconChevronRight className="text-[#00ff41] "/><p> day 7 of the week: made the game page and the message decoder</p>
                  </div>
                  <div className="flex">

                 <IconChevronRight className="text-[#00ff41] "/><p>last update propably nobody reads this. Only made it to kill time ist 9.30PM i need 2h.15 min so no idea what to do  </p>
                  </div>
                </div>
            </div>
        <div className="flex items-center">
             <div className="flex items-center">
          <IconChevronRight className="text-[#00ff41] "/><Link href="/"><Button className="bg-black border-2 border-[#00ff41]  text-[#00ff41]   hover:scale-105 border-dashed rounded-none">Return</Button></Link>
          </div>
        </div>
        </div>
    </div>
    )
}