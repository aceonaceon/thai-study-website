import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-secondary hover:text-secondary-light transition-colors">
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
                className="text-gray-400 hover:text-secondary transition-colors"
              >
                LINE 諮詢
              </a>
              <a
                href="https://studywb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-secondary transition-colors"
              >
                學無界官網
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer__title">快速連結</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/thai-university" className="footer__link">
                  泰國大學
                </Link>
              </li>
              <li>
                <Link href="/thai-program" className="footer__link">
                  國際學程
                </Link>
              </li>
              <li>
                <Link href="/thai-school" className="footer__link">
                  國際學校
                </Link>
              </li>
              <li>
                <Link href="/thai-camp" className="footer__link">
                  夏令營
                </Link>
              </li>
              <li>
                <Link href="/blog" className="footer__link">
                  留學攻略
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="footer__title">聯絡我們</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://lin.ee/Tx17iiE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  LINE: @studywb
                </a>
              </li>
              <li>
                <a
                  href="https://studywb.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  官網: studywb.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>
              © {currentYear} 學無界 Study Without Borders. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                隱私權政策
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                服務條款
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
