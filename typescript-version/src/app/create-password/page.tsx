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

export default function CreatePasswordPage() {
    return (
        <div>
            <div className="w-full max-w-[1440px] mx-auto">
                <div className="flex flex-col h-screen items-center justify-between bg-white dark:bg-gray-900 p-6">
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
                                <CardTitle className="text-2xl">Create New Password</CardTitle>
                                <CardDescription>
                                    Set a new password to keep your account secure.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form>
                                    <div className="flex flex-col gap-6">
                                        <div className="grid gap-2">
                                            <div className="flex items-center">
                                                <Label htmlFor="password">Password</Label>
                                            </div>
                                            <Input id="password" type="password" required />
                                            <span className="text-sm text-muted-foreground">
                                                Password must be 8+ chars & include special characters (e.g. @, #, $)
                                            </span>
                                        </div>
                                    </div>
                                </form>
                            </CardContent>
                            <CardFooter className="flex-row gap-2">
                                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                                    Set Password
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