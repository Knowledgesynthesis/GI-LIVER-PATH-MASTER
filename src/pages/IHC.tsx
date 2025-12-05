import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function IHC() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-2">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Immunohistochemistry Concepts</h1>
        <p className="text-muted-foreground mt-2">
          High-level IHC markers and profiles for GI and liver pathology (educational only)
        </p>
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mt-4">
          <p className="text-sm text-amber-600 dark:text-amber-400">
            <strong>Educational Only:</strong> IHC interpretation requires clinical context, quality control, and expert correlation. This is conceptual overview only.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Hepatocellular Markers</CardTitle>
          <CardDescription>Identifying hepatocellular differentiation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Key Markers:</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>HepPar1:</strong> Hepatocyte-specific antigen (cytoplasmic), sensitive but not entirely specific
              </li>
              <li>
                <strong>Arginase-1:</strong> Nuclear staining, highly specific for hepatocytes
              </li>
              <li>
                <strong>Glypican-3:</strong> Membranous/cytoplasmic, positive in HCC, negative in benign hepatocytes
              </li>
              <li>
                <strong>Albumin ISH:</strong> Hepatocyte marker
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Cholangiocytic (Biliary) Markers</CardTitle>
          <CardDescription>Identifying biliary differentiation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Key Markers:</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>CK7:</strong> Positive in bile ducts and cholangiocarcinoma
              </li>
              <li>
                <strong>CK19:</strong> Positive in bile ducts and cholangiocarcinoma
              </li>
              <li>
                <strong>CK20:</strong> Variable in GI adenocarcinomas
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>GI Tract Markers</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm mb-2">Barrett Esophagus/Dysplasia:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>p53 (aberrant pattern suggests dysplasia)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Ki-67 (increased proliferation in dysplasia)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">H. pylori:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>H. pylori immunostain (more sensitive than H&E)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">Celiac Disease:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>CD3 (highlights intraepithelial lymphocytes)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Neuroendocrine Markers</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Key Markers:</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Synaptophysin:</strong> Sensitive neuroendocrine marker (diffuse cytoplasmic)
              </li>
              <li>
                <strong>Chromogranin:</strong> Specific but less sensitive (granular cytoplasmic)
              </li>
              <li>
                <strong>Ki-67:</strong> Proliferation index for NET grading
                <ul className="ml-4 mt-1 space-y-1">
                  <li>G1: {'<'}3%</li>
                  <li>G2: 3-20%</li>
                  <li>G3: {'>'}20%</li>
                </ul>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Mucin Markers</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Mucin Expression Patterns:</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>MUC2:</strong> Intestinal-type mucin (goblet cells)
              </li>
              <li>
                <strong>MUC5AC:</strong> Gastric foveolar-type mucin
              </li>
              <li>
                <strong>MUC6:</strong> Pyloric gland-type mucin
              </li>
            </ul>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded p-3 mt-3">
            <p className="text-xs text-blue-600 dark:text-blue-400">
              Mucin patterns help classify gastric and pancreatic neoplasms
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>HCC Diagnostic Panel (Conceptual)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Well-Differentiated HCC:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Glypican-3: Positive (membranous/cytoplasmic)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>HSP70: Positive (cytoplasmic)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Glutamine synthetase (GS): Diffuse positive (vs map-like in normal liver)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>CD34: Highlights capillarization of sinusoids</li>
            </ul>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded p-3 mt-3">
            <p className="text-xs text-blue-600 dark:text-blue-400">
              Reticulin stain is essential and often more useful than IHC for HCC diagnosis
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>MMR/MSI Markers (Conceptual)</CardTitle>
          <CardDescription>Mismatch repair proteins</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">MMR Proteins:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>MLH1, PMS2, MSH2, MSH6</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Loss of expression suggests MSI-high status</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Used in colorectal cancer, gastric cancer screening</li>
            </ul>
          </div>
          <div className="bg-amber-500/10 border border-amber-500/30 rounded p-3 mt-3">
            <p className="text-xs text-amber-600 dark:text-amber-400">
              <strong>Educational only:</strong> Clinical testing and genetic counseling required for patient management
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Special Stains (Conceptual Reference)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Common Special Stains:</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Trichrome:</strong> Highlights fibrosis (blue)
              </li>
              <li>
                <strong>Reticulin:</strong> Highlights reticulin framework (liver architecture)
              </li>
              <li>
                <strong>PAS:</strong> Glycogen, fungi
              </li>
              <li>
                <strong>PAS-D (PAS with diastase):</strong> After glycogen digestion, highlights fungi, basement membranes
              </li>
              <li>
                <strong>GMS (Grocott methenamine silver):</strong> Fungi
              </li>
              <li>
                <strong>Iron (Perls):</strong> Hemosiderin
              </li>
              <li>
                <strong>Copper (rhodanine, orcein):</strong> Copper deposition
              </li>
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
            IHC is an adjunct to morphology, not a replacement. Proper controls, interpretation in
            context, and understanding of limitations are essential. No single marker is 100%
            sensitive or specific. Panels of markers combined with morphology provide the most
            accurate diagnoses.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
