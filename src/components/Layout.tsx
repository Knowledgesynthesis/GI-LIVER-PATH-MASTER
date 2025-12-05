import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Home, Settings } from 'lucide-react'
import { useState } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center px-4">
          <div className="mr-4 flex">
            <Link to="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold text-lg">GI & Liver Path Master</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link
                to="/"
                className={`transition-colors hover:text-foreground/80 ${
                  location.pathname === '/' ? 'text-foreground' : 'text-foreground/60'
                }`}
              >
                <Home className="h-5 w-5" />
              </Link>
              <Link
                to="/settings"
                className={`transition-colors hover:text-foreground/80 ${
                  location.pathname === '/settings' ? 'text-foreground' : 'text-foreground/60'
                }`}
              >
                <Settings className="h-5 w-5" />
              </Link>
            </nav>
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <nav className="flex flex-col space-y-3 p-4">
              <Link
                to="/"
                className="flex items-center space-x-2 text-foreground/80 hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Home className="h-5 w-5" />
                <span>Home</span>
              </Link>
              <Link
                to="/settings"
                className="flex items-center space-x-2 text-foreground/80 hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </Link>
            </nav>
          </div>
        )}
      </header>
      <main className="container mx-auto px-4 py-6">{children}</main>
    </div>
  )
}
