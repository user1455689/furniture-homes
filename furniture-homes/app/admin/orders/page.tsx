// app/admin/orders/page.tsx
type Order = {
  id: string;
  customerName: string;
  total: number;
  status: "Pending" | "Shipped" | "Delivered" | "Cancelled";
};

const orders: Order[] = [
  {
    id: "ORD-1001",
    customerName: "Rahul Sharma",
    total: 115000,
    status: "Pending",
  },
  {
    id: "ORD-1002",
    customerName: "Anisha K.",
    total: 42000,
    status: "Shipped",
  },
];

export default function AdminOrdersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold tracking-tight">Orders</h1>
        <p className="text-xs text-neutral-500 mt-1">
          Track order status and delivery updates.
        </p>
      </div>

      <div className="rounded-3xl border border-neutral-200 bg-white overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-neutral-50">
            <tr className="text-left">
              <th className="px-4 py-3">Order ID</th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Total</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Last updated</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-t border-neutral-100"
              >
                <td className="px-4 py-3 font-mono text-xs">
                  {order.id}
                </td>
                <td className="px-4 py-3">{order.customerName}</td>
                <td className="px-4 py-3">
                  NPR {order.total.toLocaleString()}
                </td>
                <td className="px-4 py-3">{order.status}</td>
                <td className="px-4 py-3 text-xs text-neutral-400">
                  2 hours ago
                </td>
              </tr>
            ))}
            {orders.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-6 text-center text-neutral-400"
                >
                  No orders yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
