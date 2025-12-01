import { Link } from 'react-router-dom';
import { Snowflake, Package, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Product } from '@/data/products';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const lowestPrice = Math.min(...product.dosePacks.map(dp => dp.price));
  const stockStatus = product.availableStock > 1000 ? 'high' : product.availableStock > 100 ? 'low' : 'out';

  return (
    <Card className={cn("card-hover group overflow-hidden", className)}>
      <CardContent className="p-0">
        {/* Image placeholder */}
        <div className="relative aspect-[4/3] bg-gradient-to-br from-muted to-secondary overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <Package className="h-16 w-16 text-muted-foreground/30" />
          </div>
          
          {/* Badges overlay */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {product.coldChainRequired && (
              <Badge variant="cold-chain" className="gap-1">
                <Snowflake className="h-3 w-3" />
                {product.storageTempRange}
              </Badge>
            )}
          </div>
          
          <div className="absolute top-3 right-3">
            <Badge variant={product.species}>{product.species}</Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-1">{product.brand}</p>
            <h3 className="font-heading font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center gap-2">
            <Badge variant={product.type}>{product.type}</Badge>
            <Badge 
              variant={stockStatus === 'high' ? 'success' : stockStatus === 'low' ? 'warning' : 'destructive'}
              className="ml-auto"
            >
              {stockStatus === 'out' ? 'Out of Stock' : `${product.availableStock.toLocaleString()} available`}
            </Badge>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-border">
            <div>
              <p className="text-xs text-muted-foreground">From</p>
              <p className="font-heading font-bold text-lg text-foreground">
                ${lowestPrice.toFixed(2)}
              </p>
            </div>
            
            <Link to={`/product/${product.id}`}>
              <Button size="sm" className="group/btn">
                View
                <ChevronRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
