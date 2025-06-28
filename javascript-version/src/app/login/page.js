'use client';

import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

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

export default function DuplicateLoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();

        var data = JSON.stringify({
            "email": email,
            "password": password
        });

        var config = {
            method: 'post',
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                Cookies.set('token', response.data.access_token, { expires: 1 / 288, secure: true, sameSite: 'strict' });
                Cookies.set('refresh_token', response.data.refresh_token, { expires: 5, secure: true, sameSite: 'strict' });
                router.push('/dashboard');
            })
            .catch(function (error) {
                console.log(error.response?.data || error);
            });
    };

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

                    <div className="flex items-center justify-center">
                        <Card className="w-full max-w-[480px] mx-auto rounded-none border-none shadow-none">
                            <CardHeader>
                                <CardTitle className="text-2xl">Welcome Back</CardTitle>
                                <CardDescription>
                                    Login to you demo account.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit}>
                                    <div className="flex flex-col gap-6">
                                        <div className="grid gap-2">
                                            <Label htmlFor="email">Email Address</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="m@example.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <div className="flex items-center">
                                                <Label htmlFor="password">Password</Label>
                                                <a
                                                    href="#"
                                                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                                >
                                                    Forgot your password?
                                                </a>
                                            </div>
                                            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                            <span className="text-sm text-muted-foreground">
                                                Password must be 8+ chars & include special characters (e.g. @, #, $)
                                            </span>
                                        </div>

                                        <div className="grid grid-2">
                                            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                                                Sign In
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </CardContent>
                            <CardFooter className="flex flex-col items-center justify-center gap-2">
                                <span className="text-sm text-muted-foreground">
                                    Or continue with
                                </span>
                            </CardFooter>
                            <CardFooter className="flex-row items-center justify-center gap-2">
                                <Button variant="outline">
                                    Google
                                </Button>
                                <Button variant="outline">
                                    Github
                                </Button>
                                <Button variant="outline">
                                    Okta
                                </Button>
                            </CardFooter>
                            <CardFooter className="flex flex-col items-center justify-center gap-2">
                                <span className="text-sm text-muted-foreground">
                                    New to demo? <a href="#" className="text-purple-600 underline">Create Account</a>
                                </span>
                            </CardFooter>
                        </Card>
                    </div>

                    <div>
                        <span className="text-sm text-muted-foreground">
                            By continuing, you agree to our <a href="#" className="text-purple-600 underline">Terms of Service</a> and <a href="#" className="text-purple-600 underline">Privacy Policy</a>.
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