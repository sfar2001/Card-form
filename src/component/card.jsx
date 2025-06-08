import React, { useState } from 'react';

const Card = ({size, period, price, allowed}) => {
  const [selected, setSelected] = useState(false);

  return (
    <div className="card-3d max-w-md w-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden transition-all hover:shadow-2xl relative border border-slate-700">
      <div className="floating-badge absolute -top-1 -right-3 bg-gradient-to-r from-teal-600 to-blue-700 py-2 px-4 rounded-full shadow-lg z-10">
        <span className="text-xs font-bold text-white tracking-wider">POPULAR</span>
      </div>
      
      <div className="p-8 text-center relative z-0">
        <div className="mx-auto mb-6 w-20 h-20 bg-slate-700/50 rounded-2xl flex items-center justify-center shadow-inner border border-slate-600">
         
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 7h-1V6a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3ZM9 6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H9Zm10 12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1Z"/>
            <path d="M10 10h1v5h-1zM13 10h1v5h-1z"/>
          </svg>
        </div>
        
        <h3 className="text-2xl font-bold text-white">{size} Yards</h3>
        <p className="mt-2 text-slate-300">{period} Day hire period </p>
        
        <div className="mt-6 relative">
          <div className="absolute -inset-1 bg-teal-500/20 blur rounded-lg"></div>
          <div className="relative bg-gradient-to-r from-slate-700/50 to-slate-800/50 p-4 rounded-lg border border-slate-700">
            <span className="text-4xl font-bold text-white">{price}£</span>
          </div>
        </div>
        
        <button 
          className={`mt-8 w-full ${
            selected 
              ? 'bg-teal-600 text-white' 
              : 'bg-slate-700 text-white hover:bg-slate-600'
            } py-3 px-6 rounded-xl font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl`}
          onClick={() => setSelected(!selected)}
        >
          {selected ? 'Selected' : 'Select'}
        </button>
      </div>
      
      <div className="bg-slate-800/60 border-t border-slate-700 px-6 py-6">
        <ul className="space-y-3">
          <li className="flex items-center">
            <div className="bg-teal-500/10 p-1 rounded-full mr-3">
              <svg className="h-5 w-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span className="text-slate-300">{allowed} on road</span>
          </li>
         
          <li className="flex items-center">
            <div className="bg-teal-500/10 p-1 rounded-full mr-3">
              <svg className="h-5 w-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span className="text-slate-300">24/7 Priority support</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Card;