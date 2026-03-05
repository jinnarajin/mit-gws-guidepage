import { FORM_URL } from '../../App'

export default function Navbar() {
  return (
    <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 items-center justify-between px-4 md:px-10 py-3 md:py-4
                    border-b border-white/[0.07] glass">
      <div className="text-xs md:text-sm font-black tracking-widest uppercase text-white">
        MIT <span className="text-[#63BAE4]">GSW</span> 2026
      </div>
      <a
        href={FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-glow text-white text-xs md:text-sm font-bold px-4 md:px-5 py-2 rounded-full whitespace-nowrap"
      >
        지금 신청하기 →
      </a>
    </nav>
  )
}
