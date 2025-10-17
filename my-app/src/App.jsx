import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import CoursePlayer from './components/CoursePlayer'
import ParticleBackground from './components/ParticleBackground'
import { curriculumData } from './data/curriculum'
import { htmlCssCourse } from './data/html-css-course'
import { week3Layouts, week4Responsive } from './data/html-css-course-weeks3-4'
import HTMLCSSCourseDashboard from './components/HTMLCSSCourseDashboard'
import TestCourse from './components/TestCourse'
import SimpleCourse from './components/SimpleCourse'
import ComprehensiveCourseDashboard from './components/ComprehensiveCourseDashboard'
import SimpleCourseTest from './components/SimpleCourseTest'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [currentModule, setCurrentModule] = useState(null)
  const [currentTopic, setCurrentTopic] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for smooth entrance
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full mx-auto mb-4"
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-3xl font-bold text-white mb-2"
          >
            ZOCC Learning
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-white/70"
          >
            Preparing your learning experience...
          </motion.p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <ParticleBackground />
      <Router>
        <div className="flex h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 relative z-10">
          <Sidebar 
            curriculum={curriculumData}
            currentModule={currentModule}
            setCurrentModule={setCurrentModule}
            currentTopic={currentTopic}
            setCurrentTopic={setCurrentTopic}
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
          />
          <main className="flex-1 overflow-hidden relative">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Dashboard curriculum={curriculumData} />} />
                <Route path="/html-css-course" element={<SimpleCourseTest />} />
                <Route 
                  path="/course/:moduleId/:topicId" 
                  element={
                    <CoursePlayer 
                      curriculum={curriculumData}
                      currentModule={currentModule}
                      currentTopic={currentTopic}
                    />
                  } 
                />
              </Routes>
            </AnimatePresence>
          </main>
        </div>
      </Router>
    </div>
  )
}

export default App
