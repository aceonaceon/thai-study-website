import Link from 'next/link';

interface CTABannerProps {
  variant?: 'full' | 'sidebar' | 'inline';
  title?: string;
  description?: string;
}

export default function CTABanner({
  variant = 'full',
  title = '準備好展開泰國留學之旅了嗎？',
  description = '學無界擁有 18 年留學代辦經驗，協助超過 1,000 位學生成功申請泰國大學、國際中學與夏令營。',
}: CTABannerProps) {
  if (variant === 'sidebar') {
    return (
      <div
        className="p-6 rounded-lg text-center"
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
        }}
      >
        <div
          className="mx-auto mb-4"
          style={{
            width: '40px',
            height: '1px',
            background: 'var(--accent)',
            opacity: 0.4,
          }}
        />
        <h3
          className="text-base font-semibold mb-2"
          style={{
            fontFamily: "'Fraunces', 'Noto Serif TC', serif",
            color: 'var(--text)',
          }}
        >
          免費諮詢
        </h3>
        <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
          學無界顧問幫你解答所有問題
        </p>
        <Link
          href="https://lin.ee/Tx17iiE"
          target="_blank"
          rel="noopener noreferrer"
          className="btn w-full text-center font-semibold"
          style={{
            backgroundColor: '#D4AF37',
            color: '#1a1a1a',
          }}
        >
          加 LINE 諮詢
        </Link>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div
        className="p-6 my-8 rounded-lg"
        style={{
          background: 'var(--primary-ghost)',
          borderLeft: '3px solid var(--primary)',
        }}
      >
        <p style={{ color: 'var(--text-muted)' }}>
          如果你正在考慮泰國留學，學無界提供免費諮詢服務，幫你評估最適合的學校和科系。
          <Link
            href="https://lin.ee/Tx17iiE"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium ml-1 transition-colors"
            style={{ color: 'var(--primary)' }}
          >
            加 LINE 諮詢 →
          </Link>
        </p>
      </div>
    );
  }

  // Full variant — Wes Anderson compartment card
  return (
    <div
      className="text-center rounded-xl p-10 md:p-14 relative overflow-hidden"
      style={{
        background: 'var(--primary)',
        color: 'var(--surface)',
      }}
    >
      {/* Ornamental corner frames */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t border-l" style={{ borderColor: 'rgba(245,236,215,0.2)' }} />
      <div className="absolute top-4 right-4 w-8 h-8 border-t border-r" style={{ borderColor: 'rgba(245,236,215,0.2)' }} />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l" style={{ borderColor: 'rgba(245,236,215,0.2)' }} />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r" style={{ borderColor: 'rgba(245,236,215,0.2)' }} />

      {/* Ornamental top */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <div style={{ width: '30px', height: '1px', background: 'var(--accent)', opacity: 0.5 }} />
        <div style={{ width: '5px', height: '5px', background: 'var(--accent)', borderRadius: '50%', opacity: 0.5 }} />
        <div style={{ width: '30px', height: '1px', background: 'var(--accent)', opacity: 0.5 }} />
      </div>

      <h2
        className="text-h2 mb-4"
        style={{
          fontFamily: "'Fraunces', 'Noto Serif TC', serif",
          color: '#F5ECD7',
        }}
      >
        {title}
      </h2>
      <p
        className="mb-8 mx-auto text-base leading-relaxed"
        style={{
          color: 'rgba(245, 236, 215, 0.8)',
          maxWidth: '520px',
        }}
      >
        {description}
      </p>

      <h2 className="text-h2 text-white mb-4 relative z-10" style={{ letterSpacing: '-0.02em' }}>
        {title}
      </h2>
      <p className="mb-8 max-w-[600px] mx-auto text-lg leading-relaxed relative z-10" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
        {description}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap relative z-10">
        <Link
          href="https://lin.ee/Tx17iiE"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-lg"
          style={{
            background: 'var(--accent)',
            color: 'var(--dark-bg)',
            borderColor: 'var(--accent)',
            fontWeight: 600,
          }}
        >
          免費諮詢
        </Link>
        <Link
          href="https://studywb.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-lg"
          style={{
            background: 'transparent',
            color: '#F5ECD7',
            border: '1px solid rgba(245,236,215,0.3)',
          }}
        >
          了解更多
        </Link>
      </div>
    </div>
  );
}
