import React from 'react'
import img from "../../assets/contactpage.svg"

const ResidentialContact = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = {
      name,
      email,
      message
    }

    localStorage.setItem('user', JSON.stringify(user))
    alert("Your message has been sent successfully")

    // Optional: clear the form
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <>
      <div className='min-h-screen flex-col items-center justify-center md:mx-32 mx-5 mt-10'>
        <header title1="contact" title2="Us">
          <div className='flex flex-col md:flex-row items-center justify-between w-full'>
            <form onSubmit={handleSubmit} className='w-full md:w-2/5 space-y-5 pt-20'>
              <h1 className='text-3xl font-bold text-center'>Get in Touch</h1>
              <div className='flex flex-col'>
                <label className='text-xl font-semibold'>Name</label><br />
                <input
                  type="text"
                  name='username'
                  required
                  value={name}
                  className='border-2 border-gray-300 rounded-md p-2 w-full'
                  placeholder='Enter your name'
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='mt-5'>
                <label className='text-xl font-semibold'>Email</label><br />
                <input
                  type="email"
                  name='email'
                  required
                  value={email}
                  className='border-2 border-gray-300 rounded-md p-2 w-full'
                  placeholder='Enter your email'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='mt-5'>
                <label className='text-xl font-semibold'>Message</label><br />
                <textarea
                  name="message"
                  required
                  value={message}
                  rows="5"
                  className='border-2 border-gray-300 rounded-md p-2 w-full'
                  placeholder='Enter your message'
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className='mt-5'>
                <button
                  type="submit"
                  className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700'
                >
                  Send Message
                </button>
              </div>
            </form>
            <div className='w-full md:w-2/5 flex justify-center items-center'>
              <img src={img} alt="Contact" />
            </div>
          </div>
        </header>
      </div>
    </>
  )
}

export default ResidentialContact
