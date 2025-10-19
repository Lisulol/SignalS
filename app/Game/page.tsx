'use client'
import { Button } from "@/components/ui/button";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import { Progress } from "@/components/ui/progress"
import { KeyboardEvent, useEffect, useState } from "react";

export default function Game(){
    const [isVisible, setIsVisible] = useState(false);
    const [playerX, setPlayerX] =  useState(0);
    const [playerY, setPlayerY] =  useState(0);
    const [randomx, setRandomx] = useState<number | null>(null);
    const [randomy, setRandomy] = useState<number | null>(null);
    const [found, setFound] = useState(false);
    const [signalStrength, setSignalStrength] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);
  
  
  
  
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
    
    function handleReset( ){
                setPlayerX(0);
                setPlayerY(0);
                setRandomx(Math.floor(Math.random() * 8));
                setRandomy(Math.floor(Math.random() * 8));
                setFound(false);
    }
    

    useEffect(() => {
         if (randomx === null || randomy === null) return;
        if (playerX === randomx && playerY === randomy) {
           
            
            setFound(true);
            
        }

        // calculate the distance to the target idk why i startet commenting now nobody cares
        const distance = Math.sqrt(
            Math.pow((randomx - playerX), 2) + Math.pow((randomy - playerY), 2)
        )

        setSignalStrength(Math.max(0, 100 - Math.floor(distance * 10)));
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
        <div className={`flex flex-col h-9/12 w-9/12 bg-black border-8 border-[#00ff41] rounded-3xl text-[#00ff41] transition-all duration-200 transform ${
            isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`} style={{
            boxShadow: '0 0 30px rgba(0, 255, 65, 0.5), inset 0 0 30px rgba(0, 255, 65, 0.1)'
        }}>
    <div className="flex flex-col h-1/6 w-full gap-y-3 relative top-2.5 left-3">
    <div className="flex items-center">
        <IconChevronRight className="text-[#00ff41] "/><p>[user@archlinux ~]$ Quick game. Find all the signal trassmissions; Movement: Arrows</p>
    </div>
    <div className="flex items-center">
        <IconChevronRight className="text-[#00ff41] "/><p>$ Signal Strength: {signalStrength}%</p>
    </div>
    <div className="flex items-center w-2/3">
        <IconChevronRight className="text-[#00ff41] "/><Progress value = {signalStrength}/>
    </div>
    </div>
    <div className="flex items-center justify-center w-full h-5/6">
    <div className="grid grid-cols-8 grid-rows-8 bg-black gap-3 border-3 border-[#00ff41] p-5" >
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
        <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">
            {found && (
                <div className="pointer-events-auto flex items-center justify-center bg-black border-4 border-[#00ff41] rounded-xl p-6 max-w-md w-full mx-4">
                    <p className="text-[#00ff41] text-4xl md:text-6xl animate-pulse text-center">
                        Signal Found! <br/>
                        
                        <Button className="bg-black border-2 border-[#00ff41] hover:scale-105 text-[#00ff41]  border-dashed rounded-none" onClick={handleReset}>Restart</Button>
                    </p>
                </div>
            )}
        </div>
    </div>
    </div>
    <div className="flex items-center relative bottom-1.5 ">
          <IconChevronRight className="text-[#00ff41] "/><Link href="/"><Button className="bg-black border-2 border-[#00ff41] hover:scale-105 text-[#00ff41]  border-dashed rounded-none">Return</Button></Link>
          </div>
    </div>
   </div>
   
    )
}