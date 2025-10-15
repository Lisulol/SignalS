import { Button } from "@/components/ui/button";
import { IconChevronRightPipe } from "@tabler/icons-react";

export default function Main() {
  return(
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col h-9/12 w-9/12 bg-[#002208] border-8 border-black rounded-3xl gap-y-50">
          <div className="flex items-center">
            <IconChevronRightPipe color='darkgreen'/><p className="flex text-green-950">Hi for this week i made some quick functions/"games"</p>
          </div> 
        <div className="flex  gap-y-10  justify-center flex-col">
        <div className="flex items-center">
        <IconChevronRightPipe className="text-green-950"/><a href='/Morse'><Button className="bg-[#022208] border-2 border-green-950 text-green-950 border-dashed rounded-none">Morse Code Translator</Button></a>
        </div>
        <div className="flex items-center">
        <IconChevronRightPipe color='darkgreen'/><a><Button className="bg-[#022208] border-2 border-green-950 text-green-950 border-dashed rounded-none">Message Degradation</Button></a>
        </div>
        </div>
      </div>
    </div>
  )
}