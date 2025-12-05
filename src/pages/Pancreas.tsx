import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Pancreas() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-2">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Pancreatic Pathology</h1>
        <p className="text-muted-foreground mt-2">
          High-level surgical pathology concepts: pancreatitis, PanIN, NETs, and cystic neoplasms
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Chronic Pancreatitis</CardTitle>
          <CardDescription>Inflammatory pattern with fibrosis</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Lobular fibrosis and atrophy</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Chronic inflammation (lymphocytes, plasma cells)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Acinar loss</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Ductal dilation and calculi</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Pseudocyst formation</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pancreatic Intraepithelial Neoplasia (PanIN)</CardTitle>
          <CardDescription>Precursor lesions (conceptual sequence)</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">PanIN Progression (Conceptual):</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>PanIN-1:</strong> Flat or papillary, minimal atypia</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>PanIN-2:</strong> Papillary, moderate atypia</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>PanIN-3:</strong> High-grade dysplasia/carcinoma in situ</li>
            </ul>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded p-3">
            <p className="text-xs text-blue-600 dark:text-blue-400">
              <strong>Note:</strong> PanIN-3 is associated with invasive pancreatic ductal adenocarcinoma
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pancreatic Neuroendocrine Tumors (NETs)</CardTitle>
          <CardDescription>Endocrine neoplasms</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Histologic Features:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Organoid, trabecular, or gyriform patterns</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Monotonous cells with "salt-and-pepper" chromatin</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Moderate eosinophilic cytoplasm</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Stippled nuclear chromatin</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">IHC Profile (Conceptual):</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Synaptophysin positive (diffuse)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Chromogranin positive (variable)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Ki-67 for grading (G1: {'<'}3%, G2: 3-20%, G3: {'>'}20%)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Cystic Neoplasms</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm mb-2">Intraductal Papillary Mucinous Neoplasm (IPMN):</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Papillary mucinous epithelium</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Involves main duct or branch ducts</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Mucin production</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Grading: low-grade, intermediate, high-grade dysplasia, invasive</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">Mucinous Cystic Neoplasm (MCN):</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Cyst-forming mucinous epithelium</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Ovarian-type stroma (diagnostic feature)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>No ductal communication</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Grading: low-grade to high-grade dysplasia, invasive</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">Serous Cystadenoma:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Glycogen-rich clear cells</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Small cysts ("honeycomb" pattern)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Benign</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pancreatic Ductal Adenocarcinoma</CardTitle>
          <CardDescription>High-level features</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Infiltrative glands with irregular contours</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Desmoplastic stroma</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Nuclear atypia and mitotic activity</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Perineural invasion (highly characteristic)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Incomplete lumens</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Acinar Pathology (High-Level)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Acinar Cell Carcinoma:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Acinar architecture (grape-like clusters)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Granular basophilic cytoplasm</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Positive for trypsin, chymotrypsin, lipase</li>
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
            Pancreatic pathology requires integration of histology, IHC, and clinical/radiologic
            correlation. Distinction between benign and neoplastic lesions, and between cystic
            neoplasm types, is critical for management.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
