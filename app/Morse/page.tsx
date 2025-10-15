import { Input } from "@/components/ui/input";
import { IconChevronRightPipe } from "@tabler/icons-react";

export default function Morse(){
    return(
        
        
        <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col h-9/12 w-9/12 bg-[#002208] border-8 border-black rounded-3xl text-green-950">
        <div className='flex items-center'>
        <IconChevronRightPipe/><p>Input message to be translated</p>

        </div>
        <div className="flex items-center">
        <IconChevronRightPipe/><input className='text-green-950 outline-none'placeholder={'...'}></input>
        </div>
      </div>
    </div>
        
        
        
        
        
        
    )
}