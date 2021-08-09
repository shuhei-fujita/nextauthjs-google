import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'

import styles from '../styles/Home.module.css'

export default function Page() {
  const [ session, loading ] = useSession()

  return (
    <>
      {!session && <>
        Not signed in <br/>
        <button onClick={() => signIn()}>Sign in</button>
      </>}
      {session && <>
        Signed in as {session.user.email} <br/>
        <button onClick={() => signOut()}>Sign out</button>
      </>}
    </>
  )

  // return (
  //   <div className={styles.container}>

  //     <main className={styles.main}>
  //       <h1 className={styles.title}>
  //         Welcome to <a href="https://nextjs.org">Next.js!</a>
  //       </h1>

  //       <div className={styles.grid}>
  //         {!session && <>
  //           Not signed in <br/>
  //           <button onClick={signIn}>Sign in</button>
  //         </>}
  //         {session && <>
  //           Signed in as {session.user.email} <br/>
  //           <button onClick={signOut}>Sign out</button>
  //         </>}
  //       </div>
  //     </main>

  //   </div>
  // )
}
