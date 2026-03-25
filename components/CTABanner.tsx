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
        className="card"
        style={{
          borderLeft: '3px solid #D4AF37',
          backgroundColor: '#FDFCFA',
        }}
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ letterSpacing: '-0.01em' }}>
          免費諮詢
        </h3>
        <p className="text-sm text-gray-500 mb-5">
          還有疑問？學無界顧問幫你解答
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
        className="p-6 my-8 rounded-r-lg"
        style={{
          backgroundColor: 'rgba(212, 175, 55, 0.08)',
          borderLeft: '3px solid #D4AF37',
        }}
      >
        <p className="text-gray-600">
          如果你正在考慮泰國留學，學無界提供免費諮詢服務，幫你評估最適合的學校和科系。
          <Link
            href="https://lin.ee/Tx17iiE"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium transition-colors ml-1"
            style={{ color: '#8B6914' }}
          >
            加 LINE 諮詢 →
          </Link>
        </p>
      </div>
    );
  }

  // Full variant (default) - Thai deep red with gold accents
  return (
    <div
      className="text-white rounded-xl p-8 md:p-12 text-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #5a1a15, #3d1210)',
        borderTop: '1px solid rgba(212, 175, 55, 0.3)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
      }}
    >
      {/* Subtle gold accent line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.5), transparent)',
        }}
      />

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
          className="btn btn-lg font-semibold transition-all hover:-translate-y-0.5"
          style={{
            backgroundColor: '#D4AF37',
            color: '#1a1a1a',
            boxShadow: '0 4px 20px rgba(212, 175, 55, 0.3)',
          }}
        >
          免費諮詢
        </Link>
        <Link
          href="https://studywb.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-lg font-semibold transition-all hover:-translate-y-0.5"
          style={{
            border: '1px solid rgba(212, 175, 55, 0.5)',
            color: '#fff',
            backgroundColor: 'transparent',
          }}
        >
          了解更多
        </Link>
      </div>
    </div>
  );
}
