import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

const Login = () => {
    const {data: session} = useSession()

    console.log(session);

    if(session){

        return (
          <div>
            <h1>Welcome, {session.user.email}</h1>
            <h2>{session.user.name}</h2>

            <div className='rounded-full ring-blue-500 ring-2 w-fit overflow-hidden'>
            <img src={session.user.image} alt="user" className='object-cover' />

            </div>
            <button onClick={()=> signOut()}>Sign out</button>
          </div>
        )
    }else{

        return (
          <div>
            <h1>You are not signed in</h1>
            <button onClick={()=> signIn()}>Sign in</button>
          </div>
        )
    }
}

export default Login
