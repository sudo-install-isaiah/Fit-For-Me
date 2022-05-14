import Userauth from './Userauth';
import './Userauth.css'
import { Routes, Route, Link, Outlet } from 'react-router-dom'



export default function Signup() {
  return (
    <main className='user-auth'>
      <h1>Please Sign Up</h1>
      <div>
        <Link to='/'>homepage</Link>
        <form>
          <div className="form-group">
            <span>Username</span><br/>
            <input type="text" placeholder="Enter username here." />
          </div>
          </form>
          <Userauth/>
      </div>
    </main>
  )
}