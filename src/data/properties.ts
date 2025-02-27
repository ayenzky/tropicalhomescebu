export interface Property {
  id: number;
  title: string;
  slug: string;
  price: number;
  displayPrice: string;
  type: 'sale' | 'rent';
  propertyType: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  description: string;
  features: string[];
  galleryImages: string[];
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Modern Apartment with City View",
    slug: "modern-apartment-with-city-view",
    price: 345000,
    displayPrice: "$345,000",
    type: "sale",
    propertyType: "Apartment",
    location: "123 Street, New York, USA",
    beds: 3,
    baths: 2,
    sqft: 1000,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=800&auto=format&fit=crop"
    ],
    description: "This stunning modern apartment offers breathtaking city views and contemporary living spaces. Features include an open-plan layout, high-end finishes, and premium appliances.",
    features: [
      "Modern Kitchen",
      "Floor-to-ceiling Windows",
      "Central Air Conditioning",
      "In-unit Laundry",
      "Parking Space"
    ]
  },
  {
    id: 2,
    title: "Luxury Penthouse for Rent",
    slug: "luxury-penthouse-for-rent",
    price: 4500,
    displayPrice: "$4,500/mo",
    type: "rent",
    propertyType: "Penthouse",
    location: "456 Avenue, Manhattan, USA",
    beds: 3,
    baths: 2,
    sqft: 1200,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=800&auto=format&fit=crop"
    ],
    description: "Experience luxury living in this stunning penthouse with panoramic city views. This exclusive property features premium finishes and state-of-the-art amenities.",
    features: [
      "Private Terrace",
      "Smart Home System",
      "Wine Cellar",
      "24/7 Concierge",
      "Private Elevator"
    ]
  },
  {
    id: 3,
    title: "Spacious Family Villa",
    slug: "spacious-family-villa",
    price: 875000,
    displayPrice: "$875,000",
    type: "sale",
    propertyType: "Villa",
    location: "789 Boulevard, Manhattan USA",
    beds: 4,
    baths: 3,
    sqft: 2200,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=800&auto=format&fit=crop"
    ],
    description: "Perfect for families, this spacious villa offers generous living spaces, a beautiful garden, and modern amenities throughout.",
    features: [
      "Swimming Pool",
      "Garden",
      "Home Theater",
      "Double Garage",
      "Security System"
    ]
  },
  {
    id: 4,
    title: "Downtown Studio Apartment",
    slug: "downtown-studio-apartment",
    price: 1800,
    displayPrice: "$1,800/mo",
    type: "rent",
    propertyType: "Studio",
    location: "321 Lane, Queens USA",
    beds: 1,
    baths: 1,
    sqft: 600,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=800&auto=format&fit=crop"
    ],
    description: "Cozy studio apartment in the heart of downtown, perfect for young professionals. Features modern amenities and great location.",
    features: [
      "Built-in Storage",
      "Modern Appliances",
      "High-speed Internet",
      "Gym Access",
      "Bike Storage"
    ]
  },
  {
    id: 5,
    title: "Suburban Family Home",
    slug: "suburban-family-home",
    price: 2800,
    displayPrice: "$2,800/mo",
    type: "rent",
    propertyType: "House",
    location: "654 Road, Bronx USA",
    beds: 3,
    baths: 2,
    sqft: 1500,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=800&auto=format&fit=crop"
    ],
    description: "Charming suburban home with a spacious backyard, perfect for families. Close to schools and parks.",
    features: [
      "Backyard",
      "Finished Basement",
      "Updated Kitchen",
      "Attached Garage",
      "Central Heating"
    ]
  },
  {
    id: 6,
    title: "Historic Brownstone",
    slug: "historic-brownstone",
    price: 1250000,
    displayPrice: "$1,250,000",
    type: "sale",
    propertyType: "Townhouse",
    location: "432 Park Avenue, Brooklyn, USA",
    beds: 4,
    baths: 3.5,
    sqft: 2800,
    image: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop"
    ],
    description: "Beautifully restored 19th-century brownstone featuring original architectural details, modern updates, and a private garden. Located in a historic district.",
    features: [
      "Original Hardwood Floors",
      "Period Moldings",
      "Chef's Kitchen",
      "Private Garden",
      "Wine Cellar"
    ]
  },
  {
    id: 7,
    title: "Waterfront Condo",
    slug: "waterfront-condo",
    price: 3200,
    displayPrice: "$3,200/mo",
    type: "rent",
    propertyType: "Condo",
    location: "789 Shore Drive, Brooklyn, USA",
    beds: 2,
    baths: 2,
    sqft: 1100,
    image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&auto=format&fit=crop"
    ],
    description: "Modern waterfront condo with stunning harbor views, featuring high-end finishes and resort-style amenities in a luxury building.",
    features: [
      "Water Views",
      "Balcony",
      "Pool & Hot Tub",
      "Fitness Center",
      "Underground Parking"
    ]
  },
  {
    id: 8,
    title: "Eco-Friendly Tiny House",
    slug: "eco-friendly-tiny-house",
    price: 295000,
    displayPrice: "$295,000",
    type: "sale",
    propertyType: "Tiny House",
    location: "101 Green Lane, Staten Island, USA",
    beds: 1,
    baths: 1,
    sqft: 400,
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=800&auto=format&fit=crop"
    ],
    description: "Sustainable tiny house with solar panels, rainwater harvesting, and smart home technology. Perfect for environmentally conscious living.",
    features: [
      "Solar Power System",
      "Composting Toilet",
      "Rainwater Collection",
      "Murphy Bed",
      "Mini Split HVAC"
    ]
  },
  {
    id: 9,
    title: "Artist Loft",
    slug: "artist-loft",
    price: 5500,
    displayPrice: "$5,500/mo",
    type: "rent",
    propertyType: "Loft",
    location: "567 Creative Ave, Manhattan, USA",
    beds: 2,
    baths: 2,
    sqft: 1800,
    image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop"
    ],
    description: "Converted industrial loft with soaring ceilings, exposed brick, and abundant natural light. Perfect for artists or creative professionals.",
    features: [
      "16-ft Ceilings",
      "Exposed Brick",
      "Industrial Windows",
      "Freight Elevator",
      "Art Studio Space"
    ]
  },
  {
    id: 10,
    title: "Golf Course Estate",
    slug: "golf-course-estate",
    price: 1750000,
    displayPrice: "$1,750,000",
    type: "sale",
    propertyType: "Estate",
    location: "888 Fairway Drive, Long Island, USA",
    beds: 5,
    baths: 4.5,
    sqft: 4500,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=800&auto=format&fit=crop"
    ],
    description: "Magnificent estate overlooking the 18th hole, featuring luxury amenities, a pool house, and spectacular golf course views throughout.",
    features: [
      "Golf Course Views",
      "Pool & Pool House",
      "Home Gym",
      "Wine Room",
      "4-Car Garage"
    ]
  }
]; 