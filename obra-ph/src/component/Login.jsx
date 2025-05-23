import React from 'react'

function Login() {
  return (
    <>
      <div className="flex bg-white items-center justify-center border-2 border-gray-300 rounded-lg shadow-lg w-[800px] h-[400px]">
        {/* Login Form */}
        <div className='flex flex-col justify-center items-center p-8'>
          <h1 className="text-2xl mb-4 text-[#595F3B]">Sign in</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 text-[#595F3B]">Email</label>
              <input type="text" id="email" name="email" className="border-2 border-gray-300 rounded-lg shadow-lg p-2 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-1 text-[#595F3B]">Password</label>
              <input type="password" id="password" name="password" className="border-2 border-gray-300 rounded-lg shadow-lg p-2 w-full" />
            </div>
            <div className="mb-4">
              <input type="checkbox" id="remember" name="remember" className="mr-2" />
              <label htmlFor="remember" className="text-[#595F3B]">Remember me</label>
            </div>
            <div className='flex flex-col items-center'>
              <button type="submit" className="bg-[#595F3B] text-white px-4 py-2 rounded">Login</button>
              <p>No account yet?</p>
              <a href="" className='text-[#595F3B]'><u>Sign up</u></a>
            </div>
          </form>
        </div>

        {/* Divider Line */}
        <div className="w-px h-64 bg-gray-300 mx-8" />

        {/* Image */}
        <div className='p-8 flex justify-center items-center'>
          <img src="src/assets/header-logo.png" alt="Header Logo" className="h-[200px]" />
        </div>
      </div>
    </>
  )
}

export default Login
