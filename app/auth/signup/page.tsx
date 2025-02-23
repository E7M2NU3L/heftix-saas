import SignUpForm from '@/components/auth/SignUpForm'

export default function SignUpPage() {
  return (
    <div className="min-h-[90vh] flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <SignUpForm />
      </div>
    </div>
  )
}