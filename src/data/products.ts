export interface DosePack {
  id: string;
  doses: number;
  unitsPerPack: number;
  price: number;
}

export interface Batch {
  batchNumber: string;
  expiryDate: string;
  quantity: number;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  brand: string;
  species: 'poultry' | 'swine';
  type: 'live' | 'killed' | 'attenuated';
  manufacturer: string;
  description: string;
  activeIngredients: string;
  dosePacks: DosePack[];
  coldChainRequired: boolean;
  storageTempRange: string;
  imageUrl: string;
  tags: string[];
  minimumOrderQty: number;
  leadTimeDays: number;
  availableStock: number;
  batches: Batch[];
  administrationNotes: string;
}

export const products: Product[] = [
  {
    id: '1',
    sku: 'MSD-NDV-001',
    name: 'Newcastle Disease Vaccine',
    brand: 'MSD Animal Health',
    species: 'poultry',
    type: 'live',
    manufacturer: 'MSD Animal Health',
    description: 'Live attenuated vaccine for active immunization of healthy chickens against Newcastle Disease. Provides robust protection with excellent field immunity.',
    activeIngredients: 'Newcastle Disease Virus, La Sota strain',
    dosePacks: [
      { id: 'dp1', doses: 1000, unitsPerPack: 1, price: 45.00 },
      { id: 'dp2', doses: 5000, unitsPerPack: 1, price: 180.00 },
      { id: 'dp3', doses: 10000, unitsPerPack: 1, price: 320.00 },
    ],
    coldChainRequired: true,
    storageTempRange: '2-8°C',
    imageUrl: '/placeholder.svg',
    tags: ['respiratory', 'essential', 'layer', 'broiler'],
    minimumOrderQty: 1,
    leadTimeDays: 3,
    availableStock: 2500,
    batches: [
      { batchNumber: 'NDV-2024-A1', expiryDate: '2025-06-15', quantity: 1500 },
      { batchNumber: 'NDV-2024-A2', expiryDate: '2025-08-20', quantity: 1000 },
    ],
    administrationNotes: 'Administer via drinking water, eye drop, or spray. Ensure cold chain integrity during transport and storage.',
  },
  {
    id: '2',
    sku: 'MSD-IB-002',
    name: 'Infectious Bronchitis Vaccine',
    brand: 'MSD Animal Health',
    species: 'poultry',
    type: 'live',
    manufacturer: 'MSD Animal Health',
    description: 'Live vaccine for immunization against Infectious Bronchitis in chickens. Contains Mass and 793B strains for broad protection.',
    activeIngredients: 'Infectious Bronchitis Virus, Massachusetts and 793B strains',
    dosePacks: [
      { id: 'dp1', doses: 1000, unitsPerPack: 1, price: 52.00 },
      { id: 'dp2', doses: 5000, unitsPerPack: 1, price: 210.00 },
      { id: 'dp3', doses: 10000, unitsPerPack: 1, price: 380.00 },
    ],
    coldChainRequired: true,
    storageTempRange: '2-8°C',
    imageUrl: '/placeholder.svg',
    tags: ['respiratory', 'layer', 'broiler'],
    minimumOrderQty: 1,
    leadTimeDays: 3,
    availableStock: 1800,
    batches: [
      { batchNumber: 'IB-2024-B1', expiryDate: '2025-05-10', quantity: 1000 },
      { batchNumber: 'IB-2024-B2', expiryDate: '2025-07-25', quantity: 800 },
    ],
    administrationNotes: 'Spray or drinking water administration. Use within 2 hours of reconstitution.',
  },
  {
    id: '3',
    sku: 'MSD-IBD-003',
    name: 'Gumboro (IBD) Vaccine',
    brand: 'MSD Animal Health',
    species: 'poultry',
    type: 'live',
    manufacturer: 'MSD Animal Health',
    description: 'Intermediate plus strain vaccine for protection against Infectious Bursal Disease (Gumboro). Breaks through maternal antibodies effectively.',
    activeIngredients: 'Infectious Bursal Disease Virus, intermediate plus strain',
    dosePacks: [
      { id: 'dp1', doses: 1000, unitsPerPack: 1, price: 48.00 },
      { id: 'dp2', doses: 5000, unitsPerPack: 1, price: 195.00 },
      { id: 'dp3', doses: 10000, unitsPerPack: 1, price: 350.00 },
    ],
    coldChainRequired: true,
    storageTempRange: '2-8°C',
    imageUrl: '/placeholder.svg',
    tags: ['immunosuppressive', 'broiler', 'layer'],
    minimumOrderQty: 2,
    leadTimeDays: 5,
    availableStock: 3200,
    batches: [
      { batchNumber: 'IBD-2024-C1', expiryDate: '2025-09-01', quantity: 2000 },
      { batchNumber: 'IBD-2024-C2', expiryDate: '2025-10-15', quantity: 1200 },
    ],
    administrationNotes: 'Drinking water administration recommended. Ensure chlorine-free water.',
  },
  {
    id: '4',
    sku: 'MSD-FPX-004',
    name: 'Fowl Pox Vaccine',
    brand: 'MSD Animal Health',
    species: 'poultry',
    type: 'live',
    manufacturer: 'MSD Animal Health',
    description: 'Live fowl pox vaccine for active immunization of chickens. Wing web application for reliable uptake.',
    activeIngredients: 'Fowl Pox Virus, attenuated strain',
    dosePacks: [
      { id: 'dp1', doses: 1000, unitsPerPack: 1, price: 38.00 },
      { id: 'dp2', doses: 5000, unitsPerPack: 1, price: 155.00 },
    ],
    coldChainRequired: true,
    storageTempRange: '2-8°C',
    imageUrl: '/placeholder.svg',
    tags: ['skin disease', 'layer'],
    minimumOrderQty: 1,
    leadTimeDays: 7,
    availableStock: 850,
    batches: [
      { batchNumber: 'FPX-2024-D1', expiryDate: '2025-04-30', quantity: 850 },
    ],
    administrationNotes: 'Wing web stab method only. Check for takes 7-10 days post-vaccination.',
  },
  {
    id: '5',
    sku: 'UF-IBD-001',
    name: 'Gumboro Disease Vaccine',
    brand: 'Urban Farmer',
    species: 'poultry',
    type: 'live',
    manufacturer: 'Urban Farmer Biologics',
    description: 'Cost-effective live vaccine for Infectious Bursal Disease protection. Suitable for small to medium scale poultry operations.',
    activeIngredients: 'Infectious Bursal Disease Virus, mild strain',
    dosePacks: [
      { id: 'dp1', doses: 500, unitsPerPack: 1, price: 18.00 },
      { id: 'dp2', doses: 1000, unitsPerPack: 1, price: 32.00 },
      { id: 'dp3', doses: 2500, unitsPerPack: 1, price: 72.00 },
    ],
    coldChainRequired: true,
    storageTempRange: '2-8°C',
    imageUrl: '/placeholder.svg',
    tags: ['immunosuppressive', 'small-scale', 'broiler'],
    minimumOrderQty: 2,
    leadTimeDays: 2,
    availableStock: 4500,
    batches: [
      { batchNumber: 'UF-IBD-2024-01', expiryDate: '2025-07-01', quantity: 3000 },
      { batchNumber: 'UF-IBD-2024-02', expiryDate: '2025-08-15', quantity: 1500 },
    ],
    administrationNotes: 'Drinking water method. Mix with skim milk powder for stability.',
  },
  {
    id: '6',
    sku: 'UF-NDV-002',
    name: 'Newcastle Disease Vaccine',
    brand: 'Urban Farmer',
    species: 'poultry',
    type: 'live',
    manufacturer: 'Urban Farmer Biologics',
    description: 'Affordable Newcastle Disease protection for backyard and commercial flocks. F strain for gentle immunization.',
    activeIngredients: 'Newcastle Disease Virus, F strain',
    dosePacks: [
      { id: 'dp1', doses: 500, unitsPerPack: 1, price: 15.00 },
      { id: 'dp2', doses: 1000, unitsPerPack: 1, price: 28.00 },
      { id: 'dp3', doses: 2500, unitsPerPack: 1, price: 62.00 },
    ],
    coldChainRequired: true,
    storageTempRange: '2-8°C',
    imageUrl: '/placeholder.svg',
    tags: ['respiratory', 'small-scale', 'layer', 'broiler'],
    minimumOrderQty: 1,
    leadTimeDays: 2,
    availableStock: 5200,
    batches: [
      { batchNumber: 'UF-NDV-2024-01', expiryDate: '2025-06-20', quantity: 3200 },
      { batchNumber: 'UF-NDV-2024-02', expiryDate: '2025-09-10', quantity: 2000 },
    ],
    administrationNotes: 'Eye drop or drinking water. Ideal for primo-vaccination in young birds.',
  },
  {
    id: '7',
    sku: 'MSD-CSF-001',
    name: 'Classical Swine Fever Vaccine',
    brand: 'MSD Animal Health',
    species: 'swine',
    type: 'live',
    manufacturer: 'MSD Animal Health',
    description: 'Live attenuated vaccine for immunization of pigs against Classical Swine Fever. C-strain with proven safety and efficacy.',
    activeIngredients: 'Classical Swine Fever Virus, C-strain',
    dosePacks: [
      { id: 'dp1', doses: 10, unitsPerPack: 1, price: 85.00 },
      { id: 'dp2', doses: 25, unitsPerPack: 1, price: 180.00 },
      { id: 'dp3', doses: 50, unitsPerPack: 1, price: 320.00 },
    ],
    coldChainRequired: true,
    storageTempRange: '2-8°C',
    imageUrl: '/placeholder.svg',
    tags: ['viral', 'essential', 'breeding', 'fattening'],
    minimumOrderQty: 1,
    leadTimeDays: 5,
    availableStock: 420,
    batches: [
      { batchNumber: 'CSF-2024-S1', expiryDate: '2025-05-25', quantity: 250 },
      { batchNumber: 'CSF-2024-S2', expiryDate: '2025-08-30', quantity: 170 },
    ],
    administrationNotes: 'Intramuscular injection. Vaccinate breeding stock and piglets.',
  },
  {
    id: '8',
    sku: 'MSD-PRRS-002',
    name: 'PRRS Vaccine',
    brand: 'MSD Animal Health',
    species: 'swine',
    type: 'live',
    manufacturer: 'MSD Animal Health',
    description: 'Modified live virus vaccine for Porcine Reproductive and Respiratory Syndrome. Reduces clinical signs and viral shedding.',
    activeIngredients: 'PRRS Virus, modified live',
    dosePacks: [
      { id: 'dp1', doses: 10, unitsPerPack: 1, price: 120.00 },
      { id: 'dp2', doses: 25, unitsPerPack: 1, price: 265.00 },
      { id: 'dp3', doses: 50, unitsPerPack: 1, price: 480.00 },
    ],
    coldChainRequired: true,
    storageTempRange: '2-8°C',
    imageUrl: '/placeholder.svg',
    tags: ['respiratory', 'reproductive', 'breeding', 'nursery'],
    minimumOrderQty: 1,
    leadTimeDays: 7,
    availableStock: 280,
    batches: [
      { batchNumber: 'PRRS-2024-S1', expiryDate: '2025-04-15', quantity: 180 },
      { batchNumber: 'PRRS-2024-S2', expiryDate: '2025-06-20', quantity: 100 },
    ],
    administrationNotes: 'Intramuscular injection. Follow farm-specific PRRS control protocols.',
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsBySpecies = (species: 'poultry' | 'swine'): Product[] => {
  return products.filter(p => p.species === species);
};

export const getProductsByBrand = (brand: string): Product[] => {
  return products.filter(p => p.brand === brand);
};
