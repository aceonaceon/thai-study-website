import Link from 'next/link';
import Image from 'next/image';
import CTABanner from '@/components/CTABanner';
import { getBlogPosts } from '@/lib/notion';

const categories = [
  {
    href: '/thai-university',
    title: '泰國大學',
    description: '朱拉隆功、法政、易三倉等知名大學介紹與申請指南',
    image: '/images/thai-university.jpg',
    span: 'col-span-1 md:col-span-2 md:row-span-2',
  },
  {
    href: '/thai-program',
    title: '國際學程',
    description: '學士、碩士、博士國際學程，全英文授課環境',
    image: '/images/international-program.jpg',
    span: 'col-span-1',
  },
  {
    href: '/thai-school',
    title: '國際學校',
    description: 'IB / AP / A-Level 課程體系',
    image: '/images/international-school.jpg',
    span: 'col-span-1',
  },
  {
    href: '/thai-camp',
    title: '夏令營',
    description: '英文營、體育營、藝術營，充實暑假',
    image: '/images/summer-camp.jpg',
    span: 'col-span-1 md:col-span-2',
  },
];

const advantages = [
  { icon: '💰', title: '學費與生活費便宜', desc: '相比歐美國家，泰國留學費用可節省 50-70%，性價比極高' },
  { icon: '🌐', title: '英文授課環境', desc: '許多大學提供全英文國際學程，無需泰語基礎也能順利學習' },
  { icon: '🌏', title: '文化相近', desc: '泰國文化與台灣相近，華人比例高，生活適應無障礙' },
  { icon: '🛂', title: '簽證友善', desc: '學生簽證申請容易，居留政策友善，家長可陪讀' },
  { icon: '📈', title: '就業機會', desc: '東協市場蓬勃發展，泰國作為區域樞紐，就業機會多元' },
  { icon: '🎓', title: '國際認可學歷', desc: '泰國知名大學獲國際認證，學歷全球承認' },
];

const stats = [
  { number: '18', label: '年代辦經驗', suffix: '+' },
  { number: '1000', label: '成功案例', suffix: '+' },
  { number: '50', label: '合作學校', suffix: '+' },
];

export default async function Home() {
  let featuredPosts: any[] = [];
  try {
    const posts = await getBlogPosts();
    featuredPosts = posts.slice(0, 3);
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
  }

  return (
    <div>
      {/* === Scene 1: Prologue — Brand announcement === */}
      <div
        className="text-center py-3"
        style={{
          background: 'var(--bg-alt)',
          borderBottom: '1px solid var(--border-light)',
        }}
      >
        <p
          className="text-xs font-medium"
          style={{
            color: 'var(--text-muted)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          學無界 &nbsp;·&nbsp; 18 年泰國留學代辦經驗 &nbsp;·&nbsp; Study Without Borders
        </p>
      </div>

      {/* === Scene 2: Hero — Establishing Shot === */}
      <section className="relative overflow-hidden" style={{ minHeight: '75vh' }}>
        {/* Background image with slow zoom */}
        <div className="absolute inset-0 animate-slow-zoom">
          <Image
            src="/images/hero-bg.jpg"
            alt="泰國大學校園"
            fill
            priority
            className="object-cover"
            style={{ filter: 'saturate(0.85) contrast(1.08) sepia(0.12) brightness(0.92)' }}
          />
        </div>
        {/* Warm overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(42,37,32,0.35), rgba(42,37,32,0.55))' }}
        />

        {/* Ornamental frame */}
        <div className="absolute inset-6 md:inset-12 border opacity-20" style={{ borderColor: 'var(--accent)' }} />

        {/* Content */}
        <div
          className="relative z-10 flex flex-col items-center justify-center text-center px-6"
          style={{ minHeight: '75vh' }}
        >
          <div className="animate-fade-in">
            {/* Ornamental line above */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div style={{ width: '40px', height: '1px', background: 'var(--accent)', opacity: 0.6 }} />
              <div style={{ width: '6px', height: '6px', background: 'var(--accent)', borderRadius: '50%', opacity: 0.6 }} />
              <div style={{ width: '40px', height: '1px', background: 'var(--accent)', opacity: 0.6 }} />
            </div>

            <h1
              className="text-display mb-6 animate-fade-in animation-delay-100"
              style={{
                fontFamily: "'Fraunces', 'Noto Serif TC', serif",
                color: '#F5ECD7',
                textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                maxWidth: '700px',
              }}
            >
              泰國留學完整指南
            </h1>

            <p
              className="text-lg mb-10 mx-auto animate-fade-in animation-delay-200"
              style={{
                color: 'rgba(245, 236, 215, 0.85)',
                maxWidth: '560px',
                lineHeight: 1.7,
                fontWeight: 300,
              }}
            >
              協助您探索泰國優質教育資源，開啟國際化學習之旅
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-300">
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
                href="/blog"
                className="btn btn-lg"
                style={{
                  background: 'transparent',
                  color: '#F5ECD7',
                  border: '1px solid rgba(245,236,215,0.4)',
                }}
              >
                查看攻略
              </Link>
            </div>

            {/* Ornamental line below */}
            <div className="flex items-center justify-center gap-3 mt-10">
              <div style={{ width: '40px', height: '1px', background: 'var(--accent)', opacity: 0.4 }} />
              <div style={{ width: '4px', height: '4px', background: 'var(--accent)', borderRadius: '50%', opacity: 0.4 }} />
              <div style={{ width: '40px', height: '1px', background: 'var(--accent)', opacity: 0.4 }} />
            </div>
          </div>
        </div>
      </section>

      {/* === Scene 3: World Exploration — Bento Category Grid === */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <h2 className="section-title">探索泰國留學選項</h2>
          <div className="separator-brass" style={{ maxWidth: '80px', margin: '0 auto var(--space-12)' }} />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4" style={{ gridAutoRows: 'minmax(180px, auto)' }}>
            {categories.map((cat, i) => (
              <Link
                key={cat.href}
                href={cat.href}
                className={`card-framed group relative overflow-hidden ${cat.span}`}
                style={{
                  animationDelay: `${i * 100}ms`,
                }}
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: 'saturate(0.85) contrast(1.05) sepia(0.08)' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Warm gradient overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(to top, rgba(42,37,32,0.75) 0%, rgba(42,37,32,0.2) 50%, transparent 100%)',
                  }}
                />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <h3
                    className="text-lg font-semibold mb-1"
                    style={{
                      fontFamily: "'Fraunces', 'Noto Serif TC', serif",
                      color: '#F5ECD7',
                    }}
                  >
                    {cat.title}
                  </h3>
                  <p className="text-sm" style={{ color: 'rgba(245,236,215,0.7)' }}>
                    {cat.description}
                  </p>
                </div>
                {/* Corner frame accent */}
                <div
                  className="absolute top-3 left-3 w-6 h-6 border-t border-l opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ borderColor: 'var(--accent)' }}
                />
                <div
                  className="absolute bottom-3 right-3 w-6 h-6 border-b border-r opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ borderColor: 'var(--accent)' }}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* === Scene 4: Parallel Stories — Why Thailand (Triptych) === */}
      <section className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <h2 className="section-title">為什麼選擇泰國？</h2>
          <p className="section-subtitle">
            泰國不僅是旅遊勝地，更是東南亞重要的教育樞紐
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((item, i) => (
              <div
                key={item.title}
                className="text-center p-8 rounded-lg transition-all duration-500"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border-light)',
                  animationDelay: `${i * 80}ms`,
                }}
              >
                <div
                  className="mx-auto mb-4 flex items-center justify-center"
                  style={{
                    width: '48px',
                    height: '48px',
                    background: 'var(--primary-ghost)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '20px',
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ fontFamily: "'Fraunces', 'Noto Serif TC', serif", color: 'var(--text)' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Scene 5: The Authority — Stats === */}
      <section className="py-16" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="separator-brass" style={{ maxWidth: '60px', margin: '0 auto var(--space-12)' }} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-4xl md:text-5xl font-bold mb-2"
                  style={{
                    fontFamily: "'Fraunces', serif",
                    color: 'var(--accent)',
                    letterSpacing: '-0.03em',
                  }}
                >
                  {stat.number}<span className="text-2xl">{stat.suffix}</span>
                </div>
                <div
                  className="text-sm font-medium"
                  style={{ color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <div className="separator-brass" style={{ maxWidth: '60px', margin: 'var(--space-12) auto 0' }} />
        </div>
      </section>

      {/* === Scene 6: The Encounter — Featured Articles === */}
      {featuredPosts.length > 0 && (
        <section className="section" style={{ background: 'var(--bg-alt)' }}>
          <div className="container">
            <h2 className="section-title">精選文章</h2>
            <p className="section-subtitle">深入了解泰國留學的方方面面</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="card-framed group"
                >
                  <div className="relative aspect-video overflow-hidden">
                    {post.featureImage ? (
                      <Image
                        src={post.featureImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        style={{ filter: 'saturate(0.85) contrast(1.05) sepia(0.08)' }}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ background: 'var(--bg-alt)', color: 'var(--text-light)' }}
                      >
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <span className="article-card__tag">{post.category}</span>
                    <h3
                      className="text-base font-semibold mt-2 mb-2 transition-colors duration-300 group-hover:text-primary line-clamp-2"
                      style={{
                        fontFamily: "'Fraunces', 'Noto Serif TC', serif",
                        color: 'var(--text)',
                      }}
                    >
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-sm line-clamp-2" style={{ color: 'var(--text-muted)' }}>
                        {post.excerpt}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/blog"
                className="btn btn-ghost"
              >
                查看全部文章 →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* === Scene 7: Quiet Moment — Quote === */}
      <section className="py-20" style={{ background: 'var(--bg)' }}>
        <div className="container text-center" style={{ maxWidth: '680px' }}>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div style={{ width: '30px', height: '1px', background: 'var(--accent)', opacity: 0.4 }} />
            <div style={{ width: '5px', height: '5px', background: 'var(--accent)', borderRadius: '50%', opacity: 0.5 }} />
            <div style={{ width: '30px', height: '1px', background: 'var(--accent)', opacity: 0.4 }} />
          </div>
          <blockquote
            className="text-xl md:text-2xl leading-relaxed mb-6"
            style={{
              fontFamily: "'Fraunces', 'Noto Serif TC', serif",
              color: 'var(--text)',
              fontWeight: 400,
              fontStyle: 'italic',
              letterSpacing: '-0.01em',
            }}
          >
            「教育是通往世界的護照。選擇泰國，不只是選擇一所學校，而是選擇一段改變人生的旅程。」
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div style={{ width: '30px', height: '1px', background: 'var(--accent)', opacity: 0.4 }} />
            <div style={{ width: '5px', height: '5px', background: 'var(--accent)', borderRadius: '50%', opacity: 0.5 }} />
            <div style={{ width: '30px', height: '1px', background: 'var(--accent)', opacity: 0.4 }} />
          </div>
        </div>
      </section>

      {/* === Scene 8: The Invitation — CTA === */}
      <section className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <CTABanner />
        </div>
      </section>
    </div>
  );
}
