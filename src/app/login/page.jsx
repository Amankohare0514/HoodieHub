'use client'
import { useState } from "react";
import { useAuth } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import ForgotPasswordModal from "./ForgotPasswordModal";

export default function Login() {
    const { login, handlePasswordReset } = useAuth();
    const [showPassword, setShowPassword] = useState(false)
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            router.push("/home");
        } catch (err) {
            setError(err.message);
        }
    };

    const handleForgotPassword = async () => {
        try {
            await handlePasswordReset(email);
            setShowForgotPasswordModal(false);
        } catch (error) {
            console.error("Error sending password reset email:", error);
            setError("Error sending password reset email. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white p-4">
            <Card className="w-full max-w-md">
                <form onSubmit={handleSubmit}>
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl font-bold text-center">Login to your account</CardTitle>
                        <CardDescription className="text-center">
                            Enter your email and password to login
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="email" placeholder="john@example.com" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <Input
                                    value={password} onChange={(e) => setPassword(e.target.value)}
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                />
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-4 w-4 text-gray-500" />
                                    ) : (
                                        <Eye className="h-4 w-4 text-gray-500" />
                                    )}
                                    <span className="sr-only">
                                        {showPassword ? "Hide password" : "Show password"}
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                        <Button type="submit" className="w-full">Log in</Button>
                        <div className="text-sm text-center space-y-2">
                            <p className="text-gray-600">
                                Don't have an account?{' '}
                                <Link href="/register" className="text-blue-600 hover:underline">
                                    Sign up
                                </Link>
                            </p>
                            <button
                                type="button"
                                onClick={() => setShowForgotPasswordModal(true)}
                                className="text-[#3C50E0] hover:text-blue-700"
                            >
                                Forgot Password?
                            </button>
                        </div>
                    </CardFooter>
                </form>
                {showForgotPasswordModal && (
                    <ForgotPasswordModal
                        email={email}
                        setEmail={setEmail}
                        onClose={() => setShowForgotPasswordModal(false)}
                        onSend={handleForgotPassword}
                    />
                )}
            </Card>
        </div>
    )
}

