import React from 'react'

function Contact() {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/0ac4f03c-2057-4b64-82c5-b71960eb8ca0" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - sahalok001@gmail.com</p>
        </div>
        <input className='p-2 bg-[#ccd6fc]' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6fc]' type="text" placeholder='Email' name='email' />
        <textarea className=' bg-[#ccd6fc] p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 my-8 py-3 px-4 mx-auto flex items-center'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact