import { Syringe } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="container-main py-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Syringe className="h-4 w-4 text-primary-foreground" />
            </div>
            <div>
              <span className="font-heading font-semibold text-foreground">Pharmsave Vaccines</span>
              <span className="text-xs text-muted-foreground block">Precision No Limitations</span>
            </div>
          </div>
          
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <Link to="/catalog" className="hover:text-primary transition-colors">
              Catalog
            </Link>
            <Link to="/orders" className="hover:text-primary transition-colors">
              Orders
            </Link>
            <Link to="/admin" className="hover:text-primary transition-colors">
              Admin
            </Link>
            <a href="#" className="hover:text-primary transition-colors">
              Support
            </a>
          </nav>
          
          <p className="text-sm text-muted-foreground">
            © 2025 Pharmsave Enterprises Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
