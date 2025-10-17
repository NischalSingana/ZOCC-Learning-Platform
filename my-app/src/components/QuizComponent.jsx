import { useState } from 'react'
import { quizData } from '../data/curriculum'
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react'

const QuizComponent = ({ topicId }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

  const questions = quizData[topicId] || []
  
  if (questions.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No quiz available for this topic yet.</p>
      </div>
    )
  }

  const currentQ = questions[currentQuestion]
  const isLastQuestion = currentQuestion === questions.length - 1

  const handleAnswerSelect = (questionId, answerIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }))
  }

  const handleNext = () => {
    if (isLastQuestion) {
      calculateScore()
      setShowResults(true)
    } else {
      setCurrentQuestion(prev => prev + 1)
    }
  }

  const calculateScore = () => {
    let correct = 0
    questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correct) {
        correct++
      }
    })
    setScore(Math.round((correct / questions.length) * 100))
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswers({})
    setShowResults(false)
    setScore(0)
  }

  if (showResults) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
            score >= 70 ? 'bg-green-100' : 'bg-red-100'
          }`}>
            {score >= 70 ? (
              <CheckCircle className="h-8 w-8 text-green-500" />
            ) : (
              <XCircle className="h-8 w-8 text-red-500" />
            )}
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">
            {score >= 70 ? 'Great Job!' : 'Keep Learning!'}
          </h3>
          <p className="text-muted-foreground mb-4">
            You scored {score}% ({questions.filter((q, i) => selectedAnswers[q.id] === q.correct).length} out of {questions.length})
          </p>
          <button
            onClick={resetQuiz}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors mx-auto"
          >
            <RotateCcw className="h-4 w-4" />
            Retake Quiz
          </button>
        </div>

        <div className="space-y-4">
          {questions.map((question, index) => (
            <div key={question.id} className="border border-border rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-3">
                Question {index + 1}: {question.question}
              </h4>
              <div className="space-y-2">
                {question.options.map((option, optionIndex) => {
                  const isSelected = selectedAnswers[question.id] === optionIndex
                  const isCorrect = optionIndex === question.correct
                  const isWrong = isSelected && !isCorrect
                  
                  return (
                    <div
                      key={optionIndex}
                      className={`p-3 rounded-lg border ${
                        isCorrect
                          ? 'border-green-500 bg-green-50 text-green-800'
                          : isWrong
                          ? 'border-red-500 bg-red-50 text-red-800'
                          : 'border-border'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {isCorrect && <CheckCircle className="h-4 w-4 text-green-500" />}
                        {isWrong && <XCircle className="h-4 w-4 text-red-500" />}
                        <span>{option}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
              <p className="text-sm text-muted-foreground mt-3">{question.explanation}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">
          Question {currentQuestion + 1} of {questions.length}
        </h3>
        <div className="w-32 bg-muted rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="bg-card p-6 rounded-lg border border-border">
        <h4 className="text-xl font-semibold text-foreground mb-6">
          {currentQ.question}
        </h4>
        
        <div className="space-y-3">
          {currentQ.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(currentQ.id, index)}
              className={`w-full p-4 text-left rounded-lg border transition-colors ${
                selectedAnswers[currentQ.id] === index
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border hover:bg-accent'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full border-2 ${
                  selectedAnswers[currentQ.id] === index
                    ? 'border-primary bg-primary'
                    : 'border-muted-foreground'
                }`} />
                <span>{option}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
          disabled={currentQuestion === 0}
          className="px-4 py-2 rounded-lg border border-border hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        
        <button
          onClick={handleNext}
          disabled={selectedAnswers[currentQ.id] === undefined}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
        </button>
      </div>
    </div>
  )
}

export default QuizComponent
