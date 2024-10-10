import React from 'react'
import Signup from './Signup'

function Login() {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Login</h3>

    {/* Email */}
    <div className='mt-5 space y-2'>
      <span>Email</span><br/>
      <input type="email" placeholder='enter your email' className='w-80 px-3 py-1 border rounded-md outline-none'/><br/>
    </div>

    {/* Password  */}
    <div className='mt-5 space y-2'>
    <span>Password</span><br/>
    <input type="text" placeholder='enter your password' className='w-80 px-3 py-1 border rounded-md outline-none'/>
    </div>
    <div className='flex justify-around mt-4'>
      {/* Button */}
      <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700'>Login</button>
      <p>Not registered?{" "} <a href='/Signup' className='underline text-blue-500 cursor-pointer'>Signup</a>{" "}</p>
    </div>
  </div>
</dialog>
    </div>
  )
}

export default Login
