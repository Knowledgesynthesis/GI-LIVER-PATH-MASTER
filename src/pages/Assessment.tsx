import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useAssessmentStore } from '@/store/assessmentStore'

interface Question {
  id: string
  question: string
  options: string[]
  correct: string
  explanation: string
  category: string
}

const questions: Question[] = [
  {
    id: 'q1',
    category: 'Esophagus',
    question: 'What is the minimum eosinophil count per HPF required for eosinophilic esophagitis diagnosis?',
    options: ['5 eosinophils/HPF', '10 eosinophils/HPF', '15 eosinophils/HPF', '20 eosinophils/HPF'],
    correct: '15 eosinophils/HPF',
    explanation: '≥15 eosinophils per HPF (peak count) is the diagnostic threshold for eosinophilic esophagitis, with clinical correlation to exclude GERD.',
  },
  {
    id: 'q2',
    category: 'Stomach',
    question: 'What is the hallmark feature of autoimmune gastritis?',
    options: ['Antral atrophy', 'Oxyntic (body/fundus) atrophy', 'Intestinal metaplasia only', 'Active inflammation'],
    correct: 'Oxyntic (body/fundus) atrophy',
    explanation: 'Autoimmune gastritis targets parietal cells in the oxyntic mucosa (body/fundus), leading to atrophy of these regions while typically sparing the antrum.',
  },
  {
    id: 'q3',
    category: 'Small Bowel',
    question: 'What is the classic triad for celiac disease?',
    options: [
      'Villous blunting + increased IELs + inflammation',
      'Villous blunting + crypt hyperplasia + increased IELs',
      'Crypt hyperplasia + ulceration + granulomas',
      'Villous blunting + giardia + inflammation'
    ],
    correct: 'Villous blunting + crypt hyperplasia + increased IELs',
    explanation: 'Celiac disease requires: (1) villous blunting/atrophy, (2) crypt hyperplasia, and (3) increased intraepithelial lymphocytes, along with clinical and serologic correlation.',
  },
  {
    id: 'q4',
    category: 'Colon',
    question: 'What feature distinguishes chronic colitis from acute infectious colitis?',
    options: [
      'Presence of neutrophils',
      'Crypt architectural distortion',
      'Mucosal inflammation',
      'Erosions and ulceration'
    ],
    correct: 'Crypt architectural distortion',
    explanation: 'Crypt architectural distortion (branching, irregular spacing) and basal plasmacytosis are hallmarks of chronicity, indicating IBD rather than acute infection.',
  },
  {
    id: 'q5',
    category: 'Colon',
    question: 'What is the key feature distinguishing sessile serrated lesion from hyperplastic polyp?',
    options: [
      'Serration in upper crypts only',
      'Serration extending to crypt base with dilation',
      'Presence of dysplasia',
      'Location in left colon'
    ],
    correct: 'Serration extending to crypt base with dilation',
    explanation: 'SSL/SSA shows basal serration, crypt dilation, and architectural features like boot-shaped/L-shaped crypt bases. Hyperplastic polyps have serration limited to the upper half of crypts.',
  },
  {
    id: 'q6',
    category: 'Liver',
    question: 'What defines steatohepatitis (NASH) pattern?',
    options: [
      'Steatosis alone',
      'Steatosis + inflammation',
      'Steatosis + ballooning + inflammation',
      'Steatosis + fibrosis'
    ],
    correct: 'Steatosis + ballooning + inflammation',
    explanation: 'Steatohepatitis requires the combination of steatosis, hepatocyte ballooning, and lobular inflammation. Fibrosis is often present but not required for diagnosis.',
  },
  {
    id: 'q7',
    category: 'Liver',
    question: 'What feature is most suggestive of autoimmune hepatitis pattern?',
    options: [
      'Cholestatic injury pattern',
      'Prominent interface hepatitis with plasma cells',
      'Steatosis and ballooning',
      'Bile duct loss'
    ],
    correct: 'Prominent interface hepatitis with plasma cells',
    explanation: 'Autoimmune hepatitis typically shows prominent interface hepatitis, plasma cell-rich portal inflammation, rosette formation, and emperipolesis.',
  },
  {
    id: 'q8',
    category: 'Liver Tumors',
    question: 'What is the key histologic feature distinguishing HCC from HCA?',
    options: [
      'Presence of fat',
      'Loss of reticulin framework (>3 cell thick trabeculae)',
      'Nuclear atypia alone',
      'Presence of inflammation'
    ],
    correct: 'Loss of reticulin framework (>3 cell thick trabeculae)',
    explanation: 'Reticulin stain showing loss of framework with trabeculae >3 cells thick is the most reliable feature for diagnosing HCC. HCA maintains normal 1-2 cell thick reticulin pattern.',
  },
  {
    id: 'q9',
    category: 'Liver Tumors',
    question: 'Which IHC marker is most specific for cholangiocarcinoma over HCC?',
    options: ['HepPar1', 'Arginase-1', 'CK7/CK19', 'Glypican-3'],
    correct: 'CK7/CK19',
    explanation: 'Cholangiocarcinoma is typically CK7+/CK19+ and negative for hepatocellular markers (HepPar1, Arginase-1). HCC shows the opposite pattern.',
  },
  {
    id: 'q10',
    category: 'Pancreas',
    question: 'What Ki-67 proliferation index defines Grade 1 (G1) pancreatic NET?',
    options: ['<3%', '3-20%', '>20%', '<1%'],
    correct: '<3%',
    explanation: 'Pancreatic NETs are graded by Ki-67: G1 = <3%, G2 = 3-20%, G3 = >20%. This grading has prognostic significance.',
  },
  {
    id: 'q11',
    category: 'Molecular',
    question: 'Which mutation is associated with the serrated pathway to colorectal cancer?',
    options: ['APC', 'TP53', 'BRAF V600E', 'KRAS alone'],
    correct: 'BRAF V600E',
    explanation: 'BRAF V600E mutation is characteristic of the serrated pathway (SSL/SSA → dysplasia → carcinoma), often with CpG island methylation.',
  },
  {
    id: 'q12',
    category: 'Pitfalls',
    question: 'What is the most important consideration when assessing for dysplasia in IBD?',
    options: [
      'Use p53 immunostain',
      'Assess only in areas without active inflammation',
      'Always diagnose dysplasia if atypia present',
      'Ignore architectural changes'
    ],
    correct: 'Assess only in areas without active inflammation',
    explanation: 'Active inflammation causes reactive/regenerative atypia that mimics dysplasia (pseudodysplasia). Dysplasia should be assessed only in quiescent areas or deferred with recommendation for re-biopsy.',
  },
  {
    id: 'q13',
    category: 'Esophagus',
    question: 'Barrett esophagus requires which essential feature for diagnosis?',
    options: [
      'Columnar epithelium only',
      'Intestinal metaplasia with goblet cells',
      'Dysplasia',
      'Eosinophils'
    ],
    correct: 'Intestinal metaplasia with goblet cells',
    explanation: 'Barrett esophagus diagnosis requires intestinal metaplasia (goblet cells) in columnar-lined esophagus (endoscopic correlation required).',
  },
  {
    id: 'q14',
    category: 'Colon',
    question: 'What feature helps distinguish ischemic colitis from IBD?',
    options: [
      'Crypt architectural distortion',
      'Hyalinized lamina propria and ghost crypts',
      'Basal plasmacytosis',
      'Granulomas'
    ],
    correct: 'Hyalinized lamina propria and ghost crypts',
    explanation: 'Ischemic colitis shows hyalinized/sclerotic lamina propria, ghost crypts, mucosal atrophy, and hemosiderin-laden macrophages. IBD shows chronic architectural changes.',
  },
  {
    id: 'q15',
    category: 'Liver',
    question: 'What is the minimum recommended biopsy length for adequate liver biopsy assessment?',
    options: ['0.5 cm', '1.0 cm', '1.5 cm', '3.0 cm'],
    correct: '1.5 cm',
    explanation: 'Adequate liver biopsy should be ≥1.5 cm in length with ≥11 portal tracts for optimal assessment of inflammation and fibrosis. Shorter biopsies may have sampling error.',
  },
]

export default function Assessment() {
  const { currentScore, totalQuestions, updateScore, resetAssessment } = useAssessmentStore()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [assessmentComplete, setAssessmentComplete] = useState(false)

  const currentQuestion = questions[currentQuestionIndex]

  const handleAnswerSubmit = () => {
    if (selectedAnswer) {
      const isCorrect = selectedAnswer === currentQuestion.correct
      updateScore(isCorrect)
      setShowExplanation(true)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setAssessmentComplete(true)
    }
  }

  const handleRestart = () => {
    resetAssessment()
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setAssessmentComplete(false)
  }

  if (assessmentComplete) {
    const percentage = Math.round((currentScore / totalQuestions) * 100)

    return (
      <div className="space-y-6 max-w-3xl mx-auto">
        <div>
          <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-2">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold tracking-tight">Assessment Complete</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Your Results</CardTitle>
            <CardDescription>Session-only results (not stored)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center py-8">
              <div className="text-6xl font-bold mb-4">
                {percentage}%
              </div>
              <div className="text-xl text-muted-foreground">
                {currentScore} / {totalQuestions} Correct
              </div>
            </div>

            <div className={`p-4 rounded-lg ${
              percentage >= 80
                ? 'bg-green-500/10 border border-green-500/30'
                : percentage >= 60
                ? 'bg-blue-500/10 border border-blue-500/30'
                : 'bg-amber-500/10 border border-amber-500/30'
            }`}>
              <p className="text-sm">
                {percentage >= 80 && "Excellent work! You've demonstrated strong understanding of GI and liver pathology concepts."}
                {percentage >= 60 && percentage < 80 && "Good effort! Review the explanations and continue practicing to strengthen your knowledge."}
                {percentage < 60 && "Keep studying! Review the module content and try the assessment again to improve your understanding."}
              </p>
            </div>

            <div className="space-y-2">
              <Button onClick={handleRestart} className="w-full">
                Start New Assessment
              </Button>
              <Link to="/" className="block">
                <Button variant="outline" className="w-full">
                  Return to Home
                </Button>
              </Link>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
              <p className="text-xs text-blue-600 dark:text-blue-400">
                <strong>Note:</strong> Results are session-only and are not saved or tracked. This assessment is for educational practice only.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div>
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-2">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Assessment</h1>
        <p className="text-muted-foreground mt-2">
          Test your GI and liver pathology knowledge (Session-only, not tracked)
        </p>
      </div>

      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">
          Question {currentQuestionIndex + 1} of {questions.length}
        </span>
        <span className="text-muted-foreground">
          Score: {currentScore} / {totalQuestions}
        </span>
      </div>

      <div className="w-full bg-secondary rounded-full h-2">
        <div
          className="bg-primary h-2 rounded-full transition-all"
          style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      <Card>
        <CardHeader>
          <div className="text-xs text-muted-foreground mb-2">{currentQuestion.category}</div>
          <CardTitle className="text-xl">{currentQuestion.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            {currentQuestion.options.map((option) => (
              <label
                key={option}
                className={`flex items-center space-x-3 p-4 rounded-lg border cursor-pointer transition-colors ${
                  selectedAnswer === option
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:bg-accent'
                } ${
                  showExplanation && option === currentQuestion.correct
                    ? 'border-green-500 bg-green-500/10'
                    : ''
                } ${
                  showExplanation && selectedAnswer === option && option !== currentQuestion.correct
                    ? 'border-red-500 bg-red-500/10'
                    : ''
                }`}
              >
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                  disabled={showExplanation}
                  className="w-4 h-4"
                />
                <span className="text-sm flex-1">{option}</span>
                {showExplanation && option === currentQuestion.correct && (
                  <span className="text-green-600 dark:text-green-400">✓</span>
                )}
                {showExplanation && selectedAnswer === option && option !== currentQuestion.correct && (
                  <span className="text-red-600 dark:text-red-400">✗</span>
                )}
              </label>
            ))}
          </div>

          {!showExplanation ? (
            <Button
              onClick={handleAnswerSubmit}
              disabled={!selectedAnswer}
              className="w-full"
            >
              Submit Answer
            </Button>
          ) : (
            <div className="space-y-4">
              <div className={`p-4 rounded-lg ${
                selectedAnswer === currentQuestion.correct
                  ? 'bg-green-500/10 border border-green-500/30'
                  : 'bg-red-500/10 border border-red-500/30'
              }`}>
                <h4 className={`font-semibold mb-2 ${
                  selectedAnswer === currentQuestion.correct
                    ? 'text-green-700 dark:text-green-400'
                    : 'text-red-700 dark:text-red-400'
                }`}>
                  {selectedAnswer === currentQuestion.correct ? '✓ Correct!' : '✗ Incorrect'}
                </h4>
                <p className={`text-sm ${
                  selectedAnswer === currentQuestion.correct
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-red-600 dark:text-red-400'
                }`}>
                  {currentQuestion.explanation}
                </p>
              </div>
              <Button onClick={handleNextQuestion} className="w-full">
                {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Assessment'}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
