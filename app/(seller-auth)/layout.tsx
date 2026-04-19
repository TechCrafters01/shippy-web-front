import Link from "next/link";

function ShopIllustration() {
  return (
    <svg
      viewBox="0 0 480 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-md"
    >
      {/* Sky */}
      <rect width="480" height="300" fill="#f0f6ff" />
      {/* Clouds */}
      <ellipse cx="90" cy="55" rx="55" ry="28" fill="white" />
      <ellipse cx="118" cy="42" rx="40" ry="23" fill="white" />
      <ellipse cx="62" cy="50" rx="36" ry="20" fill="white" />
      <ellipse cx="360" cy="65" rx="45" ry="22" fill="white" />
      <ellipse cx="388" cy="54" rx="35" ry="20" fill="white" />
      {/* Ground */}
      <rect x="0" y="252" width="480" height="48" fill="#d4edbc" />
      <rect x="0" y="252" width="480" height="6" fill="#b8d89e" />
      {/* Store building */}
      <rect x="55" y="98" width="238" height="158" fill="white" stroke="#e8e8e8" />
      {/* Awning */}
      <rect x="48" y="90" width="252" height="40" fill="#ee4d2d" rx="2" />
      {/* Stripes */}
      <rect x="68" y="90" width="18" height="40" fill="white" opacity="0.3" />
      <rect x="104" y="90" width="18" height="40" fill="white" opacity="0.3" />
      <rect x="140" y="90" width="18" height="40" fill="white" opacity="0.3" />
      <rect x="176" y="90" width="18" height="40" fill="white" opacity="0.3" />
      <rect x="212" y="90" width="18" height="40" fill="white" opacity="0.3" />
      <rect x="248" y="90" width="18" height="40" fill="white" opacity="0.3" />
      {/* Scallop */}
      <polygon points="48,130 62,143 76,130" fill="#cc3311" />
      <polygon points="76,130 90,143 104,130" fill="#cc3311" />
      <polygon points="104,130 118,143 132,130" fill="#cc3311" />
      <polygon points="132,130 146,143 160,130" fill="#cc3311" />
      <polygon points="160,130 174,143 188,130" fill="#cc3311" />
      <polygon points="188,130 202,143 216,130" fill="#cc3311" />
      <polygon points="216,130 230,143 244,130" fill="#cc3311" />
      <polygon points="244,130 258,143 272,130" fill="#cc3311" />
      <polygon points="272,130 286,143 300,130" fill="#cc3311" />
      {/* Left window */}
      <rect x="70" y="148" width="88" height="82" fill="#dbeeff" stroke="#c0d8f0" />
      <line x1="114" y1="148" x2="114" y2="230" stroke="#c0d8f0" strokeWidth="1" />
      <line x1="70" y1="189" x2="158" y2="189" stroke="#c0d8f0" strokeWidth="1" />
      {/* Mannequin left */}
      <ellipse cx="92" cy="163" rx="9" ry="9" fill="#ffc5a0" />
      <rect x="84" y="172" width="16" height="20" rx="2" fill="#ee4d2d" />
      <rect x="81" y="192" width="9" height="18" rx="2" fill="#555" />
      <rect x="94" y="192" width="9" height="18" rx="2" fill="#555" />
      {/* Clothes hanger */}
      <rect x="120" y="158" width="2" height="12" fill="#999" />
      <line x1="113" y1="170" x2="129" y2="170" stroke="#999" strokeWidth="1.5" />
      <rect x="110" y="170" width="22" height="28" rx="2" fill="#5588ee" />
      {/* Right window */}
      <rect x="182" y="148" width="88" height="82" fill="#dbeeff" stroke="#c0d8f0" />
      <line x1="226" y1="148" x2="226" y2="230" stroke="#c0d8f0" strokeWidth="1" />
      <line x1="182" y1="189" x2="270" y2="189" stroke="#c0d8f0" strokeWidth="1" />
      {/* Mannequin right */}
      <ellipse cx="204" cy="163" rx="9" ry="9" fill="#ffc5a0" />
      <rect x="196" y="172" width="16" height="20" rx="2" fill="#ffcc00" />
      <rect x="193" y="192" width="9" height="18" rx="2" fill="#333" />
      <rect x="206" y="192" width="9" height="18" rx="2" fill="#333" />
      {/* Bag */}
      <rect x="234" y="160" width="22" height="24" rx="3" fill="#ee4d2d" />
      <path d="M237 160 Q245 152 253 160" stroke="#cc3311" strokeWidth="2" fill="none" />
      {/* OPEN sign */}
      <rect x="148" y="183" width="52" height="20" rx="3" fill="#ee4d2d" />
      <text
        x="174"
        y="197"
        textAnchor="middle"
        fill="white"
        fontSize="10"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        OPEN
      </text>
      {/* Door */}
      <rect x="150" y="207" width="48" height="49" rx="2" fill="#b8d8f5" stroke="#90b8e0" />
      <circle cx="191" cy="234" r="3" fill="#777" />
      {/* Left tree */}
      <rect x="20" y="208" width="13" height="44" fill="#8B6914" rx="2" />
      <ellipse cx="26" cy="200" rx="32" ry="38" fill="#5a9e3a" />
      <ellipse cx="16" cy="213" rx="22" ry="26" fill="#4a8e2a" />
      {/* Right tree */}
      <rect x="318" y="216" width="11" height="36" fill="#8B6914" rx="2" />
      <ellipse cx="323" cy="210" rx="26" ry="30" fill="#5a9e3a" />
      {/* Truck body */}
      <rect x="296" y="198" width="162" height="60" rx="4" fill="#4db8b8" />
      {/* Truck cab */}
      <rect x="392" y="182" width="66" height="76" rx="4" fill="#3aa3a3" />
      {/* Cab window */}
      <rect x="399" y="190" width="52" height="30" rx="2" fill="#b8e8ff" />
      {/* Cargo line */}
      <line x1="297" y1="226" x2="391" y2="226" stroke="#3aa0a0" strokeWidth="2" />
      {/* Wheels */}
      <circle cx="328" cy="262" r="16" fill="#333" />
      <circle cx="328" cy="262" r="8" fill="#888" />
      <circle cx="328" cy="262" r="3" fill="#aaa" />
      <circle cx="424" cy="262" r="16" fill="#333" />
      <circle cx="424" cy="262" r="8" fill="#888" />
      <circle cx="424" cy="262" r="3" fill="#aaa" />
      {/* Logo on truck */}
      <rect x="308" y="208" width="72" height="34" rx="2" fill="rgba(255,255,255,0.2)" />
      <text
        x="344"
        y="221"
        textAnchor="middle"
        fill="white"
        fontSize="11"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        MUT
      </text>
      <text
        x="344"
        y="235"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontFamily="Arial, sans-serif"
      >
        SHOP
      </text>
    </svg>
  );
}

export default function SellerAuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col bg-[#f5f5f5]">
      {/* Header */}
      <header className="border-b border-zinc-200 bg-white shadow-sm">
        <div className="mx-auto flex h-15 max-w-300 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-sm font-bold text-white">
                M
              </div>
              <span className="text-[15px] font-bold text-primary">Shippy</span>
            </Link>
            <div className="h-5 w-px bg-zinc-300" />
            <span className="text-[15px] font-medium text-zinc-700">Seller Centre</span>
          </div>
          <Link href="#" className="text-sm text-primary hover:underline">
            ต้องการความช่วยเหลือ?
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="flex flex-1 items-center px-4 py-12">
        <div className="mx-auto flex w-full max-w-240 items-center gap-16">
          {/* Left branding + illustration */}
          <div className="hidden flex-1 lg:block">
            <h1 className="mb-2 text-3xl font-bold text-primary">Seller Centre</h1>
            <p className="mb-8 text-sm text-zinc-500">
              เครื่องมือจัดการร้านค้าอย่างมีประสิทธิภาพ
            </p>
            <ShopIllustration />
          </div>

          {/* Right card */}
          <div className="w-full shrink-0 overflow-hidden rounded bg-white shadow-md lg:w-100">
            {children}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-xs text-zinc-400">
        © {new Date().getFullYear()} Shippy. All Rights Reserved
      </footer>
    </div>
  );
}
