import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { ArrowLeft, AlertCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function LiverTumors() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-2">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Hepatocellular & Biliary Neoplasia</h1>
        <p className="text-muted-foreground mt-2">
          HCA, HCC, cholangiocarcinoma, and combined tumors (conceptual patterns)
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Hepatocellular Adenoma (HCA)</CardTitle>
          <CardDescription>Benign hepatocellular neoplasm</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">General Features:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Benign hepatocytes in sheets/trabeculae</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>No portal tracts within lesion</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Unpaired arteries</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Reticulin framework preserved (1-2 cell thick)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>No significant atypia</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">Subtypes (Conceptual):</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>HNF1α-inactivated:</strong> Marked steatosis, no inflammation</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Inflammatory:</strong> Inflammation, sinusoidal dilation</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>β-catenin activated:</strong> Pseudoglands, β-catenin nuclear staining, malignant potential</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Hepatocellular Carcinoma (HCC)</CardTitle>
          <CardDescription>Malignant hepatocellular neoplasm</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Architectural Patterns:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Trabecular:</strong> Thickened hepatocyte plates ({'>'}2-3 cells)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Pseudoglandular (acinar):</strong> Gland-like spaces with bile</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Solid/compact:</strong> Sheets of cells without sinusoids</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Macrotrabecular:</strong> Thick trabeculae {'>'}6 cells</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">Key Diagnostic Features:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Thick trabeculae ({'>'}3 cells)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Loss of reticulin framework (reticulin stain shows {'>'}3 cell thick plates)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Stromal invasion</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Endothelial wrapping (CD34 highlights capillarization)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Nuclear atypia and pleomorphism</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Mitotic activity</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">IHC Profile (Conceptual):</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>HepPar1 positive (cytoplasmic)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Arginase-1 positive (nuclear)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Glypican-3 positive (membranous/cytoplasmic)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>CK7/CK19 typically negative (unless mixed/cholangiolar features)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Well-Differentiated HCC vs HCA</CardTitle>
          <CardDescription>Critical differential diagnosis</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Features Favoring HCC:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Reticulin loss ({'>'}3 cell thick trabeculae)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Stromal invasion</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Unpaired arteries with stromal invasion</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Glypican-3 positive, HSP70 positive, GS diffuse positive</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Nuclear atypia</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">Features Favoring HCA:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Preserved reticulin (1-2 cell thick)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>No stromal invasion</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Unpaired arteries without invasion</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Glypican-3 negative</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Bland cytology</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Cholangiocarcinoma</CardTitle>
          <CardDescription>Malignant biliary epithelial neoplasm</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Histologic Features:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Glandular/ductal formation</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Desmoplastic stroma</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Infiltrative growth pattern</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Perineural invasion common</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">IHC Profile (Conceptual):</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>CK7 positive, CK19 positive</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>CK20 variable</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>HepPar1 negative, Arginase-1 negative</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Combined Hepatocellular-Cholangiocarcinoma</CardTitle>
          <CardDescription>Mixed HCC and cholangiocarcinoma components</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Features:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Distinct hepatocellular and cholangiocellular components</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Both components malignant</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>IHC confirms dual differentiation</li>
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
              <span>Well-differentiated HCC vs HCA is one of the most challenging diagnoses—reticulin stain is essential</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">⚠</span>
              <span>β-catenin activated HCA has malignant potential and requires careful assessment</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">⚠</span>
              <span>Pseudoglandular pattern in HCC can mimic cholangiocarcinoma—use hepatocellular markers</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">⚠</span>
              <span>Cirrhotic nodules can have architectural atypia—assess for invasion and reticulin loss</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
