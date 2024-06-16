import React, { useState } from "react";
import {Link} from 'react-router-dom';

const Login = () => {
  const [rememberlogin,setrememberlogin] =useState(true);
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const handleformSubmit=(e)=>{
    e.preventDefault();
    console.log(email);
    console.log(password);

  }
  return (
    <div className="w-full h-screen">
       <img 
        className="absolute hidden object-cover w-full h-full sm:block"
        alt=""
        src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/9f3c8fd3-4adc-457c-b2c8-97df3ea06bde/PK-en-20240219-popsignuptwoweeks-perspective_alpha_website_small.jpg"
      />
      <div className="top-0 left-0 w-full h-screen bg-black/70">
        <div className="fixed z-20 w-full px-4 py-24">
          <div className="max-w-[450px] h-[600px] ax-auto bg-black/80 rounded-lg">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-nsans-bold">Login</h1>
              <form onSubmit={handleformSubmit}>
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value)}}
                />
                <br />
                <button type="submit" className="p-3 my-6 bg-red-600 rounded font-nsans-bold">
                  Login
                </button>
                <div className="flex items-center justify-between text-gray-600">
                  <p>
                    <input type="checkbox" className="mr-2" checked={rememberlogin}
                    onChange={(e)=>{setrememberlogin(!rememberlogin)}}/>
                    Remember Me
                  </p>
                  <p>Need help?</p>
                </div>
                <p className="my-4">
                  <span className="text-gray-600">New to to Netflix?</span>
                  <Link to='/signup'>Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
 
    </div>
  );
}

export default Login
