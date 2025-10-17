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
  Smartphone
} from 'lucide-react'

const HTMLCSSCourseDashboard = () => {
  const [activeWeek, setActiveWeek] = useState(0)
  const [activeTopic, setActiveTopic] = useState(0)
  const [activeTab, setActiveTab] = useState('overview')

  // Simplified course data
  const allWeeks = [
    {
      id: "week-1",
      title: "Week 1: HTML Fundamentals",
      duration: "1 week",
      level: "Beginner",
      description: "Learn the fundamentals of HTML structure and elements",
      topics: [
        {
          id: "html-structure",
          title: "HTML Document Structure",
          duration: "2 hours",
          difficulty: "Beginner",
          description: "Learn the fundamental structure of HTML documents and essential elements.",
          keyConcepts: [
            "DOCTYPE Declaration",
            "HTML, Head, and Body Elements",
            "Meta Tags and Document Information",
            "Basic HTML Syntax"
          ]
        },
        {
          id: "html-elements",
          title: "HTML Elements and Tags",
          duration: "2 hours",
          difficulty: "Beginner",
          description: "Master the most commonly used HTML elements for text, links, and media.",
          keyConcepts: [
            "Text Elements (h1-h6, p, span, strong, em)",
            "Link Elements (a)",
            "List Elements (ul, ol, li)",
            "Media Elements (img, video, audio)"
          ]
        }
      ]
    },
    {
      id: "week-2",
      title: "Week 2: CSS Basics and Styling",
      duration: "1 week",
      level: "Beginner",
      description: "Master CSS styling and layout techniques",
      topics: [
        {
          id: "css-introduction",
          title: "Introduction to CSS",
          duration: "2 hours",
          difficulty: "Beginner",
          description: "Learn the fundamentals of CSS and how to apply styles to HTML elements.",
          keyConcepts: [
            "CSS Syntax and Rules",
            "Selectors (Element, Class, ID)",
            "Properties and Values",
            "CSS Box Model"
          ]
        },
        {
          id: "css-selectors",
          title: "CSS Selectors and Specificity",
          duration: "2 hours",
          difficulty: "Beginner",
          description: "Master different types of CSS selectors and understand specificity rules.",
          keyConcepts: [
            "Element, Class, and ID Selectors",
            "Descendant and Child Selectors",
            "Pseudo-classes and Pseudo-elements",
            "CSS Specificity Rules"
          ]
        }
      ]
    },
    {
      id: "week-3",
      title: "Week 3: Layouts and Positioning",
      duration: "1 week",
      level: "Beginner",
      description: "Learn modern CSS layout techniques with Flexbox and Grid",
      topics: [
        {
          id: "flexbox",
          title: "CSS Flexbox Layout",
          duration: "2 hours",
          difficulty: "Beginner",
          description: "Master Flexbox for creating flexible and responsive layouts.",
          keyConcepts: [
            "Flex Container and Flex Items",
            "Flex Direction and Wrapping",
            "Justify Content and Align Items",
            "Flex Grow, Shrink, and Basis"
          ]
        },
        {
          id: "css-grid",
          title: "CSS Grid Layout",
          duration: "2 hours",
          difficulty: "Beginner",
          description: "Learn CSS Grid for creating complex two-dimensional layouts.",
          keyConcepts: [
            "Grid Container and Grid Items",
            "Grid Template Columns and Rows",
            "Grid Areas and Line Names",
            "Grid Gap and Alignment"
          ]
        }
      ]
    },
    {
      id: "week-4",
      title: "Week 4: Responsive Design and Final Project",
      duration: "1 week",
      level: "Beginner",
      description: "Create responsive websites and build your final portfolio project",
      topics: [
        {
          id: "responsive-design",
          title: "Responsive Design Principles",
          duration: "2 hours",
          difficulty: "Beginner",
          description: "Learn how to create websites that work on all devices using responsive design techniques.",
          keyConcepts: [
            "Mobile-First Design Approach",
            "Media Queries and Breakpoints",
            "Flexible Images and Typography",
            "Viewport Meta Tag"
          ]
        },
        {
          id: "final-project",
          title: "Final Project: Personal Portfolio",
          duration: "2 hours",
          difficulty: "Beginner",
          description: "Create a complete responsive portfolio website showcasing your HTML and CSS skills.",
          keyConcepts: [
            "Complete Website Structure",
            "Responsive Design Implementation",
            "CSS Grid and Flexbox Layout",
            "Professional Styling and Typography"
          ]
        }
      ]
    }
  ]

  const currentWeek = allWeeks[activeWeek]
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
      className="space-y-6"
    >
      {/* Week Navigation */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6">
          Course Progress
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {allWeeks.map((week, index) => {
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
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                      Week {index + 1}
                    </h3>
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
          })}
        </div>
      </div>

      {/* Current Week Details */}
      {currentWeek && (
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-3 rounded-lg bg-gradient-to-r ${weekIcons[activeWeek]?.color || 'from-gray-500 to-gray-600'}`}>
              {React.createElement(weekIcons[activeWeek]?.icon || BookOpen, { className: "h-6 w-6 text-white" })}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                {currentWeek.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {currentWeek.description}
              </p>
            </div>
          </div>

          {/* Topics Grid */}
          {currentWeek.topics && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentWeek.topics.map((topic, index) => (
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
          )}
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
                {currentTopic.keyConcepts?.map((concept, index) => (
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
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                    📖 Reading Material
                  </h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    Comprehensive guides and documentation to help you understand the concepts.
                  </p>
                </div>
                
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                    💻 Code Examples
                  </h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    Interactive code snippets you can edit and run to see immediate results.
                  </p>
                </div>
                
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                    🎯 Practice Exercises
                  </h4>
                  <p className="text-purple-700 dark:text-purple-300 text-sm">
                    Hands-on exercises to reinforce your learning and build practical skills.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Content Based on Topic */}
          {currentTopic.id === 'html-structure' && (
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-6">
                HTML Document Structure - Complete Guide
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
                    What is HTML Document Structure?
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Every HTML document follows a specific structure that browsers understand. This structure includes the DOCTYPE declaration, html element, head section for metadata, and body section for content.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
                    Basic HTML Document Template
                  </h4>
                  <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <div>&lt;!DOCTYPE html&gt;</div>
                    <div>&lt;html lang="en"&gt;</div>
                    <div>&lt;head&gt;</div>
                    <div>&nbsp;&nbsp;&lt;meta charset="UTF-8"&gt;</div>
                    <div>&nbsp;&nbsp;&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</div>
                    <div>&nbsp;&nbsp;&lt;title&gt;My Web Page&lt;/title&gt;</div>
                    <div>&lt;/head&gt;</div>
                    <div>&lt;body&gt;</div>
                    <div>&nbsp;&nbsp;&lt;h1&gt;Welcome to My Website&lt;/h1&gt;</div>
                    <div>&nbsp;&nbsp;&lt;p&gt;This is a paragraph of text.&lt;/p&gt;</div>
                    <div>&lt;/body&gt;</div>
                    <div>&lt;/html&gt;</div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
                    Key Components Explained
                  </h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                      <h5 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                        DOCTYPE Declaration
                      </h5>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        <code>&lt;!DOCTYPE html&gt;</code> tells the browser which version of HTML to use. This should always be the first line of your HTML document.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                      <h5 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                        HTML Element
                      </h5>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        The <code>&lt;html&gt;</code> element is the root element that contains all other elements. The <code>lang</code> attribute specifies the language of the document.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                      <h5 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                        Head Section
                      </h5>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        The <code>&lt;head&gt;</code> section contains metadata about the document, including the title, character encoding, and viewport settings.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                      <h5 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                        Body Section
                      </h5>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        The <code>&lt;body&gt;</code> section contains all the visible content that users see on the web page.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentTopic.id === 'html-elements' && (
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-6">
                HTML Elements and Tags - Complete Guide
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
                    Understanding HTML Elements
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    HTML elements are the building blocks of web pages. Each element has a specific purpose and can contain text, other elements, or both.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
                    Common HTML Elements
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                      <h5 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                        Text Elements
                      </h5>
                      <div className="space-y-2 text-sm">
                        <div><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> - Headings</div>
                        <div><code>&lt;p&gt;</code> - Paragraphs</div>
                        <div><code>&lt;strong&gt;</code> - Bold text</div>
                        <div><code>&lt;em&gt;</code> - Italic text</div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                      <h5 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                        Link Elements
                      </h5>
                      <div className="space-y-2 text-sm">
                        <div><code>&lt;a&gt;</code> - Hyperlinks</div>
                        <div><code>href</code> - Link destination</div>
                        <div><code>target</code> - Link behavior</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
                    Example: Complete HTML Page
                  </h4>
                  <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <div>&lt;!DOCTYPE html&gt;</div>
                    <div>&lt;html lang="en"&gt;</div>
                    <div>&lt;head&gt;</div>
                    <div>&nbsp;&nbsp;&lt;title&gt;My First Page&lt;/title&gt;</div>
                    <div>&lt;/head&gt;</div>
                    <div>&lt;body&gt;</div>
                    <div>&nbsp;&nbsp;&lt;h1&gt;Welcome to HTML!&lt;/h1&gt;</div>
                    <div>&nbsp;&nbsp;&lt;p&gt;This is a &lt;strong&gt;paragraph&lt;/strong&gt; with &lt;em&gt;formatting&lt;/em&gt;.&lt;/p&gt;</div>
                    <div>&nbsp;&nbsp;&lt;a href="https://example.com"&gt;Visit Example&lt;/a&gt;</div>
                    <div>&lt;/body&gt;</div>
                    <div>&lt;/html&gt;</div>
                  </div>
                </div>
              </div>
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
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                Start Practice
              </button>
              <button className="px-4 py-2 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500 transition-colors">
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
          <div className="space-y-4">
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
            <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl">
              <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-4">
                Practice Exercise: {currentTopic.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {currentTopic.description}
              </p>
              <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div>// Your code goes here</div>
                <div>&lt;!DOCTYPE html&gt;</div>
                <div>&lt;html lang="en"&gt;</div>
                <div>&lt;head&gt;</div>
                <div>&nbsp;&nbsp;&lt;title&gt;Practice&lt;/title&gt;</div>
                <div>&lt;/head&gt;</div>
                <div>&lt;body&gt;</div>
                <div>&nbsp;&nbsp;&lt;!-- Start coding here --&gt;</div>
                <div>&lt;/body&gt;</div>
                <div>&lt;/html&gt;</div>
              </div>
              <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium">
                Start Coding
              </button>
            </div>
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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                HTML & CSS Fundamentals
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                Master web development from the ground up
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-slate-600 dark:text-slate-400">Progress</div>
                <div className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                  {Math.round(((activeWeek * 4 + activeTopic + 1) / 16) * 100)}%
                </div>
              </div>
              <div className="w-32 bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all"
                  style={{ width: `${((activeWeek * 4 + activeTopic + 1) / 16) * 100}%` }}
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
      <div className="max-w-7xl mx-auto px-6 py-8">
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

export default HTMLCSSCourseDashboard