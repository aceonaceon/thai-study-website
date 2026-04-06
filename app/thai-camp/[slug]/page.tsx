import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBio from '@/components/AuthorBio';
import CTABanner from '@/components/CTABanner';
import { getThaiCamps, getThaiCampBySlug } from '@/lib/notion';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Fallback static params for build time when Notion is not available
const FALLBACK_SLUGS = [
  { slug: 'english-summer-camp-2024' },
  { slug: 'sports-camp-bangkok' },
  { slug: 'art-creativity-camp' },
];

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  try {
    const camps = await getThaiCamps();
    if (!camps || !Array.isArray(camps) || camps.length === 0) {
      return FALLBACK_SLUGS;
    }
    return camps.map((camp) => ({
      slug: camp.slug || 'default',
    }));
  } catch (error) {
    console.error('Error generating static params for thai-camp:', error);
    return FALLBACK_SLUGS;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const camp = await getThaiCampBySlug(slug);

  if (!camp) {
    return { title: '找不到頁面 | 泰國留學' };
  }

  return {
    title: `${camp.name} | 泰國夏令營 | 泰國留學`,
    description: `${camp.name}完整介紹，包含營隊內容、費用與報名資訊。`,
  };
}

export default async function ThaiCampDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const camp = await getThaiCampBySlug(slug);

  if (!camp) {
    notFound();
  }

  return (
    <div>
      {/* Feature Image — Full width cinematic composition */}
      {camp.featureImage && (
        <div className="relative w-full overflow-hidden" style={{ height: '360px' }}>
          <Image
            src={camp.featureImage}
            alt={camp.name}
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
            { label: '夏令營', href: '/thai-camp' },
            { label: camp.name },
          ]}
        />

        <article>
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="tag tag--primary">{camp.campType}</span>
              <span className="text-sm" style={{ color: 'var(--text-light)' }}>{camp.ageRange}</span>
            </div>
            <h1
              className="text-h1 mb-4"
              style={{ fontFamily: "'Fraunces', 'Noto Serif TC', serif", color: 'var(--text)' }}
            >
              {camp.name}
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
              營隊資訊
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-xs mb-1" style={{ color: 'var(--text-light)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>營隊類型</p>
                <p className="font-medium" style={{ color: 'var(--text)' }}>{camp.campType}</p>
              </div>
              <div>
                <p className="text-xs mb-1" style={{ color: 'var(--text-light)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>適合年齡</p>
                <p className="font-medium" style={{ color: 'var(--text)' }}>{camp.ageRange}</p>
              </div>
              <div>
                <p className="text-xs mb-1" style={{ color: 'var(--text-light)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>所在地</p>
                <p className="font-medium" style={{ color: 'var(--text)' }}>{camp.city}</p>
              </div>
              {camp.durationWeeks && (
                <div>
                  <p className="text-xs mb-1" style={{ color: 'var(--text-light)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>營期</p>
                  <p className="font-medium" style={{ color: 'var(--text)' }}>{camp.durationWeeks} 週</p>
                </div>
              )}
              {camp.fee && (
                <div>
                  <p className="text-xs mb-1" style={{ color: 'var(--text-light)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>費用</p>
                  <p className="font-medium" style={{ color: 'var(--text)' }}>
                    ฿{camp.fee.toLocaleString()} 泰銖
                  </p>
                </div>
              )}
              {camp.organizer && (
                <div>
                  <p className="text-xs mb-1" style={{ color: 'var(--text-light)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>主辦單位</p>
                  <p className="font-medium" style={{ color: 'var(--text)' }}>{camp.organizer}</p>
                </div>
              )}
              {camp.website && (
                <div className="md:col-span-2">
                  <p className="text-xs mb-1" style={{ color: 'var(--text-light)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>報名網站</p>
                  <a
                    href={camp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium"
                    style={{ color: 'var(--primary)' }}
                  >
                    前往報名 →
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
