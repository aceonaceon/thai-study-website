import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center flex-wrap gap-2 text-sm">
        <li>
          <Link
            href="/"
            className="transition-colors"
            style={{ color: 'var(--text-light)' }}
          >
            首頁
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span style={{ color: 'var(--text-light)' }}>/</span>
            {item.href ? (
              <Link
                href={item.href}
                className="transition-colors"
                style={{ color: 'var(--text-light)' }}
              >
                {item.label}
              </Link>
            ) : (
              <span style={{ color: 'var(--text)', fontWeight: 500 }}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
