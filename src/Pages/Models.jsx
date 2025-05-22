import React from 'react'
import { useParams, Link } from 'react-router-dom'

export default function Models({allCars}) {
    let {brandName} = useParams();
    
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
                        <li aria-current="page">
                            <div className="flex items-center">
                                <span className="text-gray-400 mx-2">/</span>
                                <span className="text-gray-500 font-medium">{brandName}</span>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>

            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    All Models From <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">{brandName}</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Select Your Favorite Model
                </p>
                <div className="mt-4 text-sm text-gray-500">
                    {Object.keys(allCars[brandName]).length} Models Available
                </div>
            </div>

            {/* Models Grid */}
            <section className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {
                        Object.keys(allCars[brandName]).map((model, i) => (
                            <div key={i} className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group">
                                {/* Model Image Placeholder */}
                                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                        <span className="text-xs text-gray-500">Model Image</span>
                                    </div>
                                </div>

                                {/* Model Content */}
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        {model}
                                    </h3>
                                
                                    
                                    <div className="flex space-x-2">
                                        <button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition duration-300 text-sm">
                                            View Details
                                        </button>
                                        <button className="px-4 py-2 border-2 border-gray-200 text-gray-600 rounded-lg hover:border-indigo-300 hover:text-indigo-600 transition duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>

            {/* Back to Brands Section */}
            <div className="mt-16 text-center">
                <Link 
                    to="/brands" 
                    className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition duration-300"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to All Brands
                </Link>
            </div>

            {/* Brand Info Section */}
            <div className="mt-16 bg-black text-white py-12">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h3 className="text-2xl font-bold mb-4">
                        Discover More About <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">{brandName}</span>
                    </h3>
                    <p className="text-gray-300 mb-8">
                        Explore detailed specifications, features, and pricing for all {brandName} models in our comprehensive database.
                    </p>
                    <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                        {Object.keys(allCars[brandName]).length} Models Available
                    </div>
                </div>
            </div>
        </div>
    )
}