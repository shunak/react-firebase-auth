import React, { useContext } from 'react'
import { logout } from '../firebase'
import { FirebaseContext } from '../contexts'

const Home = () => {
  const { user } = useContext(FirebaseContext)

  return (
    <>
      <header className='header-page'>
        <h1>Home(Need Login)</h1>
      </header>
      <div className='wrap-home'>
        <p>Now login user is {user?.email}</p>
        <button onClick={logout}>logout</button>
      </div>
    </>
  )
}

export default Home
