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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: '國際學程' }]} />

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-4">泰國國際學程</h1>
        <p className="text-lg text-muted">
          泰國大學國際學程完整介紹，包含學士、碩士、博士全英文授課學程，申請條件、學費與就業前景。
        </p>
      </div>

      <ArticleList
        articles={articles}
        basePath="thai-program"
        filterOptions={filterOptions}
      />
    </div>
  );
}
