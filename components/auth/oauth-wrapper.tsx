"use client";

import React, { useState } from 'react'
import { Button } from '../ui/button'
import { FaDiscord, FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import { signIn } from 'next-auth/react';
import { Loader } from 'lucide-react';

const OauthWrapper = () => {
    const [clicked, setClicked] = useState("");
  return (
    <div className="grid grid-cols-1 gap-2">
        <Button variant="outline" disabled={clicked === "google" ? true : false} className="hover:bg-blue-100 transition-colors" onClick={async () => {
            await signIn("google")
            setClicked("google")
        }}>
            {clicked === "google" ? (
                <>
                <Loader className='h-4 w-4 mr-4 animate-spin' />
                Loading
                </>
            ) : (
                <>
            <FaGoogle className="mr-2 h-4 w-4" />
            Google
                </>
            )}
        </Button>
        <Button variant="outline" disabled={clicked === "discord" ? true : false} className="hover:bg-blue-100 transition-colors" onClick={async () => {
            await signIn("discord")
            setClicked("discord")
        }}>
            {clicked === "discord" ? (
                <>
                <Loader className='h-4 w-4 mr-4 animate-spin' />
                Loading
                </>
            ) : (
                <>
            <FaDiscord className="mr-2 h-4 w-4" />
            Discord
                </>
            )}
        </Button>
        <Button variant="outline" disabled={clicked === "facebook" ? true : false} className="hover:bg-blue-100 transition-colors" onClick={async () => {
            await signIn("facebook")
            setClicked("facebook")
        }}>
            {clicked === "facebook" ? (
                <>
                <Loader className='h-4 w-4 mr-4 animate-spin' />
                Loading
                </>
            ) : (
                <>
            <FaFacebook className="mr-2 h-4 w-4" />
            Facebook
                </>
            )}
        </Button>
        <Button variant="outline" disabled={clicked === "github" ? true : false} className="hover:bg-blue-100 transition-colors" onClick={async () => {
            await signIn("github")
            setClicked("github")
        }}>
            {clicked === "github" ? (
                <>
                <Loader className='h-4 w-4 mr-4 animate-spin' />
                Loading
                </>
            ) : (
                <>
            <FaGithub className="mr-2 h-4 w-4" />
            Github
                </>
            )}
        </Button>
    </div>
  )
}

export default OauthWrapper