import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
  return (
    <nav className="bg-stone-700 border-stone-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="text-2xl font-bold text-stone-50 hover:text-stone-300">
          <span className='font-black-ops text-orange-600'>McCann</span> Fuels and Haulage
        </Link>
        <div className="block w-auto pb-4 text-xl">
          <ul className="flex font-medium p-0 mt-4 border-stone-50 rounded-lg space-x-8 rtl:space-x-reverse flex-row :mt-0 border-0">
            <li>
              <Link to="/" className="block rounded text-stone-50 hover:text-stone-300 p-0" aria-current="page">Home</Link>
            </li>
            <li> 
              <Link to="/fuel" className="block text-stone-50 rounded border-0 hover:text-stone-300 p-0">Fuel</Link>
            </li>
            <li>
              <Link to="/haulage" className="block text-stone-50 rounded border-0 hover:text-stone-300 p-0">Haulage</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
