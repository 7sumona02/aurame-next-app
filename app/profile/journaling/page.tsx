import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { AngryIcon, FrownIcon, Home, MehIcon, SmileIcon, TimerIcon, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "../Navbar"

export default function Component() {
  return (
    <div className="h-screen flex justify-center flex-col items-center MoodBg relative">
    <div className="py-8 md:py-12 px-4 md:px-6 flex justify-center items-center flex-col gap-6 w-[200vw]">
      <Card className="p-6 glassmorphism1 w-[40vw] h-[60vh]">
            <CardHeader>
                <CardTitle>Journaling</CardTitle>
                <CardDescription>Writing about daily events, thoughts, and feelings</CardDescription>
            </CardHeader>
            <CardContent>
                <Textarea placeholder="Start writing your journal entry..." className="w-full" rows={8} />
                <Button className="w-full mt-4">Save Journal</Button>
            </CardContent>
            </Card>
    </div>
    <Link href='/'>
    <div className="border-2 border-black p-2 rounded-full absolute top-5 right-5">
        <Home className="size-6" />
    </div></Link>
    </div>
  )
}
