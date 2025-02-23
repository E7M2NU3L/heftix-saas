"use client";

import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import { RainbowButton } from '../ui/rainbow-button'
import { PersonStandingIcon } from 'lucide-react';

const ShowProfileDialog = ({open, setOpen} : {
    open : boolean;
    setOpen : (state : boolean) => void
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            <Button variant={"outline"} className="w-full flex flex-row items-center justify-start" size={"sm"}>
                <PersonStandingIcon className="mr-2 h-4 w-4" />
                Profile
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    User Profile
                </DialogTitle>
                <DialogDescription>
                    manage user profile, email verifications, 2FA and much more
                </DialogDescription>
                <section className='my-4'>
                    <DialogFooter className='flex justify-end items-center gap-4'>
                        <DialogClose asChild>
                            <Button variant={"ghost"} size={"sm"}>Close</Button>
                        </DialogClose>
                        <RainbowButton>Verify User</RainbowButton>
                    </DialogFooter>
                </section>
            </DialogHeader>
        </DialogContent>
    </Dialog>
  )
}

export default ShowProfileDialog