import React from 'react'
import { useSession, signOut } from 'next-auth/react'

const Account = () => {
    const {data: session, status}= useSession({required: true})

    if(status === 'authenticated'){
        return (
            <div>
              <h1>Welcom, {session.user.name}</h1>
            <button onClick={signOut}>Sign Out</button>
          </div>
       )
    }
  
}

export default Account
