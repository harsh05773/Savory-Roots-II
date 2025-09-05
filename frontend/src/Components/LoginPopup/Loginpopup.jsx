import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'

const Loginpopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Sign Up")
    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-input">
                    {currState === "Login" ? <></> : <input type="text" placeholder='Name' required />}
                    <input type="text" placeholder='Email' required />
                    <input type="text" placeholder='Password' required />
                </div>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to terms of use and privacy policy.</p>
                </div>
                <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
                {currState === "Login" ?
                    <p>To create a new account <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p> :
                    <p>Already have an account <span onClick={()=>setCurrState("Login")}>Click here</span></p>}
            </form>
        </div>
    )
}

export default Loginpopup