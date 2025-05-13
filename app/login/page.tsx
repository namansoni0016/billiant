import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "../utils/auth";

export default function Login() {
    return (
        <>
            <div className="flex h-screen w-full items-center justify-center px-4">
                <Card className="w-full max-w-md shadow-2xl">
                    <CardHeader>
                        <CardTitle className="text-3xl">Log in to <span className="text-blue-600 italic">Billiant</span></CardTitle>
                        <CardDescription>Enter your email below to login to your account</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form action={async (formData) => {
                            "use server";
                            await signIn("nodemailer", formData);
                        }} className="flex flex-col gap-y-4">
                            <div className="flex flex-col gap-y-2">
                                <Label>Email</Label>
                                <Input name="email" type="email" placeholder="johndoe@email.com" required/>
                            </div>
                            <Button>Log in</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}