'use client'
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import { use, useEffect, useState } from "react";

type Station = {
  frequency: number;
  name: string;
  messege: string;
}
export default function Message(){

  const [freq,setFreq] = useState(0)
  const [strength,setStrength] = useState(0)
  const [mes, setMes] = useState('')
  const [foundstat, setFoundstat] = useState<Station | null>(null)


  const stations = [
    {frequency: 90, name:'Station 1', messege:'You are receving form Station 1'},
    {frequency: 25, name:'Station 2' , messege:'You are receving form Station 2'},
    {frequency: 10, name:'Station 3' , messege:'You are receving form Station 3'},
    {frequency: 45, name:'Station 5' , messege:'You are receving form Station 5'},
    {frequency: 80, name:'Station 4' , messege:'You are receving form Station 4'}

  ]
  const matchedStation = stations.find(station => 
  Math.abs(station.frequency - freq) < 3);


  


  useEffect(() => {
  setFreq(Math.abs(freq))
  
  if(matchedStation) {
    const difference = Math.abs(matchedStation.frequency - freq);
    const calcstrength = Math.max(0, 100 - (difference * 33))
    setStrength(calcstrength)
    setFoundstat(matchedStation)
    if(calcstrength > 67)
    {
      setMes(matchedStation.messege)
    }
    else{
        const hashedmessage = matchedStation.messege.split('').map((e) => 
          Math.random() > calcstrength/100 ? '_' : e
        ).join('')
        setMes(hashedmessage)
    }
  } else {
    setStrength(0);
    setMes('Detecting static...');
    setFoundstat(null)
  }

  
}, [freq])


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
          <IconChevronRight/><p>Message Decoder</p>
          </div>
        <div className="flex h-4/6 w-full flex-col">
            <div className="flex">
              <IconChevronRight/><p>Freqency: {freq}MHz</p>
            </div>
            <div className="flex">
              <IconChevronRight/><p>Signal strength: {strength}%</p>
            </div>
        <div className="flex items-center justify-center w-11/12">
            <IconChevronRight/><Slider onValueChange={(freq) => {setFreq(freq[0])}} max={100} step={1} />
        </div>
        <div className="flex">
              <IconChevronRight/><p>{mes}</p>
            </div>

        </div>
        <div className="flex items-center">
             <div className="flex items-center">
          <IconChevronRight className="text-[#00ff41] "/><Link href="/"><Button className="bg-black border-2 border-[#00ff41] hover:scale-105 text-[#00ff41]  border-dashed rounded-none">Return</Button></Link>
          </div>
          </div>
        </div>
          
        </div>

    )
}