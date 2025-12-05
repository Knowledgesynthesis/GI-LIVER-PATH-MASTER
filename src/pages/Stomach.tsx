import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { ArrowLeft, AlertCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Stomach() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-2">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Gastric Pathology</h1>
        <p className="text-muted-foreground mt-2">
          Gastritis patterns, atrophy, metaplasia, dysplasia, and gastric polyps
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Chronic H. pylori Gastritis</CardTitle>
          <CardDescription>Active chronic gastritis pattern</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Chronic inflammation (lymphocytes, plasma cells) in lamina propria</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Active inflammation (neutrophils in epithelium/lamina propria)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Curved/spiral bacteria on surface (Giemsa, immunostain)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>May see lymphoid aggregates/follicles</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Autoimmune Gastritis</CardTitle>
          <CardDescription>Immune-mediated destruction of parietal cells</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Pattern:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Oxyntic (body/fundus) atrophy</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Loss of parietal and chief cells</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Intestinal metaplasia (pseudopyloric metaplasia)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Foveolar hyperplasia</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Neuroendocrine hyperplasia (ECL cells)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Antrum typically spared</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Reactive Gastropathy</CardTitle>
          <CardDescription>Chemical/bile injury pattern</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Features:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Foveolar hyperplasia with corkscrew appearance</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Smooth muscle proliferation in lamina propria</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Vascular congestion and edema</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Minimal inflammation</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Gastric Atrophy & Intestinal Metaplasia</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Atrophy:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Loss of appropriate glands for anatomic location</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>May be replaced by intestinal metaplasia or fibrosis</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">Intestinal Metaplasia:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Goblet cells, Paneth cells, absorptive cells replacing gastric epithelium</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Risk factor for gastric adenocarcinoma</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Gastric Dysplasia</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Low-Grade Dysplasia:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Nuclear hyperchromasia, crowding, pencillate nuclei</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Preserved architecture</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Nuclear stratification limited to basal half</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">High-Grade Dysplasia:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Marked architectural distortion</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Cribriforming, complex branching</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Loss of polarity, full-thickness atypia</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Gastric Polyps</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Fundic Gland Polyp:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Dilated oxyntic glands with cystic change</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Often associated with PPI use or FAP</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Usually no dysplasia (except in FAP)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">Hyperplastic Polyp:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Foveolar hyperplasia with edematous, inflamed stroma</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Cystically dilated glands</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Background mucosal injury often present</li>
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
              <span>Reactive atypia can mimic dysplasia—look for inflammation and erosion</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">⚠</span>
              <span>Intestinal metaplasia is not dysplasia but increases carcinoma risk</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">⚠</span>
              <span>H. pylori can be patchy—multiple levels and special stains may be needed</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
