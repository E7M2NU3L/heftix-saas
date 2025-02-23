import GitHub from "next-auth/providers/github"
import type { NextAuthConfig } from "next-auth"
import Google from 'next-auth/providers/google';
import Discord from 'next-auth/providers/discord';
import Facebook from 'next-auth/providers/facebook';
import Credentials from 'next-auth/providers/credentials'; 

export default { providers: [GitHub, Google, Facebook, Discord, Credentials] } satisfies NextAuthConfig