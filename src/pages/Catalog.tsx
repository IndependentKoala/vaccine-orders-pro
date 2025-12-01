import { useState, useMemo } from 'react';
import { Layout } from '@/components/layout/Layout';
import { ProductCard } from '@/components/products/ProductCard';
import { ProductFilters } from '@/components/products/ProductFilters';
import { products } from '@/data/products';
import { Package } from 'lucide-react';

export default function Catalog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [species, setSpecies] = useState('all');
  const [brand, setBrand] = useState('all');
  const [type, setType] = useState('all');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = searchQuery === '' || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesSpecies = species === 'all' || product.species === species;
      const matchesBrand = brand === 'all' || product.brand === brand;
      const matchesType = type === 'all' || product.type === type;

      return matchesSearch && matchesSpecies && matchesBrand && matchesType;
    });
  }, [searchQuery, species, brand, type]);

  const clearFilters = () => {
    setSearchQuery('');
    setSpecies('all');
    setBrand('all');
    setType('all');
  };

  return (
    <Layout>
      <div className="container-main py-8 lg:py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Vaccine Catalog
          </h1>
          <p className="text-muted-foreground">
            Browse our selection of premium veterinary vaccines
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <ProductFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            species={species}
            onSpeciesChange={setSpecies}
            brand={brand}
            onBrandChange={setBrand}
            type={type}
            onTypeChange={setType}
            onClearFilters={clearFilters}
          />
        </div>

        {/* Results count */}
        <div className="mb-6 text-sm text-muted-foreground">
          Showing {filteredProducts.length} of {products.length} products
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-slide-up"
                style={{ animationDelay: `${Math.min(index * 50, 300)}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Package className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
              No products found
            </h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your filters or search query
            </p>
            <button
              onClick={clearFilters}
              className="text-primary hover:underline text-sm font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}
