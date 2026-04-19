"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { loginWithPassword } from "@/app/core/services/auth-session";

export default function BuyerLoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const result = await loginWithPassword(form.email.trim(), form.password);
      if (!result.success) {
        setError(result.message || "เข้าสู่ระบบไม่สำเร็จ");
        return;
      }
      router.push("/");
    } catch (err) {
      if (err instanceof Error && err.message) {
        setError(err.message);
      } else {
        setError("ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="px-7.5 py-5.5">
      {/* Card header */}
      <div className="mb-6">
        <h2 className="text-xl text-[#222]">เข้าสู่ระบบ</h2>
        <p className="mt-1 text-xs text-zinc-400">สำหรับลูกค้าทั่วไป</p>
      </div>

      {/* Error */}
      {error && (
        <div className="mb-4 rounded-sm bg-red-50 px-4 py-3 text-sm text-red-600">{error}</div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="อีเมล"
          autoComplete="email"
          required
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          className="h-10 w-full rounded-sm border border-zinc-300 px-3 text-sm outline-none transition-colors focus:border-zinc-500 focus:shadow-[0_0_0_1px_rgba(0,0,0,0.09)]"
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="รหัสผ่าน"
            autoComplete="current-password"
            required
            minLength={8}
            value={form.password}
            onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
            className="h-10 w-full rounded-sm border border-zinc-300 px-3 pr-10 text-sm outline-none transition-colors focus:border-zinc-500 focus:shadow-[0_0_0_1px_rgba(0,0,0,0.09)]"
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
          >
            {showPassword ? (
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="h-10 w-full rounded-sm bg-primary text-sm font-medium text-white transition hover:bg-primary-dark disabled:opacity-70"
        >
          {loading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
        </button>
      </form>

      {/* Forgot password */}
      <div className="mt-3">
        <Link href="#" className="text-sm text-primary hover:underline">
          ลืมรหัสผ่าน
        </Link>
      </div>

      {/* Divider */}
      <div className="my-5 flex items-center gap-3">
        <div className="flex-1 border-t border-zinc-200" />
        <span className="text-xs text-zinc-400">หรือ</span>
        <div className="flex-1 border-t border-zinc-200" />
      </div>

      {/* Social buttons */}
      <div className="flex gap-3">
        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-2 rounded-sm border border-zinc-300 py-2 text-sm text-zinc-600 transition hover:bg-zinc-50"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="#1877F2">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          Facebook
        </button>
        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-2 rounded-sm border border-zinc-300 py-2 text-sm text-zinc-600 transition hover:bg-zinc-50"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          Google
        </button>
      </div>

      {/* Terms */}
      <p className="mt-5 text-center text-xs text-zinc-400">
        โดยการเข้าสู่ระบบ คุณได้อ่านและยอมรับ{" "}
        <Link href="#" className="text-primary hover:underline">
          เงื่อนไขการให้บริการ
        </Link>{" "}
        และ{" "}
        <Link href="#" className="text-primary hover:underline">
          นโยบายความเป็นส่วนตัว
        </Link>{" "}
        ของ Shippy
      </p>

      {/* Register + Seller links */}
      <div className="mt-5 space-y-2 text-center">
        <p className="text-sm text-zinc-500">
          ยังไม่มีบัญชี?{" "}
          <Link href="/register" className="font-medium text-primary hover:underline">
            สมัครสมาชิก
          </Link>
        </p>
        <p className="text-xs text-zinc-400">
          คุณเป็นร้านค้า?{" "}
          <Link href="/seller" className="text-primary hover:underline">
            เข้าสู่ระบบ Seller Centre
          </Link>
        </p>
      </div>
    </div>
  );
}
