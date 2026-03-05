import { Link } from 'react-router-dom'

const REGISTER_URL = 'https://gsw2026.com/'

const steps = [
  {
    field: 'First Name',
    icon: '👤',
    desc: '영문 이름을 입력하세요.',
    example: 'Gildong',
    highlight: false,
  },
  {
    field: 'Last Name',
    icon: '👤',
    desc: '영문 성을 입력하세요.',
    example: 'Hong',
    highlight: false,
  },
  {
    field: 'Select your affiliation category',
    icon: '🏫',
    desc: '소속 유형을 선택하세요.학생의 경우 "Student"를 선택합니다.',
    example: 'Student',
    highlight: false,
  },
  {
    field: 'Payment Method',
    icon: '💳',
    desc: '결제 방법을 선택하세요. 단체 지원의 경우 담당자에게 문의하세요.',
    example: 'Credit Card',
    highlight: false,
  },
  {
    field: 'Affiliation',
    icon: '🏛️',
    desc: '소속명 입니다. 소속된 기관 및 학교 이름을 영문으로 입력한 후, 반드시 "(10C)"를 붙여주세요. (10C)는 추천 코드로, 신청자에게는 아무런 영향이 없지만 공식 서포터즈의 성과로 집계되어 큰 힘이 됩니다!',
    example: 'Kyungpook National University (10C)',
    highlight: true,
  },
  {
    field: 'Title',
    icon: '📋',
    desc: '직함 또는 학년을 입력하세요.',
    example: 'Undergraduate Student',
    highlight: false,
  },
  {
    field: 'Phone number',
    icon: '📱',
    desc: '국가번호를 포함한 전화번호를 입력하세요.',
    example: '+82-10-1234-5678',
    highlight: false,
  },
  {
    field: 'Email',
    icon: '✉️',
    desc: '등록 확인 이메일을 받을 주소를 입력하세요. 정확하게 입력해야 확인 메일이 발송됩니다.',
    example: 'gildong@knu.ac.kr',
    highlight: false,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen w-full text-slate-200 font-sans" style={{ background: '#081032' }}>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4
                      border-b border-white/[0.07] glass">
        <div className="text-sm font-black tracking-widest uppercase text-white">
          MIT <span className="text-[#63BAE4]">GSW</span> 2026
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/hackathon"
            className="text-xs text-slate-400 hover:text-[#63BAE4] transition-colors"
          >
            해커톤 안내 →
          </Link>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow text-white text-xs md:text-sm font-bold px-4 md:px-5 py-2 rounded-full"
          >
            참가 신청하기 →
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center
                          px-4 md:px-6 pt-24 pb-20 overflow-hidden">
        {/* Aurora */}
        <div className="aurora aurora-blue" />
        <div className="aurora aurora-violet" />
        <div className="grid-overlay absolute inset-0 pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs font-bold
                          tracking-widest uppercase text-[#63BAE4]
                          border border-[#63BAE4]/40 bg-[#63BAE4]/10 backdrop-blur-sm">
            Registration Guide 2026
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            MIT GSW 2026<br />
            <span className="text-[#63BAE4]">참가 신청 방법</span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed">
            아래 가이드를 따라 순서대로 신청 폼을 작성하세요.<br />
            특히 <span className="text-white font-semibold">Affiliation</span> 항목에
            <span className="text-[#DA6A75] font-bold"> (10C)</span>를 반드시 기입해야 합니다.
          </p>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-block text-white font-bold px-8 py-3 rounded-full text-sm md:text-base"
          >
            신청 폼 열기 →
          </a>
        </div>
      </section>

      {/* Step-by-step guide */}
      <section className="relative py-20 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
            📝 항목별 작성 방법
          </h2>
          <p className="text-center text-slate-400 mb-12 text-sm">
            신청 폼의 각 항목을 어떻게 작성해야 하는지 안내합니다.
          </p>

          <div className="flex flex-col gap-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`glass rounded-2xl p-5 md:p-6 flex gap-4 items-start
                  ${step.highlight
                    ? 'border border-[#DA6A75]/60 bg-[#DA6A75]/5'
                    : 'glass-hover'
                  }`}
              >
                {/* Number */}
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold
                  ${step.highlight
                    ? 'bg-[#DA6A75]/20 text-[#DA6A75] border border-[#DA6A75]/50'
                    : 'bg-[#63BAE4]/10 text-[#63BAE4] border border-[#63BAE4]/30'
                  }`}>
                  {idx + 1}
                </div>

                <div className="flex-1 min-w-0">
                  {/* Field name */}
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-base">{step.icon}</span>
                    <span className={`font-bold text-sm md:text-base ${step.highlight ? 'text-[#DA6A75]' : 'text-white'}`}>
                      {step.field}
                    </span>
                    {step.highlight && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-[#DA6A75]/20 text-[#DA6A75] border border-[#DA6A75]/40 font-bold">
                        ★ 필수 확인
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm mb-2">{step.desc}</p>

                  {/* Example */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono
                    ${step.highlight
                      ? 'bg-[#DA6A75]/10 border border-[#DA6A75]/30 text-[#DA6A75]'
                      : 'bg-white/5 border border-white/10 text-slate-300'
                    }`}>
                    <span className="text-slate-500">예시:</span>
                    <span className="font-semibold">{step.example}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Callout */}
      <section className="py-16 px-4 md:px-6">
        <div className="max-w-3xl mx-auto rounded-2xl p-8 md:p-10 text-center
                        border border-[#DA6A75]/40 bg-[#DA6A75]/06">
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
            (10C)는 추천 코드입니다
          </h3>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-2">
            <span className="font-mono font-bold text-[#DA6A75]">(10C)</span>는 공식 서포터즈 추천 코드로,
            신청자분께는 <span className="text-white font-semibold">아무런 영향이 없습니다.</span>
          </p>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
            하지만 이 코드가 입력될수록 서포터즈의 <span className="text-white font-semibold">공식 성과로 집계</span>되어
            활동에 큰 힘이 됩니다. 꼭 함께 적어주세요! 🙏
          </p>
          <div className="inline-block glass rounded-xl px-6 py-3 font-mono text-sm md:text-base text-[#DA6A75] border border-[#DA6A75]/30">
            학교명 (10C)
          </div>
          <p className="text-slate-500 text-xs mt-4">
            예: Kyungpook National University (10C)
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">준비되셨나요?</h2>
        <p className="text-slate-400 mb-8 text-sm md:text-base">
          가이드를 충분히 확인하셨다면 지금 바로 신청하세요.
        </p>
        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow inline-block text-white font-bold px-10 py-4 rounded-full text-sm md:text-base"
        >
          MIT GSW 2026 참가 신청하기 →
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.07] py-8 px-6 text-center text-xs text-slate-600">
        © 2026 MIT GSW Guide · Made with MIT GSW Official Supporters by Team 10C
      </footer>
    </div>
  )
}
