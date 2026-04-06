import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBio from '@/components/AuthorBio';
import CTABanner from '@/components/CTABanner';
import { getBlogPosts, getBlogPostBySlug } from '@/lib/notion';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Fallback static params for build time when Notion is not available
const FALLBACK_SLUGS = [
  { slug: 'thailand-university-guide-2024' },
  { slug: 'how-to-apply-thailand-university' },
  { slug: 'thailand-student-visa-guide' },
];

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  try {
    const posts = await getBlogPosts();
    if (!posts || !Array.isArray(posts) || posts.length === 0) {
      return FALLBACK_SLUGS;
    }
    return posts.map((post) => ({
      slug: post.slug || 'default',
    }));
  } catch (error) {
    console.error('Failed to fetch blog posts for generateStaticParams:', error);
    return FALLBACK_SLUGS;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return { title: '找不到頁面 | 泰國留學' };
  }

  return {
    title: post.seoTitle || `${post.title} | 留學攻略 | 泰國留學`,
    description: post.seoDescription || post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      {/* Feature Image — Full width cinematic composition */}
      {post.featureImage && (
        <div className="relative w-full overflow-hidden" style={{ height: '360px' }}>
          <Image
            src={post.featureImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
            style={{ filter: 'saturate(0.85) contrast(1.05) sepia(0.08) brightness(0.9)' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(42,37,32,0.2), rgba(42,37,32,0.5))' }}
          />
        </div>
      )}

      <div className="container py-8" style={{ maxWidth: '800px' }}>
        <Breadcrumb
          items={[
            { label: '留學攻略', href: '/blog' },
            { label: post.title },
          ]}
        />

        <article>
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="tag tag--primary">{post.category}</span>
              <span className="text-sm" style={{ color: 'var(--text-light)' }}>5 分鐘閱讀</span>
              {post.publishedAt && (
                <span className="text-sm" style={{ color: 'var(--text-light)' }}>
                  {new Date(post.publishedAt).toLocaleDateString('zh-TW')}
                </span>
              )}
            </div>
            <h1
              className="text-h1 mb-4"
              style={{ fontFamily: "'Fraunces', 'Noto Serif TC', serif", color: 'var(--text)' }}
            >
              {post.title}
            </h1>
            {post.author && (
              <p style={{ color: 'var(--text-light)' }}>
                作者：{post.author}
              </p>
            )}
          </header>

          {/* Excerpt */}
          {post.excerpt && (
            <div
              className="rounded-lg p-6 mb-8"
              style={{ background: 'var(--bg-alt)', border: '1px solid var(--border-light)' }}
            >
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text)' }}>{post.excerpt}</p>
            </div>
          )}

          {/* Content */}
          {post.content && (
            <div className="prose max-w-none mb-8">
              <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
            </div>
          )}

          {post.showCTA && <CTABanner variant="inline" />}

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mb-8">
              <h3
                className="text-xs font-semibold mb-3"
                style={{ color: 'var(--text-light)', letterSpacing: '0.06em', textTransform: 'uppercase' }}
              >
                標籤
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag tag--primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <AuthorBio name={post.author} />

          <div className="separator-brass" />

          {post.showCTA && <CTABanner />}
        </article>
      </div>
    </div>
  );
}
