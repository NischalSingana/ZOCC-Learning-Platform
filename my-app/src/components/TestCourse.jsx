import React from 'react'

const TestCourse = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-4">
          HTML & CSS Course
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          This is a test to see if the route is working!
        </p>
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
            Course Features
          </h2>
          <ul className="text-left space-y-2 text-slate-600 dark:text-slate-400">
            <li>✅ 4 Weeks of Content</li>
            <li>✅ 16 Interactive Lessons</li>
            <li>✅ Hands-on Projects</li>
            <li>✅ Quizzes and Assessments</li>
            <li>✅ Final Portfolio Project</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TestCourse
