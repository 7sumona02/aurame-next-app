"use client"

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ClerkProvider } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { ChevronRight, SearchIcon, SettingsIcon, SendIcon } from "lucide-react";
import Link from "next/link";

type Message = {
  id: number;
  text: string;
  user: string;
};

export default function Component() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, { id: messages.length, text: inputValue, user: "You" }]);
      setInputValue(""); // Clear the input after sending
    }
  };

  return (
    <ClerkProvider>
      <div className="flex h-screen w-full bg-background overflow-hidden">
        <div className="hidden w-64 border-r bg-background LandingImg bg-cover md:block">
          <div className="flex h-20 items-center justify-between border-b border-white/70 p-6 glassmorphism">
            <Link href='/'><div className="text-4xl font-bold px-4">aura:me</div></Link>
          </div>
          <div className="h-[calc(100vh-3.5rem)] overflow-y-auto glassmorphism">
            <nav className="space-y-1 p-2">
              <Link href="/" className="flex items-center gap-2 rounded-md px-3 py-2 text-lg font-medium transition-colors hover:bg-muted/70 hover:text-foreground" prefetch={false}>
                <ChevronRight className="size-4" />
                <div className="flex-1 truncate">Home</div>
              </Link>
              <Link href="/profile" className="flex items-center gap-2 rounded-md px-3 py-2 text-lg font-medium transition-colors hover:bg-muted/70 hover:text-foreground" prefetch={false}>
                <ChevronRight className="size-4" />
                <div className="flex-1 truncate">Profile</div>
              </Link>
              <Link href="/podcasts" className="flex items-center gap-2 rounded-md px-3 py-2 text-lg font-medium transition-colors hover:bg-muted/70 hover:text-foreground" prefetch={false}>
                <ChevronRight className="size-4" />
                <div className="flex-1 truncate">Podcasts</div>
              </Link>
              <Link href="/test" className="flex items-center gap-2 rounded-md px-3 py-2 text-lg font-medium transition-colors hover:bg-muted/70 hover:text-foreground" prefetch={false}>
                <ChevronRight className="size-4" />
                <div className="flex-1 truncate">Test</div>
              </Link>
            </nav>
          </div>
        </div>

        <div className="flex flex-col w-full bg-[#B3C1F0]/50">
          <header className="flex h-20 items-center justify-between border-b border-white/70 bg-background px-4 md:px-6">
            <div className="text-2xl font-semibold">Chat 🍀</div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <SearchIcon className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
              <Button variant="ghost" size="icon">
                <SettingsIcon className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Button>
              <Button className="bg-transparent hover:bg-transparent" size="icon">
                <UserButton />
                <span className="sr-only">Settings</span>
              </Button>
            </div>
          </header>
          <div className="flex-1 overflow-y-auto">
            <div className="grid gap-4 p-4 md:p-6">
              {messages.map((message) => (
                <div key={message.id} className="flex items-start gap-4">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <div className="font-medium">{message.user}</div>
                    <div className="bg-muted rounded-lg p-3 text-sm">{message.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t bg-background px-4 py-2 md:px-6">
            <div className="relative">
              <Textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="min-h-[40px] w-full rounded-xl bg-muted pr-12"
              />
              <Button
                type="button"
                onClick={handleSendMessage}
                size="icon"
                className="absolute right-2 top-2 rounded-full"
              >
                <SendIcon className="h-5 w-5" />
                <span className="sr-only">Send</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ClerkProvider>
  );
}