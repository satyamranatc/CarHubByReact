import React from 'react'
import { Link } from 'react-router-dom'

export default function Brands({allCars}) {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Car <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Brands</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore All The Brands From Around The World
        </p>
      </div>

      {/* Brands Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {
            Object.keys(allCars).map((brand, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group">
                {/* Brand Logo Placeholder */}
                <div className="h-32 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center border-b">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-700">
                      {brand.charAt(0).toUpperCase()}
                    </span>
                  </div>
                </div>
                
                {/* Brand Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {brand}
                  </h2>
                  <p className="text-sm text-gray-500 text-center mb-4">
                    {Object.keys(allCars[brand]).length} Models Available
                  </p>
                  
                  <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition duration-300 transform group-hover:scale-105">
                   <Link to={`${brand}/models`}>View Models</Link>
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </section>

      {/* Stats Section */}
      <div className="mt-16 bg-black text-white py-12">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-2xl font-bold mb-8">Discover The World's Finest Automobiles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-2">
                {Object.keys(allCars).length}+
              </div>
              <p className="text-gray-300">Premium Brands</p>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-2">
                {Object.values(allCars).reduce((total, brand) => total + Object.keys(brand).length, 0)}+
              </div>
              <p className="text-gray-300">Car Models</p>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <p className="text-gray-300">Coverage</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}