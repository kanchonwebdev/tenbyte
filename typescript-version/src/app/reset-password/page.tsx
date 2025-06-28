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

export default function ResetPasswordPage() {
    return (
        <div>
            <div className="w-full max-w-[1440px] mx-auto">
                <div className="flex flex-col items-center justify-between h-screen bg-white dark:bg-gray-900 p-6">
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
                                <CardTitle className="text-2xl">Reset Password</CardTitle>
                                <CardDescription>
                                    Enter your email address to change your password.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form>
                                    <div className="flex flex-col gap-6">
                                        <div className="grid gap-2">
                                            <Label htmlFor="email">Work Email</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="m@example.com"
                                                required
                                            />
                                        </div>
                                    </div>
                                </form>
                            </CardContent>
                            <CardFooter className="flex-row gap-2">
                                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                                    Send OTP
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>

                    <div>
                        <span className="text-sm text-muted-foreground">
                            By continuing, you agree to our <a href="#" className="text-purple-600 underline">Terms of Service</a> and <a href="#" className="text-purple-600 underline">Privacy Policy</a>.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}