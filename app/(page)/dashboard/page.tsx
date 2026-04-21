import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "ภาพรวมยอดขายและข้อมูลร้านค้าของคุณ",
};

// ---------------------------------------------------------------------------
// Stat card helper
// ---------------------------------------------------------------------------
type StatCardProps = {
  label: string;
  value: string;
  delta?: string;
  positive?: boolean;
  icon: React.ReactNode;
  accent: string; // Tailwind bg class for icon bubble
};

function StatCard({ label, value, delta, positive, icon, accent }: StatCardProps) {
  return (
    <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 transition hover:shadow-md">
      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${accent}`}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-slate-500">{label}</p>
        <p className="mt-0.5 text-2xl font-bold text-slate-800">{value}</p>
        {delta && (
          <p className={`mt-1 text-xs font-medium ${positive ? "text-emerald-500" : "text-rose-500"}`}>
            {positive ? "▲" : "▼"} {delta} from last month
          </p>
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Page heading */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
        <p className="mt-1 text-sm text-slate-500">ภาพรวมยอดขายและข้อมูลร้านค้าของคุณ</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Total Revenue"
          value="฿128,400"
          delta="12.5%"
          positive
          accent="bg-primary/10"
          icon={
            <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          }
        />
        <StatCard
          label="Orders"
          value="1,038"
          delta="8.1%"
          positive
          accent="bg-sky-100"
          icon={
            <svg className="h-5 w-5 text-sky-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          }
        />
        <StatCard
          label="New Customers"
          value="347"
          delta="3.2%"
          positive
          accent="bg-violet-100"
          icon={
            <svg className="h-5 w-5 text-violet-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          }
        />
        <StatCard
          label="Returns"
          value="24"
          delta="1.4%"
          positive={false}
          accent="bg-rose-100"
          icon={
            <svg className="h-5 w-5 text-rose-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 .49-4.5" />
            </svg>
          }
        />
      </div>

      {/* Recent activity placeholder */}
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
        <h2 className="mb-4 text-base font-semibold text-slate-700">Recent Orders</h2>
        <div className="space-y-3">
          {["#ORD-001", "#ORD-002", "#ORD-003", "#ORD-004", "#ORD-005"].map((id, i) => (
            <div key={id} className="flex items-center gap-4 rounded-xl bg-slate-50 px-4 py-3">
              <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">{id}</span>
              <span className="flex-1 text-sm text-slate-600 truncate">Customer {i + 1} — สินค้าหลายรายการ</span>
              <span className="shrink-0 text-sm font-bold text-slate-800">฿{(299 + i * 150).toLocaleString()}</span>
              <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${i % 3 === 0 ? "bg-emerald-100 text-emerald-600" : i % 3 === 1 ? "bg-yellow-100 text-yellow-600" : "bg-sky-100 text-sky-600"}`}>
                {i % 3 === 0 ? "Delivered" : i % 3 === 1 ? "Pending" : "Shipped"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
