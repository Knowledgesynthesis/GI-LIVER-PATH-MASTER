import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Gallbladder() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-2">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Gallbladder & Biliary Pathology</h1>
        <p className="text-muted-foreground mt-2">
          Cholecystitis, cholesterolosis, dysplasia, and bile duct injury patterns
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Acute Cholecystitis</CardTitle>
          <CardDescription>Acute inflammatory pattern</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Neutrophilic infiltrate in mucosa and wall</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Mucosal ulceration and necrosis</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Vascular congestion and edema</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Hemorrhage</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">Gangrenous Cholecystitis:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Full-thickness necrosis</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Perforation risk</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Chronic Cholecystitis</CardTitle>
          <CardDescription>Chronic inflammatory changes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Features:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Chronic inflammation (lymphocytes, plasma cells) in lamina propria</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Fibrosis of wall</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Rokitansky-Aschoff sinus hyperplasia</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Muscle hypertrophy</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Cholesterolosis</CardTitle>
          <CardDescription>"Strawberry gallbladder"</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Features:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Foamy macrophages in lamina propria</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Lipid-laden histiocytes</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Yellow mucosal flecks grossly</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Not associated with neoplasia</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Gallbladder Dysplasia</CardTitle>
          <CardDescription>Precursor to adenocarcinoma</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Low-Grade Dysplasia:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Nuclear hyperchromasia and crowding</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Nuclear stratification in lower half of epithelium</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Preserved architecture</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">High-Grade Dysplasia:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Marked nuclear atypia</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Full-thickness nuclear stratification</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Architectural complexity</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Cribriforming, papillary features</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Gallbladder Adenocarcinoma</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Features:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Infiltrative glandular proliferation</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Desmoplastic stroma</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Invasion into muscularis propria or beyond</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Nuclear atypia and mitotic activity</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Bile Duct Injury Patterns</CardTitle>
          <CardDescription>Patterns seen in liver biopsies</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Patterns:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Bile duct loss (ductopenia):</strong> {'<'}50% of portal tracts with bile ducts</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Cholangitis:</strong> Neutrophils in or around bile ducts</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Bile duct damage:</strong> Vacuolization, nuclear irregularity, apoptosis</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Periductal fibrosis:</strong> Onion-skin pattern (PSC)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Porcelain Gallbladder</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Features:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Calcification of gallbladder wall</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Associated with chronic inflammation</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Increased risk of gallbladder carcinoma</li>
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
            Careful examination of cholecystectomy specimens for dysplasia and early carcinoma is
            critical. Incidental gallbladder carcinoma may be found in routine cholecystectomy
            specimens. Bile duct injury patterns help classify hepatobiliary diseases.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
