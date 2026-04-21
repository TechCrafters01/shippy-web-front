import type { Metadata } from "next";
import Sidebar from "./_components/Sidebar";
import TopHeader from "./_components/TopHeader";

export const metadata: Metadata = {
  title: {
    template: "%s | Shippy",
    default: "Shippy",
  },
  description: "ระบบจัดการร้านค้าออนไลน์ Shippy",
};

// ---------------------------------------------------------------------------
// Route-group layout — wraps /dashboard and /shop
// Remains a pure Server Component. All interactivity is isolated in
// SidebarToggle ('use client') which is composed inside TopHeader.
// ---------------------------------------------------------------------------
export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /*
     * Full-viewport shell:
     *   [Sidebar | TopHeader + <main>]
     */
    <div className="flex h-screen overflow-hidden bg-slate-50">
      {/* ── Desktop Sidebar ─────────────────────────────────────────────── */}
      <Sidebar />

      {/* ── Right column: header + scrollable content ───────────────────── */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Sticky top header (contains the mobile hamburger toggle) */}
        <TopHeader />

        {/* Scrollable main content area */}
        <main
          id="main-content"
          className="flex-1 overflow-y-auto p-6"
        >
          {children}
        </main>
      </div>
    </div>
  );
}
