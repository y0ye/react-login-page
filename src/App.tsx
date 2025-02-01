//Login form webpage
import { LoginForm } from './components/LoginForm'
import { SignUp } from './components/SignUp';
import { useLogin } from './hooks/useLogin';
import './App.css'

function App() {

  //passed in from custom hook- useLogin.tsx
  const { user, handleUserChange, password, handlePassChange, handleSubmit, error } = useLogin();

  return (
    <>
      <div className='container'>
        <h1 className='login-header'>Login</h1>
        <LoginForm
          user={user}
          handleUserChange={handleUserChange}
          password={password}
          handlePassChange={handlePassChange}
          handleSubmit={handleSubmit} />
        {error && <p className='error-message'>{error}</p>}

        <SignUp />
      </div>
    </>
  )
}

export default App
