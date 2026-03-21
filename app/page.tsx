import Link from 'next/link';
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
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20 px-4">
        <div className="container">
          <div className="text-center">
            <h1 className="text-display text-gray-900 mb-6">
              泰國留學完整指南
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              學無界擁有 18 年留學代辦經驗，協助超過 1,000 位學生成功申請泰國大學、國際中學與夏令營
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://lin.ee/Tx17iiE"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                免費諮詢
              </Link>
              <Link
                href="/blog"
                className="btn btn-secondary btn-lg"
              >
                查看留學攻略
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section">
        <div className="container">
          <h2 className="text-h2 text-gray-900 text-center mb-12">
            探索泰國留學選項
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Thai University */}
            <Link
              href="/thai-university"
              className="card group hover:border-primary"
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
              className="card group hover:border-primary"
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
              className="card group hover:border-primary"
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
              className="card group hover:border-primary"
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
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-h2 text-gray-900 text-center mb-12">
            為什麼選擇泰國留學？
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                學費與生活費便宜
              </h3>
              <p className="text-gray-500 text-sm">
                相比歐美國家，泰國留學費用可節省 50-70%，CP 值極高
              </p>
            </div>

            <div className="card">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                英文授課環境
              </h3>
              <p className="text-gray-500 text-sm">
                許多大學提供全英文國際學程，無需泰語基礎也能順利學習
              </p>
            </div>

            <div className="card">
              <div className="text-3xl mb-4">🌏</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                文化相近、適應容易
              </h3>
              <p className="text-gray-500 text-sm">
                泰國文化與台灣相近，華人比例高，生活適應無障礙
              </p>
            </div>

            <div className="card">
              <div className="text-3xl mb-4">🛂</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                簽證與居留友善
              </h3>
              <p className="text-gray-500 text-sm">
                學生簽證申請相對容易，居留政策友善，家長可陪讀
              </p>
            </div>

            <div className="card">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                就業與發展機會
              </h3>
              <p className="text-gray-500 text-sm">
                東協市場蓬勃發展，泰國作為區域樞紐，就業機會多元
              </p>
            </div>

            <div className="card">
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
                  className="card article-card group"
                >
                  <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
                    {post.featureImage ? (
                      <img
                        src={post.featureImage}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        📄
                      </div>
                    )}
                  </div>
                  <span className="tag tag--secondary mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
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
