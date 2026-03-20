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
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              泰國留學完整指南
            </h1>
            <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
              學無界擁有 18 年留學代辦經驗，協助超過 1,000 位學生成功申請泰國大學、國際中學與夏令營
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://lin.ee/Tx17iiE"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all text-lg"
              >
                免費諮詢
              </Link>
              <Link
                href="/blog"
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all text-lg"
              >
                查看留學攻略
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            探索泰國留學選項
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Thai University */}
            <Link
              href="/thai-university"
              className="group bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                泰國大學
              </h3>
              <p className="text-muted text-sm">
                朱拉隆功、法政、易三倉等知名大學介紹與申請指南
              </p>
            </Link>

            {/* Thai Program */}
            <Link
              href="/thai-program"
              className="group bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                國際學程
              </h3>
              <p className="text-muted text-sm">
                學士、碩士、博士國際學程，全英文授課環境
              </p>
            </Link>

            {/* Thai School */}
            <Link
              href="/thai-school"
              className="group bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-4">🏫</div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                國際學校
              </h3>
              <p className="text-muted text-sm">
                曼谷、清邁國際學校，IB/AP/A-Level 課程體系
              </p>
            </Link>

            {/* Thai Camp */}
            <Link
              href="/thai-camp"
              className="group bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-4">⛺</div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                夏令營
              </h3>
              <p className="text-muted text-sm">
                英文營、體育營、藝術營，讓孩子度過充實暑假
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Thailand */}
      <section className="bg-light-bg py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            為什麼選擇泰國留學？
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                學費與生活費便宜
              </h3>
              <p className="text-muted text-sm">
                相比歐美國家，泰國留學費用可節省 50-70%，CP 值極高
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                英文授課環境
              </h3>
              <p className="text-muted text-sm">
                許多大學提供全英文國際學程，無需泰語基礎也能順利學習
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <div className="text-3xl mb-4">🌏</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                文化相近、適應容易
              </h3>
              <p className="text-muted text-sm">
                泰國文化與台灣相近，華人比例高，生活適應無障礙
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <div className="text-3xl mb-4">🛂</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                簽證與居留友善
              </h3>
              <p className="text-muted text-sm">
                學生簽證申請相對容易，居留政策友善，家長可陪讀
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                就業與發展機會
              </h3>
              <p className="text-muted text-sm">
                東協市場蓬勃發展，泰國作為區域樞紐，就業機會多元
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                國際認可學歷
              </h3>
              <p className="text-muted text-sm">
                泰國知名大學獲國際認證，學歷全球承認，回台可求職升學
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredPosts.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              精選文章
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
                >
                  <div className="relative aspect-video bg-light-bg">
                    {post.featureImage ? (
                      <img
                        src={post.featureImage}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-muted">
                        📄
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-sm text-muted line-clamp-2">
                        {post.excerpt}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/blog"
                className="text-primary hover:underline font-medium"
              >
                查看更多文章 →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <CTABanner />
        </div>
      </section>
    </div>
  );
}
