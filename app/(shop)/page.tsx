const SHORTCUTS = [
  { label: "ส่งฟรี", color: "text-emerald-600", bg: "bg-emerald-50", icon: (
    <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none">
      <rect width="40" height="40" rx="20" fill="#e6f7f0"/>
      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#10b981">FREE</text>
    </svg>
  )},
  { label: "Fulfilled", color: "text-primary", bg: "bg-orange-50", icon: (
    <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none">
      <rect width="40" height="40" rx="20" fill="#fff3ef"/>
      <path d="M10 20h20M20 10v20" stroke="#ee4d2d" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  )},
  { label: "ช้อปปีเทรนด์ดี", color: "text-zinc-700", bg: "bg-zinc-50", icon: (
    <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none">
      <rect width="40" height="40" rx="20" fill="#f0fdf4"/>
      <path d="M12 28l4-8 4 4 4-8 4 6" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )},
  { label: "ช้อปปีมอลล์", color: "text-zinc-700", bg: "bg-zinc-50", icon: (
    <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none">
      <rect width="40" height="40" rx="20" fill="#fff0f0"/>
      <rect x="11" y="18" width="18" height="12" rx="1" stroke="#ee4d2d" strokeWidth="2"/>
      <path d="M15 18v-2a5 5 0 0 1 10 0v2" stroke="#ee4d2d" strokeWidth="2"/>
    </svg>
  )},
  { label: "ช้อปปีแฟชั่น", color: "text-zinc-700", bg: "bg-zinc-50", icon: (
    <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none">
      <rect width="40" height="40" rx="20" fill="#fdf4ff"/>
      <path d="M14 14c0-2 3-4 6-4s6 2 6 4l2 16H12L14 14z" stroke="#a855f7" strokeWidth="2"/>
    </svg>
  )},
  { label: "ช้อปปีอีกตัวร์", color: "text-zinc-700", bg: "bg-zinc-50", icon: (
    <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none">
      <rect width="40" height="40" rx="20" fill="#fff7ed"/>
      <circle cx="20" cy="20" r="8" stroke="#f97316" strokeWidth="2"/>
      <path d="M20 16v8M16 20h8" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )},
  { label: "ซูเปอร์มาร์เก็ต", color: "text-zinc-700", bg: "bg-zinc-50", icon: (
    <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none">
      <rect width="40" height="40" rx="20" fill="#eff6ff"/>
      <path d="M11 13h3l2 10h9l2-7H15" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="18" cy="26" r="1.5" fill="#3b82f6"/>
      <circle cx="24" cy="26" r="1.5" fill="#3b82f6"/>
    </svg>
  )},
];

const CATEGORIES = [
  { label: "ความงามและของใช้ส่วนตัว", emoji: "💄" },
  { label: "เสื้อผ้าแฟชั่นผู้ชาย", emoji: "👔" },
  { label: "กระเป๋า", emoji: "👜" },
  { label: "รองเท้าผู้หญิง", emoji: "👠" },
  { label: "นาฬิกาและแว่นตา", emoji: "⌚" },
  { label: "อุปกรณ์อิเล็กทรอนิกส์", emoji: "🎧" },
  { label: "เครื่องใช้ไฟฟ้าภายในบ้าน", emoji: "📱" },
  { label: "กล้องและอุปกรณ์ถ่ายภาพ", emoji: "📷" },
  { label: "ของเล่น สินค้าแม่และเด็ก", emoji: "🍼" },
  { label: "สัตว์เลี้ยง", emoji: "🐾" },
  { label: "กลุ่มผลิตภัณฑ์เพื่อสุขภาพ", emoji: "😷" },
  { label: "เสื้อผ้าแฟชั่นผู้หญิง", emoji: "👗" },
  { label: "รองเท้าผู้ชาย", emoji: "👟" },
  { label: "เครื่องประดับ", emoji: "💍" },
  { label: "เครื่องใช้ในบ้าน", emoji: "🛋️" },
  { label: "มือถือ และแท็บเล็ต", emoji: "📲" },
  { label: "คอมพิวเตอร์และแล็ปท็อป", emoji: "💻" },
  { label: "อาหารและเครื่องดื่ม", emoji: "🍜" },
  { label: "กีฬาและกิจกรรมกลางแจ้ง", emoji: "🚴" },
  { label: "เกมและอุปกรณ์เสริม", emoji: "🎮" },
];

const PRODUCTS = [
  { id: "1", name: "เสื้อยืดพิมพ์ลายญี่ปุ่น สีขาว", price: 299 },
  { id: "2", name: "รองเท้าผ้าใบแฟชั่น ระบายอากาศ", price: 890 },
  { id: "3", name: "กระเป๋าสะพายหลัง Canvas น้ำหนักเบา", price: 549 },
  { id: "4", name: "นาฬิกาข้อมือดิจิตอล กันน้ำ", price: 1290 },
  { id: "5", name: "หูฟังไร้สาย Bluetooth 5.0", price: 790 },
  { id: "6", name: "เคสโทรศัพท์ ใสกันกระแทก", price: 129 },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-300 px-4 py-4">

      {/* ── Hero banner ── */}
      <section className="mb-4 grid grid-cols-3 gap-2">
        {/* Main banner */}
        <div className="col-span-2 overflow-hidden rounded-sm bg-linear-to-br from-primary to-[#d73211]">
          <div className="flex h-70 items-center justify-between px-10">
            <div className="text-white">
              <div className="mb-2 inline-block rounded bg-yellow-400 px-2 py-0.5 text-xs font-bold text-zinc-900">
                โค้ดลด 90%
              </div>
              <h2 className="text-3xl font-extrabold leading-tight">
                ดีลลด<span className="text-yellow-300">ราคา 1.-</span>
              </h2>
              <p className="mt-1 text-sm text-white/80">ผ่อนเริ่มต้น 0%</p>
              <button className="mt-4 rounded-sm bg-white px-5 py-2 text-sm font-semibold text-primary hover:bg-orange-50">
                ช้อปเลย
              </button>
            </div>
            <div className="flex h-40 w-40 items-center justify-center rounded-full bg-white/10 text-7xl">
              🛍️
            </div>
          </div>
        </div>
        {/* Side banners */}
        <div className="flex flex-col gap-2">
          <div className="flex h-34 items-center justify-center overflow-hidden rounded-sm bg-linear-to-br from-yellow-50 to-yellow-100 px-4">
            <div className="text-center">
              <p className="text-xs font-medium text-zinc-500">ล็อกราคาคุ้มทุกดีล</p>
              <p className="text-2xl font-extrabold text-primary">ลด 50%</p>
              <p className="text-xs text-zinc-400">โค้ดลดเพิ่ม 30%</p>
            </div>
          </div>
          <div className="flex h-34 items-center justify-center overflow-hidden rounded-sm bg-linear-to-br from-blue-50 to-blue-100 px-4">
            <div className="text-center">
              <p className="text-xs font-medium text-zinc-500">Shippy Mall</p>
              <p className="text-2xl font-extrabold text-blue-600">ลด 68%</p>
              <p className="text-xs text-zinc-400">โค้ดลดเพิ่ม 10%</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Shortcut icons ── */}
      <section className="mb-4 rounded-sm bg-white px-4 py-4 shadow-sm">
        <div className="flex items-start justify-between gap-2">
          {SHORTCUTS.map((s) => (
            <button key={s.label} className="flex flex-1 flex-col items-center gap-1.5 hover:opacity-80">
              <div className={`flex h-12 w-12 items-center justify-center rounded-full ${s.bg}`}>
                {s.icon}
              </div>
              <span className={`text-center text-[11px] leading-tight ${s.color}`}>{s.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* ── New user promo banner ── */}
      <section className="mb-4 overflow-hidden rounded-sm">
        <div className="flex h-20 items-center justify-between bg-linear-to-r from-[#ee4d2d] via-[#f8a200] to-[#ee4d2d] px-8">
          <div className="text-white">
            <p className="text-lg font-bold">สิทธิพิเศษลูกค้าใหม่</p>
          </div>
          <div className="flex items-center gap-4 text-white">
            <div className="rounded-lg border-2 border-white/60 bg-white/20 px-3 py-1 text-center">
              <p className="text-[10px]">ส่งฟรี</p>
              <p className="text-sm font-bold">ขั้นต่ำ 0</p>
            </div>
            <div className="rounded-lg border-2 border-white/60 bg-white/20 px-3 py-1 text-center">
              <p className="text-[10px]">โค้ดลด</p>
              <p className="text-sm font-bold">สูงสุด 50%</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-zinc-900 px-5 py-2">
            <span className="text-sm font-semibold text-white">ดาวน์โหลดแอป SHIPPY</span>
            <button className="rounded bg-white px-3 py-1 text-xs font-bold text-zinc-900">
              รับเลย &gt;
            </button>
          </div>
        </div>
      </section>

      {/* ── หมวดหมู่ ── */}
      <section className="mb-4 rounded-sm bg-white px-6 py-5 shadow-sm">
        <h3 className="mb-4 text-sm font-semibold text-zinc-700">หมวดหมู่</h3>
        <div className="grid grid-cols-10 gap-y-5">
          {CATEGORIES.map((c) => (
            <button key={c.label} className="flex flex-col items-center gap-2 hover:opacity-75">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-100 text-2xl shadow-sm">
                {c.emoji}
              </div>
              <span className="line-clamp-2 text-center text-[11px] leading-tight text-zinc-600">
                {c.label}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* ── Flash Sale ── */}
      <section className="mb-4 rounded-sm bg-white shadow-sm">
        <div className="flex items-center gap-4 border-b border-zinc-100 px-5 py-3">
          <h3 className="text-lg font-extrabold uppercase tracking-wide text-primary">
            FL<span className="text-yellow-500">⚡</span>SH SALE
          </h3>
          <div className="flex items-center gap-1 text-sm font-semibold">
            <span className="rounded bg-zinc-900 px-1.5 py-0.5 text-white tabular-nums">00</span>
            <span className="text-zinc-500">:</span>
            <span className="rounded bg-zinc-900 px-1.5 py-0.5 text-white tabular-nums">31</span>
            <span className="text-zinc-500">:</span>
            <span className="rounded bg-zinc-900 px-1.5 py-0.5 text-white tabular-nums">2น.</span>
          </div>
          <button className="ml-auto text-xs text-primary hover:underline">ดูทั้งหมด &gt;</button>
        </div>
        <div className="flex gap-2 overflow-x-auto px-4 py-4">
          {[43, 53, 42, 39, 41, 53].map((discount, i) => (
            <div key={i} className="w-35 shrink-0 overflow-hidden rounded-sm border border-zinc-100">
              <div className="relative flex h-35 items-center justify-center bg-zinc-100 text-4xl">
                <span>🧴</span>
                <span className="absolute left-0 top-0 rounded-br bg-primary px-1.5 py-0.5 text-[10px] font-bold text-white">
                  Mall
                </span>
                <span className="absolute right-0 top-0 rounded-bl bg-yellow-400 px-1.5 py-0.5 text-[10px] font-bold text-zinc-800">
                  ลด {discount}%
                </span>
              </div>
              <div className="p-2">
                <p className="text-sm font-semibold text-primary">฿{(Math.random() * 700 + 100).toFixed(0)}</p>
                <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-orange-100">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${30 + i * 10}%` }} />
                </div>
                <p className="mt-0.5 text-[10px] text-zinc-400">ขายดี</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── สินค้าแนะนำประจำวัน ── */}
      <section className="rounded-sm bg-white shadow-sm">
        <div className="border-b border-zinc-100 px-5 py-3">
          <h3 className="text-center text-base font-semibold text-primary">สินค้าแนะนำประจำวัน</h3>
        </div>
        <div className="grid grid-cols-2 divide-x divide-y divide-zinc-100 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {PRODUCTS.map((p) => (
            <div key={p.id} className="group cursor-pointer hover:shadow-md">
              <div className="flex h-40 items-center justify-center bg-zinc-100 text-zinc-300">
                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
                </svg>
              </div>
              <div className="p-2">
                <p className="line-clamp-2 min-h-8 text-xs text-zinc-700">{p.name}</p>
                <div className="mt-1.5 flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary">฿{p.price.toLocaleString()}</span>
                  <span className="text-[10px] text-zinc-400">ขายได้ 0 ชิ้น</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
