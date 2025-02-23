import React from 'react'
import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'

type Props = {
    children : React.ReactNode;
}

const RootLayout = (props: Props) => {
  return (
    <div>
        <Navbar />
        {props.children}
        <Footer />
    </div>
  )
}

export default RootLayout