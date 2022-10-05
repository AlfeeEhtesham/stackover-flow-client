import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from  'react-router-dom'
import './Auth.css' 
import icon from '../../assests/logo.png'
import AboutAuth from './AboutAuth'
import { signup,login } from '../../actions/auth'

const Auth = () => {

  const  [isSignup ,setIsSignup] = useState(false)
 const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSwitch = ()  =>{
    setIsSignup(!isSignup)

  }
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
     e.preventDefault()
     if(!email && !password){
      alert("enter email and password")
     }
     if(isSignup){
      if(!name){
        alert("enter a name to continue")
      }
      dispatch(signup({name,email,password}, navigate))
     }else{
      dispatch(login({email,password},navigate))
     }
  }

  return (
    <section class='auth-section'>
      {isSignup && <AboutAuth/>}
      <div class='auth-conatiner-2'>
        { !isSignup && <img src={icon} alt='stack overflow' className='login-logo'/>}
         <form onSubmit={handleSubmit}>

          {
            isSignup && (
               <label htmlFor="name">
                <h4>Display name</h4>
                <input type="text" name="name" id="name" onChange={(e) => {setName(e.target.value)}} />
               </label>
            )
          }
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name='email' id='email' onChange={(e) => {setEmail(e.target.value)}} />
          </label>
          <label htmlFor="password">
            <div style={{display:"flex" , justifyContent:"space-between"}}>
            <h4>Password</h4>
            { !isSignup &&<p style={{color:'#007ac6',fontSize:'13px'}
          
          }>forget password?</p>}
            </div >
            <input type="password" name='password' id='password'  onChange={(e) => {setPassword(e.target.value)}}/>
            {isSignup && <p style={{color:'#666767',fontSize:'13px'}}>passwords must contain atleast 8<br/> characters,atleat 1 letter and 1<br/> number  </p>}
          </label>
          {
            isSignup && (
              <label htmlFor="check">
                <input type="checkbox" name="check" id="check" />
                <p style={{fontSize:'13px'}}>
                  opt-in to recieve occasional<br/> product updates,user research invitations,<br/>company announcement and digests.
                </p>
              </label>
            )
          }
          <button type='submit' className='auth-btn'>{isSignup ? 'Sign up' : 'Log in'}</button>
          {
            isSignup && (
              <p style={{color:'#666767',fontSize:'13px'}}>
                By clicking "Sign up" ,you agree to our 
                <span style={{color:'#007ac6'}}>terms of<br/> service</span>,
                <span style={{color:'#007ac6'}}> privacy policy</span> and 
                <span style={{color:'#007ac6'}}> cookie policy</span>
              </p>
            )
          }
         </form>
         <p>
          {isSignup? 'Already have an account?':"Dont't have an account?"}
          <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? "Log in":"Sign up"}</button>
         </p>
      </div>
    </section>
  )
}

export default Auth