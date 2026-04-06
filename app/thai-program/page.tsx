import { Metadata } from 'next';
import ArticleList from '@/components/ArticleList';
import Breadcrumb from '@/components/Breadcrumb';
import { getThaiPrograms } from '@/lib/notion';

export const metadata: Metadata = {
  title: '泰國國際學程 | 泰國留學',
  description: '泰國大學國際學程完整介紹，包含學士、碩士、博士全英文授課學程，申請條件、學費與就業前景。',
};

export default async function ThaiProgramPage() {
  let programs: any[] = [];
  try {
    programs = await getThaiPrograms();
  } catch (error) {
    console.error('Failed to fetch programs:', error);
  }

  const articles = programs.map((prog) => ({
    title: prog.name,
    excerpt: prog.curriculum,
    featureImage: prog.featureImage,
    category: prog.degreeLevel,
    author: 'Jason Huang',
    publishedAt: prog.publishedAt,
    slug: prog.slug,
    degreeLevel: prog.degreeLevel,
    field: prog.field,
  }));

  const filterOptions = [
    {
      label: '學位等級',
      property: 'degreeLevel',
      options: ['學士', '碩士', '博士'],
    },
    {
      label: '領域',
      property: 'field',
      options: ['商科', '工程', '醫學', '藝術', '其他'],
    },
  ];

  return (
    <div className="container py-8">
      <Breadcrumb items={[{ label: '國際學程' }]} />

      {/* Page Header */}
      <div className="mb-10 text-center">
        <h1
          className="text-h1 mb-4"
          style={{ fontFamily: "'Fraunces', 'Noto Serif TC', serif", color: 'var(--text)' }}
        >
          泰國國際學程
        </h1>
        <p className="text-base mx-auto" style={{ color: 'var(--text-muted)', maxWidth: '560px' }}>
          泰國大學國際學程完整介紹，包含學士、碩士、博士全英文授課學程，申請條件、學費與就業前景。
        </p>
        <div className="separator-brass" style={{ maxWidth: '60px', margin: 'var(--space-6) auto 0' }} />
      </div>

      <ArticleList
        articles={articles}
        basePath="thai-program"
        filterOptions={filterOptions}
      />
    </div>
  );
}
