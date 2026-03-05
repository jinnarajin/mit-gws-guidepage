const steps = [
  {
    date: '~ 03.10',
    phase: '신청 접수',
    items: ['신청서 접수', '1분 엘리베이터 스피치 영상 제출'],
    active: true,
  },
  {
    date: '03.10 ~ 03월 중',
    phase: '1차 심사',
    items: ['서류 평가 및 영상 평가', '합격자 발표'],
    active: false,
  },
  {
    date: '03.26',
    phase: '현장 발표',
    items: ['현장 엘리베이터 스피치 발표'],
    active: false,
  },
  {
    date: '03.27',
    phase: '시상식',
    items: ['현장 시상식 진행'],
    active: false,
  },
]

export default function Timeline() {
  return (
    <section className="relative py-20 px-6 bg-[#081032]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px
                      bg-gradient-to-r from-transparent via-[#63BAE4]/30 to-transparent" />

      <div className="max-w-3xl mx-auto">
        <p className="text-center text-xs font-bold tracking-[3px] uppercase text-[#63BAE4] mb-3">
          Schedule
        </p>
        <h2 className="text-center text-3xl md:text-5xl font-black text-white mb-4">
          진행 절차
        </h2>
        <p className="text-center text-slate-400 mb-14">
          신청부터 시상까지 한눈에 확인하세요.
        </p>

        {/* Vertical timeline — all screen sizes */}
        <div className="flex flex-col gap-0 max-w-lg mx-auto">
          {steps.map((s, i) => (
            <div key={s.phase} className="flex gap-4">
              {/* left: dot + line */}
              <div className="flex flex-col items-center">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center
                                 font-black text-sm shrink-0
                                 ${s.active
                                   ? 'bg-[#63BAE4] text-[#081032] shadow-[0_0_16px_rgba(99,186,228,0.5)]'
                                   : 'bg-white/10 text-white border border-white/20'}`}>
                  {i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-white/10 my-1" />
                )}
              </div>

              {/* right: content */}
              <div className={`glass rounded-xl p-4 mb-3 flex-1 ${s.active ? 'border-[#63BAE4]/40' : ''}`}>
                <p className={`text-xs font-bold mb-1 ${s.active ? 'text-[#63BAE4]' : 'text-slate-500'}`}>
                  {s.date}
                </p>
                <p className="text-white font-black text-sm mb-2">{s.phase}</p>
                <ul className="space-y-1">
                  {s.items.map((item) => (
                    <li key={item} className="text-slate-400 text-xs leading-relaxed">
                      → {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
