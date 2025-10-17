import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Play, Pause, RotateCcw, CheckCircle, Circle, AlertCircle } from 'lucide-react'

const FlowChart = ({ steps, title = "Process Flow" }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [completedSteps, setCompletedSteps] = useState(new Set())
  const intervalRef = useRef(null)

  useEffect(() => {
    if (isPlaying && currentStep < steps.length - 1) {
      intervalRef.current = setInterval(() => {
        setCurrentStep(prev => {
          const nextStep = prev + 1
          if (nextStep >= steps.length) {
            setIsPlaying(false)
            return prev
          }
          return nextStep
        })
      }, 2000)
    } else {
      clearInterval(intervalRef.current)
    }

    return () => clearInterval(intervalRef.current)
  }, [isPlaying, currentStep, steps.length])

  const handleStepClick = (stepIndex) => {
    setCurrentStep(stepIndex)
    setCompletedSteps(prev => {
      const newSet = new Set(prev)
      for (let i = 0; i <= stepIndex; i++) {
        newSet.add(i)
      }
      return newSet
    })
  }

  const resetFlow = () => {
    setCurrentStep(0)
    setCompletedSteps(new Set())
    setIsPlaying(false)
  }

  const togglePlay = () => {
    if (currentStep >= steps.length - 1) {
      resetFlow()
    } else {
      setIsPlaying(!isPlaying)
    }
  }

  const getStepStatus = (stepIndex) => {
    if (completedSteps.has(stepIndex)) return 'completed'
    if (stepIndex === currentStep) return 'current'
    if (stepIndex < currentStep) return 'completed'
    return 'pending'
  }

  const getStepIcon = (stepIndex, status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case 'current':
        return <Circle className="h-5 w-5 text-blue-500" />
      default:
        return <Circle className="h-5 w-5 text-slate-400" />
    }
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl">
            <Play className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">{title}</h3>
        </div>
        
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={togglePlay}
            className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300"
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={resetFlow}
            className="p-2 bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-300"
          >
            <RotateCcw className="h-4 w-4" />
          </motion.button>
        </div>
      </div>

      <div className="space-y-4">
        {steps.map((step, index) => {
          const status = getStepStatus(index)
          const isActive = index === currentStep
          
          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleStepClick(index)}
              className={`
                relative p-4 rounded-xl cursor-pointer transition-all duration-300
                ${isActive 
                  ? 'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-300 dark:border-blue-600' 
                  : 'bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-600'
                }
              `}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  animate={{ scale: isActive ? 1.1 : 1 }}
                  className="flex-shrink-0 mt-1"
                >
                  {getStepIcon(index, status)}
                </motion.div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200">
                      {step.title}
                    </h4>
                    {step.type && (
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-xs rounded-full">
                        {step.type}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                    {step.description}
                  </p>

                  {step.code && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="bg-slate-900 rounded-lg p-3 mb-3 overflow-x-auto"
                    >
                      <pre className="text-green-400 text-sm">
                        <code>{step.code}</code>
                      </pre>
                    </motion.div>
                  )}

                  {step.examples && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="space-y-2"
                    >
                      <h5 className="font-medium text-slate-700 dark:text-slate-300 text-sm">Examples:</h5>
                      {step.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="bg-white dark:bg-slate-800 p-2 rounded border text-sm">
                          {example}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Connection arrow */}
              {index < steps.length - 1 && (
                <motion.div
                  animate={{ opacity: isActive ? 1 : 0.3 }}
                  className="flex justify-center mt-4"
                >
                  <ArrowRight className="h-4 w-4 text-slate-400" />
                </motion.div>
              )}
            </motion.div>
          )
        })}
      </div>

      {/* Progress indicator */}
      <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-700 rounded-xl">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Progress
          </span>
          <span className="text-sm text-slate-600 dark:text-slate-400">
            {completedSteps.size} / {steps.length} steps
          </span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(completedSteps.size / steps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full"
          />
        </div>
      </div>
    </div>
  )
}

export default FlowChart
