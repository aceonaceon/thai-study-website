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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb
        items={[
          { label: '國際學校', href: '/thai-school' },
          { label: school.name },
        ]}
      />

      <article>
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
              {school.curriculum}
            </span>
            <span className="text-sm text-muted">{school.city}</span>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">{school.name}</h1>
        </header>

        {school.featureImage && (
          <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
            <Image
              src={school.featureImage}
              alt={school.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <CTABanner variant="inline" />

        <div className="bg-light-bg rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">學校資訊</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted">課程體系</p>
              <p className="text-foreground font-medium">{school.curriculum}</p>
            </div>
            <div>
              <p className="text-sm text-muted">年級</p>
              <p className="text-foreground font-medium">{school.gradeLevel}</p>
            </div>
            <div>
              <p className="text-sm text-muted">所在地</p>
              <p className="text-foreground font-medium">{school.city}</p>
            </div>
            <div>
              <p className="text-sm text-muted">住宿</p>
              <p className="text-foreground font-medium">{school.boarding}</p>
            </div>
            {school.tuitionPerYear && (
              <div>
                <p className="text-sm text-muted">每年學費</p>
                <p className="text-foreground font-medium">
                  ฿{school.tuitionPerYear.toLocaleString()} 泰銖
                </p>
              </div>
            )}
            {school.website && (
              <div>
                <p className="text-sm text-muted">官方網站</p>
                <a
                  href={school.website}
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

        <AuthorBio />
        <CTABanner />
      </article>
    </div>
  );
}
