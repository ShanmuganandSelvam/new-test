export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold font-space gradient-text">Alex.dev</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Alex Chen. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Designed and built with ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
