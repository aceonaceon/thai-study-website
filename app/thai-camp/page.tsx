import { Metadata } from 'next';
import ArticleList from '@/components/ArticleList';
import Breadcrumb from '@/components/Breadcrumb';
import { getThaiCamps } from '@/lib/notion';

export const metadata: Metadata = {
  title: '泰國夏令營 | 泰國留學',
  description: '泰國夏令營完整介紹，包含英文營、體育營、藝術營、科技營，適合 6-18 歲青少年的暑期活動。',
};

export default async function ThaiCampPage() {
  let camps: any[] = [];
  try {
    camps = await getThaiCamps();
  } catch (error) {
    console.error('Failed to fetch camps:', error);
  }

  const articles = camps.map((camp) => ({
    title: camp.name,
    featureImage: camp.featureImage,
    category: camp.campType,
    author: 'Jason Huang',
    publishedAt: camp.publishedAt,
    slug: camp.slug,
    campType: camp.campType,
    ageRange: camp.ageRange,
  }));

  const filterOptions = [
    {
      label: '營隊類型',
      property: 'campType',
      options: ['英文營', '體育營', '藝術營', '科技營', '綜合營'],
    },
    {
      label: '年齡層',
      property: 'ageRange',
      options: ['6-12歲', '12-15歲', '15-18歲'],
    },
  ];

  return (
    <div className="container py-8">
      <Breadcrumb items={[{ label: '夏令營' }]} />

      {/* Page Header */}
      <div className="mb-10 text-center">
        <h1
          className="text-h1 mb-4"
          style={{ fontFamily: "'Fraunces', 'Noto Serif TC', serif", color: 'var(--text)' }}
        >
          泰國夏令營
        </h1>
        <p className="text-base mx-auto" style={{ color: 'var(--text-muted)', maxWidth: '560px' }}>
          泰國夏令營完整介紹，包含英文營、體育營、藝術營、科技營，適合 6-18 歲青少年的暑期活動。
        </p>
        <div className="separator-brass" style={{ maxWidth: '60px', margin: 'var(--space-6) auto 0' }} />
      </div>

      <ArticleList
        articles={articles}
        basePath="thai-camp"
        filterOptions={filterOptions}
      />
    </div>
  );
}
