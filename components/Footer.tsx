import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-primary">
              泰國留學
            </Link>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              學無界（Study Without Borders）成立於 2007 年，擁有 18 年留學代辦經驗，
              協助超過 1,000 位學生成功申請泰國大學、國際中學與夏令營。
            </p>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://lin.ee/Tx17iiE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                LINE 諮詢
              </a>
              <a
                href="https://studywb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                學無界官網
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速連結</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/thai-university" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  泰國大學
                </Link>
              </li>
              <li>
                <Link href="/thai-program" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  國際學程
                </Link>
              </li>
              <li>
                <Link href="/thai-school" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  國際學校
                </Link>
              </li>
              <li>
                <Link href="/thai-camp" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  夏令營
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  留學攻略
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">聯絡我們</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="https://lin.ee/Tx17iiE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  LINE: @studywb
                </a>
              </li>
              <li>
                <a
                  href="https://studywb.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  官網: studywb.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {currentYear} 學無界 Study Without Borders. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-primary transition-colors">
                隱私權政策
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-primary transition-colors">
                服務條款
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
