import React, { useState, useCallback } from 'react';
import { Input } from '../components/Input'
import { Checkbox } from '../components/Checkbox'
import { Button } from '../components/Button'
import { ReactComponent as LockIcon} from '../icons/lock.svg'

interface LoginPageProps {
  onLogin: (email: string) => void
}

export const Login: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const [remember, setRemember] = useState(false)

  const handleEmailChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value), []
  )

  const handlePwdChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => setPwd(event.target.value), []
  )

  const handleRemember = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => setRemember(event.target.checked), []
  )

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'POST',
          body: JSON.stringify({ email, pwd, remember }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
        }
      )
      const data = await response.json()
      if (data) {
        onLogin(email)
      }
    }, [email, pwd, remember, onLogin]
  )

  return (
  <div className='login-container'>
    <div className='login-picture'></div>
    <div className='login-column'>
      <div className='icon-container'>
        <LockIcon className='icon' fill='#fff'/>
      </div>
      <h1 className='login-form-label'>Sign in</h1>
      <form className='login-form' onSubmit={handleSubmit}>
        <Input type='email' placeholder='Email Address' id='email' required value={email} onChange={handleEmailChange}/>
        <Input type='password' placeholder='Password' id='login' required value={pwd} onChange={handlePwdChange}/>
        <Checkbox label='Remember me' id='remember' checked={remember} onChange={handleRemember} />
        <Button type='submit'>SIGN IN</Button>
      </form>
    </div>
  </div>
  )
}