import ModuleCard from '@/components/ModuleCard'
import {
  Activity,
  Apple,
  Beaker,
  BookOpen,
  Brain,
  FileText,
  Microscope,
  Pill,
  Stethoscope,
  Target,
  TestTube,
  Triangle,
  Users,
} from 'lucide-react'

export default function Home() {
  const modules = [
    {
      title: 'Normal Anatomy',
      description: 'Review normal GI and liver anatomy with icon-based diagrams',
      path: '/normal',
      icon: <Users className="h-8 w-8" />,
    },
    {
      title: 'Esophagus',
      description: 'Reflux, EoE, Barrett esophagus, and infectious patterns',
      path: '/esophagus',
      icon: <Activity className="h-8 w-8" />,
    },
    {
      title: 'Stomach',
      description: 'Gastritis patterns, atrophy, dysplasia, and gastric polyps',
      path: '/stomach',
      icon: <Apple className="h-8 w-8" />,
    },
    {
      title: 'Small Bowel',
      description: 'Celiac disease, Whipple, tropical sprue, and infections',
      path: '/small-bowel',
      icon: <Activity className="h-8 w-8" />,
    },
    {
      title: 'Colon',
      description: 'Inflammatory patterns, microscopic colitis, polyps, and dysplasia',
      path: '/colon',
      icon: <Activity className="h-8 w-8" />,
    },
    {
      title: 'Appendix',
      description: 'Acute appendicitis and mucinous lesions',
      path: '/appendix',
      icon: <Triangle className="h-8 w-8" />,
    },
    {
      title: 'Liver Pathology',
      description: 'Liver biopsy interpretation, hepatitis, cholestatic patterns, and NASH',
      path: '/liver',
      icon: <Beaker className="h-8 w-8" />,
    },
    {
      title: 'Liver Tumors',
      description: 'HCA, HCC, cholangiocarcinoma, and combined tumors',
      path: '/liver-tumors',
      icon: <Target className="h-8 w-8" />,
    },
    {
      title: 'Pancreas',
      description: 'Chronic pancreatitis, PanIN, NETs, and cystic neoplasms',
      path: '/pancreas',
      icon: <Pill className="h-8 w-8" />,
    },
    {
      title: 'Gallbladder & Biliary',
      description: 'Cholecystitis, cholesterolosis, and biliary injury patterns',
      path: '/gallbladder',
      icon: <TestTube className="h-8 w-8" />,
    },
    {
      title: 'IHC Concepts',
      description: 'Immunohistochemistry markers and profiles',
      path: '/ihc',
      icon: <Microscope className="h-8 w-8" />,
    },
    {
      title: 'Molecular Concepts',
      description: 'High-level molecular pathology concepts',
      path: '/molecular',
      icon: <Brain className="h-8 w-8" />,
    },
    {
      title: 'Pitfalls & Mimics',
      description: 'Common diagnostic pitfalls and dangerous mimics',
      path: '/pitfalls',
      icon: <Stethoscope className="h-8 w-8" />,
    },
    {
      title: 'Case Bank',
      description: 'Integrated GI/Liver case studies',
      path: '/cases',
      icon: <FileText className="h-8 w-8" />,
    },
    {
      title: 'Assessment',
      description: 'Test your knowledge with session-based quizzes',
      path: '/assessment',
      icon: <BookOpen className="h-8 w-8" />,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          GI & Liver Path Master
        </h1>
        <p className="text-muted-foreground max-w-3xl">
          A comprehensive educational platform for Gastrointestinal and Liver Pathology training.
          Designed for pathology residents and fellows covering all major GI/liver pathology topics
          with pattern-based learning and integrated case studies.
        </p>
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mt-4">
          <p className="text-sm text-amber-600 dark:text-amber-400">
            <strong>Educational Only:</strong> This app is for educational purposes only. Not for
            diagnosis or clinical management.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((module) => (
          <ModuleCard
            key={module.path}
            title={module.title}
            description={module.description}
            path={module.path}
            icon={module.icon}
          />
        ))}
      </div>
    </div>
  )
}
