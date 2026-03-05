import { FORM_URL } from '../App'

export default function CTA() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Aurora blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="aurora aurora-red" style={{ opacity: 0.3 }} />
        <div className="aurora aurora-blue" style={{ opacity: 0.2 }} />
      </div>
      <div className="grid-overlay absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <p className="text-xs font-bold tracking-[3px] uppercase text-slate-500 mb-4">Apply Now</p>
        <h2 className="text-3xl md:text-6xl font-black text-white mb-4 leading-tight">
          지금 바로<br />참가 신청하세요
        </h2>
        <p className="text-slate-400 text-base mb-12">
          MIT 글로벌 창업 생태계로 연결되는 단 하나의 기회를 놓치지 마세요.
        </p>

        <a href={FORM_URL} target="_blank" rel="noopener noreferrer"
          className="btn-glow inline-block text-white font-black text-lg md:text-xl px-10 md:px-16 py-5 md:py-6 rounded-full shadow-2xl mb-8 whitespace-nowrap">
          지금 참가 신청하기 →
        </a>

        {/* Reminder */}
        <div className="mx-auto max-w-sm w-full mt-0 rounded-2xl overflow-hidden
                        border border-[#DA6A75]/30 bg-gradient-to-br from-[#1a0b18] to-[#0e0820]">
          <div className="bg-[#DA6A75]/20 px-4 py-2 flex items-center justify-center gap-2">
            <span className="text-[#DA6A75] text-xs font-black tracking-[2px] uppercase">필수 안내</span>
          </div>
          <div className="px-6 py-5 text-center">
            <p className="text-slate-300 text-sm leading-relaxed">
              신청 시 <span className="text-white font-bold">이름란</span>에 팀 코드를 반드시 기재해주세요
            </p>
            <div className="mt-3 inline-block bg-[#DA6A75]/15 border border-[#DA6A75]/40
                            rounded-lg px-5 py-2">
              <span className="text-[#DA6A75] font-black text-xl tracking-wider">홍길동(C)</span>
            </div>
          </div>
        </div>

        <p className="mt-8 text-slate-500 text-xs">
          본 페이지는 MIT GSW 공식 홍보 서포터즈가 제작했습니다.
          <br />
          <span className="text-slate-400">이름 뒤에 <span className="text-[#DA6A75] font-bold">(C)</span>를 기재해주시면 저희에게 큰 힘이 됩니다</span>
        </p>
      </div>
    </section>
  )
}
