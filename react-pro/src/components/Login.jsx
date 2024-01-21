import 'react'
import '../components/css/login.css'

function Login() {
  return (
    <div>
      <h1 className='Login'>LOGIN ID</h1>
      <form action="/action_page" method='post'>
        <div className='imgcontainer'>
          <img src="/react-pro/public/images/person_1.jpg" alt="Picture" />
        </div>
        <div className='container'>
          <label htmlFor="uname"><b>User Name</b></label>
          <input type="text" placeholder='Enter User name' name='uname' required /><br />
            <label htmlFor="psw"><b>Password</b></label>
            <input type="text" placeholder='Enter password' name='psw' required /> <br />
            <button type='mubit'>Login</button>
            <labe>
              <input type="chackbox" />
            </labe>
        </div>
      </form>
    </div>
    
  )
}

export default Login