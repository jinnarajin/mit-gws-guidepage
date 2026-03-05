import { FORM_URL } from '../../App'

const perks = [
  { icon: '🌍', text: '글로벌 멘토 피드백' },
  { icon: '🎤', text: '현장 피칭 기회' },
  { icon: '🏅', text: '공식 시상 및 상금' },
  { icon: '📜', text: 'MIT × 경북대 공동 인증서' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center
                        px-4 md:px-6 pt-10 md:pt-24 pb-16 overflow-hidden">
      {/* Aurora blobs */}
      <div className="aurora aurora-red" />
      <div className="aurora aurora-blue" />
      <div className="aurora aurora-violet" />

      {/* Grid */}
      <div className="grid-overlay absolute inset-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">

        {/* Live badge */}
        <div className="fade-up inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full text-xs font-bold
                        tracking-widest uppercase text-[#63BAE4]
                        border border-[#63BAE4]/40 bg-[#63BAE4]/10 backdrop-blur-sm">
          2026 Startup Competition Open
        </div>

        <h1 className="fade-up delay-1 text-4xl sm:text-5xl md:text-7xl font-black leading-[1.08] tracking-tight text-white mb-4">
          <span className="text-[#63BAE4]">MIT</span> Global<br />
          Startup Hackathon
        </h1>
        <p className="fade-up delay-2 text-lg sm:text-xl md:text-2xl text-slate-400 font-light mb-10">
          Startup Competition 참가 모집
        </p>

        {/* Perks */}
        <div className="fade-up delay-3 flex flex-wrap gap-3 justify-center mb-12">
          {perks.map((p) => (
            <span key={p.text}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-slate-300
                         border border-white/10 bg-white/[0.05] backdrop-blur-sm">
              <span>{p.icon}</span>{p.text}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <div className="fade-up delay-3">
          <a href={FORM_URL} target="_blank" rel="noopener noreferrer"
            className="btn-glow inline-block text-white font-black text-base md:text-lg px-8 md:px-12 py-4 md:py-5 rounded-full shadow-2xl whitespace-nowrap">
            지금 참가 신청하기
          </a>
        </div>

        <p className="fade-up mt-5 text-sm text-slate-500">
          MIT 글로벌 창업 네트워크와 연결될 수 있는 기회
        </p>
      </div>

      {/* Scroll arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bounce-y text-slate-600 text-xs
                      flex flex-col items-center gap-1">
        <span>▼</span>
        <span>자세히 보기</span>
      </div>
    </section>
  )
}
