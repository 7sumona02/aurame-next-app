import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { AngryIcon, FrownIcon, MehIcon, SmileIcon, TimerIcon, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "./Navbar"

export default function Component() {
  return (
    <div className="h-screen flex justify-center flex-col items-center MoodBg relative">
    <div className="w-full mt-10 py-8 md:py-12 px-4 md:px-6 flex justify-center items-center flex-col gap-6">
        <div className="text-4xl flex flex-col gap-5">
            <h1>Good Afternoon, <span className="font-semibold">Sumona!</span></h1>
            <p className="text-xl text-neutral-700">How are you feeling today?</p>
        </div>
      <div className="">
            <Card className="p-6 glassmorphism1">
            <CardContent>
                <div className="grid gap-4">
                <div className="grid grid-cols-3 gap-2">
                    <Button variant="outline" className="flex flex-col items-center gap-2  hover:bg-[#F2D0A9]/50">
                    <SmileIcon className="h-6 w-6" />
                    <span>Happy</span>
                    </Button>
                    <Button variant="outline" className="flex flex-col items-center gap-2  hover:bg-[#BEB6D9]/50">
                    <FrownIcon className="h-6 w-6" />
                    <span>Sad</span>
                    </Button>
                    <Button variant="outline" className="flex flex-col items-center gap-2  hover:bg-[#A6C9C2]/50">
                    <MehIcon className="h-6 w-6" />
                    <span>Neutral</span>
                    </Button>
                    <Button variant="outline" className="flex flex-col items-center gap-2  hover:bg-[#E0A4AF]/50">
                    <AngryIcon className="h-6 w-6" />
                    <span>Angry</span>
                    </Button>
                    <Button variant="outline" className="flex flex-col items-center gap-2  hover:bg-[#F1E3D3]/50">
                    <TimerIcon className="h-6 w-6" />
                    <span>Tired</span>
                    </Button>
                    <Button variant="outline" className="flex flex-col items-center gap-2  hover:bg-[#DAE9FA]/50">
                    <AngryIcon className="h-6 w-6" />
                    <span>Surprised</span>
                    </Button>
                </div>
                <Textarea placeholder="Add a note about your mood..." className="w-full" rows={3} />
                <Button className="w-full">Save Mood</Button>
                </div>
            </CardContent>
            </Card>
            
      </div>
      <div className="absolute top-2"><Navbar /></div>
    </div>
    </div>
  )
}
