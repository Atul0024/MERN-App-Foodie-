import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: ""
  });

  let navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/Loginuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password: credentials.password, email: credentials.email })
    });

    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter Valid Credentials")
    }

    if (json.success) {
      navigate("/")
    }
  }

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  return (
    <div className="container">
      <form onSubmit={handlesubmit}>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} placeholder="Password" />
        </div>
        <button type="submit" className="m-3 btn btn-primary">Log in</button>
        <Link to="/createuser" className="m-3 btn btn-danger">I am a New User</Link>
      </form>
    </div>
  )
}
