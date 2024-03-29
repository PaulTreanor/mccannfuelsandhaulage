import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <main className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-xl lg:text-3xl text-center font-bold">Page not found.</h1>
      <p className="text-lg text-gray-700 mt-4">We can't find the page you're looking for.</p>
      <Link to="/" className="mt-6 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg text-sm px-5 py-2.5">
        Go back home
      </Link>
    </main>
  )
}

export default NotFoundPage
