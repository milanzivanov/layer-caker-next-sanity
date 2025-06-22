import Link from "next/link";

export function Header() {
  return (
    <div className="relative z-50 p-6">
      <header className="bg-white/80 shadow-md flex items-center justify-between p-6 rounded-lg container mx-auto">
        <Link
          className="text-pink-700 md:text-xl font-bold tracking-tight"
          href="/"
        >
          Sanity Caker Maker
        </Link>
        <ul className="flex items-center gap-4 font-semibold text-slate-700">
          <li>
            <Link
              className="hover:text-pink-500 transition-colors"
              href="/posts"
            >
              Posts
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-pink-500 transition-colors"
              href="/studio"
            >
              Sanity Studio
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
