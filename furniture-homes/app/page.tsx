// app/page.tsx
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/dummyData";
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  const featured = products.slice(0, 4);

  return (
    <main className="flex-1 flex flex-col">
      {/* NAVBAR MINIMAL */}
      <header className="flex items-center justify-between px-8 py-5 border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full border border-neutral-900" />
          <span className="text-sm font-semibold tracking-[0.15em] uppercase">
            Furniture Homes
          </span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-neutral-700">
          <Link href="/products">Shop</Link>
          <Link href="/about">About</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/admin" className="text-neutral-400 text-xs">
            Admin
          </Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="px-8 py-10 grid gap-10 lg:grid-cols-[1.2fr,1fr] items-center">
        <div className="space-y-6">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500">
            Modern • Minimal • Timeless
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Furniture for homes that feel{" "}
            <span className="underline underline-offset-4 decoration-neutral-300">
              calm
            </span>{" "}
            and curated.
          </h1>
          <p className="text-sm text-neutral-600 max-w-xl">
            Furniture Homes blends minimal design with warm textures, creating
            spaces that feel premium yet livable. Crafted for modern apartments
            and homes.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/products">Shop Collection</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/about">Explore our story</Link>
            </Button>
          </div>
        </div>

        {/* Right side hero image grid placeholder */}
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-[3/4] rounded-3xl bg-neutral-200" />
          <div className="aspect-square rounded-3xl bg-neutral-100 self-end" />
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="px-8 pb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold tracking-tight">
            Featured pieces
          </h2>
          <Link href="/products" className="text-xs text-neutral-500 underline">
            View all
          </Link>
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
