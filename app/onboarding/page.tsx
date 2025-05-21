import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitButton } from "../components/SubmitButtons";

export default function Onboarding() {
    return (
        <div className="min-h-screen w-screen flex items-center justify-center">
            <Card className="w-full max-w-sm mx-auto shadow-2xl">
                <CardHeader>
                    <CardTitle className="text-2xl">You are almost finished!</CardTitle>
                    <CardDescription>Enter your information to create an account</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2">
                                <Label>First Name</Label>
                                <Input placeholder="John" />
                            </div>
                            <div className="flex flex-col gap-2 ">
                                <Label>Last Name</Label>
                                <Input placeholder="Doe" />
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label>Address</Label>
                            <Input placeholder="Chad Street 123" />
                        </div>
                        <SubmitButton text="Finish Onboarding" />
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}