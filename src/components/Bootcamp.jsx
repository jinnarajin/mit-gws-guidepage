export default function Bootcamp() {
  return (
    <section className="relative py-24 px-6 bg-[#081032]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px
                      bg-gradient-to-r from-transparent via-blue-600/30 to-transparent" />

      <div className="max-w-3xl mx-auto">
        <p className="text-center text-xs font-bold tracking-[3px] uppercase text-[#63BAE4] mb-3">
          Extra Opportunity
        </p>
        <h2 className="text-center text-3xl md:text-5xl font-black text-white mb-4">
          🌎 MIT Startup Bootcamp
        </h2>
        <p className="text-center text-slate-400 mb-12">
          수상 팀에게는 보스턴 캠브리지에서의 특별한 기회가 기다립니다.
        </p>

        <div className="glass glass-hover rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="text-7xl shrink-0">🏛️</div>
          <div className="text-center md:text-left">
            <h3 className="text-white text-xl font-black mb-3">
              MIT Startup Bootcamp — Cambridge, MA
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              우수 팀에게는 MIT 글로벌 창업 네트워크와 직접 연결될 수 있는 MIT Startup Bootcamp
              참가 기회가 주어집니다. 세계 각지의 창업가들과 함께 성장하세요.
            </p>
            <div className="flex flex-wrap gap-2">
              {['📍 Cambridge, MA', '📅 2026년 6월 예정', '🌏 글로벌 네트워크'].map((tag) => (
                <span key={tag}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full
                             bg-blue-900/30 text-blue-300 border border-blue-700/30">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
