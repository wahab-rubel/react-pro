import 'react'
import '../components/css/contact.css'


function Contact() {
  return (
    <div>
      <h1 className='contact'>Contact me</h1>
      <div className='container'>
      <form action="action-page">
        <label htmlFor="fname">First Name</label>
        <input type="text" id='fname' name='Firstname' placeholder='Your name....' /> <br/>
        <label htmlFor="lname">Last Name</label>
        <input type="text" id='lname' name='lastname' placeholder='Your last name...' />
        <br />
        <label htmlFor="Email">Your Email</label>
        <input type="text" id='Email' name='Email' placeholder='Your Email' />
        <br />
        <label htmlFor="Phone">Phone Num</label>
        <input type="text" id='Phone Number' name='Phone Number' placeholder='Your Phone Number' />
         <br/>
        <label htmlFor="country">Country</label>
        <select id="country" name="country">
          <option value="Bangladesh">Bangladesh</option>
          <option value="USA">Usa</option>
          <option value="India">India</option>
          <option value="canada">canada</option>
          <option value="france">france</option>
        </select> <br/>
        <label htmlFor="subject">Subject</label>
        <textarea name="subject" id="subject" cols="30" rows="10" placeholder='Write'></textarea>

          <br/>
        <input type="sumit" value="Sumit" />

      </form>
      </div>
    </div>
  )
}

export default Contact