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
    <article className="card article-card group">
      <Link href={`/${basePath}/${slug}`}>
        {/* Feature Image */}
        <div className="relative aspect-video bg-gray-100 rounded-md overflow-hidden mb-4">
          {featureImage ? (
            <Image
              src={featureImage}
              alt={title}
              fill
              className="article-card__image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
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

        {/* Category Tag */}
        <span className="article-card__tag">{category}</span>

        {/* Title */}
        <h3 className="article-card__title group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Excerpt */}
        {excerpt && (
          <p className="article-card__excerpt">{excerpt}</p>
        )}

        {/* Author & Date */}
        <div className="article-card__meta">
          {author && <span>{author}</span>}
          {author && formattedDate && <span> · </span>}
          {formattedDate && <span>{formattedDate}</span>}
          <span> · 5 分鐘閱讀</span>
        </div>
      </Link>
    </article>
  );
}
