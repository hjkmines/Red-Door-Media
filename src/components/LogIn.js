import React, { Component } from 'react'; 
import './logIn.css'; 

class LogIn extends Component {

    render() {
        return (
            <body>
            <div className='body'>
                <div className='header'>
                    <header className="d-flex justify-content-center" ><h1><strong>RedDoor Media</strong></h1></header>
                    <h2 className="d-flex justify-content-center line-1 anim-typewriter">Browse all your favorite content all in one place.</h2>
                </div>

                <form className='login d-flex justify-content-center flex-column w-25 p-3'>
                    <label><strong>E-mail: </strong></label>
                    <input className='rounded' type='text' /> 
                    <label className='password'><strong>Password: </strong></label>
                    <input className='rounded' type='password' /> 
                    <input className='btn btn-danger border border-dark' type='submit' /> 
                </form>
            </div>
            </body>
        )
    }
} 

export default LogIn;