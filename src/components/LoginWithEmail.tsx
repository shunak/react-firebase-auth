import React, { useCallback } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { loginWithEmail } from '../firebase'
import paths from '../paths'

const LoginWithEmail: React.FC<RouteComponentProps> = ({ history }) => {
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault()
      const { email, password } = event.target.elements
      await loginWithEmail(email.value, password.value)
      history.push(paths.home)
    },
    [history]
  )

  return (
    <>
      <div className='header-auth'>
        <span>Login</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input name='email' type='email' placeholder='Email' />
        </div>
        <div>
          <input name='password' type='password' placeholder='Password' />
        </div>
        <button type='submit'>Login</button>
      </form>
    </>
  )
}

export default withRouter(LoginWithEmail)
