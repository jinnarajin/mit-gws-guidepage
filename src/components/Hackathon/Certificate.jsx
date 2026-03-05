export default function Certificate() {
  return (
    <section className="relative py-24 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px
                      bg-gradient-to-r from-transparent via-violet-600/30 to-transparent" />

      <div className="max-w-3xl mx-auto">
        <p className="text-center text-xs font-bold tracking-[3px] uppercase text-[#63BAE4] mb-3">
          Official Certificate
        </p>
        <h2 className="text-center text-3xl md:text-5xl font-black text-white mb-4">
          🎓 Finalist 공식 인증
        </h2>
        <p className="text-center text-slate-400 mb-12">
          단순 참가를 넘어, 세계가 인정하는 공식 인증서를 받아가세요.
        </p>

        {/* Certificate card */}
        <div className="relative rounded-3xl p-[1px] overflow-hidden">
          {/* gradient border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#DA6A75]/50 via-[#63BAE4]/30 to-[#4a7cc7]/30" />

          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#051028] to-[#081032]
                          p-6 md:p-12 text-center">
            {/* blobs inside */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full
                            bg-[#DA6A75]/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full
                            bg-[#63BAE4]/10 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <p className="text-6xl mb-5">🏅</p>
              <p className="text-[#DA6A75] text-xs font-bold tracking-[3px] uppercase mb-3">
                Official Finalist Distinction Certificate
              </p>
              <h3 className="text-white text-2xl md:text-3xl font-black leading-snug mb-8">
                MIT Sloan School of Management 학장<br />
                &amp;&ensp;경북대학교 총장<br />
                공동 서명
              </h3>

              {/* divider */}
              <div className="w-full h-px bg-white/10 mb-8" />

              <div className="flex justify-center gap-8 md:gap-16 flex-wrap">
                <div className="text-center">
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">
                    MIT Sloan School of Management
                  </p>
                  <p className="text-white font-bold text-sm">Dean's Signature</p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">
                    경북대학교
                  </p>
                  <p className="text-white font-bold text-sm">총장 서명</p>
                </div>
              </div>

              <p className="mt-8 text-slate-500 text-sm">
                Finalist로 선정된 모든 팀에게 수여되는 공동 서명 인증서입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
