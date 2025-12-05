import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { ArrowLeft, AlertCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Esophagus() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-2">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Esophageal Pathology</h1>
        <p className="text-muted-foreground mt-2">
          Key patterns in esophageal biopsies: reflux, eosinophilic esophagitis, Barrett, and infections
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Reflux Esophagitis</CardTitle>
          <CardDescription>Chronic acid exposure injury pattern</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Basal zone hyperplasia</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Elongated papillae reaching upper 1/3 of epithelium</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Intraepithelial eosinophils and neutrophils</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Dilated intercellular spaces (spongiosis)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Eosinophilic Esophagitis (EoE)</CardTitle>
          <CardDescription>Immune-mediated eosinophilic inflammation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Diagnostic Features:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>≥15 eosinophils per high-power field (peak count)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Superficial distribution of eosinophils</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Eosinophilic microabscesses</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Surface layering of eosinophils</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Basal zone hyperplasia</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Spongiosis</li>
            </ul>
          </div>
          <div className="bg-amber-500/10 border border-amber-500/30 rounded p-3">
            <p className="text-xs text-amber-600 dark:text-amber-400">
              <strong>Clinical correlation required:</strong> Must exclude GERD and other causes
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Barrett Esophagus</CardTitle>
          <CardDescription>Intestinal metaplasia of the esophagus</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Requirements:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Intestinal metaplasia with goblet cells</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Columnar epithelium in esophagus (endoscopic correlation)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">Dysplasia Grading:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Negative for dysplasia:</strong> Normal maturation</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Indefinite:</strong> Reactive atypia, inflammation obscures assessment</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Low-grade dysplasia:</strong> Nuclear hyperchromasia, crowding, pencillate nuclei, confined to basal half</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>High-grade dysplasia:</strong> Loss of polarity, full-thickness atypia, cribriforming, marked nuclear pleomorphism</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Infectious Esophagitis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Patterns:</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Candida:</strong> Budding yeasts and pseudohyphae (PAS/GMS positive)
              </li>
              <li>
                <strong>HSV:</strong> Multinucleation, ground-glass nuclei, Cowdry A inclusions
              </li>
              <li>
                <strong>CMV:</strong> Large cells with intranuclear and cytoplasmic inclusions ("owl's eye")
              </li>
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
              <span>Reactive atypia in reflux can mimic dysplasia—look for inflammation and surface maturation</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">⚠</span>
              <span>Barrett dysplasia requires architectural + cytologic atypia, not just nuclear changes</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">⚠</span>
              <span>Eosinophils can be seen in GERD—count and distribution matter for EoE diagnosis</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
