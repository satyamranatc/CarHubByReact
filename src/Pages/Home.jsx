import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">The Car Hub</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Your ultimate destination for exploring the world's finest automobiles, from classic sedans to modern SUVs and everything in between.
          </p>
          <Link 
            to="/brands" 
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition duration-300 inline-block"
          >
            Explore Brands
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose The Car Hub?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Brand Selection</h3>
              <p className="text-gray-600">
                Access to all renowned car brands from around the world, including luxury, economy, and performance manufacturers.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">All Vehicle Types</h3>
              <p className="text-gray-600">
                Comprehensive collection of all car types including sedans, SUVs, coupes, convertibles, hatchbacks, and more.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Complete Model Listings</h3>
              <p className="text-gray-600">
                Detailed information on every model from each manufacturer, including specifications, features, and pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Categories</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Category 1 */}
            <div className="relative overflow-hidden rounded-xl group">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-64 flex items-center justify-center">
                <h3 className="text-xl font-bold text-white">Luxury Sedans</h3>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                <Link 
                  to="/category/luxury-sedans" 
                  className="bg-white text-gray-900 px-6 py-2 rounded font-medium transform translate-y-4 group-hover:translate-y-0 transition duration-300"
                >
                  View All
                </Link>
              </div>
            </div>
            
            {/* Category 2 */}
            <div className="relative overflow-hidden rounded-xl group">
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 h-64 flex items-center justify-center">
                <h3 className="text-xl font-bold text-white">Premium SUVs</h3>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                <Link 
                  to="/category/premium-suvs" 
                  className="bg-white text-gray-900 px-6 py-2 rounded font-medium transform translate-y-4 group-hover:translate-y-0 transition duration-300"
                >
                  View All
                </Link>
              </div>
            </div>
            
            {/* Category 3 */}
            <div className="relative overflow-hidden rounded-xl group">
              <div className="bg-gradient-to-r from-pink-500 to-red-500 h-64 flex items-center justify-center">
                <h3 className="text-xl font-bold text-white">Sports Cars</h3>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                <Link 
                  to="/category/sports-cars" 
                  className="bg-white text-gray-900 px-6 py-2 rounded font-medium transform translate-y-4 group-hover:translate-y-0 transition duration-300"
                >
                  View All
                </Link>
              </div>
            </div>
            
            {/* Category 4 */}
            <div className="relative overflow-hidden rounded-xl group">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 h-64 flex items-center justify-center">
                <h3 className="text-xl font-bold text-white">Electric Vehicles</h3>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                <Link 
                  to="/category/electric-vehicles" 
                  className="bg-white text-gray-900 px-6 py-2 rounded font-medium transform translate-y-4 group-hover:translate-y-0 transition duration-300"
                >
                  View All
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to find your dream car?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Explore our extensive collection of vehicles from all major manufacturers around the world.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/brands" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition duration-300"
            >
              Browse by Brand
            </Link>
            <Link 
              to="/types" 
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300"
            >
              Browse by Type
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}