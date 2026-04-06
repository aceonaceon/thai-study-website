import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBio from '@/components/AuthorBio';
import CTABanner from '@/components/CTABanner';
import NotionContent from '@/components/NotionContent';
import { getThaiUniversities, getThaiUniversityBySlug, getPageContent } from '@/lib/notion';

interface PageProps {
  params: Promise<{ slug: string }>;
}

const FALLBACK_SLUGS = [
  { slug: 'chulalongkorn-university' },
  { slug: 'mahidol-university' },
  { slug: 'thammasat-university' },
];

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  try {
    const universities = await getThaiUniversities();
    if (!universities || !Array.isArray(universities) || universities.length === 0) {
      return FALLBACK_SLUGS;
    }
    return universities.map((uni) => ({ slug: uni.slug || 'default' }));
  } catch (error) {
    console.error('Error generating static params for thai-university:', error);
    return FALLBACK_SLUGS;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const university = await getThaiUniversityBySlug(slug);
  if (!university) return { title: '找不到頁面 | 泰國留學' };
  return {
    title: `${university.name} | 泰國大學 | 泰國留學`,
    description: university.introduction || `${university.name}完整介紹，包含科系特色、申請條件、學費資訊。`,
  };
}

export default async function ThaiUniversityDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const university = await getThaiUniversityBySlug(slug);
  if (!university) notFound();

  const recordMap = await getPageContent(university.id);

  return (
    <div>
      {/* Feature Image — Full width T-shape composition */}
      {university.featureImage && (
        <div className="relative w-full overflow-hidden" style={{ height: '360px' }}>
          <Image
            src={university.featureImage}
            alt={university.name}
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
            { label: '泰國大學', href: '/thai-university' },
            { label: university.name },
          ]}
        />

        <article>
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="tag tag--primary">{university.type}</span>
              <span className="text-sm" style={{ color: 'var(--text-light)' }}>{university.city}</span>
              {university.qsRanking && (
                <span className="text-sm" style={{ color: 'var(--text-light)' }}>
                  QS #{university.qsRanking}
                </span>
              )}
            </div>
            <h1
              className="text-h1 mb-4"
              style={{ fontFamily: "'Fraunces', 'Noto Serif TC', serif", color: 'var(--text)' }}
            >
              {university.name}
            </h1>
          </header>

          {/* Introduction */}
          {university.introduction && (
            <div className="prose max-w-none mb-8">
              <p>{university.introduction}</p>
            </div>
          )}

          {/* Notion Content */}
          {recordMap && <NotionContent recordMap={recordMap} />}

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
              基本資訊
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-xs mb-1" style={{ color: 'var(--text-light)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>學校類型</p>
                <p className="font-medium" style={{ color: 'var(--text)' }}>{university.type}</p>
              </div>
              <div>
                <p className="text-xs mb-1" style={{ color: 'var(--text-light)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>所在地</p>
                <p className="font-medium" style={{ color: 'var(--text)' }}>{university.city}</p>
              </div>
              {university.qsRanking && (
                <div>
                  <p className="text-xs mb-1" style={{ color: 'var(--text-light)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>QS 世界排名</p>
                  <p className="font-medium" style={{ color: 'var(--text)' }}>#{university.qsRanking}</p>
                </div>
              )}
              {university.website && (
                <div>
                  <p className="text-xs mb-1" style={{ color: 'var(--text-light)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>官方網站</p>
                  <a
                    href={university.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium"
                    style={{ color: 'var(--primary)' }}
                  >
                    前往官網 →
                  </a>
                </div>
              )}
            </div>
          </div>

          <AuthorBio />

          <div className="separator-brass" />

          <CTABanner />
        </article>
      </div>
    </div>
  );
}
