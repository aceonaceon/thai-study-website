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
      <div className="card border-2 border-primary">
        <div className="text-2xl mb-3">💡</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">免費諮詢</h3>
        <p className="text-sm text-gray-500 mb-4">
          還有疑問？學無界顧問幫你解答
        </p>
        <Link
          href="https://lin.ee/Tx17iiE"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary w-full text-center"
        >
          加 LINE 諮詢
        </Link>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className="bg-primary-50 border-l-4 border-primary p-6 my-8 rounded-r-lg">
        <p className="text-gray-600">
          如果你正在考慮泰國留學，學無界提供免費諮詢服務，幫你評估最適合的學校和科系。
          <Link
            href="https://lin.ee/Tx17iiE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-light ml-1 font-medium transition-colors"
          >
            加 LINE 諮詢 →
          </Link>
        </p>
      </div>
    );
  }

  // Full variant (default)
  return (
    <div
      className="text-white rounded-2xl p-8 md:p-12 text-center"
      style={{ background: 'linear-gradient(135deg, #E85D04, #0066CC)' }}
    >
      <h2 className="text-h2 text-white mb-4">{title}</h2>
      <p className="text-white/90 mb-8 max-w-[600px] mx-auto text-lg leading-relaxed">{description}</p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
        <Link
          href="https://lin.ee/Tx17iiE"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-lg bg-white text-[#E85D04] hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-lg text-center font-semibold transition-all"
        >
          免費諮詢
        </Link>
        <Link
          href="https://studywb.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-lg border-2 border-white text-white hover:bg-white/10 hover:-translate-y-0.5 text-center font-semibold transition-all"
        >
          了解更多
        </Link>
      </div>
    </div>
  );
}
