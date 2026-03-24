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
      {/* Hero Section */}
      <section
        className="relative min-h-[600px] flex items-center justify-center text-center text-white px-4"
        style={{
          background: 'linear-gradient(135deg, rgba(232,93,4,0.9), rgba(0,102,204,0.9)), url(/images/hero-bg.jpg) center/cover no-repeat',
        }}
      >
        <div className="container relative z-10">
          <h1
            className="text-display text-white mb-6 animate-fade-in-up"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
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
              className="btn btn-lg bg-white text-[#E85D04] hover:bg-gray-100 font-semibold"
            >
              免費諮詢
            </Link>
            <Link
              href="/blog"
              className="btn btn-lg border-2 border-white text-white hover:bg-white/10"
            >
              查看攻略
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section thai-pattern-bg">
        <div className="container relative z-1">
          <h2 className="text-h2 text-gray-900 text-center mb-12">
            探索泰國留學選項
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Thai University */}
            <Link
              href="/thai-university"
              className="card group hover:border-primary animate-fade-in-up"
            >
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                泰國大學
              </h3>
              <p className="text-gray-500 text-sm">
                朱拉隆功、法政、易三倉等知名大學介紹與申請指南
              </p>
            </Link>

            {/* Thai Program */}
            <Link
              href="/thai-program"
              className="card group hover:border-primary animate-fade-in-up animation-delay-100"
            >
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                國際學程
              </h3>
              <p className="text-gray-500 text-sm">
                學士、碩士、博士國際學程，全英文授課環境
              </p>
            </Link>

            {/* Thai School */}
            <Link
              href="/thai-school"
              className="card group hover:border-primary animate-fade-in-up animation-delay-200"
            >
              <div className="text-4xl mb-4">🏫</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                國際學校
              </h3>
              <p className="text-gray-500 text-sm">
                曼谷、清邁國際學校，IB/AP/A-Level 課程體系
              </p>
            </Link>

            {/* Thai Camp */}
            <Link
              href="/thai-camp"
              className="card group hover:border-primary animate-fade-in-up animation-delay-300"
            >
              <div className="text-4xl mb-4">⛺</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                夏令營
              </h3>
              <p className="text-gray-500 text-sm">
                英文營、體育營、藝術營，讓孩子度過充實暑假
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Thailand */}
      <section className="section bg-gray-50 thai-pattern-bg">
        <div className="container relative z-1">
          <h2 className="text-h2 text-gray-900 text-center mb-12">
            為什麼選擇泰國留學？
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card animate-fade-in-up">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                學費與生活費便宜
              </h3>
              <p className="text-gray-500 text-sm">
                相比歐美國家，泰國留學費用可節省 50-70%，CP 值極高
              </p>
            </div>

            <div className="card animate-fade-in-up animation-delay-100">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                英文授課環境
              </h3>
              <p className="text-gray-500 text-sm">
                許多大學提供全英文國際學程，無需泰語基礎也能順利學習
              </p>
            </div>

            <div className="card animate-fade-in-up animation-delay-200">
              <div className="text-3xl mb-4">🌏</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                文化相近、適應容易
              </h3>
              <p className="text-gray-500 text-sm">
                泰國文化與台灣相近，華人比例高，生活適應無障礙
              </p>
            </div>

            <div className="card animate-fade-in-up animation-delay-100">
              <div className="text-3xl mb-4">🛂</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                簽證與居留友善
              </h3>
              <p className="text-gray-500 text-sm">
                學生簽證申請相對容易，居留政策友善，家長可陪讀
              </p>
            </div>

            <div className="card animate-fade-in-up animation-delay-200">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                就業與發展機會
              </h3>
              <p className="text-gray-500 text-sm">
                東協市場蓬勃發展，泰國作為區域樞紐，就業機會多元
              </p>
            </div>

            <div className="card animate-fade-in-up animation-delay-300">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                國際認可學歷
              </h3>
              <p className="text-gray-500 text-sm">
                泰國知名大學獲國際認證，學歷全球承認，回台可求職升學
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredPosts.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className="text-h2 text-gray-900 text-center mb-12">
              精選文章
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="card article-card group hover:border-[#E85D04] hover:shadow-[0_8px_24px_rgba(232,93,4,0.15)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
                    {post.featureImage ? (
                      <Image
                        src={post.featureImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        📄
                      </div>
                    )}
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#E85D04] text-white text-xs font-semibold mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#E85D04] transition-colors">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {post.excerpt}
                    </p>
                  )}
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/blog"
                className="text-primary hover:text-primary-light font-medium transition-colors"
              >
                查看更多文章 →
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
