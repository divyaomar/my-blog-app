import React from 'react'

const CreateContent = () => {
  return (
  <div className="bg-orange-50 py-12 px-2 sm:px-8">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
    
    {/* LEFT SIDE - TEXT SECTION */}
    <div>
      <span className="text-orange-600 text-[16px] font-sans">Don't Miss</span>
      <h1 className="text-4xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">
        Revolutionize Your Digital Experience Today
      </h1>
      <p className="text-gray-600 text-[15px] mb-6">
        Strategia accelerates your business growth through innovative solutions and cutting-edge technology. 
        Join thousands of satisfied customers who have transformed their operations.
      </p>

      {/* BADGES */}
      <div className="flex flex-wrap gap-3 mb-6">
        <span className="bg-white border text-[13px] px-6 py-4 rounded-lg shadow-sm text-orange-600 font-medium">✅ Premium Support</span>
        <span className="bg-white border text-[13px] px-6 py-4 rounded-lg shadow-sm text-orange-600 font-medium">✅ Cloud Integration</span>
        <span className="bg-white border text-[13px] px-6 py-4 rounded-lg shadow-sm text-orange-600 font-medium">✅ Real-time Analytics</span>
      </div>

      {/* BUTTONS */}
      <div className="flex flex-wrap gap-4 text-[14px] font-sans">
        <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600">
          Start Free Trial
        </button>
        <button className="border border-orange-400 text-orange-500 px-6 py-2 rounded-lg font-semibold hover:bg-orange-50">
          Learn More
        </button>
      </div>
    </div>

    {/* RIGHT SIDE - IMAGE */}
    <div className="flex justify-center">
      <div className="relative">
        <img 
          src="https://bootstrapmade.com/content/demo/Blogy/assets/img/misc/misc-1.webp" 
          alt="hero" 
          className="rounded-3xl w-[600px] h-[400px]"
        />
        <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-md text-sm font-medium text-orange-600 text-[16px]">
          📈 245% Growth Rate
        </div>
      </div>
    </div>

  </div>
</div>


  )
}

export default CreateContent;