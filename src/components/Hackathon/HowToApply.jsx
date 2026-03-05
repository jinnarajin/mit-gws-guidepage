import { FORM_URL } from '../../App'

const steps = [
  {
    n: '1',
    title: '신청 링크 접속',
    desc: '아래 구글 폼 링크를 클릭해 신청 페이지로 이동합니다.',
  },
  {
    n: '2',
    title: '이름란 입력',
    desc: (
      <>
        이름란에 <strong className="text-[#DA6A75]">팀 코드 (C)</strong>를 뒤에 기입합니다.
        <br />예) <strong className="text-white">홍길동 (C)</strong>
      </>
    ),
  },
  {
    n: '3',
    title: '나머지 항목 작성',
    desc: '팀 정보, 아이디어 등 나머지 항목을 성실하게 작성합니다.',
  },
  {
    n: '4',
    title: '제출 완료',
    desc: '내용을 확인한 후 제출 버튼을 눌러 신청을 완료합니다.',
  },
]

export default function HowToApply() {
  return (
    <section className="relative py-24 px-6 bg-[#081032]">
      {/* faint separator glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px
                      bg-gradient-to-r from-transparent via-[#63BAE4]/30 to-transparent" />

      <div className="max-w-3xl mx-auto">
        <p className="text-center text-xs font-bold tracking-[3px] uppercase text-[#63BAE4] mb-3">
          How to Apply
        </p>
        <h2 className="text-center text-3xl md:text-5xl font-black text-white mb-4">
          신청 방법 — 꼭 읽어주세요
        </h2>
        <p className="text-center text-slate-400 mb-12">신청서 작성 시 반드시 아래 형식을 지켜주세요.</p>

        {/* 10C Code Card */}
        <div className="relative rounded-2xl overflow-hidden p-6 md:p-10 text-center mb-10
                        border border-[#DA6A75]/30 bg-gradient-to-br from-[#051028] to-[#0a1535]">
          {/* glow blob inside card */}
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full
                          bg-[#63BAE4]/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full
                          bg-[#DA6A75]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <p className="text-4xl mb-4">🎯</p>
            <h3 className="text-[#DA6A75] text-xl font-extrabold mb-3">
              이름란에 추천 코드를 기재해주세요
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-2">
              <span className="font-mono font-bold text-[#DA6A75]">(C)</span>는 추천 코드로,
              신청자에게는 <span className="text-white font-semibold">아무런 영향이 없습니다.</span>
            </p>
            <p className="text-slate-300 text-sm leading-relaxed mb-7">
              하지만 이 코드가 입력될수록 공식 서포터즈의 <span className="text-white font-semibold">성과로 집계</span>되어
              활동에 큰 힘이 됩니다! 🙏
            </p>

            {/* Format box */}
            <div className="inline-block border-2 border-[#DA6A75]/60 rounded-xl px-6 py-4 md:px-10 md:py-5 mb-5
                            bg-white/[0.03] backdrop-blur-sm">
              <p className="text-xs text-slate-400 mb-2 tracking-widest uppercase">이름 입력 형식</p>
              <p className="text-3xl md:text-4xl font-black tracking-wider text-white">
                <span className="text-[#DA6A75] whitespace-nowrap">홍길동 (C)</span>
              </p>
            </div>

            <p className="text-slate-400 text-sm">
              ※ 예시:&ensp;
              <strong className="text-white">박지훈 (C)</strong>
              &ensp;/&ensp;
              <strong className="text-white">이서연 (C)</strong>
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map((s) => (
            <div key={s.n}
              className="glass glass-hover rounded-2xl p-6 flex flex-col gap-3">
              <div className="w-9 h-9 rounded-full bg-[#63BAE4] flex items-center justify-center
                              text-[#081032] font-black text-sm shrink-0">
                {s.n}
              </div>
              <p className="font-bold text-white text-sm">{s.title}</p>
              <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Link */}
        <div className="mt-10 text-center">
          <a href={FORM_URL} target="_blank" rel="noopener noreferrer"
            className="btn-glow inline-block text-white font-bold px-10 py-4 rounded-full text-base whitespace-nowrap">
            지금 참가 신청하기
          </a>
        </div>
      </div>
    </section>
  )
}
