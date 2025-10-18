'use client'
import { Button } from "@/components/ui/button";
import { IconChevronRightPipe } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";

export default function Morse(){


  const dotref = useRef<HTMLAudioElement | null>(null);
  const lineref = useRef<HTMLAudioElement | null>(null);
    // Long section with the morse code alphabet aint nobody want to look at tha
  const morseCode : Record<string,string> = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "'": ".----.",
  "!": "-.-.--",
  "/": "-..-.",
  "(": "-.--.",
  ")": "-.--.-",
  "&": ".-...",
  ":": "---...",
  ";": "-.-.-.",
  "=": "-...-",
  "+": ".-.-.",
  "-": "-....-",
  _: "..--.-",
  '"': ".-..-.",
  $: "...-..-",
  "@": ".--.-.",
  " ": "/",
};  
const ReverseMorseCode: Record<string, string> = {};
for(const key in morseCode) {
  if(morseCode.hasOwnProperty(key)){
    const value = morseCode[key];
    ReverseMorseCode[value] = key;
  }
}
useEffect(()=>{

  dotref.current = new Audio('./sounds/E_morse_code.ogg')
  lineref.current = new Audio('./sounds/T_morse_code.ogg')
},[])

  const [Translation, setTranslation] = useState('');
  const [inputvalue, setInput] = useState('');
  
  function handleTranslate() {
    const inputtext = inputvalue.trim();
    
    if(inputtext === '') {
      setTranslation("No input provided");
      return;
    }
  
  
    if(inputtext.includes('.') || inputtext.includes('-')) {
      
      const morseWords = inputtext.split(' / ');
      const translatedWords = morseWords.map((morseWord) => {
        const morseChars = morseWord.split(' ');
        const translatedChars = morseChars.map((morseChar) => {
          return ReverseMorseCode[morseChar] || morseChar;
        });
        return translatedChars.join('');
      });
      setTranslation(translatedWords.join(' '));
    } else {
      const upperText = inputtext.toUpperCase();
      const morseText = upperText.split('').map((char) => {
        return morseCode[char] || char;
      }).join(' ');
      const morsecodes = morseText.split("")
      let delay = 0;
      morsecodes.forEach((char) => {
        if(char === '.'){
          setTimeout(() => {
            if (dotref.current) {
              dotref.current.currentTime = 0;
              dotref.current.play();
            }
          }, delay);
          delay += 500;
        }
        else if(char === '-'){
          setTimeout(() => {
            if (lineref.current) {
              lineref.current.currentTime = 0;
              lineref.current.play();
            }
          }, delay);
          delay += 800;
        }
        else if(char === ' '){
          delay += 800;
        }
});
      setTranslation(morseText);
    }
  }
  
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  
  
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
        <div className="flex flex-col h-9/12 w-9/12 bg-black  border-8 border-[#00ff41]  rounded-3xl text-[#00ff41] ">
        <div className="flex flex-col  h-5/6 gap-y-9 left-3 top-2.5 relative">
        <div className='flex items-center'>
        <IconChevronRightPipe/><p className="text-[#00ff41] ">Input message to be translated</p>

        </div>
        <div className="flex items-center">
        <IconChevronRightPipe/><input onChange={handleInputChange} value={inputvalue} className='text-[#00ff41]  outline-none'placeholder={'...'}></input>
        </div>
        <div className = 'flex items-center'>
          <IconChevronRightPipe/><p className="text-[#00ff41] ">{Translation}</p>

        </div>
        <div className="flex items-center">
           <IconChevronRightPipe/><Button onClick={handleTranslate}className="bg-black border-2 border-[#00ff41]  text-[#00ff41] hover:scale-105 border-dashed rounded-none">Translate</Button>
        </div>
        </div>
        <div className="flex items-center left-3 top-2.5 relative">
        <div className="flex items-center">
             <div className="flex items-center">
          <IconChevronRightPipe className="text-[#00ff41] "/><a href="/"><Button className="bg-black border-2 border-[#00ff41] hover:scale-105 text-[#00ff41]  border-dashed rounded-none">Return</Button></a>
          </div>
        </div>
        </div>
      </div>
     
    </div>
        
        
        
        
        
        
    )
}