import SidebarNav from "./SidebarNav";
import SidebarToggle from "./SidebarToggle";

// ---------------------------------------------------------------------------
// Icons
// ---------------------------------------------------------------------------
function BellIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Top Header — Server Component
// ---------------------------------------------------------------------------
export default function TopHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-4 border-b border-slate-100 bg-white/90 px-5 shadow-sm backdrop-blur-md">
      {/* Mobile hamburger (Client Component) */}
      <SidebarToggle sidebarContent={<SidebarNav />} />

      {/* Page title / breadcrumb area */}
      <div className="flex flex-1 items-center gap-3">
        {/* Search bar */}
        <label
          htmlFor="header-search"
          className="relative hidden items-center sm:flex"
        >
          <span className="absolute left-3 text-slate-400">
            <SearchIcon />
          </span>
          <input
            id="header-search"
            type="search"
            placeholder="Search…"
            className="h-9 w-48 rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-4 text-sm text-slate-700 placeholder-slate-400 outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 md:w-64"
          />
        </label>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-2">
        {/* Notification bell */}
        <button
          id="header-notifications-btn"
          aria-label="Notifications"
          className="relative flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
        >
          <BellIcon />
          {/* Unread dot */}
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary ring-2 ring-white" />
        </button>

        {/* Profile avatar */}
        <button
          id="header-profile-btn"
          aria-label="User profile"
          className="flex items-center gap-2.5 rounded-xl px-2 py-1.5 transition hover:bg-slate-50"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white ring-2 ring-primary/20">
            U
          </span>
          <div className="hidden flex-col text-left sm:flex">
            <span className="text-sm font-semibold leading-none text-slate-700">User Name</span>
            <span className="mt-0.5 text-xs leading-none text-slate-400">Admin</span>
          </div>
          {/* Chevron */}
          <svg className="hidden h-4 w-4 text-slate-400 sm:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
    </header>
  );
}
