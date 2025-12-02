// app/products/page.tsx
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/dummyData";

export default function ProductsPage() {
  return (
    <main className="px-8 py-10">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            All furniture
          </h1>
          <p className="text-xs text-neutral-500 mt-1">
            Carefully curated pieces for living rooms, bedrooms and more.
          </p>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
