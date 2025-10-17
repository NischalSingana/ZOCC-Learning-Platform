import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  BookOpen, 
  MessageSquare, 
  Moon, 
  Sun,
  ChevronDown,
  ChevronRight,
  Lock,
  CheckCircle,
  Circle,
  Sparkles,
  Target
} from 'lucide-react'

const Sidebar = ({ 
  curriculum, 
  currentModule, 
  setCurrentModule, 
  currentTopic, 
  setCurrentTopic,
  darkMode,
  toggleDarkMode 
}) => {
  const [expandedModules, setExpandedModules] = useState({})
  const [isHovered, setIsHovered] = useState(false)
  const location = useLocation()

  const toggleModule = (moduleId) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }))
  }

  const getModuleProgress = (module) => {
    // Mock progress calculation
    return Math.floor(Math.random() * 100)
  }

  const isModuleUnlocked = (module, index) => {
    if (index === 0) return true
    const previousModule = curriculum.modules[index - 1]
    return previousModule.progress >= 100
  }

  return (
    <motion.div 
      initial={{ x: -320, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-80 bg-gradient-to-b from-white/95 to-white/90 dark:from-slate-900/95 dark:to-slate-800/90 backdrop-blur-xl border-r border-white/20 dark:border-slate-700/50 flex flex-col shadow-2xl custom-scrollbar"
    >
      {/* Header */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="p-6 border-b border-white/20 dark:border-slate-700/50 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-indigo-500/10" />
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl shadow-lg">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                ZOCC Learning
              </h1>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className="p-3 rounded-xl bg-white/20 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-slate-700/50 transition-all duration-300 shadow-lg"
            >
              {darkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-blue-500" />}
            </motion.button>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm text-slate-600 dark:text-slate-300"
          >
            {curriculum.duration} • {curriculum.description}
          </motion.p>
        </div>
      </motion.div>

      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex-1 p-4 space-y-3"
      >
        <motion.div
          whileHover={{ scale: 1.02, x: 5 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            to="/"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
              location.pathname === '/' 
                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg' 
                : 'hover:bg-white/20 dark:hover:bg-slate-800/50 backdrop-blur-sm'
            }`}
          >
            <BookOpen className="h-5 w-5" />
            <span className="font-medium">My Courses</span>
            {location.pathname === '/' && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="ml-auto w-2 h-2 bg-white rounded-full"
              />
            )}
          </Link>
        </motion.div>
        
        
        <motion.button 
          whileHover={{ scale: 1.02, x: 5 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/20 dark:hover:bg-slate-800/50 backdrop-blur-sm transition-all duration-300 w-full text-left group"
        >
          <MessageSquare className="h-5 w-5 text-blue-500 group-hover:text-blue-400" />
          <span className="font-medium">Feedback</span>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="ml-auto"
          >
            <Target className="h-4 w-4 text-purple-500" />
          </motion.div>
        </motion.button>
      </motion.nav>

      {/* Course Modules */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="p-4 border-t border-white/20 dark:border-slate-700/50"
      >
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4 flex items-center gap-2"
        >
          <Sparkles className="h-4 w-4 text-purple-500" />
          Course Modules
        </motion.h3>
        <div className="space-y-3">
          {curriculum.modules.map((module, index) => {
            const isUnlocked = isModuleUnlocked(module, index)
            const progress = getModuleProgress(module)
            const isExpanded = expandedModules[module.id]

            return (
              <motion.div 
                key={module.id} 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="space-y-2"
              >
                <motion.button
                  whileHover={isUnlocked ? { scale: 1.02, x: 5 } : {}}
                  whileTap={isUnlocked ? { scale: 0.98 } : {}}
                  onClick={() => isUnlocked && toggleModule(module.id)}
                  disabled={!isUnlocked}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-left ${
                    !isUnlocked 
                      ? 'opacity-50 cursor-not-allowed bg-slate-100 dark:bg-slate-800' 
                      : 'hover:bg-white/30 dark:hover:bg-slate-700/50 backdrop-blur-sm shadow-lg'
                  }`}
                >
                  <motion.div
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isUnlocked ? (
                      isExpanded ? <ChevronDown className="h-4 w-4 text-purple-500" /> : <ChevronRight className="h-4 w-4 text-purple-500" />
                    ) : (
                      <Lock className="h-4 w-4 text-slate-400" />
                    )}
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {progress === 100 ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <Circle className="h-5 w-5 text-slate-400" />
                        )}
                      </motion.div>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{module.title}</span>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 1, delay: 1 + index * 0.1 }}
                          className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                        />
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{progress}%</span>
                    </div>
                  </div>
                </motion.button>

                {/* Topics */}
                <AnimatePresence>
                  {isUnlocked && isExpanded && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-6 space-y-2"
                    >
                      {module.topics.map((topic, topicIndex) => (
                        <motion.div
                          key={topic.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: topicIndex * 0.1 }}
                        >
                          <Link
                            to={`/course/${module.id}/${topic.id}`}
                            onClick={() => {
                              setCurrentModule(module)
                              setCurrentTopic(topic)
                            }}
                            className="block px-4 py-2 text-sm rounded-lg hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20 transition-all duration-300 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                          >
                            {topic.title}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Sidebar
