import React, { useState } from 'react'
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
  Star,
  Brain,
  GitBranch,
  Layout,
  Smartphone,
  FileText,
  Video,
  Edit3,
  Zap
} from 'lucide-react'
import { completeCourse } from '../data/complete-course'

const ComprehensiveCourseDashboard = () => {
  const [activeWeek, setActiveWeek] = useState(0)
  const [activeTopic, setActiveTopic] = useState(0)
  const [activeTab, setActiveTab] = useState('overview')
  const [showCodeEditor, setShowCodeEditor] = useState(false)
  const [userCode, setUserCode] = useState('')

  // Debug logging
  console.log('Complete Course:', completeCourse)
  console.log('Weeks:', completeCourse?.weeks)
  console.log('Active Week:', activeWeek)
  console.log('Current Week:', completeCourse?.weeks?.[activeWeek])

  const currentWeek = completeCourse?.weeks?.[activeWeek]
  const currentTopic = currentWeek?.topics?.[activeTopic]

  const weekIcons = [
    { icon: BookOpen, color: 'from-blue-500 to-cyan-500' },
    { icon: Code, color: 'from-green-500 to-emerald-500' },
    { icon: Layout, color: 'from-purple-500 to-pink-500' },
    { icon: Smartphone, color: 'from-orange-500 to-red-500' }
  ]

  const tabs = [
    { id: 'overview', label: 'Course Overview', icon: BookOpen },
    { id: 'learn', label: 'Interactive Learning', icon: Brain },
    { id: 'quiz', label: 'Knowledge Check', icon: Target },
    { id: 'practice', label: 'Code Practice', icon: Code }
  ]

  const renderOverview = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 pb-8"
    >
      {/* Course Header */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-700">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-4">
          HTML & CSS Fundamentals - Complete 4-Week Course
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Master web development from absolute beginner to building professional websites
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-600">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="font-semibold text-slate-800 dark:text-slate-200">Duration</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400">{completeCourse.duration}</p>
          </div>
          
          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-600">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-lg">
                <BookOpen className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <span className="font-semibold text-slate-800 dark:text-slate-200">Lessons</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400">{completeCourse.totalLessons} lessons</p>
          </div>
          
          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-600">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
                <Target className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <span className="font-semibold text-slate-800 dark:text-slate-200">Level</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400">{completeCourse.level}</p>
          </div>
          
          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-600">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-orange-100 dark:bg-orange-900/50 rounded-lg">
                <Zap className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              </div>
              <span className="font-semibold text-slate-800 dark:text-slate-200">Hours</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400">{completeCourse.totalHours} hours</p>
          </div>
        </div>
      </div>

      {/* Week Navigation */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6">
          Course Structure
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Hardcoded weeks for testing */}
          {[
            { id: "week-1", title: "Week 1: HTML Fundamentals", description: "Learn the building blocks of web development" },
            { id: "week-2", title: "Week 2: CSS Fundamentals", description: "Master CSS styling and layout techniques" },
            { id: "week-3", title: "Week 3: CSS Layouts", description: "Learn modern CSS layout techniques" },
            { id: "week-4", title: "Week 4: Responsive Design", description: "Create responsive websites" }
          ].map((week, index) => {
            const Icon = weekIcons[index]?.icon || BookOpen
            const isActive = activeWeek === index
            const isCompleted = index < activeWeek
            
            return (
              <motion.button
                key={week.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveWeek(index)}
                className={`p-6 rounded-xl border-2 transition-all ${
                  isActive
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : isCompleted
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                    : 'border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700'
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${weekIcons[index]?.color || 'from-gray-500 to-gray-600'}`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200">
                      Week {index + 1}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {week.title}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">Progress</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      {isCompleted ? '100%' : isActive ? '25%' : '0%'}
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all ${
                        isCompleted ? 'bg-green-500' : isActive ? 'bg-blue-500' : 'bg-slate-300'
                      }`}
                      style={{ width: isCompleted ? '100%' : isActive ? '25%' : '0%' }}
                    />
                  </div>
                </div>
                
                {isCompleted && (
                  <div className="flex items-center gap-2 mt-3 text-green-600">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm font-medium">Completed</span>
                  </div>
                )}
              </motion.button>
            )
          }) : (
            <div className="col-span-full text-center py-8">
              <p className="text-slate-600 dark:text-slate-400">Loading course content...</p>
            </div>
          )}
        </div>
      </div>

      {/* Current Week Details */}
      {true && (
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-3 rounded-lg bg-gradient-to-r ${weekIcons[activeWeek]?.color || 'from-gray-500 to-gray-600'}`}>
              {React.createElement(weekIcons[activeWeek]?.icon || BookOpen, { className: "h-6 w-6 text-white" })}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                {["Week 1: HTML Fundamentals", "Week 2: CSS Fundamentals", "Week 3: CSS Layouts", "Week 4: Responsive Design"][activeWeek]}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {["Learn the building blocks of web development", "Master CSS styling and layout techniques", "Learn modern CSS layout techniques", "Create responsive websites"][activeWeek]}
              </p>
            </div>
          </div>

          {/* Topics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { id: "html-intro", title: "Introduction to HTML", description: "Understanding what HTML is and how it works", duration: "2 hours", difficulty: "Beginner" },
              { id: "html-structure", title: "HTML Document Structure", description: "Master the fundamental structure of HTML documents", duration: "2 hours", difficulty: "Beginner" }
            ].map((topic, index) => (
                <motion.button
                  key={topic.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveTopic(index)}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    activeTopic === index
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-500'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200">
                      {topic.title}
                    </h4>
                  </div>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                    {topic.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {topic.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Target className="h-3 w-3" />
                      {topic.difficulty}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
        </div>
      )}
    </motion.div>
  )

  const renderLearning = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {currentTopic ? (
        <div className="space-y-6">
          {/* Topic Header */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              {currentTopic.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              {currentTopic.description}
            </p>
            
            <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {currentTopic.duration}
              </span>
              <span className="flex items-center gap-1">
                <Target className="h-4 w-4" />
                {currentTopic.difficulty}
              </span>
            </div>
          </div>

          {/* Learning Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Key Concepts */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
                Key Concepts You'll Learn
              </h3>
              <div className="space-y-3">
                {currentTopic.content?.keyConcepts?.map((concept, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700 rounded-lg"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">{concept}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Learning Resources */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
                Learning Resources
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Reading Material
                  </h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    Comprehensive guides and documentation to help you understand the concepts.
                  </p>
                </div>
                
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    Code Examples
                  </h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    Interactive code snippets you can edit and run to see immediate results.
                  </p>
                </div>
                
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2 flex items-center gap-2">
                    <Edit3 className="h-4 w-4" />
                    Practice Exercises
                  </h4>
                  <p className="text-purple-700 dark:text-purple-300 text-sm">
                    Hands-on exercises to reinforce your learning and build practical skills.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Content */}
          {currentTopic.content?.detailedContent && (
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-6">
                Detailed Learning Content
              </h3>
              <div 
                className="prose prose-slate dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: currentTopic.content.detailedContent }}
              />
            </div>
          )}

          {/* Code Examples */}
          {currentTopic.content?.codeExamples && (
            <div className="space-y-6">
              {currentTopic.content.codeExamples.map((example, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
                    {example.title}
                  </h4>
                  <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4">
                    <pre>{example.code}</pre>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
                    {example.explanation}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Practice Section */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-700">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
              Ready to Practice?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Now that you've learned the concepts, it's time to put them into practice!
            </p>
            <div className="flex gap-3">
              <button 
                onClick={() => setActiveTab('practice')}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Start Practice
              </button>
              <button 
                onClick={() => setActiveTab('quiz')}
                className="px-4 py-2 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500 transition-colors"
              >
                Take Quiz
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <BookOpen className="h-16 w-16 text-slate-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-slate-600 dark:text-slate-400 mb-2">
            Select a Topic to Start Learning
          </h3>
          <p className="text-slate-500 dark:text-slate-500">
            Choose a topic from the overview to begin your interactive learning journey.
          </p>
        </div>
      )}
    </motion.div>
  )

  const renderQuiz = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
          Knowledge Check: {currentTopic?.title || 'Select a Topic'}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Test your understanding with interactive quizzes.
        </p>
        
        {currentTopic ? (
          <div className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                Sample Question:
              </h3>
              <p className="text-blue-700 dark:text-blue-300">
                What is the purpose of the DOCTYPE declaration in HTML?
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "It tells the browser which version of HTML to use",
                "It creates a new document",
                "It adds styling to the page",
                "It links to external resources"
              ].map((option, index) => (
                <button
                  key={index}
                  className="p-3 text-left border border-slate-200 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <Target className="h-16 w-16 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-600 dark:text-slate-400 mb-2">
              Select a Topic to Take Quiz
            </h3>
            <p className="text-slate-500 dark:text-slate-500">
              Choose a topic from the overview to test your knowledge.
            </p>
          </div>
        )}
      </div>
    </motion.div>
  )

  const renderPractice = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
          Code Practice: {currentTopic?.title || 'Select a Topic'}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Practice what you've learned with hands-on coding exercises.
        </p>
        
        {currentTopic ? (
          <div className="space-y-6">
            {currentTopic.content?.practiceExercises?.map((exercise, index) => (
              <div key={index} className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-4">
                  {exercise.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {exercise.description}
                </p>
                
                {exercise.requirements && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                      Requirements:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 dark:text-slate-400">
                      {exercise.requirements.map((req, reqIndex) => (
                        <li key={reqIndex}>{req}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                      Starter Code:
                    </h4>
                    <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <pre>{exercise.starterCode}</pre>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                      Solution:
                    </h4>
                    <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <pre>{exercise.solution}</pre>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3 mt-4">
                  <button 
                    onClick={() => setShowCodeEditor(true)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Open Code Editor
                  </button>
                  <button className="px-4 py-2 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500 transition-colors">
                    View Solution
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <Code className="h-16 w-16 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-600 dark:text-slate-400 mb-2">
              Select a Topic to Practice
            </h3>
            <p className="text-slate-500 dark:text-slate-500">
              Choose a topic from the overview to start coding exercises.
            </p>
          </div>
        )}
      </div>
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 overflow-y-auto">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
              {completeCourse.title}
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              {completeCourse.description}
            </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-slate-600 dark:text-slate-400">Progress</div>
                <div className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                  {Math.round(((activeWeek * 5 + activeTopic + 1) / 20) * 100)}%
                </div>
              </div>
              <div className="w-32 bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all"
                  style={{ width: `${((activeWeek * 5 + activeTopic + 1) / 20) * 100}%` }}
                />
              </div>
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
      <div className="max-w-7xl mx-auto px-6 py-8 min-h-screen">
        {/* Debug Info */}
        <div className="mb-4 p-4 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg">
          <p className="text-sm text-yellow-800 dark:text-yellow-200">
            Debug: Course loaded: {completeCourse ? 'Yes' : 'No'}, 
            Weeks: {completeCourse?.weeks?.length || 0}, 
            Active Tab: {activeTab}
          </p>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'learn' && renderLearning()}
            {activeTab === 'quiz' && renderQuiz()}
            {activeTab === 'practice' && renderPractice()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default ComprehensiveCourseDashboard
