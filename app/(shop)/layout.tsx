"use client";

import Link from "next/link";
import { useState } from "react";

import { clearAuthSession, getStoredUser } from "@/app/core/services/auth-session";

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [userName, setUserName] = useState<string | null>(() => getStoredUser()?.name ?? null);

  function handleLogout() {
    clearAuthSession();
    setUserName(null);
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f5f5]">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-primary shadow-sm">
        {/* Top bar */}
        <div className="border-b border-white/10">
          <div className="mx-auto flex h-8.5 max-w-300 items-center justify-between px-6 text-xs text-white/80">
            {/* Left: links */}
            <div className="flex items-center divide-x divide-white/20">
              <Link href="/seller" className="pr-3 hover:text-white">Seller Centre</Link>
              <Link href="/seller" className="px-3 hover:text-white">เปิดร้านค้า</Link>
              <span className="px-3">ดาวน์โหลด</span>
              <div className="flex items-center gap-2 pl-3">
                <span>ติดตามเราบน</span>
                {/* Facebook */}
                <svg className="h-3.5 w-3.5 cursor-pointer hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                {/* Instagram */}
                <svg className="h-3.5 w-3.5 cursor-pointer hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </div>
            </div>
            {/* Right: auth */}
            <div className="flex items-center divide-x divide-white/20">
              <div className="flex items-center gap-1 pr-3">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
                <span>การแจ้งเตือน</span>
              </div>
              <div className="flex items-center gap-1 px-3">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
                <span>ช่วยเหลือ</span>
              </div>
              <span className="px-3">🇹🇭 ไทย</span>
              {userName ? (
                <>
                  <span className="px-3 text-white">{userName}</span>
                  <button type="button" onClick={handleLogout} className="pl-3 hover:text-white">
                    ออกจากระบบ
                  </button>
                </>
              ) : (
                <>
                  <Link href="/register" className="px-3 hover:text-white">สมัครใหม่</Link>
                  <Link href="/buyer" className="pl-3 hover:text-white">เข้าสู่ระบบ</Link>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="mx-auto flex h-17.5 max-w-300 items-center gap-6 px-6">
          <Link href="/" className="flex shrink-0 items-center gap-2 text-white">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-primary text-base font-bold">
              S
            </div>
            <span className="text-2xl font-bold tracking-tight">Shippy</span>
          </Link>
          <div className="flex flex-1">
            <input
              type="text"
              placeholder="ลูกค้าใหม่ รับเลย โค้ดส่วนลด หรือโค้ดส่งฟรี*"
              className="h-10 flex-1 rounded-l-sm border-0 px-4 text-sm text-zinc-800 outline-none placeholder:text-zinc-400"
            />
            <button className="flex h-10 w-13 items-center justify-center rounded-r-sm bg-primary-dark text-white hover:bg-[#c0290e]">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
          </div>
          {/* Cart */}
          <Link href="#" className="relative shrink-0 text-white">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[10px] font-bold text-primary">
              0
            </span>
          </Link>
        </div>
      </header>

      {/* Page content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-300 px-6 py-10">
          <div className="grid grid-cols-1 gap-8 text-sm sm:grid-cols-3">
            <div>
              <h4 className="mb-3 font-semibold text-zinc-800">
                ศูนย์ช่วยเหลือ
              </h4>
              <ul className="space-y-2 text-zinc-500">
                <li>วิธีการสั่งซื้อ</li>
                <li>การคืนเงิน</li>
                <li>ติดต่อเรา</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-semibold text-zinc-800">
                เกี่ยวกับ Shippy
              </h4>
              <ul className="space-y-2 text-zinc-500">
                <li>เกี่ยวกับเรา</li>
                <li>นโยบายความเป็นส่วนตัว</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-semibold text-zinc-800">ติดตามเรา</h4>
              <ul className="space-y-2 text-zinc-500">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Line</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-zinc-100 pt-6 text-center text-xs text-zinc-400">
            © {new Date().getFullYear()} Shippy. สงวนลิขสิทธิ์ทั้งหมด.
          </div>
        </div>
      </footer>
    </div>
  );
}
