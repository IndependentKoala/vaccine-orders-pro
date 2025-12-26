import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Snowflake, Package, Clock, AlertTriangle, Plus, Minus, Calendar } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { getProductById } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { toast } from '@/hooks/use-toast';
import { format, addDays } from 'date-fns';
import { cn } from '@/lib/utils';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const { addItem } = useCart();

  const [selectedPackId, setSelectedPackId] = useState(product?.dosePacks[0]?.id || '');
  const [quantity, setQuantity] = useState(product?.minimumOrderQty || 1);
  const [deliveryDate, setDeliveryDate] = useState<Date>(addDays(new Date(), product?.leadTimeDays || 3));

  if (!product) {
    return (
      <Layout>
        <div className="container-main py-16 text-center">
          <Package className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
          <h1 className="font-heading text-2xl font-bold mb-2">Product Not Found</h1>
          <p className="text-muted-foreground mb-4">The product you're looking for doesn't exist.</p>
          <Link to="/catalog">
            <Button>Back to Catalog</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const selectedPack = product.dosePacks.find(dp => dp.id === selectedPackId);

  const handleAddToCart = () => {
    if (!selectedPack) return;
    
    addItem(product, selectedPack, quantity, format(deliveryDate, 'yyyy-MM-dd'));
    toast({
      title: "Added to cart",
      description: `${quantity}x ${product.name} (${selectedPack.doses} doses) added to your cart.`,
    });
  };

  const stockStatus = product.availableStock > 1000 ? 'high' : product.availableStock > 100 ? 'low' : 'out';

  return (
    <Layout>
      <div className="container-main py-8 lg:py-12">
        {/* Breadcrumb */}
        <Link 
          to="/catalog" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Catalog
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square rounded-xl bg-gradient-to-br from-muted to-secondary overflow-hidden flex items-center justify-center">
              <Package className="h-32 w-32 text-muted-foreground/30" />
            </div>
            
            {/* Cold chain warning */}
            {product.coldChainRequired && (
              <Card className="border-cold-chain/30 bg-cold-chain/5">
                <CardContent className="flex items-start gap-3 py-4">
                  <Snowflake className="h-5 w-5 text-cold-chain shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Cold Chain Required</p>
                    <p className="text-sm text-muted-foreground">
                      This product must be stored at {product.storageTempRange}. 
                      Maintain cold chain during transport.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <Badge variant={product.species}>{product.species}</Badge>
                <Badge variant={product.type}>{product.type}</Badge>
                <Badge 
                  variant={stockStatus === 'high' ? 'success' : stockStatus === 'low' ? 'warning' : 'destructive'}
                >
                  {stockStatus === 'out' ? 'Out of Stock' : `${product.availableStock.toLocaleString()} available`}
                </Badge>
              </div>
              
              <p className="text-sm text-muted-foreground mb-1">{product.brand}</p>
              <h1 className="font-heading text-3xl font-bold text-foreground mb-2">
                {product.name}
              </h1>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            {/* Product Details Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-secondary/50">
                <p className="text-sm font-medium text-foreground mb-1">Batch Number</p>
                <p className="text-sm text-muted-foreground">{product.batchNumber}</p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/50">
                <p className="text-sm font-medium text-foreground mb-1">Manufacturer</p>
                <p className="text-sm text-muted-foreground">{product.manufacturer}</p>
              </div>
            </div>

            {/* Active ingredients */}
            <div className="p-4 rounded-lg bg-secondary/50">
              <p className="text-sm font-medium text-foreground mb-1">Active Ingredients</p>
              <p className="text-sm text-muted-foreground">{product.activeIngredients}</p>
            </div>

            {/* Batch Expiry Info */}
            {product.batches.length > 0 && (
              <div className="p-4 rounded-lg bg-secondary/50">
                <p className="text-sm font-medium text-foreground mb-2">Available Batches</p>
                <div className="space-y-2">
                  {product.batches.map((batch, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{batch.batchNumber}</span>
                      <span className="text-muted-foreground">Exp: {batch.expiryDate} ({batch.quantity} units)</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Dose Pack Selection */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Select Dose Pack</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={selectedPackId} onValueChange={setSelectedPackId} className="space-y-3">
                  {product.dosePacks.map((pack) => (
                    <label
                      key={pack.id}
                      className={cn(
                        "flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-all",
                        selectedPackId === pack.id 
                          ? "border-primary bg-primary/5" 
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value={pack.id} />
                        <div>
                          <p className="font-medium">{pack.doses.toLocaleString()} doses</p>
                          <p className="text-sm text-muted-foreground">{pack.unitsPerPack} unit per pack</p>
                        </div>
                      </div>
                    </label>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Quantity & Delivery Date */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Quantity</Label>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(product.minimumOrderQty, quantity - 1))}
                    disabled={quantity <= product.minimumOrderQty}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(product.minimumOrderQty, parseInt(e.target.value) || 1))}
                    className="text-center w-20"
                    min={product.minimumOrderQty}
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                {product.minimumOrderQty > 1 && (
                  <p className="text-xs text-muted-foreground">
                    Minimum order: {product.minimumOrderQty} units
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label>Requested Delivery Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <Calendar className="mr-2 h-4 w-4" />
                      {format(deliveryDate, 'PPP')}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={deliveryDate}
                      onSelect={(date) => date && setDeliveryDate(date)}
                      disabled={(date) => date < addDays(new Date(), product.leadTimeDays)}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  Lead time: {product.leadTimeDays} days
                </p>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex items-center justify-end p-4 rounded-lg bg-secondary/50">
              <Button 
                variant="hero" 
                size="lg"
                onClick={handleAddToCart}
                disabled={stockStatus === 'out'}
              >
                Add to Cart
              </Button>
            </div>

            {/* Administration Notes */}
            {product.administrationNotes && (
              <Card>
                <CardContent className="flex items-start gap-3 py-4">
                  <AlertTriangle className="h-5 w-5 text-warning shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Administration Notes</p>
                    <p className="text-sm text-muted-foreground">{product.administrationNotes}</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
