'use client';  // Add this line at the top to mark as Client Component

import Navbar from '../components/Navbar'
import { useForm } from 'react-hook-form'

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-8">Contact</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Name is required' })}
              className="border rounded-md py-2 px-3 w-full"
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              {...register('email', { required: 'Email is required' })}
              className="border rounded-md py-2 px-3 w-full"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-medium mb-1">Message</label>
            <textarea
              id="message"
              {...register('message', { required: 'Message is required' })}
              className="border rounded-md py-2 px-3 w-full"
            />
            {errors.message && <p className="text-red-500">{errors.message.message}</p>}
          </div>
          <button type="submit" className="bg-emerald-800 text-white py-2 px-4 rounded-md hover:bg-emerald-900">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}