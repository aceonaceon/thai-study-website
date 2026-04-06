import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBio from '@/components/AuthorBio';
import CTABanner from '@/components/CTABanner';
import { getThaiSchools, getThaiSchoolBySlug } from '@/lib/notion';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Fallback static params for build time when Notion is not available
const FALLBACK_SLUGS = [
  { slug: 'bangkok-international-preparatory-school' },
  { slug: 'nist-international-school' },
  { slug: 'prem-tinsulanonda-international-school' },
];

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  try {
    const schools = await getThaiSchools();
    if (!schools || !Array.isArray(schools) || schools.length === 0) {
      return FALLBACK_SLUGS;
    }
    return schools.map((school) => ({
      slug: school.slug || 'default',
    }));
  } catch (error) {
    console.error('Error generating static params for thai-school:', error);
    return FALLBACK_SLUGS;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const school = await getThaiSchoolBySlug(slug);

  if (!school) {
    return { title: '找不到頁面 | 泰國留學' };
  }

  return {
    title: `${school.name} | 泰國國際學校 | 泰國留學`,
    description: `${school.name}完整介紹，包含課程體系、學費與申請流程。`,
  };
}

export default async function ThaiSchoolDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const school = await getThaiSchoolBySlug(slug);

  if (!school) {
    notFound();
  }

  return (
    <div>
      {/* Feature Image — Full width cinematic composition */}
      {school.featureImage && (
        <div className="relative w-full overflow-hidden" style={{ height: '360px' }}>
          <Image
            src={school.featureImage}
            alt={school.name}
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
            { label: '國際學校', href: '/thai-school' },
            { label: school.name },
          ]}
        />

        <article>
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="tag tag--primary">{school.curriculum}</span>
              <span className="text-sm" style={{ color: 'var(--text-light)' }}>{school.city}</span>
            </div>
            <h1
              className="text-h1 mb-4"
              style={{ fontFamily: "'Fraunces', 'Noto Serif TC', serif", color: 'var(--text)' }}
            >
              {school.name}
            </h1>
          </header>

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
              學校資訊
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-xs mb-1" style={{ color: 'var(--text-light)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>課程體系</p>
                <p className="font-medium" style={{ color: 'var(--text)' }}>{school.curriculum}</p>
              </div>
              <div>
                <p className="text-xs mb-1" style={{ color: 'var(--text-light)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>年級</p>
                <p className="font-medium" style={{ color: 'var(--text)' }}>{school.gradeLevel}</p>
              </div>
              <div>
                <p className="text-xs mb-1" style={{ color: 'var(--text-light)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>所在地</p>
                <p className="font-medium" style={{ color: 'var(--text)' }}>{school.city}</p>
              </div>
              <div>
                <p className="text-xs mb-1" style={{ color: 'var(--text-light)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>住宿</p>
                <p className="font-medium" style={{ color: 'var(--text)' }}>{school.boarding}</p>
              </div>
              {school.tuitionPerYear && (
                <div>
                  <p className="text-xs mb-1" style={{ color: 'var(--text-light)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>每年學費</p>
                  <p className="font-medium" style={{ color: 'var(--text)' }}>
                    ฿{school.tuitionPerYear.toLocaleString()} 泰銖
                  </p>
                </div>
              )}
              {school.website && (
                <div>
                  <p className="text-xs mb-1" style={{ color: 'var(--text-light)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>官方網站</p>
                  <a
                    href={school.website}
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
