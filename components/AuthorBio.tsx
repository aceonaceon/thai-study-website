import Link from 'next/link';

interface AuthorBioProps {
  name?: string;
  title?: string;
  bio?: string;
}

export default function AuthorBio({
  name = 'Jason Huang',
  title = '學無界留學遊學創辦人',
  bio = '18 年留學代辦經驗 | 協助超過 1,000 位學生圓夢',
}: AuthorBioProps) {
  return (
    <div
      className="rounded-lg p-6 my-8"
      style={{
        background: 'var(--bg-alt)',
        border: '1px solid var(--border-light)',
      }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div
            className="w-14 h-14 rounded-lg flex items-center justify-center text-xl"
            style={{
              background: 'var(--primary-ghost)',
              border: '1px solid rgba(46, 139, 139, 0.15)',
            }}
          >
            👤
          </div>
        </div>

        <div className="flex-1">
          <h3
            className="text-base font-semibold"
            style={{ fontFamily: "'Fraunces', 'Noto Serif TC', serif", color: 'var(--text)' }}
          >
            {name}
          </h3>
          <p className="text-sm mb-2" style={{ color: 'var(--primary)' }}>{title}</p>
          <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>{bio}</p>

          <div className="flex gap-4">
            <Link
              href="https://studywb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-colors"
              style={{ color: 'var(--primary)' }}
            >
              學無界官網 →
            </Link>
            <Link
              href="https://lin.ee/Tx17iiE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-colors"
              style={{ color: 'var(--primary)' }}
            >
              LINE 諮詢 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
