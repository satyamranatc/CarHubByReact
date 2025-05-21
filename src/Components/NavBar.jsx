import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="bg-black text-white shadow-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Tagline */}
          <section className="flex flex-col">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              The Car Hub
            </h2>
            <p className="text-xs text-gray-400">
              Explore All The Cars From Whole World
            </p>
          </section>

          {/* Navigation Links */}
          <ul className="flex space-x-8">
            <li>
              <Link 
                to={"/"} 
                className="text-gray-300 hover:text-white transition duration-200 py-2 border-b-2 border-transparent hover:border-purple-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to={"/brands"} 
                className="text-gray-300 hover:text-white transition duration-200 py-2 border-b-2 border-transparent hover:border-purple-500"
              >
                Brands
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}