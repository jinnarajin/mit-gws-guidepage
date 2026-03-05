import { Link, useLocation } from 'react-router-dom'

export default function Navbar({ registerUrl }) {
  const { pathname } = useLocation()
  const isGsw = pathname === '/gsw'

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4
                    border-b border-white/[0.07] glass">
      <div className="text-sm font-black tracking-widest uppercase text-white">
        MIT <span className="text-[#63BAE4]">GSW</span> 2026
      </div>
      <div className="flex items-center gap-4">
        <Link
          to={isGsw ? '/' : '/gsw'}
          className="text-xs text-slate-400 hover:text-[#63BAE4] transition-colors"
        >
          {isGsw ? '해커톤 안내 →' : 'GSW 안내 →'}
        </Link>
        <a
          href={registerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow text-white text-xs md:text-sm font-bold px-4 md:px-5 py-2 rounded-full"
        >
          참가 신청하기 →
        </a>
      </div>
    </nav>
  )
}
