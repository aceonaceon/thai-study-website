import Image from 'next/image';
import Link from 'next/link';

interface ArticleCardProps {
  title: string;
  excerpt?: string;
  featureImage?: string;
  category: string;
  author?: string;
  publishedAt?: string;
  slug: string;
  basePath: string;
}

export default function ArticleCard({
  title,
  excerpt,
  featureImage,
  category,
  author,
  publishedAt,
  slug,
  basePath,
}: ArticleCardProps) {
  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString('zh-TW', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';

  return (
    <article className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <Link href={`/${basePath}/${slug}`}>
        {/* Feature Image */}
        <div className="relative aspect-video bg-light-bg">
          {featureImage ? (
            <Image
              src={featureImage}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-muted">
              <svg
                className="w-16 h-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Category & Reading Time */}
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
              {category}
            </span>
            <span className="text-xs text-muted">5 分鐘閱讀</span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>

          {/* Excerpt */}
          {excerpt && (
            <p className="text-sm text-muted mb-4 line-clamp-3">{excerpt}</p>
          )}

          {/* Author & Date */}
          <div className="flex items-center justify-between text-xs text-muted">
            {author && <span>{author}</span>}
            {formattedDate && <span>{formattedDate}</span>}
          </div>
        </div>
      </Link>
    </article>
  );
}
