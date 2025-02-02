//LoginForm Component

import { LoginFormProps } from '../interfaces/LoginFormProps.tsx';

export function LoginForm({ user, handleUserChange, password, handlePassChange, handleSubmit }: LoginFormProps) {
    return (
    <form className='login-form' onSubmit={handleSubmit}>
      <input
        placeholder="Username"
        type="text"
        className='login'
        id='username'
        value={user}
        onChange={handleUserChange} />
      <input
        placeholder="Password"
        type="password"
        className='login'
        id='password'
        value={password}
        onChange={handlePassChange} />
      <button
        className='login-button'
        type='submit'
      >Submit</button>
    </form>
    
    );
  }

