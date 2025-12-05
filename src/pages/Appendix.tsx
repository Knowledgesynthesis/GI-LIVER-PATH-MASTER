import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Appendix() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-2">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Appendiceal Pathology</h1>
        <p className="text-muted-foreground mt-2">
          Acute appendicitis and mucinous lesions (high-level overview)
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Acute Appendicitis</CardTitle>
          <CardDescription>Inflammatory patterns in appendiceal specimens</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Acute Suppurative Appendicitis:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Neutrophilic infiltrate in mucosa</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Crypt abscesses</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Mucosal ulceration</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Transmural inflammation</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">Perforated Appendicitis:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Full-thickness necrosis</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Periappendiceal abscess</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Serositis</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Mucinous Lesions (Conceptual Overview)</CardTitle>
          <CardDescription>High-level schematic patterns</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Low-Grade Appendiceal Mucinous Neoplasm (LAMN):</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Mucinous epithelium with low-grade cytology</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Pushing invasion or acellular mucin</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>May cause pseudomyxoma peritonei if ruptured</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">High-Grade Appendiceal Mucinous Neoplasm (HAMN) / Mucinous Adenocarcinoma:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>High-grade cytologic atypia</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Destructive invasion</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Complex glandular architecture</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">Goblet Cell Adenocarcinoma:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Mixed neuroendocrine and glandular features</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Goblet cell morphology</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Infiltrative growth</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Neuroendocrine Tumors (NETs)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Features:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Nests, trabeculae, or solid sheets</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Monotonous cells with "salt-and-pepper" chromatin</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Positive for synaptophysin, chromogranin</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Most appendiceal NETs are low-grade</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-blue-500/10 border-blue-500/30">
        <CardHeader>
          <CardTitle className="text-lg text-blue-700 dark:text-blue-400">Key Concept</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-blue-600 dark:text-blue-400">
            Appendiceal mucinous lesions require careful assessment for invasion pattern, cytologic
            grade, and margin status. Perforation status is critical for staging and determining risk
            of peritoneal spread.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
