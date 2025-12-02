// app/products/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import { products } from "@/lib/dummyData";
import { Button } from "@/components/ui/Button";

type Props = {
  params: { slug: string };
};

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <main className="px-8 py-10 grid gap-8 lg:grid-cols-[1.1fr,1fr]">
      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-neutral-200 bg-neutral-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
            Furniture Homes
          </p>
          <h1 className="text-2xl font-semibold tracking-tight mt-2">
            {product.name}
          </h1>
          <p className="text-xs text-neutral-500 mt-1">{product.category}</p>
        </div>

        <p className="text-sm text-neutral-600">{product.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold">
            NPR {product.price.toLocaleString()}
          </span>
          <span className="text-xs text-neutral-500">
            {product.inStock ? "In stock" : "Pre-order"}
          </span>
        </div>

        <div className="flex gap-3">
          <Button>Add to Cart</Button>
          <Button variant="outline">Buy Now</Button>
        </div>
      </div>
    </main>
  );
}
