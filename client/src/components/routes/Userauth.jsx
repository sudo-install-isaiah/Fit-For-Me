import './Userauth.css'

export default function Userauth() {
  return (
    <div>
    <form>
      <div className="form-group">
        <span>Email</span><br/>
        <input type="text" placeholder="Enter email here." />
      </div>
      <br />
      <div className="form-group">
        <span>Password</span><br/>
        <input type="text" placeholder="Enter password here." />
      </div><br/>
      <div>
        <button type="submit">Submit</button><br/>
      </div>
    </form>
  </div>
  )
}