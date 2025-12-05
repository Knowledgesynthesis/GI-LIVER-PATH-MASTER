import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardHeader, CardTitle, CardDescription } from './ui/Card'

interface ModuleCardProps {
  title: string
  description: string
  path: string
  icon: ReactNode
}

export default function ModuleCard({ title, description, path, icon }: ModuleCardProps) {
  const navigate = useNavigate()

  return (
    <Card onClick={() => navigate(path)} className="h-full">
      <CardHeader>
        <div className="flex items-center space-x-3 mb-2">
          <div className="text-primary">{icon}</div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
