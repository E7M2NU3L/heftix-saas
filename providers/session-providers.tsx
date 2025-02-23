import React from 'react'
import { SessionProvider as Provider } from 'next-auth/react'

type Props = {
    children : React.ReactNode;
}

const SessionProvider = (props: Props) => {
  return (
    <Provider>
        {props.children}
    </Provider>
  )
}

export default SessionProvider