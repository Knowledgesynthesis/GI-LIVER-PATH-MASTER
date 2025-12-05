import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { ArrowLeft, AlertTriangle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Pitfalls() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-2">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Pitfalls & Dangerous Mimics</h1>
        <p className="text-muted-foreground mt-2">
          Common diagnostic challenges and look-alikes in GI and liver pathology
        </p>
      </div>

      <Card className="border-amber-500/50 bg-amber-500/5">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            <CardTitle className="text-amber-700 dark:text-amber-400">Barrett Dysplasia Mimics</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2 text-amber-700 dark:text-amber-400">Reactive Atypia vs Dysplasia:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">⚠</span>
                <span><strong>Problem:</strong> Inflammation and erosion cause reactive nuclear changes that can mimic dysplasia</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">✓</span>
                <span><strong>Solution:</strong> Reactive changes show surface maturation, inflammation present; dysplasia shows full-thickness atypia with architectural distortion</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">✓</span>
                <span><strong>Strategy:</strong> Defer dysplasia assessment in presence of active inflammation; recommend repeat biopsy after PPI therapy</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-amber-500/50 bg-amber-500/5">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            <CardTitle className="text-amber-700 dark:text-amber-400">Gastric Reactive Atypia vs Dysplasia</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">⚠</span>
                <span><strong>Problem:</strong> Erosions, ulcers, and active inflammation cause marked reactive atypia</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">✓</span>
                <span><strong>Solution:</strong> Look for inflammation, surface maturation, and lack of architectural complexity</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">✓</span>
                <span><strong>Strategy:</strong> Use "indefinite for dysplasia" category when uncertain; recommend re-biopsy after treatment</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-amber-500/50 bg-amber-500/5">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            <CardTitle className="text-amber-700 dark:text-amber-400">Celiac Disease Mimics</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2 text-amber-700 dark:text-amber-400">Villous Blunting - Differential Diagnosis:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">⚠</span>
                <span><strong>Problem:</strong> Many conditions cause villous blunting—not just celiac disease</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
                <span>Celiac disease, autoimmune enteropathy, Crohn's disease, tropical sprue, drug injury (olmesartan), giardia, common variable immunodeficiency</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">✓</span>
                <span><strong>Solution:</strong> Celiac requires villous blunting + crypt hyperplasia + increased IELs + clinical/serologic correlation</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">✓</span>
                <span><strong>Strategy:</strong> Always count IELs; assess crypt:villous ratio; correlate with serology</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-amber-500/50 bg-amber-500/5">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            <CardTitle className="text-amber-700 dark:text-amber-400">Serrated Polyp Misclassification</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2 text-amber-700 dark:text-amber-400">HP vs SSL/SSA:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">⚠</span>
                <span><strong>Problem:</strong> Distinguishing hyperplastic polyp from sessile serrated lesion is critical but can be subtle</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">✓</span>
                <span><strong>Key features of SSL/SSA:</strong> Basal serration, crypt dilation, L-shaped/boot-shaped crypt bases, horizontal growth along muscularis mucosae</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">✓</span>
                <span><strong>Key features of HP:</strong> Serration limited to upper half of crypts, straight crypts, no architectural distortion</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">✓</span>
                <span><strong>Strategy:</strong> Examine well-oriented crypts; look for at least 1-2 dilated crypts with basal serration; consider location (SSL/SSA more common in proximal colon)</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-amber-500/50 bg-amber-500/5">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            <CardTitle className="text-amber-700 dark:text-amber-400">Colitis: IBD vs Infection vs Ischemia</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">⚠</span>
                <span><strong>Problem:</strong> Active colitis can look similar regardless of etiology</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">✓</span>
                <span><strong>Key discriminator:</strong> Chronicity features (crypt distortion, basal plasmacytosis) indicate IBD, not infection</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">✓</span>
                <span><strong>Ischemia clues:</strong> Hyalinized lamina propria, ghost crypts, hemosiderin, fibrin thrombi</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">✓</span>
                <span><strong>Strategy:</strong> Don't diagnose IBD on first biopsy with acute inflammation only; suggest clinical correlation and repeat if needed</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-amber-500/50 bg-amber-500/5">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            <CardTitle className="text-amber-700 dark:text-amber-400">Pseudodysplasia in IBD</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">⚠</span>
                <span><strong>Problem:</strong> Active inflammation and regeneration in IBD cause atypia that mimics dysplasia</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">✓</span>
                <span><strong>Solution:</strong> Dysplasia should be assessed only in areas without active inflammation</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">✓</span>
                <span><strong>Strategy:</strong> Use "indefinite for dysplasia" when inflammation present; recommend re-biopsy after quiescence</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-amber-500/50 bg-amber-500/5">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            <CardTitle className="text-amber-700 dark:text-amber-400">Liver: Ballooning Assessment</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">⚠</span>
                <span><strong>Problem:</strong> Ballooning is subjective and has poor reproducibility</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">✓</span>
                <span><strong>Features of ballooning:</strong> Enlarged hepatocytes (2x normal), rarefied cytoplasm, clumped intermediate filaments, Mallory-Denk bodies</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">✓</span>
                <span><strong>Strategy:</strong> Use trichrome to help identify ballooning; look for hepatocytes that stand out from background; correlate with other NASH features (steatosis, perisinusoidal fibrosis)</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-amber-500/50 bg-amber-500/5">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            <CardTitle className="text-amber-700 dark:text-amber-400">Liver: Interface Hepatitis Interpretation</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">⚠</span>
                <span><strong>Problem:</strong> Interface hepatitis is not specific—seen in viral, autoimmune, and drug-induced hepatitis</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">✓</span>
                <span><strong>Clues to autoimmune hepatitis:</strong> Prominent interface, plasma cell-rich infiltrate, rosettes, emperipolesis</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">✓</span>
                <span><strong>Strategy:</strong> Describe the pattern, don't over-interpret; clinical and serologic correlation essential</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-amber-500/50 bg-amber-500/5">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            <CardTitle className="text-amber-700 dark:text-amber-400">Well-Differentiated HCC vs HCA</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">⚠</span>
                <span><strong>Problem:</strong> This is one of the most challenging diagnoses in liver pathology</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">✓</span>
                <span><strong>Essential stain:</strong> Reticulin—loss of reticulin framework with trabeculae {'>'}3 cells thick favors HCC</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">✓</span>
                <span><strong>IHC panel:</strong> Glypican-3, HSP70, GS (diffuse positive favors HCC); CD34 highlights capillarization</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">✓</span>
                <span><strong>Morphology:</strong> Stromal invasion, thick trabeculae, pseudoglands, atypia favor HCC</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">✓</span>
                <span><strong>Strategy:</strong> Always use reticulin; be conservative; when uncertain, consider expert consultation</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-amber-500/50 bg-amber-500/5">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            <CardTitle className="text-amber-700 dark:text-amber-400">Cirrhotic Nodules vs HCC</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">⚠</span>
                <span><strong>Problem:</strong> Dysplastic nodules in cirrhosis can have architectural atypia</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">✓</span>
                <span><strong>Solution:</strong> Look for definitive stromal invasion, thick trabeculae on reticulin, and cytologic atypia</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">✓</span>
                <span><strong>Strategy:</strong> Don't overcall HCC based on nodularity alone; need definitive invasion or reticulin loss</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-amber-500/50 bg-amber-500/5">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            <CardTitle className="text-amber-700 dark:text-amber-400">Pseudoglandular HCC vs Cholangiocarcinoma</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">⚠</span>
                <span><strong>Problem:</strong> Pseudoglandular/acinar pattern in HCC can mimic cholangiocarcinoma</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">✓</span>
                <span><strong>Solution:</strong> Use hepatocellular markers (HepPar1, Arginase-1) vs cholangiocytic markers (CK7, CK19)</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">✓</span>
                <span><strong>Morphology clue:</strong> Bile in pseudoglands favors HCC (cholangiocarcinoma doesn't produce bile)</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-blue-500/10 border-blue-500/30">
        <CardHeader>
          <CardTitle className="text-lg text-blue-700 dark:text-blue-400">General Strategy for Avoiding Pitfalls</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-blue-600 dark:text-blue-400">
            <li className="flex items-start">
              <span className="mr-2">1.</span>
              <span>Always assess tissue quality and orientation before making diagnosis</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">2.</span>
              <span>Use appropriate special stains (reticulin for liver, trichrome for fibrosis)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">3.</span>
              <span>Don't diagnose dysplasia in the presence of active inflammation</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">4.</span>
              <span>Require chronicity features before diagnosing IBD</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">5.</span>
              <span>Use IHC panels, not single markers, for difficult diagnoses</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">6.</span>
              <span>When uncertain, use descriptive diagnoses and recommend clinical correlation or re-biopsy</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">7.</span>
              <span>Consider expert consultation for challenging cases</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
