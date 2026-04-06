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
    <div>
      {/* Feature Image — Full width cinematic composition */}
      {program.featureImage && (
        <div className="relative w-full overflow-hidden" style={{ height: '360px' }}>
          <Image
            src={program.featureImage}
            alt={program.name}
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
            { label: '國際學程', href: '/thai-program' },
            { label: program.name },
          ]}
        />

        <article>
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="tag tag--primary">{program.degreeLevel}</span>
              <span className="text-sm" style={{ color: 'var(--text-light)' }}>{program.field}</span>
            </div>
            <h1
              className="text-h1 mb-4"
              style={{ fontFamily: "'Fraunces', 'Noto Serif TC', serif", color: 'var(--text)' }}
            >
              {program.name}
            </h1>
          </header>

          {/* Curriculum */}
          {program.curriculum && (
            <div className="prose max-w-none mb-8">
              <h2>課程內容</h2>
              <p>{program.curriculum}</p>
            </div>
          )}

          <CTABanner variant="inline" />

          {/* Quick Info */}
          <div
            className="rounded-lg p-6 my-8"
            style={{ background: 'var(--bg-alt)', border: '1px solid var(--border-light)' }}
          >
            <h3
              className="text-base font-semibold mb-4"
              style={{ fontFamily: "'Fraunces', 'Noto Serif TC', serif", color: 'var(--text)' }}
            >
              學程資訊
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-xs mb-1" style={{ color: 'var(--text-light)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>學位等級</p>
                <p className="font-medium" style={{ color: 'var(--text)' }}>{program.degreeLevel}</p>
              </div>
              <div>
                <p className="text-xs mb-1" style={{ color: 'var(--text-light)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>領域</p>
                <p className="font-medium" style={{ color: 'var(--text)' }}>{program.field}</p>
              </div>
              {program.duration && (
                <div>
                  <p className="text-xs mb-1" style={{ color: 'var(--text-light)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>修業年限</p>
                  <p className="font-medium" style={{ color: 'var(--text)' }}>{program.duration}</p>
                </div>
              )}
              {program.language && (
                <div>
                  <p className="text-xs mb-1" style={{ color: 'var(--text-light)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>授課語言</p>
                  <p className="font-medium" style={{ color: 'var(--text)' }}>{program.language}</p>
                </div>
              )}
              {program.tuitionPerYear && (
                <div>
                  <p className="text-xs mb-1" style={{ color: 'var(--text-light)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>每年學費</p>
                  <p className="font-medium" style={{ color: 'var(--text)' }}>
                    ฿{program.tuitionPerYear.toLocaleString()} 泰銖
                  </p>
                </div>
              )}
              {program.gpaRequirement && (
                <div>
                  <p className="text-xs mb-1" style={{ color: 'var(--text-light)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>GPA 要求</p>
                  <p className="font-medium" style={{ color: 'var(--text)' }}>{program.gpaRequirement}</p>
                </div>
              )}
              {program.toeflRequirement && (
                <div>
                  <p className="text-xs mb-1" style={{ color: 'var(--text-light)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>托福要求</p>
                  <p className="font-medium" style={{ color: 'var(--text)' }}>{program.toeflRequirement}</p>
                </div>
              )}
              {program.ieltsRequirement && (
                <div>
                  <p className="text-xs mb-1" style={{ color: 'var(--text-light)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>雅思要求</p>
                  <p className="font-medium" style={{ color: 'var(--text)' }}>{program.ieltsRequirement}</p>
                </div>
              )}
            </div>
          </div>

          {/* Career Path */}
          {program.careerPath && (
            <div className="prose max-w-none mb-8">
              <h2>就業方向</h2>
              <p>{program.careerPath}</p>
            </div>
          )}

          <AuthorBio />

          <div className="separator-brass" />

          <CTABanner />
        </article>
      </div>
    </div>
  );
}
