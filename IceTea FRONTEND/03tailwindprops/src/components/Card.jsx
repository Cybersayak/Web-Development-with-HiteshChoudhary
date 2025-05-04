import React from 'react'

function Card({username = "No Card Name"}) {
  return (
    
      <div className="max-w-md md:max-w-3xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out m-5">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-60 w-full object-cover md:h-full md:w-60"
              src="https://t4.ftcdn.net/jpg/08/02/77/61/240_F_802776120_iFq6AF8KjW9UZRVPiI2JCZcYbbHdMzG3.jpg"
              alt="Radha Krishna"
            />
          </div>
          <div className="p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                Radhe Krishna
              </h2>
              <h3 className="text-sky-500 font-semibold text-lg mb-2">
                Apni Thakurani Sri Radhika Rani
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                A deep dive into the nuances of social structures and the coding patterns that reflect them.
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <span className="text-pink-500">{username}</span>
              <span>2025</span>
            </div>
          </div>
        </div>
      </div>
  )
} 

export default Card
