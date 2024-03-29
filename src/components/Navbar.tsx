import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="text-xl font-bold text-gray-900 hover:text-blue-700">
          McCann Fuels and Haulage
        </Link>
        <div className="block w-auto">
          <ul className="flex font-medium p-0 mt-4 border-gray-100 rounded-lg space-x-8 rtl:space-x-reverse flex-row :mt-0 border-0">
            <li>
              <Link to="/" className="block rounded bg-transparent text-blue-700 p-0" aria-current="page">Home</Link>
            </li>
            <li> 
              <Link to="/fuel" className="block text-gray-900 rounded hover:bg-gray-100 hover:bg-transparent border-0 hover:text-blue-700 p-0">Services</Link>
            </li>
            <li>
              <Link to="/haulage" className="block text-gray-900 rounded hover:bg-gray-100 hover:bg-transparent border-0 hover:text-blue-700 p-0">Pricing</Link>
            </li>
            <li>
              <Link to="/" className="block text-gray-900 rounded hover:bg-gray-100 hover:bg-transparent border-0 hover:text-blue-700 p-0">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
