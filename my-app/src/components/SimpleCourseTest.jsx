import React from 'react'

const SimpleCourseTest = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-800 mb-6">
          HTML & CSS Fundamentals Course
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">
            Course Overview
          </h2>
          <p className="text-slate-600 mb-4">
            Master web development from absolute beginner to building professional websites
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Duration</h3>
              <p className="text-blue-600">4 weeks</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">Level</h3>
              <p className="text-green-600">Beginner</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">
            Course Structure
          </h2>
          
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Week 1: HTML Fundamentals
              </h3>
              <p className="text-slate-600 mb-2">
                Learn the building blocks of web development
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">2 hours</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Beginner</span>
              </div>
            </div>
            
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Week 2: CSS Fundamentals
              </h3>
              <p className="text-slate-600 mb-2">
                Master CSS styling and layout techniques
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">3 hours</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Beginner</span>
              </div>
            </div>
            
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Week 3: CSS Layouts and Positioning
              </h3>
              <p className="text-slate-600 mb-2">
                Learn modern CSS layout techniques with Flexbox and Grid
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">4 hours</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Beginner</span>
              </div>
            </div>
            
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Week 4: Responsive Design and Final Project
              </h3>
              <p className="text-slate-600 mb-2">
                Create responsive websites and build your final portfolio project
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">5 hours</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Beginner</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-slate-600 mb-4">
            This course will take you from absolute beginner to building professional websites.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            Start Course
          </button>
        </div>
      </div>
    </div>
  )
}

export default SimpleCourseTest

