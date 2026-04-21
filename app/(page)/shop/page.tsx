import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop",
  description: "จัดการสินค้าและร้านค้าของคุณ",
};

const PRODUCTS = [
  { id: "1", name: "เสื้อยืดพิมพ์ลาย", price: 299, stock: 48, status: "active" },
  { id: "2", name: "รองเท้าผ้าใบแฟชั่น", price: 890, stock: 12, status: "active" },
  { id: "3", name: "กระเป๋า Canvas", price: 549, stock: 0, status: "out" },
  { id: "4", name: "นาฬิกาดิจิตอล", price: 1290, stock: 7, status: "active" },
  { id: "5", name: "หูฟัง Bluetooth", price: 790, stock: 23, status: "active" },
  { id: "6", name: "เคสโทรศัพท์ใส", price: 129, stock: 0, status: "out" },
];

export default function ShopPage() {
  return (
    <div className="space-y-8">
      {/* Page heading */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Shop</h1>
          <p className="mt-1 text-sm text-slate-500">จัดการสินค้าและร้านค้าของคุณ</p>
        </div>
        <button
          id="add-product-btn"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          เพิ่มสินค้า
        </button>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((p) => (
          <div
            key={p.id}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition hover:shadow-md hover:-translate-y-0.5"
          >
            {/* Product image placeholder */}
            <div className="flex h-40 items-center justify-center bg-slate-100 text-slate-300 transition group-hover:bg-slate-200">
              <svg className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.16-5.16a2.25 2.25 0 0 1 3.18 0l5.16 5.16m-1.5-1.5 1.41-1.41a2.25 2.25 0 0 1 3.18 0l2.91 2.91M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
              </svg>
            </div>

            {/* Status badge */}
            <span
              className={[
                "absolute right-3 top-3 rounded-full px-2 py-0.5 text-[10px] font-bold",
                p.status === "active"
                  ? "bg-emerald-100 text-emerald-600"
                  : "bg-slate-200 text-slate-500",
              ].join(" ")}
            >
              {p.status === "active" ? "Active" : "Out of stock"}
            </span>

            {/* Details */}
            <div className="p-4">
              <h2 className="truncate text-sm font-semibold text-slate-700">{p.name}</h2>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-lg font-bold text-primary">฿{p.price.toLocaleString()}</span>
                <span className="text-xs text-slate-400">
                  คงเหลือ <strong className="text-slate-600">{p.stock}</strong> ชิ้น
                </span>
              </div>
              <button
                id={`edit-product-${p.id}`}
                className="mt-3 w-full rounded-lg border border-slate-200 py-1.5 text-xs font-medium text-slate-600 transition hover:border-primary hover:text-primary"
              >
                แก้ไขสินค้า
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
