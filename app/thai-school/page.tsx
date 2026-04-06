import { Metadata } from 'next';
import ArticleList from '@/components/ArticleList';
import Breadcrumb from '@/components/Breadcrumb';
import { getThaiSchools } from '@/lib/notion';

export const metadata: Metadata = {
  title: '泰國國際學校 | 泰國留學',
  description: '泰國國際學校完整介紹，包含曼谷、清邁國際學校，IB/AP/A-Level 課程體系、學費與申請流程。',
};

export default async function ThaiSchoolPage() {
  let schools: any[] = [];
  try {
    schools = await getThaiSchools();
  } catch (error) {
    console.error('Failed to fetch schools:', error);
  }

  const articles = schools.map((school) => ({
    title: school.name,
    featureImage: school.featureImage,
    category: school.curriculum,
    author: 'Jason Huang',
    publishedAt: school.publishedAt,
    slug: school.slug,
    curriculum: school.curriculum,
    city: school.city,
  }));

  const filterOptions = [
    {
      label: '課程體系',
      property: 'curriculum',
      options: ['IB', 'AP', 'A-Level', '美制', '英制'],
    },
    {
      label: '城市',
      property: 'city',
      options: ['曼谷', '清邁', '芭達雅', '普吉島'],
    },
  ];

  return (
    <div className="container py-8">
      <Breadcrumb items={[{ label: '國際學校' }]} />

      {/* Page Header */}
      <div className="mb-10 text-center">
        <h1
          className="text-h1 mb-4"
          style={{ fontFamily: "'Fraunces', 'Noto Serif TC', serif", color: 'var(--text)' }}
        >
          泰國國際學校
        </h1>
        <p className="text-base mx-auto" style={{ color: 'var(--text-muted)', maxWidth: '560px' }}>
          泰國國際學校完整介紹，包含曼谷、清邁國際學校，IB/AP/A-Level 課程體系、學費與申請流程。
        </p>
        <div className="separator-brass" style={{ maxWidth: '60px', margin: 'var(--space-6) auto 0' }} />
      </div>

      <ArticleList
        articles={articles}
        basePath="thai-school"
        filterOptions={filterOptions}
      />
    </div>
  );
}
