import React from 'react'

function EmailSubscription() {
  return (
    <div className='bg-black text-white p-10'>
      <h3 className='text-center text-3xl mb-2' >enter your email to get exclusive offer !</h3>
      <form className='text-center '>
      <input className='border border-indigo-300 mr-3 w-80' type='text' placeholder='email address'></input>
      <button className='border border-indigo-300  bg-red-700'>subscribe</button>
      </form>
      
    </div>
  )
}

export default EmailSubscription;
