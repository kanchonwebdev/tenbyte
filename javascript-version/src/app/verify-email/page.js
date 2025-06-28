"use client"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import FrameImage from "../../../public/frame.png"
import HeroImg from "../../../public/hero.png"

import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"


export default function VerifyEmailPage() {
    return (
        <div>
            <div className="w-full max-w-[1440px] mx-auto grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center justify-between bg-white dark:bg-gray-900 p-6">
                    <div className="flex justify-start w-full">
                        <div className="pt-4 pb-4">
                            <Image
                                className="dark:invert"
                                src={FrameImage}
                                alt="Next.js logo"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full">
                        <Card className="w-full max-w-[480px] mx-auto rounded-none border-none shadow-none">
                            <CardHeader>
                                <CardTitle className="text-2xl">Verify Email</CardTitle>
                                <CardDescription>
                                    Enter the code sent to your email.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="w-full">
                                    <div className="flex flex-col gap-6">
                                        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS} className="w-full mx-auto">
                                            <InputOTPGroup className="gap-5 items-center justify-center">
                                                <InputOTPSlot index={0} className="rounded-xl border-2 shadow-none w-14 h-14" />
                                                <InputOTPSlot index={1} className="rounded-xl border-2 shadow-none w-14 h-14" />
                                                <InputOTPSlot index={2} className="rounded-xl border-2 shadow-none w-14 h-14" />
                                                <InputOTPSlot index={3} className="rounded-xl border-2 shadow-none w-14 h-14" />
                                                <InputOTPSlot index={4} className="rounded-xl border-2 shadow-none w-14 h-14" />
                                                <InputOTPSlot index={5} className="rounded-xl border-2 shadow-none w-14 h-14" />
                                            </InputOTPGroup>
                                        </InputOTP>
                                    </div>
                                </form>
                            </CardContent>
                            <CardFooter className="flex-row gap-2">
                                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                                    Sign Up
                                </Button>
                            </CardFooter>
                            <CardFooter className="flex flex-col items-center justify-center gap-2">
                                <span className="text-sm text-muted-foreground">
                                    Don't get a code? <a href="#" className="text-purple-600 underline">Resend</a>
                                </span>
                            </CardFooter>
                        </Card>
                    </div>

                    <div>
                        <span className="text-sm text-muted-foreground">
                            
                        </span>
                    </div>
                </div>
                <div>
                    <div className="max-h-[100vh] h-full">
                        <Image
                            className="dark:invert h-full w-full object-cover"
                            src={HeroImg}
                            alt="Hero image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}