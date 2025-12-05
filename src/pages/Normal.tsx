import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Normal() {
  const sections = [
    {
      title: 'Esophageal Epithelium',
      content: [
        'Non-keratinizing stratified squamous epithelium',
        'Three layers: mucosa, submucosa, muscularis propria',
        'No serosa in most regions',
        'Submucosal glands present',
      ],
    },
    {
      title: 'Gastric Mucosa',
      content: [
        'Antrum: mucus-secreting glands, G cells (gastrin)',
        'Body/fundus: parietal cells (acid), chief cells (pepsinogen)',
        'Surface foveolar epithelium',
        'Lamina propria with scattered lymphocytes and plasma cells',
      ],
    },
    {
      title: 'Small Bowel Architecture',
      content: [
        'Villi and crypts maintain normal villous:crypt ratio (3:1 to 5:1)',
        'Absorptive enterocytes on villous surface',
        'Goblet cells interspersed',
        'Paneth cells at crypt bases',
        'Intraepithelial lymphocytes (IELs) normally <20-25 per 100 enterocytes',
      ],
    },
    {
      title: 'Colonic Mucosa',
      content: [
        'Straight tubular crypts extending from surface to muscularis mucosae',
        'Goblet cells predominate',
        'Absorptive colonocytes',
        'Lamina propria with normal lymphoid aggregates',
        'No villi',
      ],
    },
    {
      title: 'Liver Architecture',
      content: [
        'Portal triad: bile duct, hepatic artery, portal vein',
        'Hepatic lobules with central vein',
        'Hepatocyte plates 1-2 cells thick',
        'Sinusoids lined by endothelium and Kupffer cells',
        'Space of Disse',
        'Minimal portal inflammation',
        'No interface hepatitis',
        'No significant steatosis (<5%)',
      ],
    },
    {
      title: 'Pancreas',
      content: [
        'Acinar cells (exocrine)',
        'Islets of Langerhans (endocrine)',
        'Ductal epithelium',
        'Lobular architecture with fibrous septa',
      ],
    },
    {
      title: 'Gallbladder',
      content: [
        'Single layer of columnar epithelium',
        'Lamina propria (no muscularis mucosae)',
        'Muscularis propria',
        'Rokitansky-Aschoff sinuses (normal invaginations)',
      ],
    },
  ]

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-2">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Normal GI & Liver Anatomy</h1>
        <p className="text-muted-foreground mt-2">
          Understanding normal anatomy is essential for recognizing pathologic changes
        </p>
      </div>

      <div className="grid gap-4">
        {sections.map((section) => (
          <Card key={section.title}>
            <CardHeader>
              <CardTitle className="text-xl">{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {section.content.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-blue-500/10 border-blue-500/30">
        <CardHeader>
          <CardTitle className="text-lg text-blue-700 dark:text-blue-400">Key Concept</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-blue-600 dark:text-blue-400">
            Normal architecture serves as the baseline for pattern recognition. Always assess
            architectural preservation before evaluating inflammatory or neoplastic changes.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
