import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col bg-[#f5f5f5]">
      {/* Top header bar */}
      <header className="bg-white border-b border-zinc-200">
        <div className="mx-auto flex h-21 max-w-300 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white text-lg font-bold">
                M
              </div>
              <span className="text-xl font-bold text-primary">Shippy</span>
            </Link>
            <span className="text-xl text-zinc-800">ลูกค้า</span>
          </div>
          <Link
            href="#"
            className="text-sm text-primary hover:text-primary-dark"
          >
            ต้องการความช่วยเหลือ?
          </Link>
        </div>
      </header>

      {/* Main content area with orange background */}
      <main className="flex flex-1 items-center justify-center bg-primary px-4 py-10">
        <div className="mx-auto flex w-full max-w-260 items-center gap-0 rounded-sm">
          {/* Left branding panel */}
          <div className="hidden flex-1 flex-col items-center justify-center py-16 lg:flex">
            <div className="flex flex-col items-center text-white">
              <div className="mb-6 flex h-45 w-45 items-center justify-center rounded-full bg-white/15">
                <svg
                  className="h-24 w-24 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold tracking-tight">Shippy</h1>
              <p className="mt-4 max-w-xs text-center text-lg leading-7 text-white/90">
                แหล่งช้อปปิ้งออนไลน์
                <br />
                สำหรับนักศึกษาและบุคลากร
              </p>
            </div>
          </div>

          {/* Right login card */}
          <div className="w-full max-w-125 shrink-0 rounded bg-white shadow-md lg:ml-auto">
            {children}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white px-6 py-8 text-center text-xs text-zinc-500">
        <div className="mx-auto max-w-300">
          <p>© {new Date().getFullYear()} Shippy. สงวนลิขสิทธิ์ทั้งหมด.</p>
        </div>
      </footer>
    </div>
  );
}
