'use client'
import { Button } from "@/components/ui/button";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import { KeyboardEvent, useEffect, useState } from "react";

export default function Game(){
    
    const [playerX, setPlayerX] =  useState(0);
    const [playerY, setPlayerY] =  useState(0);
    const [randomx, setRandomx] = useState<number | null>(null);
  const [randomy, setRandomy] = useState<number | null>(null);
  const [found, setFound] = useState(false);
  
  
  useEffect(() => {
    setRandomx(Math.floor(Math.random() * 8));
    setRandomy(Math.floor(Math.random() * 8));
  }, []);
    
    const handleKeyPress = (event : globalThis.KeyboardEvent) => {
 
        if(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
            event.preventDefault();
        }

        if (event.key === 'ArrowUp') {
            setPlayerY(prev => Math.max(0, prev - 1)); 
        }
        else if (event.key === 'ArrowDown') {
            setPlayerY(prev => Math.min(7, prev + 1)); 
        }
        else if (event.key === 'ArrowLeft') {
            setPlayerX(prev => Math.max(0, prev - 1));
        }
        else if (event.key === 'ArrowRight') {
            setPlayerX(prev => Math.min(7, prev + 1));
        }
    };
    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);    
    
    
    

    useEffect(() => {
        if (playerX === randomx && playerY === randomy) {
            alert('You found the signal transmission! Game Restarting.');
            
            setFound(true);
            setTimeout(() => {
                setPlayerX(0);
                setPlayerY(0);
                setRandomx(Math.floor(Math.random() * 8));
                setRandomy(Math.floor(Math.random() * 8));
                setFound(false); 
            }, 1000);

        }
    }, [playerX, playerY]);
    
    
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
        <div className="flex flex-col h-9/12 w-9/12 bg-black  border-8 border-[#00ff41]  rounded-3xl text-[#00ff41]  " style={{
     boxShadow: '0 0 30px rgba(0, 255, 65, 0.5), inset 0 0 30px rgba(0, 255, 65, 0.1)'
   }}>
    <div className="flex items-center h-1/6 w-full ">
        <IconChevronRight className="text-[#00ff41] "/><p>Quick game. Find all the signal trassmissions;Movement: Arrows</p>
    </div>
    <div className="flex items-center justify-center w-full h-5/6">
    <div className="grid grid-cols-8 grid-rows-8 bg-black gap-3">
        {[...Array(64)].map((_, index) => {
            const x = index % 8;
            const y = Math.floor(index / 8);
            return(
                <div key={index} className="w-12 h-12 bg-[#001a0d] flex items-center justify-center">
                {( !found &&x === playerX && y === playerY) && (
                    <div className="w-8 h-8 bg-[#00ff41] rounded-full animate-pulse"></div>
                )}
                {( found && x === randomx && y === randomy) && (
                    <div className="w-6 h-6 bg-[#00ffaa] rounded-full border-2 border-[#00ff41]"></div>
                )}
                
            </div>
        )},)}
        
    </div>
    </div>
    <div className="flex items-center relative bottom-1.5 ">
          <IconChevronRight className="text-[#00ff41] "/><Link href="/"><Button className="bg-black border-2 border-[#00ff41] hover:scale-105 text-[#00ff41]  border-dashed rounded-none">Return</Button></Link>
          </div>
    </div>
   </div>
   
    )
}