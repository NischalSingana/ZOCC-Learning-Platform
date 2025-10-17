import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Copy, 
  Check, 
  Play, 
  RotateCcw, 
  Eye, 
  EyeOff, 
  Code, 
  Terminal,
  Lightbulb,
  AlertCircle
} from 'lucide-react'

const CodeSnippet = ({ 
  code, 
  language = 'javascript', 
  title = "Code Example",
  explanation = "",
  output = "",
  interactive = false,
  editable = false 
}) => {
  const [copied, setCopied] = useState(false)
  const [showOutput, setShowOutput] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)
  const [userCode, setUserCode] = useState(code)
  const [isRunning, setIsRunning] = useState(false)
  const [result, setResult] = useState("")

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(userCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const runCode = async () => {
    setIsRunning(true)
    // Simulate code execution
    setTimeout(() => {
      setResult(output || "Code executed successfully!")
      setIsRunning(false)
    }, 1500)
  }

  const resetCode = () => {
    setUserCode(code)
    setResult("")
  }

  const getLanguageIcon = (lang) => {
    switch (lang.toLowerCase()) {
      case 'javascript':
      case 'js':
        return '🟨'
      case 'html':
        return '🟧'
      case 'css':
        return '🟦'
      case 'python':
        return '🐍'
      case 'java':
        return '☕'
      default:
        return '💻'
    }
  }

  const getLanguageColor = (lang) => {
    switch (lang.toLowerCase()) {
      case 'javascript':
      case 'js':
        return 'from-yellow-400 to-yellow-600'
      case 'html':
        return 'from-orange-400 to-orange-600'
      case 'css':
        return 'from-blue-400 to-blue-600'
      case 'python':
        return 'from-green-400 to-green-600'
      case 'java':
        return 'from-red-400 to-red-600'
      default:
        return 'from-slate-400 to-slate-600'
    }
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600">
        <div className="flex items-center gap-3">
          <div className={`p-2 bg-gradient-to-r ${getLanguageColor(language)} rounded-lg`}>
            <Code className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 dark:text-slate-200">{title}</h3>
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <span>{getLanguageIcon(language)}</span>
              <span className="capitalize">{language}</span>
              {interactive && <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 text-xs rounded">Interactive</span>}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {explanation && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowExplanation(!showExplanation)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                showExplanation 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-500'
              }`}
            >
              {showExplanation ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </motion.button>
          )}

          {interactive && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={runCode}
              disabled={isRunning}
              className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 disabled:opacity-50"
            >
              {isRunning ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Play className="h-4 w-4" />
                </motion.div>
              ) : (
                <Play className="h-4 w-4" />
              )}
            </motion.button>
          )}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={copyToClipboard}
            className="p-2 bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500 transition-all duration-300"
          >
            {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
          </motion.button>

          {editable && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={resetCode}
              className="p-2 bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500 transition-all duration-300"
            >
              <RotateCcw className="h-4 w-4" />
            </motion.button>
          )}
        </div>
      </div>

      {/* Code Editor */}
      <div className="relative">
        {editable ? (
          <textarea
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            className="w-full h-64 p-4 bg-slate-900 text-green-400 font-mono text-sm resize-none focus:outline-none"
            placeholder="Enter your code here..."
          />
        ) : (
          <pre className="p-4 bg-slate-900 text-green-400 font-mono text-sm overflow-x-auto">
            <code>{userCode}</code>
          </pre>
        )}
      </div>

      {/* Explanation */}
      <AnimatePresence>
        {showExplanation && explanation && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-slate-200 dark:border-slate-600"
          >
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="h-4 w-4 text-blue-500" />
                <span className="font-medium text-blue-800 dark:text-blue-300">Explanation</span>
              </div>
              <p className="text-sm text-blue-700 dark:text-blue-300">{explanation}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Output */}
      <AnimatePresence>
        {(showOutput || result) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-slate-200 dark:border-slate-600"
          >
            <div className="p-4 bg-slate-900">
              <div className="flex items-center gap-2 mb-2">
                <Terminal className="h-4 w-4 text-green-400" />
                <span className="font-medium text-green-400">Output</span>
              </div>
              <pre className="text-green-400 font-mono text-sm">
                {result || output}
              </pre>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Controls */}
      {interactive && (
        <div className="p-4 bg-slate-50 dark:bg-slate-700 border-t border-slate-200 dark:border-slate-600">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowOutput(!showOutput)}
              className="flex items-center gap-2 px-3 py-2 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500 transition-all duration-300 text-sm"
            >
              {showOutput ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              {showOutput ? 'Hide' : 'Show'} Output
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CodeSnippet
