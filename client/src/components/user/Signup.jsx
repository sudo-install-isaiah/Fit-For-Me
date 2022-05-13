import Userauth from './Userauth';
import './Userauth.css'
export default function Signup() {
  return (
    <main className='user-auth'>
      <h1>Please Sign Up</h1>
      <div>
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