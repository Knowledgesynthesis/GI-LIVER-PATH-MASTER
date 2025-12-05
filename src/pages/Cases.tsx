import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

interface CaseData {
  id: string
  title: string
  category: string
  site: string
  features: string[]
  question: string
  options: string[]
  correct: string
  rationale: string
}

const casesData: CaseData[] = [
  {
    id: 'gi_case_01',
    title: 'Esophageal Biopsy with Eosinophils',
    category: 'Esophagus',
    site: 'Distal esophagus',
    features: ['15+ eosinophils per HPF', 'Superficial eosinophil distribution', 'Basal zone hyperplasia', 'Spongiosis'],
    question: 'What is the most likely diagnosis?',
    options: ['Reflux esophagitis', 'Eosinophilic esophagitis', 'Infectious esophagitis', 'Normal finding'],
    correct: 'Eosinophilic esophagitis',
    rationale: '≥15 eosinophils per HPF with superficial distribution is diagnostic of eosinophilic esophagitis (with clinical correlation to exclude GERD).',
  },
  {
    id: 'gi_case_02',
    title: 'Gastric Antral Biopsy',
    category: 'Stomach',
    site: 'Gastric antrum',
    features: ['Chronic inflammation', 'Active inflammation (neutrophils)', 'Curved bacteria on surface', 'Lymphoid aggregates'],
    question: 'What is the pattern?',
    options: ['Autoimmune gastritis', 'H. pylori gastritis', 'Reactive gastropathy', 'Normal'],
    correct: 'H. pylori gastritis',
    rationale: 'Chronic and active inflammation with surface bacteria (H. pylori) is the classic pattern of H. pylori gastritis.',
  },
  {
    id: 'gi_case_03',
    title: 'Duodenal Biopsy',
    category: 'Small Bowel',
    site: 'Duodenum',
    features: ['Villous blunting', 'Crypt hyperplasia', 'Increased intraepithelial lymphocytes (30/100)', 'Chronic inflammation'],
    question: 'What diagnosis requires clinical and serologic correlation?',
    options: ['Tropical sprue', 'Celiac disease', 'Crohn disease', 'Giardia infection'],
    correct: 'Celiac disease',
    rationale: 'Villous blunting + crypt hyperplasia + increased IELs is the classic triad of celiac disease, but requires serologic and clinical confirmation.',
  },
  {
    id: 'gi_case_04',
    title: 'Colonic Biopsy with Architectural Distortion',
    category: 'Colon',
    site: 'Left colon',
    features: ['Crypt architectural distortion', 'Crypt branching', 'Basal plasmacytosis', 'Active inflammation (cryptitis)'],
    question: 'What broad pattern is present?',
    options: ['Acute infectious colitis', 'Chronic colitis consistent with IBD', 'Ischemic colitis', 'Normal colon'],
    correct: 'Chronic colitis consistent with IBD',
    rationale: 'Crypt architectural distortion and basal plasmacytosis are hallmarks of chronicity, supporting IBD over acute infection.',
  },
  {
    id: 'gi_case_05',
    title: 'Serrated Polyp',
    category: 'Colon',
    site: 'Right colon',
    features: ['Serration extending to crypt base', 'Dilated crypts', 'Boot-shaped crypt bases', 'Horizontal growth along muscularis mucosae'],
    question: 'What is the polyp type?',
    options: ['Hyperplastic polyp', 'Sessile serrated lesion (SSL/SSA)', 'Traditional serrated adenoma', 'Tubular adenoma'],
    correct: 'Sessile serrated lesion (SSL/SSA)',
    rationale: 'Basal serration, crypt dilation, and boot-shaped crypts are diagnostic features of sessile serrated lesion.',
  },
  {
    id: 'liver_case_01',
    title: 'Liver Biopsy with Steatosis',
    category: 'Liver',
    site: 'Liver',
    features: ['60% macrovesicular steatosis (zone 3)', 'Hepatocyte ballooning', 'Lobular inflammation', 'Pericellular fibrosis (zone 3)'],
    question: 'What is the likely pattern?',
    options: ['Simple steatosis', 'Steatohepatitis pattern', 'Autoimmune hepatitis', 'Cholestatic injury'],
    correct: 'Steatohepatitis pattern',
    rationale: 'Steatosis + ballooning + lobular inflammation + pericellular fibrosis = steatohepatitis pattern (NASH-like).',
  },
  {
    id: 'liver_case_02',
    title: 'Liver Biopsy with Portal Inflammation',
    category: 'Liver',
    site: 'Liver',
    features: ['Prominent interface hepatitis', 'Plasma cell-rich portal inflammation', 'Hepatocyte rosettes', 'Lobular inflammation'],
    question: 'What pattern is most consistent with these features?',
    options: ['Viral hepatitis', 'Autoimmune hepatitis pattern', 'Drug-induced hepatitis', 'PBC'],
    correct: 'Autoimmune hepatitis pattern',
    rationale: 'Prominent interface hepatitis + plasma cells + rosettes suggests autoimmune hepatitis pattern (requires clinical/serologic correlation).',
  },
  {
    id: 'liver_case_03',
    title: 'Liver Nodule',
    category: 'Liver Tumors',
    site: 'Liver mass',
    features: ['Hepatocyte sheets and trabeculae >3 cells thick', 'Loss of reticulin framework', 'Unpaired arteries with stromal invasion', 'Nuclear atypia'],
    question: 'What is the likely diagnosis?',
    options: ['Hepatocellular adenoma', 'Focal nodular hyperplasia', 'Hepatocellular carcinoma', 'Regenerative nodule'],
    correct: 'Hepatocellular carcinoma',
    rationale: 'Thick trabeculae (>3 cells) + reticulin loss + stromal invasion = hepatocellular carcinoma.',
  },
  {
    id: 'liver_case_04',
    title: 'Cholangiocarcinoma Pattern',
    category: 'Liver Tumors',
    site: 'Liver hilum',
    features: ['Infiltrative glandular proliferation', 'Desmoplastic stroma', 'Perineural invasion', 'CK7+, CK19+, HepPar1-'],
    question: 'What is the diagnosis?',
    options: ['Hepatocellular carcinoma', 'Cholangiocarcinoma', 'Metastatic adenocarcinoma', 'Hepatocellular adenoma'],
    correct: 'Cholangiocarcinoma',
    rationale: 'Glandular architecture + desmoplasia + CK7/CK19 positive and HepPar1 negative = cholangiocarcinoma.',
  },
  {
    id: 'pancreas_case_01',
    title: 'Pancreatic Neuroendocrine Tumor',
    category: 'Pancreas',
    site: 'Pancreatic tail',
    features: ['Organoid/trabecular pattern', 'Monotonous cells with salt-and-pepper chromatin', 'Synaptophysin+, Chromogranin+', 'Ki-67 2%'],
    question: 'What is the grade?',
    options: ['Grade 1 (G1) NET', 'Grade 2 (G2) NET', 'Grade 3 (G3) NET', 'Not a NET'],
    correct: 'Grade 1 (G1) NET',
    rationale: 'Ki-67 <3% = Grade 1 (G1) neuroendocrine tumor.',
  },
]

export default function Cases() {
  const [selectedCase, setSelectedCase] = useState<CaseData | null>(null)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showRationale, setShowRationale] = useState(false)

  const handleCaseSelect = (caseData: CaseData) => {
    setSelectedCase(caseData)
    setSelectedAnswer(null)
    setShowRationale(false)
  }

  const handleAnswerSubmit = () => {
    if (selectedAnswer) {
      setShowRationale(true)
    }
  }

  const categories = Array.from(new Set(casesData.map(c => c.category)))

  return (
    <div className="space-y-6 max-w-6xl">
      <div>
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-2">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Integrated Case Bank</h1>
        <p className="text-muted-foreground mt-2">
          Synthetic GI and liver pathology cases for pattern recognition practice
        </p>
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mt-4">
          <p className="text-sm text-amber-600 dark:text-amber-400">
            <strong>Educational Only:</strong> All cases are entirely synthetic. No real patient data or PHI. Session-only—answers not stored.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1 space-y-4">
          <h2 className="text-xl font-semibold">Case Library</h2>

          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2">{category}</h3>
              <div className="space-y-2">
                {casesData
                  .filter((c) => c.category === category)
                  .map((caseData) => (
                    <Card
                      key={caseData.id}
                      onClick={() => handleCaseSelect(caseData)}
                      className={`cursor-pointer transition-colors ${
                        selectedCase?.id === caseData.id ? 'border-primary bg-primary/5' : ''
                      }`}
                    >
                      <CardHeader className="p-4">
                        <CardTitle className="text-sm">{caseData.title}</CardTitle>
                        <CardDescription className="text-xs">{caseData.site}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-2">
          {selectedCase ? (
            <Card>
              <CardHeader>
                <CardTitle>{selectedCase.title}</CardTitle>
                <CardDescription>{selectedCase.site}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Clinical/Histologic Features:</h4>
                  <ul className="space-y-1">
                    {selectedCase.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <span className="text-primary mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">{selectedCase.question}</h4>
                  <div className="space-y-2">
                    {selectedCase.options.map((option) => (
                      <label
                        key={option}
                        className={`flex items-center space-x-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                          selectedAnswer === option
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:bg-accent'
                        }`}
                      >
                        <input
                          type="radio"
                          name="answer"
                          value={option}
                          checked={selectedAnswer === option}
                          onChange={(e) => setSelectedAnswer(e.target.value)}
                          className="w-4 h-4"
                        />
                        <span className="text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {!showRationale && (
                  <Button
                    onClick={handleAnswerSubmit}
                    disabled={!selectedAnswer}
                    className="w-full"
                  >
                    Submit Answer
                  </Button>
                )}

                {showRationale && (
                  <div className="space-y-3">
                    {selectedAnswer === selectedCase.correct ? (
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                        <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">
                          ✓ Correct!
                        </h4>
                        <p className="text-sm text-green-600 dark:text-green-400">
                          {selectedCase.rationale}
                        </p>
                      </div>
                    ) : (
                      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                        <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">
                          ✗ Incorrect
                        </h4>
                        <p className="text-sm text-red-600 dark:text-red-400 mb-2">
                          The correct answer is: <strong>{selectedCase.correct}</strong>
                        </p>
                        <p className="text-sm text-red-600 dark:text-red-400">
                          {selectedCase.rationale}
                        </p>
                      </div>
                    )}
                    <Button
                      onClick={() => {
                        setSelectedAnswer(null)
                        setShowRationale(false)
                      }}
                      variant="outline"
                      className="w-full"
                    >
                      Try Again
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-12 text-center text-muted-foreground">
                <p>Select a case from the library to begin</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
