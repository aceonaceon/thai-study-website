import { Metadata } from 'next';
import ArticleList from '@/components/ArticleList';
import Breadcrumb from '@/components/Breadcrumb';
import fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
  title: '泰國大學 | 泰國留學',
  description: '泰國大學完整介紹，包含朱拉隆功、法政、易三倉等知名大學排名、科系特色、申請條件與學費資訊。',
};

export default function ThaiUniversityPage() {
  // 讀取預先抓取的 JSON 檔案
  const dataPath = path.join(process.cwd(), 'public/data/universities.json');
  let universities: any[] = [];
  
  try {
    const data = fs.readFileSync(dataPath, 'utf8');
    universities = JSON.parse(data);
  } catch (error) {
    console.error('Failed to read universities data:', error);
  }

  const articles = universities.map((uni) => ({
    title: uni.name,
    excerpt: uni.introduction || uni.excerpt,
    featureImage: uni.featureImage,
    category: uni.type,
    author: 'Jason Huang',
    publishedAt: uni.publishedAt,
    slug: uni.slug,
    type: uni.type,
    city: uni.city,
  }));

  const filterOptions = [
    {
      label: '學校類型',
      property: 'type',
      options: ['公立', '私立'],
    },
    {
      label: '城市',
      property: 'city',
      options: ['曼谷', '清邁', '芭達雅', '普吉島', '其他'],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: '泰國大學' }]} />

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-4">泰國大學</h1>
        <p className="text-lg text-muted">
          泰國大學完整介紹，包含朱拉隆功、法政、易三倉等知名大學排名、科系特色、申請條件與學費資訊。
        </p>
      </div>

      <ArticleList
        articles={articles}
        basePath="thai-university"
        filterOptions={filterOptions}
      />
    </div>
  );
}
