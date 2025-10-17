import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Code, Target, Brain } from 'lucide-react'

const SimpleCourse = () => {
  const [activeWeek, setActiveWeek] = useState(0)
  const [activeTab, setActiveTab] = useState('overview')

  const weeks = [
    { id: 1, title: "Week 1: HTML Fundamentals", topics: ["HTML Structure", "HTML Elements"] },
    { id: 2, title: "Week 2: CSS Basics", topics: ["CSS Introduction", "CSS Selectors"] },
    { id: 3, title: "Week 3: Layouts", topics: ["Flexbox", "CSS Grid"] },
    { id: 4, title: "Week 4: Responsive Design", topics: ["Media Queries", "Final Project"] }
  ]

  const tabs = [
    { id: 'overview', label: 'Course Overview', icon: BookOpen },
    { id: 'learn', label: 'Interactive Learning', icon: Brain },
    { id: 'quiz', label: 'Knowledge Check', icon: Target },
    { id: 'practice', label: 'Code Practice', icon: Code }
  ]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                HTML & CSS Fundamentals
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                Master web development from the ground up
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6">
                  Course Overview
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {weeks.map((week, index) => (
                    <motion.button
                      key={week.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveWeek(index)}
                      className={`p-6 rounded-xl border-2 transition-all text-left ${
                        activeWeek === index
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-500'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </div>
                        <h4 className="font-semibold text-slate-800 dark:text-slate-200">
                          {week.title}
                        </h4>
                      </div>
                      
                      <div className="space-y-2">
                        {week.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="text-sm text-slate-600 dark:text-slate-400">
                            • {topic}
                          </div>
                        ))}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'learn' && (
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                Interactive Learning
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Select a week and topic to start learning!
              </p>
            </div>
          )}

          {activeTab === 'quiz' && (
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                Knowledge Check
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Test your knowledge with interactive quizzes!
              </p>
            </div>
          )}

          {activeTab === 'practice' && (
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                Code Practice
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Practice coding with hands-on exercises!
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default SimpleCourse
