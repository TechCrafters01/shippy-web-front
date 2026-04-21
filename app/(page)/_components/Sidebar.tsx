import Link from "next/link";
import SidebarNav from "./SidebarNav";

// ---------------------------------------------------------------------------
// Desktop Sidebar — Server Component
// ---------------------------------------------------------------------------
export default function Sidebar() {
  return (
    <aside
      id="desktop-sidebar"
      className="hidden lg:flex lg:flex-col lg:w-60 xl:w-64 lg:shrink-0 lg:border-r lg:border-slate-100 lg:bg-white"
    >
      {/* Logo */}
      <div className="flex h-16 shrink-0 items-center gap-2.5 border-b border-slate-100 px-5">
        <Link href="/" className="flex items-center gap-2 text-primary">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white shadow-sm">
            S
          </span>
          <span className="text-xl font-extrabold tracking-tight">Shippy</span>
        </Link>
      </div>

      {/* Nav */}
      <div className="flex flex-1 flex-col overflow-y-auto py-3">
        <SidebarNav />
      </div>

      {/* Bottom profile teaser */}
      <div className="shrink-0 border-t border-slate-100 p-4">
        <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white ring-2 ring-primary/20">
            U
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-slate-700">User Name</p>
            <p className="truncate text-xs text-slate-400">user@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
