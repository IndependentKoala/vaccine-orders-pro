export interface DosePack {
  id: string;
  doses: number;
  unitsPerPack: number;
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
  // MSD Animal Health - Poultry
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
      { id: 'dp1', doses: 1000, unitsPerPack: 1 },
      { id: 'dp2', doses: 5000, unitsPerPack: 1 },
      { id: 'dp3', doses: 10000, unitsPerPack: 1 },
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
      { id: 'dp1', doses: 1000, unitsPerPack: 1 },
      { id: 'dp2', doses: 5000, unitsPerPack: 1 },
      { id: 'dp3', doses: 10000, unitsPerPack: 1 },
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
      { id: 'dp1', doses: 1000, unitsPerPack: 1 },
      { id: 'dp2', doses: 5000, unitsPerPack: 1 },
      { id: 'dp3', doses: 10000, unitsPerPack: 1 },
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
      { id: 'dp1', doses: 1000, unitsPerPack: 1 },
      { id: 'dp2', doses: 5000, unitsPerPack: 1 },
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

  // Urban Farmer - Poultry
  {
    id: '5',
    sku: 'UF-IBVAR-001',
    name: 'Tabic IB VAR 206',
    brand: 'Urban Farmer',
    species: 'poultry',
    type: 'live',
    manufacturer: 'Urban Farmer Biologics',
    description: 'Live attenuated vaccine against Infectious Bronchitis variant strains. Provides cross-protection against multiple IB serotypes including variant 206.',
    activeIngredients: 'Infectious Bronchitis Virus, VAR 206 strain',
    dosePacks: [
      { id: 'dp1', doses: 1000, unitsPerPack: 1 },
      { id: 'dp2', doses: 5000, unitsPerPack: 1 },
      { id: 'dp3', doses: 10000, unitsPerPack: 1 },
    ],
    coldChainRequired: true,
    storageTempRange: '2-8°C',
    imageUrl: '/placeholder.svg',
    tags: ['respiratory', 'variant', 'layer', 'broiler'],
    minimumOrderQty: 1,
    leadTimeDays: 3,
    availableStock: 2800,
    batches: [
      { batchNumber: 'UF-IBVAR-2024-01', expiryDate: '2025-07-01', quantity: 1800 },
      { batchNumber: 'UF-IBVAR-2024-02', expiryDate: '2025-09-15', quantity: 1000 },
    ],
    administrationNotes: 'Spray or eye drop administration. Best used in combination with classical IB vaccines.',
  },
  {
    id: '6',
    sku: 'UF-SALM-002',
    name: 'Salmonella Duo',
    brand: 'Urban Farmer',
    species: 'poultry',
    type: 'killed',
    manufacturer: 'Urban Farmer Biologics',
    description: 'Inactivated bivalent vaccine for protection against Salmonella Enteritidis and Salmonella Typhimurium in layers and breeders.',
    activeIngredients: 'Inactivated Salmonella Enteritidis and Salmonella Typhimurium',
    dosePacks: [
      { id: 'dp1', doses: 500, unitsPerPack: 1 },
      { id: 'dp2', doses: 1000, unitsPerPack: 1 },
      { id: 'dp3', doses: 2500, unitsPerPack: 1 },
    ],
    coldChainRequired: true,
    storageTempRange: '2-8°C',
    imageUrl: '/placeholder.svg',
    tags: ['food safety', 'layer', 'breeder', 'zoonotic'],
    minimumOrderQty: 1,
    leadTimeDays: 5,
    availableStock: 1500,
    batches: [
      { batchNumber: 'UF-SALM-2024-01', expiryDate: '2026-03-01', quantity: 1000 },
      { batchNumber: 'UF-SALM-2024-02', expiryDate: '2026-06-15', quantity: 500 },
    ],
    administrationNotes: 'Intramuscular or subcutaneous injection. Two-dose program recommended at 6-8 weeks apart.',
  },
  {
    id: '7',
    sku: 'UF-MGBAC-003',
    name: 'Mg Bac',
    brand: 'Urban Farmer',
    species: 'poultry',
    type: 'killed',
    manufacturer: 'Urban Farmer Biologics',
    description: 'Inactivated bacterin vaccine for control of Mycoplasma gallisepticum (MG) infection in layers and breeders. Reduces respiratory disease and egg production losses.',
    activeIngredients: 'Inactivated Mycoplasma gallisepticum bacterin',
    dosePacks: [
      { id: 'dp1', doses: 500, unitsPerPack: 1 },
      { id: 'dp2', doses: 1000, unitsPerPack: 1 },
      { id: 'dp3', doses: 2500, unitsPerPack: 1 },
    ],
    coldChainRequired: true,
    storageTempRange: '2-8°C',
    imageUrl: '/placeholder.svg',
    tags: ['respiratory', 'mycoplasma', 'layer', 'breeder'],
    minimumOrderQty: 1,
    leadTimeDays: 4,
    availableStock: 2200,
    batches: [
      { batchNumber: 'UF-MGBAC-2024-01', expiryDate: '2026-01-20', quantity: 1400 },
      { batchNumber: 'UF-MGBAC-2024-02', expiryDate: '2026-04-30', quantity: 800 },
    ],
    administrationNotes: 'Subcutaneous injection in neck region. Administer at 8-10 weeks and repeat at 16-18 weeks.',
  },

  // MSD Animal Health - Swine
  {
    id: '8',
    sku: 'MSD-PCVMHYO-001',
    name: 'PCV M+Hyo',
    brand: 'MSD Animal Health',
    species: 'swine',
    type: 'killed',
    manufacturer: 'MSD Animal Health',
    description: 'Combination vaccine providing protection against Porcine Circovirus Type 2 (PCV2) and Mycoplasma hyopneumoniae. Single shot convenience with dual protection.',
    activeIngredients: 'Inactivated PCV2 and Mycoplasma hyopneumoniae antigens',
    dosePacks: [
      { id: 'dp1', doses: 10, unitsPerPack: 1 },
      { id: 'dp2', doses: 25, unitsPerPack: 1 },
      { id: 'dp3', doses: 50, unitsPerPack: 1 },
    ],
    coldChainRequired: true,
    storageTempRange: '2-8°C',
    imageUrl: '/placeholder.svg',
    tags: ['circovirus', 'respiratory', 'nursery', 'grower'],
    minimumOrderQty: 1,
    leadTimeDays: 5,
    availableStock: 650,
    batches: [
      { batchNumber: 'PCVMHYO-2024-S1', expiryDate: '2025-08-25', quantity: 400 },
      { batchNumber: 'PCVMHYO-2024-S2', expiryDate: '2025-11-30', quantity: 250 },
    ],
    administrationNotes: 'Single 2ml intramuscular injection in piglets from 3 weeks of age. Do not mix with other vaccines.',
  },
  {
    id: '9',
    sku: 'MSD-COLICLOS-002',
    name: 'Porcilis ColiClos',
    brand: 'MSD Animal Health',
    species: 'swine',
    type: 'killed',
    manufacturer: 'MSD Animal Health',
    description: 'Inactivated vaccine for protection of piglets against neonatal colibacillosis (E. coli) and Clostridium perfringens type C enteritis via sow vaccination.',
    activeIngredients: 'Inactivated E. coli (F4ab, F4ac, F5, F6) adhesins and C. perfringens type C toxoid',
    dosePacks: [
      { id: 'dp1', doses: 10, unitsPerPack: 1 },
      { id: 'dp2', doses: 25, unitsPerPack: 1 },
      { id: 'dp3', doses: 50, unitsPerPack: 1 },
    ],
    coldChainRequired: true,
    storageTempRange: '2-8°C',
    imageUrl: '/placeholder.svg',
    tags: ['enteric', 'sow', 'piglet protection', 'colibacillosis'],
    minimumOrderQty: 1,
    leadTimeDays: 5,
    availableStock: 520,
    batches: [
      { batchNumber: 'COLICLOS-2024-S1', expiryDate: '2025-09-15', quantity: 320 },
      { batchNumber: 'COLICLOS-2024-S2', expiryDate: '2025-12-20', quantity: 200 },
    ],
    administrationNotes: 'Vaccinate sows 6-8 weeks and 2-4 weeks before farrowing. Intramuscular injection behind the ear.',
  },
  {
    id: '10',
    sku: 'MSD-MHYOID-003',
    name: 'M+Hyo ID Once',
    brand: 'MSD Animal Health',
    species: 'swine',
    type: 'killed',
    manufacturer: 'MSD Animal Health',
    description: 'Intradermal, single-dose vaccine against Mycoplasma hyopneumoniae. Needle-free administration for improved animal welfare and biosecurity.',
    activeIngredients: 'Inactivated Mycoplasma hyopneumoniae, J strain',
    dosePacks: [
      { id: 'dp1', doses: 50, unitsPerPack: 1 },
      { id: 'dp2', doses: 100, unitsPerPack: 1 },
      { id: 'dp3', doses: 250, unitsPerPack: 1 },
    ],
    coldChainRequired: true,
    storageTempRange: '2-8°C',
    imageUrl: '/placeholder.svg',
    tags: ['respiratory', 'mycoplasma', 'intradermal', 'needle-free'],
    minimumOrderQty: 1,
    leadTimeDays: 7,
    availableStock: 380,
    batches: [
      { batchNumber: 'MHYOID-2024-S1', expiryDate: '2025-07-10', quantity: 220 },
      { batchNumber: 'MHYOID-2024-S2', expiryDate: '2025-10-25', quantity: 160 },
    ],
    administrationNotes: 'Intradermal application using IDAL device. Single 0.2ml dose from 1 week of age. Requires compatible applicator.',
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
