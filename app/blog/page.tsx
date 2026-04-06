import { Metadata } from 'next';
import ArticleList from '@/components/ArticleList';
import Breadcrumb from '@/components/Breadcrumb';
import { getBlogPosts } from '@/lib/notion';

export const metadata: Metadata = {
  title: '留學攻略 | 泰國留學',
  description: '泰國留學攻略文章，包含申請指南、費用解析、簽證資訊、生活適應等實用資訊。',
};

export default async function BlogPage() {
  let posts: any[] = [];
  try {
    posts = await getBlogPosts();
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
  }

  const articles = posts.map((post) => ({
    title: post.title,
    excerpt: post.excerpt,
    featureImage: post.featureImage,
    category: post.category,
    author: post.author || 'Jason Huang',
    publishedAt: post.publishedAt,
    slug: post.slug,
    articleType: post.articleType,
    category_filter: post.category,
  }));

  const filterOptions = [
    {
      label: '文章類型',
      property: 'articleType',
      options: ['語意矩陣', '新聞'],
    },
    {
      label: '分類',
      property: 'category_filter',
      options: ['留學指南', '申請攻略', '費用解析', '簽證資訊', '教育新聞'],
    },
  ];

  return (
    <div className="container py-8">
      <Breadcrumb items={[{ label: '留學攻略' }]} />

      {/* Page Header */}
      <div className="mb-10 text-center">
        <h1
          className="text-h1 mb-4"
          style={{ fontFamily: "'Fraunces', 'Noto Serif TC', serif", color: 'var(--text)' }}
        >
          留學攻略
        </h1>
        <p className="text-base mx-auto" style={{ color: 'var(--text-muted)', maxWidth: '560px' }}>
          泰國留學攻略文章，包含申請指南、費用解析、簽證資訊、生活適應等實用資訊。
        </p>
        <div className="separator-brass" style={{ maxWidth: '60px', margin: 'var(--space-6) auto 0' }} />
      </div>

      <ArticleList
        articles={articles}
        basePath="blog"
        filterOptions={filterOptions}
      />
    </div>
  );
}
