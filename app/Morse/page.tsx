'use client'
import { Button } from "@/components/ui/button";
import { IconChevronRightPipe } from "@tabler/icons-react";
import { useState } from "react";

export default function Morse(){



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
  const dotaudio = new Audio('./sounds/E_morse_code.ogg')
  const lineaudio = new Audio('./sounds/T_morse_code.ogg')

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
          setTimeout(() => dotaudio.play(), delay);
          delay += 500;
        }
        else if(char === '-'){
          setTimeout(() => lineaudio.play(), delay);
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
      <div className="flex flex-col h-9/12 w-9/12 bg-[#002208]  border-8 border-black rounded-3xl text-green-950">
        <div className="flex flex-col gap-y-9 left-3 top-2.5 relative">
        <div className='flex items-center'>
        <IconChevronRightPipe/><p className="text-green-900">Input message to be translated</p>

        </div>
        <div className="flex items-center">
        <IconChevronRightPipe/><input onChange={handleInputChange} value={inputvalue} className='text-green-900 outline-none'placeholder={'...'}></input>
        </div>
        <div className = 'flex items-center'>
          <IconChevronRightPipe/><p className="text-green-900">{Translation}</p>

        </div>
        <div>
          <Button onClick={handleTranslate}className="bg-[#022208] border-2 border-green-950 text-green-900 border-dashed rounded-none">Translate</Button>
        </div>
        </div>
      </div>
     
    </div>
        
        
        
        
        
        
    )
}