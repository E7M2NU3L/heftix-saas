import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'
import React from 'react'

const ErrorLayout = ({children} : {
    children : React.ReactNode
}) => {
  return (
    <div>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default ErrorLayout