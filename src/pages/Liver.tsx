import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { ArrowLeft, AlertCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Liver() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-2">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Liver Pathology</h1>
        <p className="text-muted-foreground mt-2">
          Liver biopsy interpretation, hepatitis patterns, cholestatic injury, and steatohepatitis
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Systematic Approach to Liver Biopsy</CardTitle>
          <CardDescription>Pattern-based framework</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Key Assessment Areas:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Portal inflammation:</strong> Lymphocytes, plasma cells in portal tracts</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Interface hepatitis:</strong> Inflammation extending into periportal hepatocytes</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Lobular inflammation:</strong> Inflammatory foci within lobules</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Bile duct injury:</strong> Damage or loss of bile ducts</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Steatosis:</strong> Macrovesicular vs microvesicular fat</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Ballooning:</strong> Hepatocyte swelling with clearing</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Fibrosis:</strong> Pattern and stage</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Hepatitis Patterns</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm mb-2">Viral Hepatitis (Conceptual Pattern):</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Portal inflammation with lymphocytes</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Interface hepatitis</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Lobular inflammation and spotty necrosis</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Hepatocyte apoptosis (acidophil bodies)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Ground-glass hepatocytes (HBV)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">Autoimmune Hepatitis:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Prominent interface hepatitis</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Plasma cell-rich portal inflammation</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Rosette formation</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Lobular inflammation</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Emperipolesis (lymphocytes within hepatocytes)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">Drug-Induced Liver Injury (DILI):</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Hepatocellular pattern:</strong> Hepatocyte necrosis, inflammation</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Cholestatic pattern:</strong> Bile plugs, ductular reaction, minimal hepatocyte injury</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Mixed pattern:</strong> Both hepatocellular and cholestatic features</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Eosinophils may be present</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Cholestatic Patterns</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm mb-2">Primary Biliary Cholangitis (PBC):</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Lymphocytic cholangitis (bile duct injury)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Granulomatous inflammation around bile ducts</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Bile duct loss in later stages</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Portal fibrosis progressing to cirrhosis</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">Primary Sclerosing Cholangitis (PSC) (Conceptual):</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Periductal "onion-skin" fibrosis</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Bile duct proliferation</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Portal edema and fibrosis</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Ductopenia in advanced disease</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Steatohepatitis (NASH)</CardTitle>
          <CardDescription>Non-alcoholic steatohepatitis pattern</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Steatosis:</strong> Macrovesicular fat, zone 3 predominant</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Ballooning:</strong> Hepatocyte swelling with rarefied cytoplasm</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Lobular inflammation:</strong> Mixed inflammatory cells</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Mallory-Denk bodies:</strong> Eosinophilic cytoplasmic inclusions</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Fibrosis:</strong> Pericellular/perisinusoidal (chicken-wire pattern) in zone 3</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">NAS Score (Conceptual):</h4>
            <p className="text-xs text-muted-foreground mb-2">Activity components (not for diagnosis alone):</p>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Steatosis (0-3)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Lobular inflammation (0-3)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Ballooning (0-2)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Fibrosis Staging (Conceptual)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Common Staging Systems:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Stage 0:</strong> No fibrosis</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Stage 1:</strong> Periportal or perisinusoidal fibrosis</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Stage 2:</strong> Periportal fibrosis with rare septa</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Stage 3:</strong> Bridging fibrosis</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Stage 4:</strong> Cirrhosis</li>
            </ul>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded p-3">
            <p className="text-xs text-blue-600 dark:text-blue-400">
              <strong>Note:</strong> Trichrome stain essential for fibrosis assessment
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Cirrhosis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Defining Features:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Bridging fibrosis forming nodules</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Regenerative nodules surrounded by fibrosis</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Architectural distortion</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Loss of normal lobular architecture</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-amber-500/50 bg-amber-500/5">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <CardTitle className="text-lg text-amber-700 dark:text-amber-400">Pitfall Alert</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-amber-600 dark:text-amber-400">
            <li className="flex items-start">
              <span className="mr-2">⚠</span>
              <span>Ballooning can be subtle—requires H&E + trichrome correlation and experience</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">⚠</span>
              <span>Interface hepatitis can be seen in viral, autoimmune, and drug-induced hepatitis—integration required</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">⚠</span>
              <span>Adequate biopsy length critical (≥1.5 cm, ≥11 portal tracts recommended)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">⚠</span>
              <span>Sampling variability affects fibrosis staging—correlation with clinical/imaging data essential</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
