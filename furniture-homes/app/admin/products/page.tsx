// app/admin/products/page.tsx
"use client";

import { useState } from "react";
import { products as initialProducts, Product } from "@/lib/dummyData";
import { Button } from "@/components/ui/Button";

export default function AdminProductsPage() {
  const [items, setItems] = useState<Product[]>(initialProducts);
  const [editing, setEditing] = useState<Product | null>(null);

  const handleSave = (product: Product) => {
    setItems((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.map((p) => (p.id === product.id ? product : p));
      }
      return [...prev, product];
    });
    setEditing(null);
  };

  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">
            Products
          </h1>
          <p className="text-xs text-neutral-500 mt-1">
            Add, edit and remove furniture products.
          </p>
        </div>
        <Button
          onClick={() =>
            setEditing({
              id: crypto.randomUUID(),
              name: "",
              slug: "",
              price: 0,
              category: "",
              description: "",
              image: "",
              inStock: true,
            })
          }
        >
          Add Product
        </Button>
      </div>

      {/* Table */}
      <div className="rounded-3xl border border-neutral-200 bg-white overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-neutral-50">
            <tr className="text-left">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Stock</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((p) => (
              <tr key={p.id} className="border-t border-neutral-100">
                <td className="px-4 py-3">{p.name}</td>
                <td className="px-4 py-3">{p.category}</td>
                <td className="px-4 py-3">
                  NPR {p.price.toLocaleString()}
                </td>
                <td className="px-4 py-3">
                  {p.inStock ? "In stock" : "Out of stock"}
                </td>
                <td className="px-4 py-3 text-right space-x-2">
                  <Button
                    variant="ghost"
                    onClick={() => setEditing(p)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => handleDelete(p.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
            {items.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-6 text-center text-neutral-400"
                >
                  No products added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Simple inline editor */}
      {editing && (
        <div className="rounded-3xl border border-neutral-200 bg-white p-6 space-y-4">
          <h2 className="text-sm font-semibold">
            {initialProducts.find((p) => p.id === editing.id)
              ? "Edit Product"
              : "Add Product"}
          </h2>

          <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
            <input
              className="border rounded-xl px-3 py-2 text-sm"
              placeholder="Name"
              value={editing.name}
              onChange={(e) =>
                setEditing({ ...editing, name: e.target.value })
              }
            />
            <input
              className="border rounded-xl px-3 py-2 text-sm"
              placeholder="Slug (url-friendly)"
              value={editing.slug}
              onChange={(e) =>
                setEditing({ ...editing, slug: e.target.value })
              }
            />
            <input
              className="border rounded-xl px-3 py-2 text-sm"
              placeholder="Category"
              value={editing.category}
              onChange={(e) =>
                setEditing({ ...editing, category: e.target.value })
              }
            />
            <input
              className="border rounded-xl px-3 py-2 text-sm"
              placeholder="Image URL"
              value={editing.image}
              onChange={(e) =>
                setEditing({ ...editing, image: e.target.value })
              }
            />
            <input
              type="number"
              className="border rounded-xl px-3 py-2 text-sm"
              placeholder="Price"
              value={editing.price}
              onChange={(e) =>
                setEditing({
                  ...editing,
                  price: Number(e.target.value),
                })
              }
            />
            <select
              className="border rounded-xl px-3 py-2 text-sm"
              value={editing.inStock ? "in" : "out"}
              onChange={(e) =>
                setEditing({
                  ...editing,
                  inStock: e.target.value === "in",
                })
              }
            >
              <option value="in">In stock</option>
              <option value="out">Out of stock</option>
            </select>
          </div>

          <div className="flex justify-end gap-3">
            <Button variant="ghost" onClick={() => setEditing(null)}>
              Cancel
            </Button>
            <Button onClick={() => handleSave(editing)}>Save</Button>
          </div>
        </div>
      )}
    </div>
  );
}
