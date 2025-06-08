export default function VerticalLineForm() {
  return (
    <div className="flex flex-col items-start space-y-4 p-6 bg-white rounded-xl shadow-md border border-gray-100">
      <div className="relative pl-8 w-full">
        <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-slate-300 to-slate-100"></div>
        {['Postcode', 'Waste Type', 'Select Skip', 'Permit Check', 'Choose Date', 'Payment'].map((step, index) => (
          <div key={index} className="relative mb-10 last:mb-4 group">
            <div className="absolute -left-8 top-1.5 h-4 w-4 rounded-full bg-white border-2 border-slate-400 group-hover:border-teal-500 flex items-center justify-center transition-all duration-300">
              <div className="h-2 w-2 rounded-full bg-slate-300 group-hover:bg-teal-500 transition-all duration-300"></div>
            </div>
            <div className="pl-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Step {index + 1}</span>
              <h3 className="text-lg font-semibold text-slate-800 group-hover:text-teal-700 transition-colors duration-300">
                {step}
              </h3>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-6 mt-4 w-full border-t border-gray-100 pt-4">
        <button className="w-full px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-700 text-white font-medium rounded-lg shadow-md hover:from-teal-700 hover:to-blue-800 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">
          Continue to Next Step
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}