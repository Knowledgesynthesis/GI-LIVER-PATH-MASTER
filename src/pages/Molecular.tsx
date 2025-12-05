import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Molecular() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-2">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Molecular Pathology Concepts</h1>
        <p className="text-muted-foreground mt-2">
          High-level molecular concepts in GI and liver pathology (educational framework only)
        </p>
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mt-4">
          <p className="text-sm text-amber-600 dark:text-amber-400">
            <strong>Educational Only:</strong> Molecular testing requires specialized labs, clinical validation, and expert interpretation. This is conceptual overview only.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Colorectal Cancer Pathways</CardTitle>
          <CardDescription>Conceptual molecular pathways</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm mb-2">Chromosomal Instability (CIN) Pathway:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>APC mutation → β-catenin activation</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>KRAS mutation</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>TP53 mutation</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Conventional adenoma → carcinoma sequence</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">Microsatellite Instability (MSI) Pathway:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>MMR deficiency (MLH1, MSH2, MSH6, PMS2)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Lynch syndrome (hereditary) or sporadic (MLH1 promoter methylation)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>MSI-high tumors: right-sided, mucinous, tumor-infiltrating lymphocytes</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Better prognosis, response to immunotherapy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">Serrated Pathway:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>BRAF mutation (V600E most common)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>CpG island methylation (CIMP)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>SSL/SSA → dysplasia → carcinoma</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>May develop MSI if MLH1 methylated</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>KRAS and BRAF in CRC (Conceptual)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Clinical Relevance:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>KRAS mutation:</strong> Predicts resistance to anti-EGFR therapy (educational concept)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>BRAF V600E:</strong> Poor prognosis marker, associated with serrated pathway</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Testing guides treatment decisions in metastatic CRC (conceptual)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Hepatocellular Adenoma Molecular Subtypes (Conceptual)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Molecular Classification:</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>HNF1α-inactivated:</strong> Biallelic inactivation, marked steatosis, FABP1 loss by IHC
              </li>
              <li>
                <strong>Inflammatory HCA:</strong> IL6/STAT pathway activation, SAA and CRP positive by IHC
              </li>
              <li>
                <strong>β-catenin activated:</strong> CTNNB1 mutations, nuclear β-catenin by IHC, GS positive, malignant potential
              </li>
              <li>
                <strong>Unclassified:</strong> No definitive molecular alteration
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Gastric Cancer Molecular Subtypes (Conceptual)</CardTitle>
          <CardDescription>TCGA/WHO classification framework</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Molecular Subtypes:</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>EBV-positive:</strong> EBER ISH positive, DNA hypermethylation
              </li>
              <li>
                <strong>MSI-high:</strong> MMR deficiency, hypermutation
              </li>
              <li>
                <strong>Genomically stable:</strong> CDH1 mutations (diffuse type), chromosomal stability
              </li>
              <li>
                <strong>Chromosomal instability (CIN):</strong> TP53 mutations, aneuploidy (intestinal type)
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pancreatic Ductal Adenocarcinoma (Conceptual)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Common Molecular Alterations:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>KRAS mutation (very common, ~90%)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>TP53 mutation</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>CDKN2A inactivation</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>SMAD4 loss</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Hereditary Cancer Syndromes (Conceptual)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm mb-2">Lynch Syndrome:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>MMR gene mutations (MLH1, MSH2, MSH6, PMS2)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Increased risk: CRC, endometrial, gastric, ovarian, others</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Screening via IHC for MMR proteins</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">Familial Adenomatous Polyposis (FAP):</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>APC gene mutation</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Hundreds to thousands of colonic adenomas</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Nearly 100% risk of CRC if untreated</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">Peutz-Jeghers Syndrome:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>STK11/LKB1 mutation</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Hamartomatous polyps</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Increased cancer risk (GI and other sites)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>HCC Molecular Features (Conceptual)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Common Alterations:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>TERT promoter mutations (telomerase activation)</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>TP53 mutations</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>CTNNB1 (β-catenin) mutations</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Chromosomal instability</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>NGS Panel Testing (Conceptual)</CardTitle>
          <CardDescription>Next-generation sequencing in GI oncology</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Applications:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Identifying actionable mutations for targeted therapy</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>MSI/TMB assessment for immunotherapy eligibility</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Hereditary syndrome identification</li>
              <li className="flex items-start"><span className="text-primary mr-2">•</span>Tumor classification</li>
            </ul>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded p-3 mt-3">
            <p className="text-xs text-blue-600 dark:text-blue-400">
              NGS is increasingly used but requires appropriate patient selection, quality tissue, and expert interpretation
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-amber-500/10 border-amber-500/30">
        <CardHeader>
          <CardTitle className="text-lg text-amber-700 dark:text-amber-400">Important Disclaimer</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-amber-600 dark:text-amber-400">
            All molecular concepts presented here are for educational purposes only. Clinical molecular
            testing requires CLIA-certified laboratories, proper informed consent, genetic counseling
            when appropriate, and integration with clinical data. Molecular results must never be
            interpreted in isolation from morphology and clinical context.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
