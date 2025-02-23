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
import { RegisterSchema } from '@/schemas/users'
import type { RegisterProps } from '@/schemas/users'
import { useRouter } from 'next/navigation'
import { Loader } from 'lucide-react'
import {toast} from 'sonner';

export default function SignUpForm() {

  const form = useForm<RegisterProps>({
    resolver : zodResolver(RegisterSchema),
    defaultValues : {
      firstname : "",
      lastname : "",
      email : "",
      password : ""
    }
  });

  const registerMutation = {};
  console.log(registerMutation);

  const router = useRouter();

  const handleSubmit = async (values : RegisterProps) => {
    try {
      const response = await {id : "", ...values};
      if (!response?.id) {
        toast("Error", {
          description : "Registration Failed, try again",
        });
      }

      router.push("/auth/signin");
    } catch (error) {
      console.log(error);
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
            <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <FormField control={form.control} name='firstname' render={({field}) => (
            <FormItem className='grid gap-2'>
                <FormLabel htmlFor='firstname'>Firstname</FormLabel>
                <FormControl>
                  <Input
                    id="firstname"
                    placeholder="John"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

          <FormField control={form.control} name='lastname' render={({field}) => (
            <FormItem className='grid gap-2'>
                <FormLabel htmlFor='lastname'>Lastname</FormLabel>
                <FormControl>
                  <Input
                    id="lastname"
                    placeholder="Doe"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            </section>
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
              {form.formState.isSubmitting ? <><Loader className='h-4 w-4 mr-2 animate-spin' /> Loading...</> : <>Sign In</>}
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

