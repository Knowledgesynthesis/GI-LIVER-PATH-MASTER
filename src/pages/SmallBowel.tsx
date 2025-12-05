import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { ArrowLeft, AlertCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function SmallBowel() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-2">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Small Bowel Pathology</h1>
        <p className="text-muted-foreground mt-2">
          Celiac disease, Whipple disease, tropical sprue, and small bowel infections
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Celiac Disease</CardTitle>
          <CardDescription>Gluten-sensitive enteropathy</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Key Diagnostic Features:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Villous blunting/atrophy (decreased villous:crypt ratio)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Crypt hyperplasia</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Increased intraepithelial lymphocytes (IELs) {'>'}25-40 per 100 enterocytes</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Chronic inflammation in lamina propria</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">Marsh Classification (Conceptual):</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Type 1:</strong> Increased IELs only</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Type 2:</strong> Increased IELs + crypt hyperplasia</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Type 3:</strong> Villous atrophy (3a partial, 3b subtotal, 3c total)</li>
            </ul>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded p-3">
            <p className="text-xs text-blue-600 dark:text-blue-400">
              <strong>Note:</strong> Diagnosis requires clinical, serologic, and histologic correlation
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Whipple Disease (Conceptual)</CardTitle>
          <CardDescription>Tropheryma whipplei infection</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Pattern:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Foamy macrophages in lamina propria (PAS-positive, diastase-resistant)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Villous blunting</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Dilated lacteals</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Bacilli visible on electron microscopy</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tropical Sprue (Conceptual)</CardTitle>
          <CardDescription>Endemic malabsorption syndrome</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Features:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Partial villous atrophy</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Chronic inflammation</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Geographic/endemic history required for diagnosis</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Small Bowel Infections</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Giardia:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Trophozoites on surface ("kite-shaped" or "face-like")</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Variable villous blunting</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Increased IELs</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">Cryptosporidium:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Small basophilic organisms on brush border</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Immunocompromised patients</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Other Small Bowel Patterns</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Eosinophilic Enteritis:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Marked eosinophilic infiltrate in mucosa/submucosa</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Clinical correlation required</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">NSAID Enteropathy:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Erosions, ulcers</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Villous blunting</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Diaphragm disease (strictures)</li>
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
              <span>Villous blunting alone is insufficient for celiac diagnosis—must have crypt hyperplasia and increased IELs</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">⚠</span>
              <span>Many conditions cause villous blunting: Celiac, Crohn's, infections, autoimmune enteropathy, drug injury</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">⚠</span>
              <span>Giardia can be patchy—examine multiple sections</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">⚠</span>
              <span>Proper orientation is critical for assessing villous:crypt ratio</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
