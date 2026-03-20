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
      <div className="bg-light-bg border-2 border-primary rounded-lg p-6">
        <div className="text-2xl mb-3">💡</div>
        <h3 className="text-lg font-semibold text-foreground mb-2">免費諮詢</h3>
        <p className="text-sm text-muted mb-4">
          還有疑問？學無界顧問幫你解答
        </p>
        <Link
          href="https://lin.ee/Tx17iiE"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-primary text-white text-center py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all"
        >
          加 LINE 諮詢
        </Link>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
        <p className="text-foreground">
          如果你正在考慮泰國留學，學無界提供免費諮詢服務，幫你評估最適合的學校和科系。
          <Link
            href="https://lin.ee/Tx17iiE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline ml-1"
          >
            加 LINE 諮詢 →
          </Link>
        </p>
      </div>
    );
  }

  // Full variant (default)
  return (
    <div className="bg-primary text-white rounded-lg p-8 md:p-12">
      <div className="text-3xl mb-4">🎯</div>
      <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
      <p className="text-white/90 mb-6 max-w-2xl">{description}</p>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex items-center gap-2">
          <span className="text-white/80">✓</span>
          <span>免費評估申請資歷</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-white/80">✓</span>
          <span>客製化選校建議</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-white/80">✓</span>
          <span>申請文件代辦服務</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="https://lin.ee/Tx17iiE"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all text-center"
        >
          立即加 LINE 諮詢
        </Link>
        <Link
          href="https://studywb.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all text-center"
        >
          前往學無界官網
        </Link>
      </div>
    </div>
  );
}
