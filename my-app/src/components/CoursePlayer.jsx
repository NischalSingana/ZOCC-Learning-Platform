import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  BookOpen, 
  Code,
  Play,
  CheckCircle,
  Brain,
  GitBranch,
  Target
} from 'lucide-react'
import MonacoEditor from '@monaco-editor/react'
import QuizComponent from './QuizComponent'
import InteractiveLearning from './InteractiveLearning'

const CoursePlayer = ({ curriculum, currentModule, currentTopic }) => {
  const { moduleId, topicId } = useParams()
  const [activeTab, setActiveTab] = useState('learn')
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [code, setCode] = useState('')

  const module = curriculum.modules.find(m => m.id === moduleId)
  const topic = module?.topics.find(t => t.id === topicId)

  if (!module || !topic) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">Module not found</h2>
          <p className="text-muted-foreground mb-4">The requested module or topic could not be found.</p>
          <Link to="/" className="text-primary hover:text-primary/80">
            Return to Dashboard
          </Link>
        </div>
      </div>
    )
  }

  const tabs = [
    { id: 'learn', label: 'Interactive Learning', icon: Brain },
    { id: 'concept-check', label: 'Concept Check', icon: Target },
    { id: 'practice', label: 'Code Practice', icon: Code }
  ]

  const renderLearnContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <InteractiveLearning topic={topic} />
    </motion.div>
  )

  const renderConceptCheckContent = () => (
    <div className="space-y-6">
      <div className="bg-card p-6 rounded-lg border border-border">
        <h2 className="text-2xl font-bold text-foreground mb-4">Concept Check</h2>
        <p className="text-muted-foreground mb-6">
          Test your understanding of the concepts covered in this topic.
        </p>
        <QuizComponent topicId={topicId} />
      </div>
    </div>
  )

  const renderPracticeContent = () => (
    <div className="space-y-6">
      <div className="bg-card p-6 rounded-lg border border-border">
        <h2 className="text-2xl font-bold text-foreground mb-4">Practice Coding</h2>
        <p className="text-muted-foreground mb-6">
          Apply what you've learned with hands-on coding exercises.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Code Editor</h3>
              <div className="border border-border rounded-lg overflow-hidden">
                <MonacoEditor
                  height="400px"
                  language="html"
                  value={code}
                  onChange={setCode}
                  theme="vs-dark"
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    lineNumbers: 'on',
                    roundedSelection: false,
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                  }}
                />
              </div>
            </div>
            
            <div className="flex gap-2">
              <button className="flex-1 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                Run Code
              </button>
              <button className="flex-1 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/90 transition-colors">
                Reset
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-2">Preview</h3>
            <div className="border border-border rounded-lg h-96 bg-background p-4">
              <iframe
                srcDoc={code}
                className="w-full h-full border-0"
                title="Code Preview"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className={`h-full flex flex-col ${isFullscreen ? 'fixed inset-0 z-50 bg-background' : ''}`}>
      {/* Header */}
      <div className="bg-card border-b border-border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Dashboard
            </Link>
            <div className="h-6 w-px bg-border" />
            <div>
              <h1 className="font-semibold text-foreground">{module.title}</h1>
              <p className="text-sm text-muted-foreground">{topic.title}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
            >
              <Maximize2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-card border-b border-border">
        <div className="flex">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6">
          {activeTab === 'learn' && renderLearnContent()}
          {activeTab === 'concept-check' && renderConceptCheckContent()}
          {activeTab === 'practice' && renderPracticeContent()}
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-card border-t border-border p-4">
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-accent transition-colors">
            <ChevronLeft className="h-4 w-4" />
            Previous
          </button>
          
          <div className="flex items-center gap-2">
            <div className="w-32 bg-muted rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: '25%' }} />
            </div>
            <span className="text-sm text-muted-foreground">25% Complete</span>
          </div>
          
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            Next
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

    </div>
  )
}

export default CoursePlayer
