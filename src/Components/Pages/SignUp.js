// import React from 'react';


// export default function SignUp() {
//   return (
//     <div>
//       <form>
//           <div className='form_sign_up'>
//             <h2>Sign Up</h2>
//             <h5>Create an account for free</h5><br/>
//           </div>
//           <div className='form_gmt'>
//             <h5 className='form_border'><img src="https://img.icons8.com/fluency/30/000000/google-logo.png"/> Sign up with Google</h5>
//             <h5 className='form_border'><img src="https://img.icons8.com/fluency/30/000000/facebook.png"/> Sign up with Facebook</h5>
//             <h5 className='form_border'><img src="https://img.icons8.com/fluency/30/000000/twitter.png"/>Sign up with Twitter</h5>
//           </div>
//           <div className='form_acceptbox'><input className='form_checkbox' type='checkbox'/>
//           &nbsp;I'm not interested in updates about new products and services.
//           </div>
//           <input className='form_submit' value='Sign In' type='submit'/>
//       </form>
//     </div>
//   )
// }

import React, { useState } from "react"
import '../Sup.css';

export default function SignUp() {
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
              <button> Sign Up </button>
              </span>
            </div>
            <br></br>
            <br></br>
            <div className="form-group mt-3">
              <label>Email address : </label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <br></br>
            <div className="form-group mt-3">
              <label>Password : </label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <br></br>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>

            </div>
            <br></br>
            <p className="text-center mt-2">
               <a href="#">Forgot password ?</a>
            </p>
          </div>
          <br></br>
        </form>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              <button> Sign In</button>
              
            </span>
          </div>
          <br></br>
          <div className="form-group mt-3">
            <label>Full Name :</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Eg: Praveen"
            />
          </div>
          <br></br>
          <div className="form-group mt-3">
            <label>Email address :</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <br></br>
          <div className="form-group mt-3">
            <label>Password :</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <br></br>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <br></br>
          <p className="text-center mt-2">
             <a href="#">Forgot password ?</a>
          </p>
        </div>
      </form>
    </div>
  )
}