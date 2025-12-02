// components/AdminSidebar.tsx
import Link from "next/link";

export default function AdminSidebar() {
  return (
    <aside className="w-60 border-r border-neutral-200 bg-white h-screen sticky top-0 p-5 flex flex-col gap-6 text-sm">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
          Admin
        </p>
        <h2 className="text-base font-semibold mt-1">Furniture Homes</h2>
      </div>

      <nav className="flex flex-col gap-3">
        <Link href="/admin">Dashboard</Link>
        <Link href="/admin/products">Products</Link>
        <Link href="/admin/orders">Orders</Link>
        <Link href="/admin/settings" className="text-neutral-400">
          Settings
        </Link>
      </nav>
    </aside>
  );
}
