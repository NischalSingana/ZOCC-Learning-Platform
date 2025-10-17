import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, ChevronRight, Brain, Lightbulb, Target } from 'lucide-react'

const MindMap = ({ data, title = "Concept Map" }) => {
  const [selectedNode, setSelectedNode] = useState(null)
  const [expandedNodes, setExpandedNodes] = useState(new Set(['root']))
  const svgRef = useRef(null)

  const toggleNode = (nodeId) => {
    setExpandedNodes(prev => {
      const newSet = new Set(prev)
      if (newSet.has(nodeId)) {
        newSet.delete(nodeId)
      } else {
        newSet.add(nodeId)
      }
      return newSet
    })
  }

  const renderNode = (node, level = 0, index = 0) => {
    const isExpanded = expandedNodes.has(node.id)
    const hasChildren = node.children && node.children.length > 0
    const isRoot = level === 0

    return (
      <motion.div
        key={node.id}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1 }}
        className={`relative ${isRoot ? 'mx-auto' : ''}`}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            if (hasChildren) toggleNode(node.id)
            setSelectedNode(node)
          }}
          className={`
            relative p-4 rounded-2xl cursor-pointer transition-all duration-300 shadow-lg
            ${isRoot 
              ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white min-w-[200px]' 
              : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 min-w-[150px]'
            }
            ${selectedNode?.id === node.id ? 'ring-4 ring-purple-300 dark:ring-purple-600' : ''}
            hover:shadow-xl
          `}
        >
          <div className="flex items-center gap-2 mb-2">
            {isRoot ? (
              <Brain className="h-5 w-5" />
            ) : hasChildren ? (
              <Lightbulb className="h-4 w-4" />
            ) : (
              <Target className="h-4 w-4" />
            )}
            <span className="font-semibold text-sm">{node.title}</span>
          </div>
          
          {node.description && (
            <p className="text-xs opacity-80 leading-relaxed">
              {node.description}
            </p>
          )}

          {hasChildren && (
            <motion.div
              animate={{ rotate: isExpanded ? 90 : 0 }}
              className="absolute -right-2 -top-2 w-6 h-6 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center shadow-lg"
            >
              {isExpanded ? (
                <Minus className="h-3 w-3 text-slate-600 dark:text-slate-300" />
              ) : (
                <Plus className="h-3 w-3 text-slate-600 dark:text-slate-300" />
              )}
            </motion.div>
          )}

          {/* Connection lines */}
          {!isRoot && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -left-4 top-1/2 w-4 h-0.5 bg-gradient-to-r from-purple-300 to-blue-300 transform -translate-y-1/2"
            />
          )}
        </motion.div>

        {/* Children */}
        <AnimatePresence>
          {hasChildren && isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 space-y-4"
            >
              {node.children.map((child, childIndex) => (
                <div key={child.id} className="ml-8">
                  {renderNode(child, level + 1, childIndex)}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    )
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl">
          <Brain className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">{title}</h3>
      </div>

      <div className="space-y-6">
        {renderNode(data)}
        
        {selectedNode && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl border border-purple-200 dark:border-purple-700"
          >
            <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
              {selectedNode.title}
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {selectedNode.detailedDescription || selectedNode.description}
            </p>
            {selectedNode.examples && (
              <div className="mt-3">
                <h5 className="font-medium text-slate-700 dark:text-slate-300 mb-2">Examples:</h5>
                <ul className="space-y-1">
                  {selectedNode.examples.map((example, index) => (
                    <li key={index} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default MindMap
