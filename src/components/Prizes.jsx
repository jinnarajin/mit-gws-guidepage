const prizes = [
  {
    rank: '대상',
    en: 'Grand Prize',
    emoji: '🥇',
    amount: '₩3,000,000',
    teams: '1팀 선발',
    bonus: 'MIT Startup Bootcamp 공식 초청',
    isTop: true,
  },
  {
    rank: '우수상',
    en: 'Excellence Award',
    emoji: '🥈',
    amount: '₩1,500,000',
    teams: '2팀 선발 · 각 팀',
    bonus: 'MIT Startup Bootcamp 공식 초청',
    isTop: false,
  },
  {
    rank: '혁신상',
    en: 'Innovation Award',
    emoji: '🥉',
    amount: '₩800,000',
    teams: '3팀 선발 · 각 팀',
    bonus: 'MIT Startup Bootcamp 우선 고려',
    isTop: false,
  },
  {
    rank: '라이징 창업가상',
    en: 'Rising Entrepreneur',
    emoji: '🌱',
    amount: '₩400,000',
    teams: '4팀 선발 · 각 팀',
    bonus: 'MIT Startup Bootcamp 공식 추천',
    isTop: false,
  },
]

export default function Prizes() {
  return (
    <section className="relative py-24 px-6 bg-[#081032]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px
                      bg-gradient-to-r from-transparent via-[#DA6A75]/30 to-transparent" />

      <div className="max-w-4xl mx-auto">
        <p className="text-center text-xs font-bold tracking-[3px] uppercase text-[#63BAE4] mb-3">Prize Money</p>
        <h2 className="text-center text-3xl md:text-5xl font-black text-white mb-4">🏆 시상 안내</h2>
        <p className="text-center text-slate-400 mb-14">
          총 10팀 선발 · 상위 입상 팀에게는 MIT Bootcamp 초청 혜택 제공
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {prizes.map((p) => (
            <div key={p.rank}
              className={`relative rounded-2xl p-7 flex flex-col items-center text-center gap-2
                          ${p.isTop
                            ? 'gold-glass gold-glass-hover border-[#DA6A75]/40'
                            : 'glass glass-hover'}`}>

              {/* 1위 badge */}
              {p.isTop && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2
                                 bg-[#DA6A75] text-white text-[11px] font-black
                                 px-3 py-0.5 rounded-full whitespace-nowrap">
                  🏆 1위
                </span>
              )}

              <span className="text-4xl mt-1">{p.emoji}</span>
              <p className={`text-lg font-black ${p.isTop ? 'text-[#DA6A75]' : 'text-white'}`}>{p.rank}</p>
              <p className="text-xs text-slate-500 italic">{p.en}</p>
              <p className={`text-3xl font-black ${p.isTop ? 'text-[#DA6A75]' : 'text-[#63BAE4]'}`}>
                {p.amount}
              </p>
              <p className="text-xs text-slate-400">{p.teams}</p>
              <div className={`mt-2 text-[11px] font-semibold px-3 py-1.5 rounded-lg
                              ${p.isTop
                                ? 'bg-[#DA6A75]/20 text-[#DA6A75]'
                                : 'bg-[#63BAE4]/15 text-[#63BAE4]'}`}>
                {p.bonus}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
