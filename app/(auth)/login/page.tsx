"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
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
      const res = await fetch("/api/auth/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "เข้าสู่ระบบไม่สำเร็จ");
        return;
      }

      router.push("/");
    } catch {
      setError("ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="px-[30px] py-[22px]">
      {/* Card header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl text-[#222]">เข้าสู่ระบบ</h2>
      </div>

      {/* Error message */}
      {error && (
        <div className="mb-4 rounded-sm bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* Login form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="อีเมล"
            autoComplete="email"
            required
            className="h-10 w-full rounded-sm border border-zinc-300 px-3 text-sm outline-none transition-colors focus:border-zinc-500 focus:shadow-[0_0_0_1px_rgba(0,0,0,0.09)]"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          />
        </div>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="รหัสผ่าน"
            autoComplete="current-password"
            required
            minLength={8}
            className="h-10 w-full rounded-sm border border-zinc-300 px-3 pr-10 text-sm outline-none transition-colors focus:border-zinc-500 focus:shadow-[0_0_0_1px_rgba(0,0,0,0.09)]"
            value={form.password}
            onChange={(e) =>
              setForm((f) => ({ ...f, password: e.target.value }))
            }
          />
          <button
            type="button"
            tabIndex={-1}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
            onClick={() => setShowPassword((v) => !v)}
          >
            {showPassword ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            )}
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="h-10 w-full rounded-sm bg-primary text-sm font-medium uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-primary-dark disabled:opacity-60"
        >
          {loading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
        </button>
      </form>

      {/* Forgot password */}
      <div className="mt-3 text-right">
        <Link
          href="#"
          className="text-xs text-primary hover:text-primary-dark"
        >
          ลืมรหัสผ่าน
        </Link>
      </div>

      {/* Divider */}
      <div className="my-5 flex items-center gap-4">
        <div className="h-px flex-1 bg-zinc-200" />
        <span className="text-xs uppercase text-zinc-400">หรือ</span>
        <div className="h-px flex-1 bg-zinc-200" />
      </div>

      {/* Social login placeholder buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          className="flex h-[40px] items-center justify-center gap-2 rounded-sm border border-zinc-300 bg-white text-sm text-zinc-700 transition-colors hover:bg-zinc-50"
        >
          <svg className="h-5 w-5 text-[#1877f2]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
          </svg>
          Facebook
        </button>
        <button
          type="button"
          className="flex h-[40px] items-center justify-center gap-2 rounded-sm border border-zinc-300 bg-white text-sm text-zinc-700 transition-colors hover:bg-zinc-50"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          Google
        </button>
      </div>

      {/* Terms */}
      <p className="mt-5 text-center text-xs leading-5 text-zinc-500">
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

      {/* Register link */}
      <div className="mt-6 border-t border-zinc-100 pt-5 text-center text-sm text-zinc-500">
        ยังไม่มีบัญชี Shippy?{" "}
        <Link href="/register" className="font-medium text-primary hover:text-primary-dark">
          สมัครใหม่
        </Link>
      </div>
    </div>
  );
}
