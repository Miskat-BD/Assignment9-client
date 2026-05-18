'use client'
import { Button, Card, Description, FieldError, Form, Input, Label, Separator, TextField } from '@heroui/react';
import { FcGoogle } from 'react-icons/fc';

const SignUpPage = () => {
    const onSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log(data, 'signup');
    }
    return (
        <div className="max-w-7xl mx-auto my-20">
            <div className="my-3 text-center">
                <h1 className="text-2xl font-bold">Create Account</h1>
                <p className="text-[#6C696D]">Create your account to start learning</p>
            </div>
            <Card className="">
                <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4  justify-center mx-auto">
                    <TextField
                        isRequired
                        name="name"
                        type="text"
                    >
                        <Label>Name</Label>
                        <Input placeholder="Enter Your Name" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>
                    <TextField
                        name="image"
                        type="url"
                    >
                        <Label>Image URL</Label>
                        <Input placeholder="Enter Your Image URL" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 6) {
                                return "Password must be at least 6 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 6 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <div className="flex gap-2">
                        <Button className={'w-full bg-cyan-500'} type="submit">
                            Create Account
                        </Button>
                    </div>
                </Form>
                <div className="flex justify-center items-center gap-4 w-96 mx-auto">
                    <Separator />
                    <div className="whitespace-nowrap">
                        <h1>Or sign up with</h1>
                    </div>
                    <Separator />
                </div>
                <div className="w-96 mx-auto">
                    <Button variant="outline" className={'w-full'}><FcGoogle /> Sign up With Google</Button>
                </div>
            </Card>
        </div>
    );
};

export default SignUpPage;