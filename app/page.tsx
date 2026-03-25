import Link from 'next/link';
import Image from 'next/image';
import CTABanner from '@/components/CTABanner';
import { getBlogPosts } from '@/lib/notion';

export default async function Home() {
  // Fetch featured blog posts
  let featuredPosts: any[] = [];
  try {
    const posts = await getBlogPosts();
    featuredPosts = posts.slice(0, 3);
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
  }

  return (
    <div>
      {/* Hero Section - Thai Deep Red with Gold Accents */}
      <section
        className="relative min-h-[600px] flex items-center justify-center text-center text-white px-4"
        style={{
          background: `
            linear-gradient(135deg, rgba(120, 30, 25, 0.95), rgba(80, 20, 18, 0.95)),
            url(/images/hero-bg.jpg) center/cover no-repeat
          `,
          borderTop: '1px solid rgba(212, 175, 55, 0.3)',  /* Gold accent line */
          borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
        }}
      >
        <div className="container relative z-10">
          <h1
            className="text-display text-white mb-6 animate-fade-in-up"
            style={{ 
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              letterSpacing: '-0.02em',
            }}
          >
            泰國留學完整指南
          </h1>
          <p className="text-xl text-white/95 mb-8 max-w-[700px] mx-auto leading-relaxed animate-fade-in-up animation-delay-100">
            學無界擁有 18 年留學代辦經驗，協助您探索泰國優質教育資源，開啟國際化學習之旅
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-200">
            <Link
              href="https://lin.ee/Tx17iiE"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg font-semibold"
              style={{
                backgroundColor: '#D4AF37',  /* Gold */
                color: '#1a1a1a',
                boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
              }}
            >
              免費諮詢
            </Link>
            <Link
              href="/blog"
              className="btn btn-lg"
              style={{
                border: '1px solid rgba(212, 175, 55, 0.5)',
                color: '#fff',
                backgroundColor: 'transparent',
              }}
            >
              查看攻略
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section thai-pattern-bg">
        <div className="container relative z-1">
          <div className="text-center mb-12">
            <h2 className="text-h2 text-gray-900 mb-4" style={{ letterSpacing: '-0.02em' }}>
              探索泰國留學選項
            </h2>
            <p className="text-gray-500 max-w-[50ch] mx-auto">
              從大學到中小學，從長期學位到短期營隊，找到最適合你的泰國教育方案
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Thai University */}
            <Link
              href="/thai-university"
              className="card group hover:border-primary animate-fade-in-up overflow-hidden !p-0"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/thai-university.jpg"
                  alt="泰國大學"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  泰國大學
                </h3>
                <p className="text-gray-500 text-sm">
                  朱拉隆功、法政、易三倉等知名大學介紹與申請指南
                </p>
              </div>
            </Link>

            {/* Thai Program */}
            <Link
              href="/thai-program"
              className="card group hover:border-primary animate-fade-in-up animation-delay-100 overflow-hidden !p-0"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/international-program.jpg"
                  alt="國際學程"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  國際學程
                </h3>
                <p className="text-gray-500 text-sm">
                  學士、碩士、博士國際學程，全英文授課環境
                </p>
              </div>
            </Link>

            {/* Thai School */}
            <Link
              href="/thai-school"
              className="card group hover:border-primary animate-fade-in-up animation-delay-200 overflow-hidden !p-0"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/international-school.jpg"
                  alt="國際學校"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  國際學校
                </h3>
                <p className="text-gray-500 text-sm">
                  曼谷、清邁國際學校，IB/AP/A-Level 課程體系
                </p>
              </div>
            </Link>

            {/* Thai Camp */}
            <Link
              href="/thai-camp"
              className="card group hover:border-primary animate-fade-in-up animation-delay-300 overflow-hidden !p-0"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/summer-camp.jpg"
                  alt="夏令營"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  夏令營
                </h3>
                <p className="text-gray-500 text-sm">
                  英文營、體育營、藝術營，讓孩子度過充實暑假
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Thailand - Numbered List Style */}
      <section className="section bg-gray-50 thai-pattern-bg">
        <div className="container relative z-1">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Title section */}
            <div>
              <h2 className="text-h2 text-gray-900 mb-6" style={{ letterSpacing: '-0.02em' }}>
                為什麼選擇<br />泰國留學？
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-[45ch] leading-relaxed">
                相比歐美國家，泰國提供高品質的國際教育環境，費用卻只需三分之一。更重要的是，這裡的文化與台灣相近，生活適應零障礙。
              </p>
              <Link
                href="/blog"
                className="btn btn-primary"
              >
                閱讀更多分析
              </Link>
            </div>

            {/* Right: Benefits list with numbers */}
            <div className="space-y-2">
              {[
                { title: '學費與生活費便宜', desc: '相比歐美，泰國留學費用可節省 50-70%' },
                { title: '英文授課環境', desc: '許多大學提供全英文國際學程' },
                { title: '文化相近、適應容易', desc: '華人比例高，生活適應無障礙' },
                { title: '簽證與居留友善', desc: '學生簽證申請容易，家長可陪讀' },
                { title: '東協就業機會', desc: '泰國作為區域樞紐，就業機會多元' },
                { title: '國際認可學歷', desc: '知名大學獲國際認證，學歷全球承認' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-5 p-4 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-sm"
                >
                  <span
                    className="text-2xl font-light tabular-nums"
                    style={{
                      color: '#D4AF37',  /* Gold */
                      fontFamily: 'Georgia, serif',
                      minWidth: '2.5ch',
                      letterSpacing: '-0.05em',
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles - Image-forward cards */}
      {featuredPosts.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-h2 text-gray-900 mb-2" style={{ letterSpacing: '-0.02em' }}>
                  精選文章
                </h2>
                <p className="text-gray-500">
                  第一手泰國留學資訊與經驗分享
                </p>
              </div>
              <Link
                href="/blog"
                className="hidden sm:block text-sm font-medium text-primary hover:text-primary-dark transition-colors"
              >
                查看全部 →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="card article-card group hover:-translate-y-1 transition-all duration-300"
                  style={{ padding: 0, overflow: 'hidden' }}
                >
                  <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
                    {post.featureImage ? (
                      <Image
                        src={post.featureImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        📄
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <span
                      className="inline-block px-3 py-1 rounded text-xs font-medium mb-3"
                      style={{
                        backgroundColor: 'rgba(212, 175, 55, 0.15)',
                        color: '#8B7355',
                      }}
                    >
                      {post.category}
                    </span>
                    <h3
                      className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-dark transition-colors"
                      style={{ letterSpacing: '-0.01em' }}
                    >
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-sm text-gray-500 line-clamp-2">
                        {post.excerpt}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>

            {/* Mobile link */}
            <div className="sm:hidden mt-8 text-center">
              <Link
                href="/blog"
                className="text-sm font-medium text-primary hover:text-primary-dark transition-colors"
              >
                查看全部文章 →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section">
        <div className="container max-w-4xl">
          <CTABanner />
        </div>
      </section>
    </div>
  );
}
