// lib/dummyData.ts
export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  image: string;
  category: string;
  description: string;
  inStock: boolean;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Luxe Oak Sofa",
    slug: "luxe-oak-sofa",
    price: 75000,
    image: "/images/sofa-1.jpg",
    category: "Sofas",
    description: "A minimal three-seater with premium oak legs and soft fabric.",
    inStock: true,
  },
  {
    id: "2",
    name: "Cloud Lounge Chair",
    slug: "cloud-lounge-chair",
    price: 42000,
    image: "/images/chair-1.jpg",
    category: "Chairs",
    description: "Ergonomic lounge chair designed for comfort and style.",
    inStock: true,
  },
];
