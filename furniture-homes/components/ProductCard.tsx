// components/ProductCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/dummyData";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";

type Props = {
  product: Product;
  onAddToCart?: (product: Product) => void;
};

export default function ProductCard({ product, onAddToCart }: Props) {
  return (
    <Card className="overflow-hidden group">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-sm font-semibold tracking-tight">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-neutral-500">{product.category}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-base font-semibold">
            NPR {product.price.toLocaleString()}
          </span>
          <Button
            variant="outline"
            onClick={() => onAddToCart && onAddToCart(product)}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
}
