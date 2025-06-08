import { fetchskip } from './api/api'
import { useEffect, useState } from 'react'
import Card from './component/card'
import VerticalLineForm from './component/VerticalLineForm'
import React from 'react'

function Skips() {
  const [skips, setSkips] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchskip();
      setSkips(data.skips); // Ensure skips is set to the correct array
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 min-h-screen p-4 md:p-8">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/3">
            <div className="lg:sticky lg:top-8">
              <div className="bg-white rounded-xl shadow-xl p-6">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Order Process</h2>
                <p className="text-slate-600 mb-6">Complete these steps to book your skip</p>
                <VerticalLineForm />
              </div>
              
         
              <div className="mt-6 bg-gradient-to-br from-teal-900 to-blue-900 rounded-xl p-6 text-white shadow-xl">
                <h3 className="font-bold text-lg mb-3">Why choose us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-teal-400 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Next-day delivery available.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-teal-400 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>No hidden fees.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-teal-400 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>24/7 customer support.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-white mb-2">Available Skips</h1>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Select the perfect skip for your project.
              </p>
            </div>
            
            {skips.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skips.map(skip => (
                  <Card
                    key={skip.id}
                    size={skip.size}
                    period={skip.hire_period_days}
                    price={skip.price_before_vat}
                    allowed={skip.allowed_on_road ? "Allowed" : "Not Allowed"}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-slate-800/50 rounded-2xl p-12 text-center border border-slate-700">
                <div className="flex justify-center mb-6">
                  <div className="bg-slate-700/50 p-4 rounded-full">
                    <svg className="h-12 w-12 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Loading Available Skips</h3>
                <p className="text-slate-400 max-w-md mx-auto">
                  We're retrieving the best skip options for your location and requirements.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skips