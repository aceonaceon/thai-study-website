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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb
        items={[
          { label: '夏令營', href: '/thai-camp' },
          { label: camp.name },
        ]}
      />

      <article>
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
              {camp.campType}
            </span>
            <span className="text-sm text-muted">{camp.ageRange}</span>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">{camp.name}</h1>
        </header>

        {camp.featureImage && (
          <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
            <Image
              src={camp.featureImage}
              alt={camp.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <CTABanner variant="inline" />

        <div className="bg-light-bg rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">營隊資訊</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted">營隊類型</p>
              <p className="text-foreground font-medium">{camp.campType}</p>
            </div>
            <div>
              <p className="text-sm text-muted">適合年齡</p>
              <p className="text-foreground font-medium">{camp.ageRange}</p>
            </div>
            <div>
              <p className="text-sm text-muted">所在地</p>
              <p className="text-foreground font-medium">{camp.city}</p>
            </div>
            {camp.durationWeeks && (
              <div>
                <p className="text-sm text-muted">營期</p>
                <p className="text-foreground font-medium">{camp.durationWeeks} 週</p>
              </div>
            )}
            {camp.fee && (
              <div>
                <p className="text-sm text-muted">費用</p>
                <p className="text-foreground font-medium">
                  ฿{camp.fee.toLocaleString()} 泰銖
                </p>
              </div>
            )}
            {camp.organizer && (
              <div>
                <p className="text-sm text-muted">主辦單位</p>
                <p className="text-foreground font-medium">{camp.organizer}</p>
              </div>
            )}
            {camp.website && (
              <div className="md:col-span-2">
                <p className="text-sm text-muted">報名網站</p>
                <a
                  href={camp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  前往報名 →
                </a>
              </div>
            )}
          </div>
        </div>

        <AuthorBio />
        <CTABanner />
      </article>
    </div>
  );
}
