import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBio from '@/components/AuthorBio';
import CTABanner from '@/components/CTABanner';
import { getThaiUniversities, getThaiUniversityBySlug } from '@/lib/notion';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Fallback static params for build time when Notion is not available
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
    return universities.map((uni) => ({
      slug: uni.slug || 'default',
    }));
  } catch (error) {
    console.error('Error generating static params for thai-university:', error);
    return FALLBACK_SLUGS;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const university = await getThaiUniversityBySlug(slug);

  if (!university) {
    return {
      title: '找不到頁面 | 泰國留學',
    };
  }

  return {
    title: `${university.name} | 泰國大學 | 泰國留學`,
    description: university.introduction || `${university.name}完整介紹，包含科系特色、申請條件、學費資訊。`,
  };
}

export default async function ThaiUniversityDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const university = await getThaiUniversityBySlug(slug);

  if (!university) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
              {university.type}
            </span>
            <span className="text-sm text-muted">{university.city}</span>
            {university.qsRanking && (
              <span className="text-sm text-muted">
                QS 排名: #{university.qsRanking}
              </span>
            )}
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {university.name}
          </h1>
        </header>

        {/* Feature Image */}
        {university.featureImage && (
          <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
            <Image
              src={university.featureImage}
              alt={university.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Introduction */}
        {university.introduction && (
          <div className="prose max-w-none mb-8">
            <h2>學校簡介</h2>
            <p>{university.introduction}</p>
          </div>
        )}

        {/* CTA Inline */}
        <CTABanner variant="inline" />

        {/* Quick Info */}
        <div className="bg-light-bg rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">基本資訊</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted">學校類型</p>
              <p className="text-foreground font-medium">{university.type}</p>
            </div>
            <div>
              <p className="text-sm text-muted">所在地</p>
              <p className="text-foreground font-medium">{university.city}</p>
            </div>
            {university.qsRanking && (
              <div>
                <p className="text-sm text-muted">QS 世界排名</p>
                <p className="text-foreground font-medium">#{university.qsRanking}</p>
              </div>
            )}
            {university.website && (
              <div>
                <p className="text-sm text-muted">官方網站</p>
                <a
                  href={university.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  前往官網 →
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Author Bio */}
        <AuthorBio />

        {/* CTA Full */}
        <CTABanner />
      </article>
    </div>
  );
}
