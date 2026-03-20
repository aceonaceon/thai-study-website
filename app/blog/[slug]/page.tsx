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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb
        items={[
          { label: '留學攻略', href: '/blog' },
          { label: post.title },
        ]}
      />

      <article>
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
              {post.category}
            </span>
            <span className="text-sm text-muted">5 分鐘閱讀</span>
            {post.publishedAt && (
              <span className="text-sm text-muted">
                {new Date(post.publishedAt).toLocaleDateString('zh-TW')}
              </span>
            )}
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">{post.title}</h1>
          {post.author && (
            <p className="text-muted">
              作者：{post.author}
            </p>
          )}
        </header>

        {post.featureImage && (
          <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
            <Image
              src={post.featureImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {post.excerpt && (
          <div className="bg-light-bg rounded-lg p-6 mb-8">
            <p className="text-foreground text-lg leading-relaxed">{post.excerpt}</p>
          </div>
        )}

        {post.content && (
          <div className="prose max-w-none mb-8">
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
          </div>
        )}

        {post.showCTA && <CTABanner variant="inline" />}

        {post.tags && post.tags.length > 0 && (
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-muted mb-3">標籤</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-gray-100 text-muted rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        <AuthorBio name={post.author} />
        {post.showCTA && <CTABanner />}
      </article>
    </div>
  );
}
