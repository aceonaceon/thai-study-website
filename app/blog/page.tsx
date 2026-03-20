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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: '留學攻略' }]} />

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-4">留學攻略</h1>
        <p className="text-lg text-muted">
          泰國留學攻略文章，包含申請指南、費用解析、簽證資訊、生活適應等實用資訊。
        </p>
      </div>

      <ArticleList
        articles={articles}
        basePath="blog"
        filterOptions={filterOptions}
      />
    </div>
  );
}
