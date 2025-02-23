import SignInForm from '@/components/auth/SignInForm'

export default function SignInPage() {
  return (
    <div className="min-h-[90vh] flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <SignInForm />
      </div>
    </div>
  )
}