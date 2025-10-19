'use client';
import { Button } from "@/components/ui/button";
import { IconBrandGithubFilled, IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page(){
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);
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
        <div className={`flex flex-col h-9/12 w-9/12 bg-black border-8 border-[#00ff41] rounded-3xl text-[#00ff41] gap-y-5 transition-all duration-200 transform ${
            isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`} style={{
            boxShadow: '0 0 30px rgba(0, 255, 65, 0.5), inset 0 0 30px rgba(0, 255, 65, 0.1)'
        }}>
            <div className="flex justify-center relative top-2">
                 <IconChevronRight className="text-[#00ff41] "/><p>[user@archlinux ~]$ Something about this project little blog i guess. I know this project doesnt really have sense but i didnt have any good ideas for this theme. So i took 3 lamest ones and put  it together to meet the time qouta.Build for week 7 or 3 depends on what you count for siege</p>
            </div>
            <div className="flex border-t-2 border-b-2 border-[#00ff41]  h-4/6 w-full">
                <div className="flex relative flex-col top-2">
                  <div className="flex items-center">

                 <IconChevronRight className="text-[#00ff41] "/><p>$ day 6 of the week: made this page and the morse code translator</p>
                  </div>
                  <div className="flex items-center">

                 <IconChevronRight className="text-[#00ff41] "/><p>$ day 7 of the week: made the game page and the message decoder</p>
                  </div>
                  <div className="flex">

                 <IconChevronRight className="text-[#00ff41] "/><p>$ last update probably nobody reads this. Only made this page to kill time. Its 9.30PM i need 2h.15 min and no idea what to do  </p>
                  </div>
                <div className="flex">

                 <IconChevronRight className="text-[#00ff41] "/><p>$ Handdrawn spongebob image for the voters: </p>
                  </div>
                <div className="flex">

                <IconChevronRight className="text-[#00ff41] "/><Image src ='/assets/ico.png' alt = 'spongebob' width={200} height={200}/>
                </div>
                </div>
            </div>
        <div className="flex gap-5 justify-center flex-col">
             <div className="flex items-center">
          <IconChevronRight className="text-[#00ff41] "/><Link href="/"><Button className="bg-black border-2 border-[#00ff41]  text-[#00ff41]   hover:scale-105 border-dashed rounded-none">Return</Button></Link>
          </div>
          <div className="flex items-center">
          <IconChevronRight className="text-[#00ff41] "/><a  target="_blank" href="https://github.com/Lisulol"><Button className="bg-black border-2 border-[#00ff41]  text-[#00ff41]   hover:scale-105 border-dashed rounded-none"><IconBrandGithubFilled/></Button></a>
          </div>
        </div>
        </div>
    </div>
    )
}