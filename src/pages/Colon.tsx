import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { ArrowLeft, AlertCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Colon() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-2">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Colonic Pathology</h1>
        <p className="text-muted-foreground mt-2">
          Inflammatory patterns, polyps, dysplasia, and differential diagnosis of colitis
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Active Colitis Pattern</CardTitle>
          <CardDescription>Neutrophilic inflammation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Features of Activity:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Neutrophils in crypt epithelium (cryptitis)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Crypt abscesses (neutrophils in crypt lumen)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Erosions or ulceration</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Crypt dropout</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Chronic Colitis Pattern</CardTitle>
          <CardDescription>Architectural distortion indicates chronicity</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Features of Chronicity:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Crypt architectural distortion (branching, irregular spacing)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Crypt atrophy/shortening</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Basal plasmacytosis (plasma cells between crypt bases and muscularis mucosae)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Paneth cell metaplasia (left colon)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>IBD vs Infection vs Ischemia</CardTitle>
          <CardDescription>Critical differential diagnosis framework</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm mb-2">Ulcerative Colitis (UC):</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Continuous involvement from rectum proximally</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Diffuse chronic inflammation</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Crypt architectural distortion</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Basal plasmacytosis</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Paneth cell metaplasia (left colon)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Superficial inflammation pattern</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">Crohn Disease:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Patchy/discontinuous inflammation</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Transmural inflammation</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Granulomas (epithelioid, non-necrotizing, away from crypt injury)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Focally enhanced cryptitis</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Pyloric gland metaplasia</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Chronic inflammation may be patchy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">Infectious Colitis:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Preserved architecture (no chronicity)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Acute inflammation only</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>May have organisms (C. diff pseudomembranes)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Patchy involvement possible</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">Ischemic Colitis:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Mucosal necrosis/atrophy</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Hyalinization of lamina propria</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Ghost crypts</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Hemosiderin-laden macrophages</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Fibrin thrombi in vessels</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Microscopic Colitis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Lymphocytic Colitis:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Increased intraepithelial lymphocytes (≥20 per 100 epithelial cells)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Surface epithelial damage</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Chronic inflammation in lamina propria</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>No subepithelial collagen band</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">Collagenous Colitis:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Thickened subepithelial collagen band (≥10 μm)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Increased intraepithelial lymphocytes</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Chronic inflammation in lamina propria</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Colonic Polyps</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm mb-2">Hyperplastic Polyp:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Serrated (saw-tooth) surface architecture</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Straight crypts</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Serration in upper half only</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>No dysplasia</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">Sessile Serrated Lesion/Polyp (SSL/SSA/P):</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Serration extending to crypt base</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Crypt dilation</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>L-shaped or boot-shaped ("inverted T") crypt bases</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Horizontal growth along muscularis mucosae</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>May have dysplasia</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">Traditional Serrated Adenoma:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Serrated architecture with eosinophilic cytoplasm</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Pencillate nuclei, hyperchromasia</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Ectopic crypt foci</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Dysplasia present</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">Conventional Adenomas:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Tubular:</strong> {'<'}25% villous</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Tubulovillous:</strong> 25-75% villous</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Villous:</strong> {'>'}75% villous</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Dysplasia grading: low-grade vs high-grade</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Dysplasia in IBD</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Key Points:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Must distinguish from reactive/regenerative atypia</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Active inflammation should be absent for dysplasia assessment</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Categories: Negative, Indefinite, Low-grade, High-grade</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>DALM (dysplasia-associated lesion or mass) vs adenoma-like mass</li>
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
              <span>Crypt architectural distortion is the hallmark of chronicity—don't call IBD without it</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">⚠</span>
              <span>Pseudomembranes suggest C. diff but can be seen in ischemia</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">⚠</span>
              <span>SSL/SSA requires adequate sampling—at least 1-2 well-oriented crypts with diagnostic features</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">⚠</span>
              <span>Reactive atypia in active colitis can mimic dysplasia—repeat biopsy after inflammation resolves</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
