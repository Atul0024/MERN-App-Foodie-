import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {

    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: "",
        geolocation: ""
    })

    const handlesubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/createuser', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, password: credentials.password, email: credentials.email, location: credentials.geolocation })
        });

        const json = await response.json();
        console.log(json);
        if (!json.success) {
            alert("Enter Valid Credentials")
        }
    }

    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handlesubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Address</label>
                        <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange} placeholder="Address"/>
                    </div>  
                    <button type="submit" className="m-3 btn btn-primary">Submit</button>
                    <Link to="/Login" className="m-3 btn btn-danger">Already a User</Link>
                </form>
            </div>
        </>
    )
}