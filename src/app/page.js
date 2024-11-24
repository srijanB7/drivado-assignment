import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto p-8">
        {/* Header Section */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Welcome to
          <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Company and User Directory
          </span>
        </h1>

        {/* Cards Container */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {/* Company Card */}
          <Link 
            href="/companies" 
            prefetch={true}
            className="group relative bg-white p-8 rounded-xl shadow-sm hover:shadow-xl 
                     transition-all duration-300 border border-gray-100"
          >
            <div className="flex flex-col items-center">
              {/* Icon */}
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center 
                          mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg 
                  className="w-8 h-8 text-blue-600"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
                  />
                </svg>
              </div>
              
              <h2 className="text-2xl font-semibold text-gray-700 mb-2 
                          group-hover:text-blue-600 transition-colors duration-200">
                Companies
              </h2>
              
              <p className="text-gray-500 text-center mb-4">
                Browse our complete directory of registered companies
              </p>
              
              <span className="inline-flex items-center text-blue-600 
                           group-hover:translate-x-1 transition-transform duration-200">
                View Companies
                <svg 
                  className="w-4 h-4 ml-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </span>
            </div>
          </Link>

          {/* Users Card */}
          <Link 
            href="/users" 
            prefetch={true}
            className="group relative bg-white p-8 rounded-xl shadow-sm hover:shadow-xl 
                     transition-all duration-300 border border-gray-100"
          >
            <div className="flex flex-col items-center">
              {/* Icon */}
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center 
                          mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg 
                  className="w-8 h-8 text-indigo-600"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" 
                  />
                </svg>
              </div>
              
              <h2 className="text-2xl font-semibold text-gray-700 mb-2 
                          group-hover:text-indigo-600 transition-colors duration-200">
                Users
              </h2>
              
              <p className="text-gray-500 text-center mb-4">
                Access our complete list of registered users
              </p>
              
              <span className="inline-flex items-center text-indigo-600 
                           group-hover:translate-x-1 transition-transform duration-200">
                View Users
                <svg 
                  className="w-4 h-4 ml-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}