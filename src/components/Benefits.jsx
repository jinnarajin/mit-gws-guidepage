const items = [
  { icon: '🌍', title: '글로벌 멘토 피드백', desc: 'MIT 출신 멘토 및 글로벌 스타트업 전문가로부터 직접 피드백을 받을 수 있습니다.' },
  { icon: '🎤', title: '현장 피칭 기회', desc: '실제 투자자와 심사위원 앞에서 본인의 아이디어를 피칭할 수 있는 실전 무대가 주어집니다.' },
  { icon: '🏆', title: '공식 시상 및 상금', desc: '최대 ₩3,000,000의 상금과 함께 공식 수상 경력을 쌓을 수 있습니다.' },
    { icon: '✈️', title: 'MIT Bootcamp 초청', desc: '우수 팀에게는 Cambridge에서 열리는 MIT Startup Bootcamp 참가 기회가 주어집니다.' },
  { icon: '📜', title: 'MIT × 경북대 인증서', desc: 'MIT Sloan 학장과 경북대 총장이 공동 서명한 공식 Finalist 인증서가 수여됩니다.' },
  { icon: '🤝', title: 'MIT 네트워크 연결', desc: 'MIT 글로벌 창업 생태계와 직접 연결되어 세계 무대로 나아갈 기회를 잡으세요.' },

]

export default function Benefits() {
  return (
    <section className="relative py-24 px-6">
      {/* subtle top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px
                      bg-gradient-to-r from-transparent via-blue-700/30 to-transparent" />

      <div className="max-w-4xl mx-auto">
        <p className="text-center text-xs font-bold tracking-[3px] uppercase text-[#63BAE4] mb-3">Benefits</p>
        <h2 className="text-center text-3xl md:text-5xl font-black text-white mb-4">
          참가하면 얻는 것들
        </h2>
        <p className="text-center text-slate-400 mb-14">
          스타트업 여정을 글로벌 수준으로 끌어올릴 기회를 한 번에.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <div key={item.title}
              className="glass glass-hover rounded-2xl p-7 flex flex-col gap-4">
              <span className="text-4xl">{item.icon}</span>
              <div>
                <h4 className="font-bold text-white text-base mb-2">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
