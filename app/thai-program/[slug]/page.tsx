import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBio from '@/components/AuthorBio';
import CTABanner from '@/components/CTABanner';
import { getThaiPrograms, getThaiProgramBySlug } from '@/lib/notion';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Fallback static params for build time when Notion is not available
const FALLBACK_SLUGS = [
  { slug: 'international-business-program' },
  { slug: 'computer-science-masters' },
  { slug: 'english-teaching-program' },
];

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  try {
    const programs = await getThaiPrograms();
    if (!programs || !Array.isArray(programs) || programs.length === 0) {
      return FALLBACK_SLUGS;
    }
    return programs.map((prog) => ({
      slug: prog.slug || 'default',
    }));
  } catch (error) {
    console.error('Error generating static params for thai-program:', error);
    return FALLBACK_SLUGS;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = await getThaiProgramBySlug(slug);

  if (!program) {
    return { title: '找不到頁面 | 泰國留學' };
  }

  return {
    title: `${program.name} | 泰國國際學程 | 泰國留學`,
    description: program.curriculum || `${program.name}完整介紹，包含申請條件、學費與就業前景。`,
  };
}

export default async function ThaiProgramDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const program = await getThaiProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb
        items={[
          { label: '國際學程', href: '/thai-program' },
          { label: program.name },
        ]}
      />

      <article>
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
              {program.degreeLevel}
            </span>
            <span className="text-sm text-muted">{program.field}</span>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">{program.name}</h1>
        </header>

        {program.featureImage && (
          <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
            <Image
              src={program.featureImage}
              alt={program.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {program.curriculum && (
          <div className="prose max-w-none mb-8">
            <h2>課程內容</h2>
            <p>{program.curriculum}</p>
          </div>
        )}

        <CTABanner variant="inline" />

        <div className="bg-light-bg rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">學程資訊</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted">學位等級</p>
              <p className="text-foreground font-medium">{program.degreeLevel}</p>
            </div>
            <div>
              <p className="text-sm text-muted">領域</p>
              <p className="text-foreground font-medium">{program.field}</p>
            </div>
            {program.duration && (
              <div>
                <p className="text-sm text-muted">修業年限</p>
                <p className="text-foreground font-medium">{program.duration}</p>
              </div>
            )}
            {program.language && (
              <div>
                <p className="text-sm text-muted">授課語言</p>
                <p className="text-foreground font-medium">{program.language}</p>
              </div>
            )}
            {program.tuitionPerYear && (
              <div>
                <p className="text-sm text-muted">每年學費</p>
                <p className="text-foreground font-medium">
                  ฿{program.tuitionPerYear.toLocaleString()} 泰銖
                </p>
              </div>
            )}
            {program.gpaRequirement && (
              <div>
                <p className="text-sm text-muted">GPA 要求</p>
                <p className="text-foreground font-medium">{program.gpaRequirement}</p>
              </div>
            )}
            {program.toeflRequirement && (
              <div>
                <p className="text-sm text-muted">托福要求</p>
                <p className="text-foreground font-medium">{program.toeflRequirement}</p>
              </div>
            )}
            {program.ieltsRequirement && (
              <div>
                <p className="text-sm text-muted">雅思要求</p>
                <p className="text-foreground font-medium">{program.ieltsRequirement}</p>
              </div>
            )}
          </div>
        </div>

        {program.careerPath && (
          <div className="prose max-w-none mb-8">
            <h2>就業方向</h2>
            <p>{program.careerPath}</p>
          </div>
        )}

        <AuthorBio />
        <CTABanner />
      </article>
    </div>
  );
}
