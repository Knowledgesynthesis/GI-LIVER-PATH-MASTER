import { useThemeStore } from '@/store/themeStore'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Moon, Sun } from 'lucide-react'

export default function Settings() {
  const { theme, toggleTheme } = useThemeStore()

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Customize your learning experience</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>Customize the visual appearance of the app</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="font-medium">Theme</div>
              <div className="text-sm text-muted-foreground">
                Switch between light and dark mode
              </div>
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>About the App</CardTitle>
          <CardDescription>Information about GI & Liver Path Master</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Mission</h3>
            <p className="text-sm text-muted-foreground">
              GI & Liver Path Master is a comprehensive educational platform designed to teach
              Gastrointestinal and Liver Pathology as covered in pathology residency rotations. The
              app uses pattern-driven learning, icon-based diagrams, and integrated case studies to
              help residents and fellows master GI/liver pathology concepts.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Coverage</h3>
            <p className="text-sm text-muted-foreground">
              The curriculum covers esophageal, gastric, small bowel, colonic, appendiceal, liver,
              pancreatic, and gallbladder pathology. Topics include inflammatory patterns, neoplasia,
              biopsy interpretation frameworks, IHC/molecular concepts, and common diagnostic
              pitfalls.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Features</h3>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
              <li>Mobile-first, responsive design</li>
              <li>Dark mode optimized for comfortable reading</li>
              <li>Offline-ready for studying anywhere</li>
              <li>Icon-based diagrams (no real histology images)</li>
              <li>Session-based assessments</li>
              <li>Interactive learning tools</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Disclaimers</CardTitle>
          <CardDescription>Important information and limitations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
            <h3 className="font-semibold mb-2 text-amber-700 dark:text-amber-400">
              Educational Use Only
            </h3>
            <p className="text-sm text-amber-600 dark:text-amber-400">
              This application is designed exclusively for educational purposes. All content is
              synthetic and conceptual. This app must NOT be used for patient diagnosis, clinical
              decision-making, or medical management.
            </p>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <h3 className="font-semibold mb-2 text-blue-700 dark:text-blue-400">
              No PHI or Real Patient Data
            </h3>
            <p className="text-sm text-blue-600 dark:text-blue-400">
              All cases and examples are entirely synthetic. No protected health information (PHI)
              or real patient data is included in this application.
            </p>
          </div>
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
            <h3 className="font-semibold mb-2 text-purple-700 dark:text-purple-400">
              No Data Tracking
            </h3>
            <p className="text-sm text-purple-600 dark:text-purple-400">
              This application does not track, store, or collect any user data or assessment scores.
              All quiz results are session-only and are not saved or transmitted.
            </p>
          </div>
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
            <h3 className="font-semibold mb-2 text-green-700 dark:text-green-400">
              Conceptual Framework
            </h3>
            <p className="text-sm text-green-600 dark:text-green-400">
              Content is aligned with standard pathology texts and classifications (e.g., WHO
              classifications) for conceptual learning only. Always refer to current medical
              literature, institutional protocols, and expert consultation for actual clinical
              practice.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
