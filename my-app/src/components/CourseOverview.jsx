import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  BookOpen, 
  Clock, 
  Target, 
  Code, 
  CheckCircle, 
  Play,
  Users,
  Award,
  ChevronRight,
  Star
} from 'lucide-react'
import { htmlCssCourse } from '../data/html-css-course'
import { week3Layouts, week4Responsive } from '../data/html-css-course-weeks3-4'

const CourseOverview = () => {
  const [activeWeek, setActiveWeek] = useState(0)
  const [showDetails, setShowDetails] = useState(false)

  const allWeeks = [
    htmlCssCourse.modules[0], // Week 1
    htmlCssCourse.modules[1], // Week 2
    week3Layouts, // Week 3
    week4Responsive // Week 4
  ]

  const courseStats = {
    totalWeeks: 4,
    totalLessons: 16,
    totalHours: 32,
    difficulty: 'Beginner',
    completionRate: '95%',
    studentCount: '2,500+'
  }

  const learningOutcomes = [
    "Build semantic HTML structure for any website",
    "Master CSS styling and layout techniques",
    "Create responsive designs that work on all devices",
    "Implement modern CSS Grid and Flexbox layouts",
    "Develop a complete portfolio website from scratch",
    "Understand web accessibility and best practices"
  ]

  const weekTitles = [
    "Week 1: HTML Fundamentals",
    "Week 2: CSS Basics & Styling", 
    "Week 3: Layouts & Positioning",
    "Week 4: Responsive Design & Final Project"
  ]

  const renderWeekContent = (week) => (
    <motion.div
      key={week.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-700">
        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
          {week.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          {week.description || "Master the fundamentals of web development with hands-on projects and interactive learning."}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-600">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="font-semibold text-slate-800 dark:text-slate-200">Duration</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400">{week.duration}</p>
          </div>
          
          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-600">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-lg">
                <Target className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <span className="font-semibold text-slate-800 dark:text-slate-200">Level</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400">{week.level}</p>
          </div>
          
          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-600">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
                <BookOpen className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <span className="font-semibold text-slate-800 dark:text-slate-200">Topics</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400">{week.topics?.length || 0} topics</p>
          </div>
        </div>

        {week.topics && (
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
              What You'll Learn This Week:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {week.topics.map((topic, index) => (
                <motion.div
                  key={topic.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-600"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">
                        {topic.title}
                      </h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                        {topic.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-500">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {topic.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Target className="h-3 w-3" />
                          {topic.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Course Header */}
      <div className="text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium">
            <Award className="h-4 w-4" />
            Beginner Friendly
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            HTML & CSS Fundamentals
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Master the building blocks of web development. Learn to create beautiful, 
            responsive websites from scratch with comprehensive hands-on projects.
          </p>
        </motion.div>

        {/* Course Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto"
        >
          {[
            { icon: Clock, label: "Duration", value: `${courseStats.totalWeeks} weeks` },
            { icon: BookOpen, label: "Lessons", value: `${courseStats.totalLessons} lessons` },
            { icon: Target, label: "Level", value: courseStats.difficulty },
            { icon: Users, label: "Students", value: courseStats.studentCount },
            { icon: Star, label: "Rating", value: "4.9/5" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 text-center"
            >
              <stat.icon className="h-6 w-6 text-blue-500 mx-auto mb-2" />
              <div className="font-bold text-slate-800 dark:text-slate-200">{stat.value}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Learning Outcomes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700"
      >
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6">
          What You'll Master
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {learningOutcomes.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700 rounded-lg"
            >
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">{outcome}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Course Structure */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
            Course Structure
          </h2>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            {showDetails ? 'Hide Details' : 'Show Details'}
            <ChevronRight className={`h-4 w-4 transition-transform ${showDetails ? 'rotate-90' : ''}`} />
          </button>
        </div>

        {/* Week Navigation */}
        <div className="flex flex-wrap gap-2 mb-6">
          {weekTitles.map((title, index) => (
            <button
              key={index}
              onClick={() => setActiveWeek(index)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeWeek === index
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
              }`}
            >
              {title}
            </button>
          ))}
        </div>

        {/* Week Content */}
        <AnimatePresence mode="wait">
          {renderWeekContent(allWeeks[activeWeek])}
        </AnimatePresence>

        {showDetails && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">
                  Interactive Learning Features
                </h4>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li>• Hands-on coding exercises</li>
                  <li>• Interactive mind maps</li>
                  <li>• Step-by-step flowcharts</li>
                  <li>• Real-time code preview</li>
                  <li>• Progress tracking</li>
                </ul>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">
                  Final Project
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  Build a complete responsive portfolio website showcasing all your new skills.
                </p>
                <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400">
                  <Code className="h-4 w-4" />
                  <span>Portfolio Website Project</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white"
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Web Development Journey?</h2>
        <p className="text-xl mb-6 opacity-90">
          Join thousands of students who have mastered HTML & CSS with our comprehensive course.
        </p>
        <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
          <Play className="h-5 w-5" />
          Start Learning Now
        </button>
      </motion.div>
    </div>
  )
}

export default CourseOverview
