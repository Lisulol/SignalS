"use client";
import { Button } from "@/components/ui/button";
import { IconChevronRight } from "@tabler/icons-react";
import { Icon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Main() {
  const [isVisible, setIsVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [response, setResponse] = useState("");

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand();
    }
  };

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleCommand() {
    const command = inputValue.trim();

    if (command === "pwd") {
      setResponse("/home/user");
    } else if (command === "ls") {
      setResponse("About  Game  Message  Morse");
    } else if (command === "cd ~" || command === "cd") {
      setResponse("Already in home directory");
    } else if (command === "cd About") {
      window.location.href = "/About";
    } else if (command === "cd Game") {
      window.location.href = "/Game";
    } else if (command === "cd Message") {
      window.location.href = "/Message";
    } else if (command === "cd Morse") {
      window.location.href = "/Morse";
    } else if (command === "clear") {
      setResponse("");
    } else if (command.includes("mkdir")) {
      setResponse(
        `mkdir: cannot create directory ${command.split(" ")[1]}: Permission denied`,
      );
    } else if (command.includes("rm -rf")) {
      setResponse(
        `rm: cannot remove '${command.split(" ")[2]}': Permission denied`,
      );
    } else if (command.includes("touch")) {
      setResponse(
        `touch: cannot touch '${command.split(" ")[1]}': Read-only file system`,
      );
    } else if (command.includes("cat")) {
      setResponse(`cat: ${command.split(" ")[1]}: No such file or directory`);
    } else if (command === "neofetch") {
      setResponse("Ok i dont have that much time");
    } else if (command === "whoami") {
      setResponse("user");
    } else if (command.includes("pacman")) {
      setResponse(`error: Permission denied`);
    } else if (command === "date") {
      const currentDate = new Date();
      setResponse(currentDate.toString());
    } else if (command.includes("sudo")) {
      setResponse("sudo:root privileges needed to run sudo");
    } else {
      setResponse(`bash: ${command}: command not found`);
    }
    setInputValue("");

    // love the if stacking *:
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen min-w-full items-center justify-center">
      <div
        className="absolute inset-0 pointer-events-none z-50"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.4) 0px,
            rgba(0, 0, 0, 0.2) 2px,
            transparent 1px,
            transparent 4px
          )`,
        }}
      ></div>
      <div
        className={`flex flex-col min-h-9/12 w-9/12 bg-black px-4 py-4 border-8 border-[#00ff41] overflow-hidden rounded-3xl gap-y-50 transition-all duration-200 transform${
          isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
        style={{
          boxShadow:
            "0 0 30px rgba(0, 255, 65, 0.5), inset 0 0 30px rgba(0, 255, 65, 0.1)",
        }}
      >
        <div className="flex left-3 top-2.5 relative flex-col gap-y-50">
          <div className="flex items-center">
            <IconChevronRight className="text-[#00ff41] " />
            <p className="flex text-[#00ff41] ">
              [user@archlinux ~]$ Hi for this week i made some quick functions/{" "}
              <q>games</q>
            </p>
          </div>
          <div className="flex  gap-y-20  justify-center flex-col">
            <div className="flex items-center">
              <IconChevronRight className="text-[#00ff41] " />
              <Link href="/Morse">
                <Button className="bg-black border-2 border-[#00ff41] text-[#00ff41]  border-dashed rounded-none hover:scale-105">
                  Morse Code Translator
                </Button>
              </Link>
            </div>
            <div className="flex items-center">
              <IconChevronRight className="text-[#00ff41] " />
              <Link href="/Game">
                <Button className="bg-black border-2 border-[#00ff41] text-[#00ff41]  border-dashed rounded-none hover:scale-105">
                  Game
                </Button>
              </Link>
            </div>
            <div className="flex items-center">
              <IconChevronRight className="text-[#00ff41] " />
              <Link href="/Message">
                <Button className="bg-black border-2 border-[#00ff41]  text-[#00ff41]  border-dashed rounded-none hover:scale-105">
                  Message Decoder
                </Button>
              </Link>
            </div>
            <div className="flex items-center">
              <IconChevronRight className="text-[#00ff41]" />
              <Link href="/About">
                <Button className="bg-black border-2 border-[#00ff41]  text-[#00ff41]  border-dashed rounded-none hover:scale-105">
                  About
                </Button>
              </Link>
            </div>
            <div className="flex items-center text-[#00ff41] ">
              <IconChevronRight className="text-[#00ff41] " />
              [user@archlinux ~]$
              <input
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                value={inputValue}
                className="text-[#00ff41] bg-transparent outline-none ml-2"
              />
            </div>
            <div className="flex items-center text-[#00ff41]">
              <IconChevronRight className="text-[#00ff41] flex-shrink-0" />
              {response}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
