// app/admin/page.tsx
export default function AdminDashboardPage() {
  // static numbers for now; in real app fetch from DB
  const totalSales = 1250000;
  const totalOrders = 48;
  const pendingDeliveries = 9;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-xs text-neutral-500 mt-1">
          Overview of sales, orders and deliveries.
        </p>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
        <div className="rounded-3xl border border-neutral-200 bg-white p-5">
          <p className="text-xs text-neutral-500">Total sales</p>
          <p className="text-xl font-semibold mt-2">
            NPR {totalSales.toLocaleString()}
          </p>
        </div>

        <div className="rounded-3xl border border-neutral-200 bg-white p-5">
          <p className="text-xs text-neutral-500">Orders</p>
          <p className="text-xl font-semibold mt-2">{totalOrders}</p>
        </div>

        <div className="rounded-3xl border border-neutral-200 bg-white p-5">
          <p className="text-xs text-neutral-500">Pending deliveries</p>
          <p className="text-xl font-semibold mt-2">{pendingDeliveries}</p>
        </div>
      </div>
    </div>
  );
}
