import React from 'react'
import { useParams, Link } from 'react-router-dom'

export default function Cars({allCars}) {
  let {brandName, modelName} = useParams();

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="text-gray-700 hover:text-indigo-600">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="text-gray-400 mx-2">/</span>
                <Link to="/brands" className="text-gray-700 hover:text-indigo-600">
                  Brands
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="text-gray-400 mx-2">/</span>
                <Link to={`/brands/${brandName}/models`} className="text-gray-700 hover:text-indigo-600">
                  {brandName}
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="text-gray-400 mx-2">/</span>
                <span className="text-gray-500 font-medium">{modelName}</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">{brandName}</span> {modelName}
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose from our premium collection of {modelName} variants
        </p>
        <div className="mt-4 text-sm text-gray-500">
          {allCars[brandName][modelName].length} Variants Available
        </div>
      </div>

      {/* Cars Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCars[brandName][modelName].map((car, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden group">
              {/* Car Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-4 right-4">
                  <button className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-black bg-opacity-75 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {brandName}
                  </span>
                </div>
              </div>

              {/* Car Details */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {car.name}
                </h2>
                
                {/* Price */}
                <div className="mb-4">
                  <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {car.price}
                  </span>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Engine
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Automatic
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                      </svg>
                      Fuel Efficient
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Safety
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition duration-300">
                    View Details
                  </button>
                  <button className="bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition duration-300">
                    Compare
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Buttons */}
      <div className="mt-16 flex justify-center space-x-4">
        <Link 
          to={`/brands/${brandName}/models`}
          className="inline-flex items-center bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to {brandName} Models
        </Link>
        <Link 
          to="/brands"
          className="inline-flex items-center bg-white text-gray-700 border-2 border-gray-300 px-6 py-3 rounded-lg font-medium hover:border-indigo-300 hover:text-indigo-600 transition duration-300"
        >
          All Brands
        </Link>
      </div>

      {/* Model Info Section */}
      <div className="mt-16 bg-black text-white py-12">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-2xl font-bold mb-4">
            Premium <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">{brandName} {modelName}</span> Collection
          </h3>
          <p className="text-gray-300 mb-8">
            Discover the perfect {modelName} variant that matches your style and requirements. Each model comes with premium features and exceptional performance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-2">
                {allCars[brandName][modelName].length}
              </div>
              <p className="text-gray-300">Available Variants</p>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <p className="text-gray-300">Authentic Models</p>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <p className="text-gray-300">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}