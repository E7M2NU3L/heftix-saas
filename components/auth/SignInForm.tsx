'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import OauthWrapper from './oauth-wrapper'
import { Loader } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { LoginSchema } from '@/schemas/users'
import type { LoginProps } from '@/schemas/users' 
import { signIn } from 'next-auth/react'
import { DEFAULT_LOGIN_REDIRECT } from '@/constants/auth'
import { AuthError } from 'next-auth'

export default function SignInForm() {

  const form = useForm<LoginProps>({
    resolver : zodResolver(LoginSchema),
    defaultValues : {
      email : "",
      password : ""
    }
  });

  const router = useRouter();

  const handleSubmit = async (values : LoginProps) => {
    try {
      await signIn("credentials", {
        email : values.email,
        password : values.password,
        redirectTo : DEFAULT_LOGIN_REDIRECT
      });
      router.push("/overview");
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
            case "CredentialsSignin":
                return { msg: "Invalid credentials" , status: "error"};
            case "CredentialsSignin":
                throw error;
            default:
                return { msg: "Something went wrong", status: "error" };
        }
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Sign in to Heftix</CardTitle>
          <CardDescription className="text-center">
            Choose your preferred sign in method
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <OauthWrapper />
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-4'>
            <FormField control={form.control} name='email' render={({field}) => (
              <FormItem className='grid gap-2'>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    placeholder="m@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={form.control} name='password' render={({field}) => (
              <FormItem className='grid gap-2'>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <FormControl>
                  <Input
                    id="password"
                    type='password'
                    placeholder='xxxxxxxx'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <Button disabled={form.formState.isSubmitting} className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white transition-colors">
              {form.formState.isSubmitting ? <><Loader className='mr-2 h-4 w-4 animate-spin' /> Loading...</> : <>Login</>}
            </Button>
          </form>
          </Form>
        </CardContent>
        <CardFooter className='flex flex-wrap'>
          <p className="text-sm text-gray-600 mt-2 w-full">
            <Link className="text-indigo-600 hover:underline" href="/auth/send-mail">
              Forgot Password
            </Link>
          </p>
          <p className="text-sm text-gray-600 mt-2 w-full">
            Don&apos;t have an account?{' '}
            <Link className="text-indigo-600 hover:underline" href="/auth/signup">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

