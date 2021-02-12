import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

function App() {
  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //Pattern
  async function signup(e) {
    e.preventDefault() //ไม่ให้มันเกิดการกระทำ default (ไม่ให้มันรีหน้าใหม่)

    const account = {
      fullName,
      username,
      email,
      password,
    }
    try {
      const { data } = await axios.post('http://localhost:5000/signup', account) // -> backend
      console.log(data)
    } catch (error) {
      alert(error)
      //   return
    }

    // window.location = '/' ### have any page

    setFullName('')
    setUsername('')
    setEmail('')
    setPassword('')
  }

  return (
    <div>
      <div className='container'>
        <div className='from-div'>
          <form onSubmit={signup}>
            {/*สมัคร*/}
            <input
              type='text'
              placeholder='Full Name'
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              className='from-control from-group'
            />
            <br />

            <input
              type='text'
              placeholder='Username'
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className='from-control from-group'
            />
            <br />

            <input
              type='text'
              placeholder='E-mail'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className='from-control from-group'
            />
            <br />

            <input
              type='password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className='from-control from-group'
            />

            <input
              type='submit'
              className='btn btn-danger btn-block'
              value='submit'
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
