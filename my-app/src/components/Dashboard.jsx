import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Play, 
  Clock, 
  Award, 
  Target, 
  TrendingUp,
  BookOpen,
  Code,
  GitBranch,
  CheckCircle,
  Lock,
  Sparkles,
  Zap,
  Star,
  Rocket,
  Flame,
  Crown
} from 'lucide-react'

const Dashboard = ({ curriculum }) => {
  const [selectedModule, setSelectedModule] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const getModuleProgress = (module) => {
    return Math.floor(Math.random() * 100)
  }

  const isModuleUnlocked = (module, index) => {
    if (index === 0) return true
    const previousModule = curriculum.modules[index - 1]
    return previousModule.progress >= 100
  }

  const getTotalProgress = () => {
    const totalModules = curriculum.modules.length
    const completedModules = curriculum.modules.filter((_, index) => 
      isModuleUnlocked(curriculum.modules[index], index) && getModuleProgress(curriculum.modules[index]) === 100
    ).length
    return Math.round((completedModules / totalModules) * 100)
  }

  const getUpcomingProjects = () => {
    return curriculum.modules
      .filter(module => !module.isLocked)
      .flatMap(module => 
        module.topics.map(topic => ({
          ...topic.project,
          module: module.title,
          topic: topic.title
        }))
      )
      .slice(0, 3)
  }

  const getGitMissions = () => {
    return curriculum.modules
      .filter(module => !module.isLocked)
      .flatMap(module => 
        module.topics.map(topic => ({
          ...topic.gitMission,
          module: module.title,
          topic: topic.title
        }))
      )
      .slice(0, 3)
  }

  return (
    <div className="h-full overflow-y-auto bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 custom-scrollbar">
      <div className="p-8 relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"
          />
        </div>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 relative z-10"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl shadow-xl"
            >
              <Crown className="h-8 w-8 text-white" />
            </motion.div>
            <div>
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2"
              >
                Welcome to ZOCC Learning
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="text-slate-600 dark:text-slate-300 text-lg"
              >
                Your complete web development journey from beginner to advanced
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Progress Overview */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative z-10"
        >
          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl p-8 rounded-2xl border border-white/20 dark:border-slate-700/50 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />
            <div className="relative z-10">
              <motion.div 
                whileHover={{ rotate: 15 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl shadow-lg">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 dark:text-slate-200 text-lg">Overall Progress</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Course completion</p>
                </div>
              </motion.div>
              <div className="space-y-4">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-slate-600 dark:text-slate-400">Progress</span>
                  <span className="text-purple-600 dark:text-purple-400">{getTotalProgress()}%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${getTotalProgress()}%` }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full shadow-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl p-8 rounded-2xl border border-white/20 dark:border-slate-700/50 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10" />
            <div className="relative z-10">
              <motion.div 
                whileHover={{ rotate: 15 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 dark:text-slate-200 text-lg">Completed</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Modules finished</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
              >
                {curriculum.modules.filter((_, index) => 
                  isModuleUnlocked(curriculum.modules[index], index) && 
                  getModuleProgress(curriculum.modules[index]) === 100
                ).length}
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl p-8 rounded-2xl border border-white/20 dark:border-slate-700/50 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10" />
            <div className="relative z-10">
              <motion.div 
                whileHover={{ rotate: 15 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl shadow-lg">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 dark:text-slate-200 text-lg">Time Invested</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Hours of learning</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.6, type: "spring", stiffness: 200 }}
                className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
              >
                24h
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Featured HTML & CSS Course */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mb-12 relative z-10"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl"
            >
              <Rocket className="h-6 w-6 text-white" />
            </motion.div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Featured Course
            </h2>
          </motion.div>
          
          {/* HTML & CSS Course Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden mb-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl"
                  >
                    <Code className="h-8 w-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">HTML & CSS Fundamentals</h3>
                    <p className="text-blue-100 text-lg">Master web development from the ground up</p>
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full"
                >
                  <Star className="h-5 w-5 text-yellow-300" />
                  <span className="font-bold">4.9/5</span>
                </motion.div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">4</div>
                  <div className="text-blue-100 text-sm">Weeks</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">16</div>
                  <div className="text-blue-100 text-sm">Lessons</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">32h</div>
                  <div className="text-blue-100 text-sm">Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">2.5k+</div>
                  <div className="text-blue-100 text-sm">Students</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                    Beginner Friendly
                  </span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                    Interactive Learning
                  </span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                    Portfolio Project
                  </span>
                </div>
                <Link
                  to="/html-css-course"
                  className="flex items-center gap-3 px-6 py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors group"
                >
                  <Play className="h-5 w-5" />
                  Start Course
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Sparkles className="h-4 w-4" />
                  </motion.div>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Course Modules */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mb-12 relative z-10"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8 }}
            className="flex items-center gap-3 mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl"
            >
              <BookOpen className="h-6 w-6 text-white" />
            </motion.div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              All Course Modules
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {curriculum.modules.map((module, index) => {
              const isUnlocked = isModuleUnlocked(module, index)
              const progress = getModuleProgress(module)

              return (
                <motion.div 
                  key={module.id}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className={`bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl p-8 rounded-2xl border border-white/20 dark:border-slate-700/50 shadow-2xl transition-all duration-300 relative overflow-hidden ${
                    isUnlocked ? 'hover:shadow-3xl' : 'opacity-60'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5" />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 15 }}
                          className="p-3 rounded-xl shadow-lg"
                        >
                          {isUnlocked ? (
                            progress === 100 ? (
                              <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                                <CheckCircle className="h-6 w-6 text-white" />
                              </div>
                            ) : (
                              <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
                                <BookOpen className="h-6 w-6 text-white" />
                              </div>
                            )
                          ) : (
                            <div className="p-2 bg-gradient-to-r from-slate-400 to-slate-500 rounded-lg">
                              <Lock className="h-6 w-6 text-white" />
                            </div>
                          )}
                        </motion.div>
                        <div>
                          <h3 className="font-bold text-slate-800 dark:text-slate-200 text-lg mb-1">{module.title}</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400">{module.duration}</p>
                        </div>
                      </div>
                      <motion.span 
                        whileHover={{ scale: 1.1 }}
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          module.level === 'Beginner' 
                            ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 dark:from-green-900/50 dark:to-emerald-900/50 dark:text-green-300' 
                            : module.level === 'Intermediate'
                            ? 'bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 dark:from-yellow-900/50 dark:to-orange-900/50 dark:text-yellow-300'
                            : 'bg-gradient-to-r from-red-100 to-pink-100 text-red-800 dark:from-red-900/50 dark:to-pink-900/50 dark:text-red-300'
                        }`}
                      >
                        {module.level}
                      </motion.span>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between text-sm font-medium">
                        <span className="text-slate-600 dark:text-slate-400">Progress</span>
                        <span className="text-purple-600 dark:text-purple-400">{progress}%</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 1.5, delay: 1.8 + index * 0.1 }}
                          className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full shadow-lg"
                        />
                      </div>
                      
                      {isUnlocked && (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Link
                            to={`/course/${module.id}/${module.topics[0]?.id}`}
                            className="flex items-center gap-3 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors font-medium group"
                          >
                            <motion.div
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <Play className="h-5 w-5" />
                            </motion.div>
                            Start Learning
                            <motion.div
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                            >
                              <Sparkles className="h-4 w-4" />
                            </motion.div>
                          </Link>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Upcoming Projects */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mb-12 relative z-10"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8 }}
            className="flex items-center gap-3 mb-8"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl"
            >
              <Code className="h-6 w-6 text-white" />
            </motion.div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Upcoming Projects
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getUpcomingProjects().map((project, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 2.0 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl p-8 rounded-2xl border border-white/20 dark:border-slate-700/50 shadow-2xl transition-all duration-300 relative overflow-hidden hover:shadow-3xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg"
                    >
                      <Code className="h-6 w-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-slate-800 dark:text-slate-200 text-lg">{project.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{project.module}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.requirements.map((req, reqIndex) => (
                      <motion.span 
                        key={reqIndex}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-800 dark:text-purple-300 rounded-full text-xs font-medium"
                      >
                        {req}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Git Missions */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          className="relative z-10"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.4 }}
            className="flex items-center gap-3 mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl"
            >
              <GitBranch className="h-6 w-6 text-white" />
            </motion.div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Git Missions
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getGitMissions().map((mission, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 2.6 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl p-8 rounded-2xl border border-white/20 dark:border-slate-700/50 shadow-2xl transition-all duration-300 relative overflow-hidden hover:shadow-3xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg"
                    >
                      <GitBranch className="h-6 w-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-slate-800 dark:text-slate-200 text-lg">{mission.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{mission.module}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">{mission.description}</p>
                  <div className="space-y-3">
                    {mission.tasks.map((task, taskIndex) => (
                      <motion.div 
                        key={taskIndex} 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2.8 + index * 0.1 + taskIndex * 0.1 }}
                        className="flex items-center gap-3 text-sm"
                      >
                        <motion.div 
                          whileHover={{ scale: 1.5 }}
                          className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                        />
                        <span className="text-slate-600 dark:text-slate-400">{task}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Dashboard
