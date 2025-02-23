"use client";

import React, { useState } from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import { Loader, LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';
import { toast } from 'sonner';

const LogoutButton = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const handleLogout = async () => {
        try {
            setIsLoading(true);
            await signOut();

            toast("Success", {
                description : "User has been logged out successfully"
            })
        } catch (error) {
            if (error instanceof Error) {
                toast(error.name, {
                    description : error.message,
                });
            }
            else {
                toast("Failed", {
                    description : "Unknown error occured",
                })
            };
        } finally {
            setIsLoading(false);
            setOpen(false);
        }
    }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            <Button variant={"destructive"} size={"sm"}>Logout</Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    Logout
                </DialogTitle>
                <DialogDescription>
                    Are you sure you want to Logout?
                </DialogDescription>
            </DialogHeader>
            <DialogFooter className='flex justify-end items-center gap-4'>
                <DialogClose asChild>
                    <Button variant={"outline"}>Cancel</Button>
                </DialogClose>
                <Button onClick={handleLogout} className='flex items-center gap-2' variant={
                    "destructive"
                } disabled={isLoading} size={"sm"}>
                    {isLoading ? <><Loader /> Logging out</> : <><LogOut />Logout</>}
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

export default LogoutButton