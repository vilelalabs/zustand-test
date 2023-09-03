"use client"
import { useState, useCallback, useEffect } from "react"
import useRegister from "@/hooks/useEmails"

export default function Home() {
  const { registers, addRegister, removeRegister } = useRegister()

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const handleSubscribe = useCallback((e: any) => {
    e.preventDefault()
    addRegister(name, email)
    e.target.reset()
  }, [addRegister, name, email])

  const handleDelete = useCallback((name: string, email: string) => {
    removeRegister(name, email)
  }, [removeRegister, name, email])


  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-24">
      <h1 className="text-4xl font-bold text-center">
        Welcome to
        <p className="ml-2 text-blue-600  mb-12">
          My Email List
        </p>
      </h1>
      <form
        onSubmit={e => handleSubscribe(e)}
        className="flex flex-col items-center justify-center"
      >

        <input
          className="w-96 h-12 px-4 mb-4 text-lg text-gray-700 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Enter your name"
          onChange={e => setName(e.target.value)}
        />
        <input

          className="w-96 h-12 px-4 mb-4 text-lg text-gray-700 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Enter your email address"
          onChange={e => setEmail(e.target.value)}


        />
        <button
          className="w-96 h-12 px-6 text-lg text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          type="submit"
        >
          Subscribe
        </button>
      </form>

      <div className="flex flex-col items-center justify-center mt-12">
        <h2 className="text-2xl font-bold text-center">
          Emails already subscribed:
        </h2>
        <div className="left-0 flex flex-col items-center justify-center gap-2 w-full mt-16 p-8">
          {registers.map((register, index) => (
            <div key={index} className="flex items-center justify-between w-full">
              <div className="flex flex-row items-center justify-between w-full  text-left">
                <div className="mr-4 w-1/3">
                  {register.name}
                </div>
                <div className="mr-4 w-1/3">
                  {register.email}
                </div>
                <div className="w-1/3 self-end flex justify-end">
                  <button className="ml-4 px-2 py-1 text-sm text-white bg-red-600 rounded-lg hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
                    onClick={e => handleDelete(register.name, register.email)}
                  >
                    Delete
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </main>
  )
}
