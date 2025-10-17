import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Brain, 
  GitBranch, 
  Code, 
  BookOpen, 
  Lightbulb, 
  Target,
  ChevronRight,
  Play,
  CheckCircle
} from 'lucide-react'
import MindMap from './MindMap'
import FlowChart from './FlowChart'
import CodeSnippet from './CodeSnippet'

const InteractiveLearning = ({ topic }) => {
  const [activeTab, setActiveTab] = useState('overview')
  const [completedSections, setCompletedSections] = useState(new Set())

  const markSectionComplete = (sectionId) => {
    setCompletedSections(prev => new Set([...prev, sectionId]))
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'mindmap', label: 'Mind Map', icon: Brain },
    { id: 'flowchart', label: 'Process Flow', icon: GitBranch },
    { id: 'examples', label: 'Code Examples', icon: Code },
    { id: 'practice', label: 'Practice', icon: Target }
  ]

  const renderOverview = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-6 border border-purple-200 dark:border-purple-700">
        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
          {topic.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
          {topic.description}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-600">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="font-semibold text-slate-800 dark:text-slate-200">Duration</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400">{topic.duration}</p>
          </div>
          
          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-600">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-lg">
                <Target className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <span className="font-semibold text-slate-800 dark:text-slate-200">Difficulty</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400">{topic.difficulty}</p>
          </div>
          
          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-600">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
                <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <span className="font-semibold text-slate-800 dark:text-slate-200">Key Concepts</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400">{topic.keyConcepts?.length || 0} concepts</p>
          </div>
        </div>
      </div>

      {topic.keyConcepts && (
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
          <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">
            Key Concepts You'll Learn
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topic.keyConcepts.map((concept, index) => (
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
      )}
    </motion.div>
  )

  const renderMindMap = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <MindMap 
        data={topic.mindMap} 
        title={`${topic.title} - Concept Map`}
      />
    </motion.div>
  )

  const renderFlowChart = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <FlowChart 
        steps={topic.flowChart} 
        title={`${topic.title} - Process Flow`}
      />
    </motion.div>
  )

  const renderExamples = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {topic.codeExamples?.map((example, index) => (
        <CodeSnippet
          key={index}
          code={example.code}
          language={example.language}
          title={example.title}
          explanation={example.explanation}
          output={example.output}
          interactive={example.interactive}
          editable={example.editable}
        />
      ))}
    </motion.div>
  )

  const renderPractice = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">
          Practice Exercises
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Test your understanding with these interactive exercises.
        </p>
        
        {topic.practiceExercises?.map((exercise, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="mb-6 p-4 bg-slate-50 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <h4 className="font-semibold text-slate-800 dark:text-slate-200">
                {exercise.title}
              </h4>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              {exercise.description}
            </p>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                Start Exercise
              </button>
              <button className="px-4 py-2 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500 transition-colors">
                View Solution
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-2 border border-slate-200 dark:border-slate-700">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            const isCompleted = completedSections.has(tab.id)
            
            return (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-300 whitespace-nowrap
                  ${isActive 
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg' 
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }
                `}
              >
                <Icon className="h-4 w-4" />
                <span className="font-medium">{tab.label}</span>
                {isCompleted && (
                  <CheckCircle className="h-4 w-4 text-green-400" />
                )}
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'mindmap' && renderMindMap()}
          {activeTab === 'flowchart' && renderFlowChart()}
          {activeTab === 'examples' && renderExamples()}
          {activeTab === 'practice' && renderPractice()}
        </motion.div>
      </AnimatePresence>

      {/* Progress Footer */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-slate-800 dark:text-slate-200">
                Progress: {completedSections.size} / {tabs.length} sections completed
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Keep going! You're doing great.
              </p>
            </div>
          </div>
          
          <button
            onClick={() => markSectionComplete(activeTab)}
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 font-medium"
          >
            Mark Complete
          </button>
        </div>
      </div>
    </div>
  )
}

export default InteractiveLearning
