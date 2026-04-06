import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: '關於我們 | 泰國留學',
  description: '學無界（Study Without Borders）成立於 2007 年，擁有 18 年留學代辦經驗，協助超過 1,000 位學生成功申請泰國大學、國際中學與夏令營。',
};

export default function AboutPage() {
  return (
    <div className="container" style={{ paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-8)' }}>
      <Breadcrumb items={[{ label: '關於我們' }]} />

      <article>
        <header style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
          <h1 style={{
            fontFamily: "'Fraunces', 'Noto Serif TC', serif",
            fontSize: '2.5rem',
            fontWeight: 700,
            color: 'var(--text)',
            marginBottom: 0,
          }}>
            關於學無界
          </h1>
          <div className="separator-brass" style={{ maxWidth: '60px', margin: 'var(--space-6) auto 0' }} />
        </header>

        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          {/* 學無界介紹 */}
          <section style={{ marginBottom: 'var(--space-10)' }}>
            <h2 style={{
              fontFamily: "'Fraunces', 'Noto Serif TC', serif",
              color: 'var(--text)',
              fontSize: '1.5rem',
              fontWeight: 600,
              marginBottom: 'var(--space-4)',
            }}>
              學無界 Study Without Borders
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
              學無界成立於 2007 年，專注於留學代辦服務，至今已有 18 年豐富經驗。
              我們協助超過 1,000 位學生成功申請美國、加拿大、英國、愛爾蘭、紐西蘭、澳洲及東南亞（泰國、新加坡、馬來西亞、杜拜）的學校。
            </p>
          </section>

          {/* 為什麼選擇學無界 */}
          <section style={{ marginBottom: 'var(--space-10)' }}>
            <h2 style={{
              fontFamily: "'Fraunces', 'Noto Serif TC', serif",
              color: 'var(--text)',
              fontSize: '1.5rem',
              fontWeight: 600,
              marginBottom: 'var(--space-6)',
            }}>
              為什麼選擇學無界？
            </h2>
            <div style={{
              background: 'var(--bg-alt)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-6)',
            }}>
              <ul style={{ color: 'var(--text-muted)', lineHeight: 2, listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: 'var(--space-3)' }}>
                  <strong style={{ color: 'var(--text)' }}>18 年專業經驗</strong> — 深耕留學代辦領域，熟悉各國教育體系與申請流程
                </li>
                <li style={{ marginBottom: 'var(--space-3)' }}>
                  <strong style={{ color: 'var(--text)' }}>超過 1,000 位成功案例</strong> — 累積豐富的實戰經驗，能精準評估學生需求
                </li>
                <li style={{ marginBottom: 'var(--space-3)' }}>
                  <strong style={{ color: 'var(--text)' }}>一站式服務</strong> — 從選校、申請、簽證到住宿，全程協助
                </li>
                <li style={{ marginBottom: 'var(--space-3)' }}>
                  <strong style={{ color: 'var(--text)' }}>透明收費</strong> — 費用清楚透明，無隱藏成本
                </li>
                <li>
                  <strong style={{ color: 'var(--text)' }}>持續追蹤</strong> — 學生入學後仍提供生活適應諮詢
                </li>
              </ul>
            </div>
          </section>

          {/* 泰國留學服務 */}
          <section style={{ marginBottom: 'var(--space-10)' }}>
            <h2 style={{
              fontFamily: "'Fraunces', 'Noto Serif TC', serif",
              color: 'var(--text)',
              fontSize: '1.5rem',
              fontWeight: 600,
              marginBottom: 'var(--space-4)',
            }}>
              泰國留學服務
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 'var(--space-6)' }}>
              近年來，泰國成為台灣學生留學的熱門選擇。學無界特別成立泰國留學團隊，專注於：
            </p>
            <div style={{
              background: 'var(--bg-alt)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-6)',
            }}>
              <ul style={{ color: 'var(--text-muted)', lineHeight: 2, listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: 'var(--space-2)' }}>泰國大學申請（朱拉隆功、法政、易三倉等）</li>
                <li style={{ marginBottom: 'var(--space-2)' }}>國際學程諮詢（學士、碩士、博士）</li>
                <li style={{ marginBottom: 'var(--space-2)' }}>國際學校入學協助（IB/AP/A-Level）</li>
                <li style={{ marginBottom: 'var(--space-2)' }}>夏令營規劃與報名</li>
                <li style={{ marginBottom: 'var(--space-2)' }}>學生簽證代辦</li>
                <li>住宿安排建議</li>
              </ul>
            </div>
          </section>

          {/* 創辦人 */}
          <section style={{ marginBottom: 'var(--space-10)' }}>
            <h2 style={{
              fontFamily: "'Fraunces', 'Noto Serif TC', serif",
              color: 'var(--text)',
              fontSize: '1.5rem',
              fontWeight: 600,
              marginBottom: 'var(--space-4)',
            }}>
              創辦人 Jason Huang
            </h2>
            <div style={{
              background: 'var(--bg-alt)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-6)',
            }}>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 'var(--space-4)' }}>
                Jason Huang（Aceon／多肉老爹），交通大學土木工程學系畢業，美國 Ball State University 電腦科學碩士。
                擁有 18 年留學代辦經驗，曾服務於留學通（2007-2016）、學無界（2016-2020）、瑋琳 PM（2020-2022），
                2022 年重返學無界至今。
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, margin: 0 }}>
                Jason 熟悉美國、加拿大、英國、愛爾蘭、紐西蘭、澳洲及東南亞各國教育體系，
                擅長為學生量身打造最適合的留學計畫。近年特別專注於泰國留學市場，
                協助許多台灣學生成功申請泰國知名大學與國際學校。
              </p>
            </div>
          </section>

          {/* 聯絡我們 */}
          <section style={{ marginBottom: 'var(--space-10)' }}>
            <h2 style={{
              fontFamily: "'Fraunces', 'Noto Serif TC', serif",
              color: 'var(--text)',
              fontSize: '1.5rem',
              fontWeight: 600,
              marginBottom: 'var(--space-4)',
            }}>
              聯絡我們
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 'var(--space-6)' }}>
              如果您對泰國留學有任何疑問，歡迎隨時聯繫我們：
            </p>
            <div style={{
              background: 'var(--bg-alt)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-6)',
            }}>
              <ul style={{ color: 'var(--text-muted)', lineHeight: 2, listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: 'var(--space-3)' }}>
                  <strong style={{ color: 'var(--text)' }}>LINE 諮詢</strong>：
                  <a href="https://lin.ee/Tx17iiE" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>
                    https://lin.ee/Tx17iiE
                  </a>
                </li>
                <li>
                  <strong style={{ color: 'var(--text)' }}>官方網站</strong>：
                  <a href="https://studywb.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>
                    https://studywb.com
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>

        <CTABanner />
      </article>
    </div>
  );
}
