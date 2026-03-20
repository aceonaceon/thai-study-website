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
    <div className="bg-light-bg rounded-lg p-6 my-8">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
            👤
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground">{name}</h3>
          <p className="text-sm text-primary mb-2">{title}</p>
          <p className="text-sm text-muted mb-4">{bio}</p>

          <div className="flex gap-4">
            <Link
              href="https://studywb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              🔗 學無界官網
            </Link>
            <Link
              href="https://lin.ee/Tx17iiE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              📞 LINE 諮詢
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
