# 泰國留學網 - 視覺設計規格書

> 學無界 Study Without Boundary × 泰國留學主題網站
> 設計日期：2026-03-21

---

## 📐 設計系統

### 配色方案（Color Palette）

```css
:root {
  /* 主色調 */
  --primary: #E85D04;     /* 學無界品牌橙 - 溫暖、活力、專業 */
  --secondary: #0066CC;   /* 泰國藍 - 信任、國際化、穩重 */
  
  /* 背景色 */
  --background: #FFFFFF;  /* 主背景 */
  --light-bg: #F8F9FA;    /* 次要背景、卡片背景 */
  --dark-bg: #1A1A1A;     /* Footer 深色背景 */
  
  /* 文字色 */
  --foreground: #1A1A1A;  /* 主要文字 */
  --muted: #666666;       /* 次要文字、說明文字 */
  --white: #FFFFFF;       /* 深色背景上的文字 */
  
  /* 邊框色 */
  --border: #E5E7EB;      /* 一般邊框 */
  --border-hover: #E85D04;/* Hover 時的邊框色 */
  
  /* 狀態色 */
  --success: #10B981;     /* 成功狀態 */
  --warning: #F59E0B;     /* 警告狀態 */
  --error: #EF4444;       /* 錯誤狀態 */
  
  /* 漸層 */
  --gradient-primary: linear-gradient(135deg, #E85D04, #0066CC);
  --gradient-hero: linear-gradient(135deg, rgba(232, 93, 4, 0.9), rgba(0, 102, 204, 0.9));
}
```

### 字體設定（Typography）

```css
/* 字體家族 */
--font-sans: 'Noto Sans TC', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-heading: 'Montserrat', 'Noto Sans TC', sans-serif;
--font-mono: 'Fira Code', 'Consolas', monospace;

/* 字體大小 */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */

/* 行高 */
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;

/* 字重 */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### 響應式斷點（Breakpoints）

```css
/* Mobile First 設計 */
--screen-sm: 640px;   /* 手機橫式、小平板 */
--screen-md: 768px;   /* 平板直式 */
--screen-lg: 1024px;  /* 平板橫式、小筆電 */
--screen-xl: 1280px;  /* 桌機 */
--screen-2xl: 1536px; /* 大螢幕 */

/* Media Query 寫法 */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

### 間距系統（Spacing）

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### 陰影系統（Shadows）

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
--shadow-card: 0 2px 8px rgba(0, 0, 0, 0.08);
--shadow-card-hover: 0 8px 24px rgba(232, 93, 4, 0.15);
```

---

## 🧩 元件設計規格

### 1. Header（導航列）

**用途**：全站頂部導航，固定於頁面頂端

**規格**：
```css
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #FFFFFF;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  height: 64px; /* desktop */
  height: 56px; /* mobile */
}

/* Logo */
.header-logo {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--primary);
}

/* 導航連結 */
.nav-links {
  display: flex;
  gap: var(--space-8);
}

.nav-link {
  font-size: var(--text-base);
  font-weight: 500;
  color: var(--foreground);
  transition: color 0.2s;
}

.nav-link:hover {
  color: var(--primary);
}

.nav-link.active {
  color: var(--primary);
  border-bottom: 2px solid var(--primary);
}

/* 手機版漢堡選單 */
.hamburger {
  display: none; /* desktop 隱藏 */
  width: 24px;
  height: 24px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .nav-links {
    display: none; /* 預設隱藏 */
  }
  
  .nav-links.open {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 56px;
    left: 0;
    right: 0;
    background: #FFFFFF;
    padding: var(--space-4);
    box-shadow: var(--shadow-lg);
  }
  
  .hamburger {
    display: block;
  }
}
```

**導航項目**：
1. 首頁 `/`
2. 泰國留學 `/thai-university`
3. 國際學校 `/international-schools`
4. 夏令營 `/summer-camp`
5. 關於我們 `/about`

---

### 2. Footer（頁尾）

**用途**：全站底部資訊區

**規格**：
```css
.footer {
  background: var(--dark-bg);
  color: var(--white);
  padding: var(--space-16) 0 var(--space-8);
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-8);
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }
}

.footer-title {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: var(--text-lg);
  margin-bottom: var(--space-4);
}

.footer-link {
  display: block;
  color: rgba(255, 255, 255, 0.8);
  font-size: var(--text-sm);
  margin-bottom: var(--space-2);
  transition: color 0.2s;
}

.footer-link:hover {
  color: var(--white);
}

.footer-social {
  display: flex;
  gap: var(--space-4);
}

.footer-social-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.footer-social-icon:hover {
  background: var(--primary);
}
```

**4 欄內容**：

| 欄位 | 內容 |
|------|------|
| 關於學無界 | 品牌簡介、18 年經驗、服務據點 |
| 快速連結 | 泰國留學、國際學校、夏令營、部落格 |
| 聯絡資訊 | LINE: https://lin.ee/Tx17iiE<br>Email: service@studywb.com<br>電話: +886-2-XXXX-XXXX |
| 社群媒體 | Facebook、Instagram、LINE OA 圖示 |

**底部版權列**：
```css
.footer-bottom {
  margin-top: var(--space-8);
  padding-top: var(--space-6);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.6);
}
```

---

### 3. ArticleCard（文章卡片）

**用途**：文章列表、精選文章、相關推薦

**規格**：
```css
.article-card {
  background: #FFFFFF;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.article-card:hover {
  border-color: var(--primary);
  box-shadow: var(--shadow-card-hover);
  transform: translateY(-4px);
}

/* Feature Image - 16:9 比例 */
.article-card-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

/* 分類標籤 - 膠囊狀 */
.article-card-tag {
  display: inline-block;
  padding: var(--space-1) var(--space-3);
  background: var(--primary);
  color: #FFFFFF;
  font-size: var(--text-xs);
  font-weight: 600;
  border-radius: 9999px;
  margin-bottom: var(--space-2);
}

/* 標題 - 最多兩行 */
.article-card-title {
  font-family: var(--font-heading);
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--foreground);
  line-height: var(--leading-tight);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: var(--space-2);
}

/* 摘要 - 最多三行 */
.article-card-excerpt {
  font-size: var(--text-sm);
  color: var(--muted);
  line-height: var(--leading-relaxed);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: var(--space-4);
}

/* 卡片內容區 */
.article-card-content {
  padding: var(--space-4);
}
```

**網格佈局**：
```css
.articles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

@media (max-width: 1024px) {
  .articles-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .articles-grid {
    grid-template-columns: 1fr;
  }
}
```

---

### 4. CTABanner（CTA 橫幅）

**用途**：引導用戶諮詢或了解更多

**規格**：
```css
.cta-banner {
  background: var(--gradient-primary);
  padding: var(--space-12) var(--space-8);
  border-radius: 16px;
  text-align: center;
  color: #FFFFFF;
  margin: var(--space-16) 0;
}

.cta-banner-title {
  font-family: var(--font-heading);
  font-size: var(--text-3xl);
  font-weight: 700;
  margin-bottom: var(--space-4);
}

.cta-banner-description {
  font-size: var(--text-lg);
  opacity: 0.9;
  margin-bottom: var(--space-8);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  gap: var(--space-4);
  justify-content: center;
  flex-wrap: wrap;
}

/* 主按鈕 - 白色背景 + 橙色文字 */
.cta-button-primary {
  background: #FFFFFF;
  color: var(--primary);
  padding: var(--space-3) var(--space-6);
  font-size: var(--text-base);
  font-weight: 600;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}

.cta-button-primary:hover {
  background: var(--light-bg);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* 次按鈕 - 透明邊框 + 白色文字 */
.cta-button-secondary {
  background: transparent;
  color: #FFFFFF;
  padding: var(--space-3) var(--space-6);
  font-size: var(--text-base);
  font-weight: 600;
  border-radius: 8px;
  border: 2px solid #FFFFFF;
  cursor: pointer;
  transition: all 0.2s;
}

.cta-button-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}
```

**按鈕連結**：
- 主按鈕「免費諮詢」→ https://lin.ee/Tx17iiE
- 次按鈕「了解更多」→ https://studywb.com

---

### 5. QuickLinkCard（快速連結卡片）

**用途**：首頁四大分類入口

**規格**：
```css
.quick-link-card {
  background: #FFFFFF;
  padding: var(--space-6);
  border-radius: 12px;
  text-align: center;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
  cursor: pointer;
}

.quick-link-card:hover {
  border-color: var(--primary);
  box-shadow: var(--shadow-card-hover);
  transform: translateY(-4px);
}

.quick-link-icon {
  font-size: 3rem;
  margin-bottom: var(--space-4);
}

.quick-link-title {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--foreground);
  margin-bottom: var(--space-2);
}

.quick-link-description {
  font-size: var(--text-sm);
  color: var(--muted);
}
```

**4 個卡片**：
1. 泰國大學 🏛️
2. 國際學程 📚
3. 國際學校 🏫
4. 夏令營 ⛺

---

### 6. AdvantageCard（優勢卡片）

**用途**：Why Thailand 區塊的 6 個優勢

**規格**：
```css
.advantage-card {
  background: var(--light-bg);
  padding: var(--space-6);
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
}

.advantage-card:hover {
  background: #FFFFFF;
  box-shadow: var(--shadow-md);
}

.advantage-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto var(--space-4);
  background: var(--gradient-primary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  font-size: var(--text-xl);
}

.advantage-title {
  font-family: var(--font-heading);
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--foreground);
  margin-bottom: var(--space-2);
}

.advantage-description {
  font-size: var(--text-sm);
  color: var(--muted);
  line-height: var(--leading-relaxed);
}
```

**6 個優勢**：
1. 💰 學費便宜
2. 🌍 英文授課
3. 🏯 文化相近
4. 📋 簽證友善
5. 💼 就業機會
6. 🎓 國際學歷

---

## 📄 頁面佈局規格

### 首頁（/）

#### Hero Section
```css
.hero {
  background: var(--gradient-hero),
              url('/images/hero-bg.jpg') center/cover;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  padding: var(--space-20) var(--space-8);
}

.hero-title {
  font-family: var(--font-heading);
  font-size: var(--text-5xl);
  font-weight: 700;
  margin-bottom: var(--space-4);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.hero-subtitle {
  font-size: var(--text-xl);
  opacity: 0.95;
  margin-bottom: var(--space-8);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}
```

**內容**：
- 主標題：「泰國留學完整指南」
- 副標題：「學無界擁有 18 年留學代辦經驗，協助您探索泰國優質教育資源，開啟國際化學習之旅」
- CTA 按鈕：「免費諮詢」、「查看攻略」

#### Quick Links Section
```css
.quick-links-section {
  padding: var(--space-16) var(--space-8);
  background: var(--light-bg);
}

.quick-links-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
}

@media (max-width: 1024px) {
  .quick-links-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .quick-links-grid {
    grid-template-columns: 1fr;
  }
}
```

#### Why Thailand Section
```css
.why-thailand-section {
  padding: var(--space-16) var(--space-8);
}

.why-thailand-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

@media (max-width: 768px) {
  .why-thailand-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .why-thailand-grid {
    grid-template-columns: 1fr;
  }
}
```

#### Featured Articles Section
```css
.featured-articles-section {
  padding: var(--space-16) var(--space-8);
  background: var(--light-bg);
}

.section-title {
  font-family: var(--font-heading);
  font-size: var(--text-3xl);
  font-weight: 700;
  text-align: center;
  margin-bottom: var(--space-12);
}
```

---

### 列表頁（/thai-university 等）

**佈局**：
```css
.list-page {
  padding-top: 80px; /* 為 fixed header 留空間 */
}

.breadcrumb {
  padding: var(--space-4) var(--space-8);
  background: var(--light-bg);
  font-size: var(--text-sm);
}

.page-header {
  padding: var(--space-12) var(--space-8);
  text-align: center;
}

.page-title {
  font-family: var(--font-heading);
  font-size: var(--text-4xl);
  font-weight: 700;
  margin-bottom: var(--space-4);
}

.page-description {
  font-size: var(--text-lg);
  color: var(--muted);
  max-width: 700px;
  margin: 0 auto;
}

.list-layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: var(--space-8);
  padding: var(--space-8);
}

@media (max-width: 1024px) {
  .list-layout {
    grid-template-columns: 1fr;
  }
}

.sidebar {
  /* 手機版收合 */
}

@media (max-width: 1024px) {
  .sidebar {
    display: none;
  }
  
  .sidebar.open {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 280px;
    height: 100vh;
    background: #FFFFFF;
    z-index: 1001;
    box-shadow: var(--shadow-xl);
    padding: var(--space-4);
  }
}
```

---

### 詳情頁（/thai-university/[slug]）

**佈局**：
```css
.detail-page {
  padding-top: 80px;
}

.feature-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.article-container {
  max-width: 768px;
  margin: 0 auto;
  padding: var(--space-12) var(--space-8);
}

.article-header {
  margin-bottom: var(--space-8);
}

.article-title {
  font-family: var(--font-heading);
  font-size: var(--text-4xl);
  font-weight: 700;
  line-height: var(--leading-tight);
  margin-bottom: var(--space-4);
}

.article-meta {
  display: flex;
  gap: var(--space-4);
  font-size: var(--text-sm);
  color: var(--muted);
}

.article-content {
  font-size: var(--text-lg);
  line-height: var(--leading-relaxed);
}

.article-content h2 {
  font-family: var(--font-heading);
  font-size: var(--text-2xl);
  font-weight: 600;
  margin-top: var(--space-10);
  margin-bottom: var(--space-4);
}

.article-content p {
  margin-bottom: var(--space-6);
}

.article-content img {
  width: 100%;
  border-radius: 8px;
  margin: var(--space-8) 0;
}

/* 作者介紹 */
.author-box {
  display: flex;
  gap: var(--space-4);
  padding: var(--space-6);
  background: var(--light-bg);
  border-radius: 12px;
  margin: var(--space-12) 0;
}

.author-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
}

.author-name {
  font-weight: 600;
  font-size: var(--text-lg);
}

.author-bio {
  font-size: var(--text-sm);
  color: var(--muted);
  margin-top: var(--space-2);
}

/* 相關文章 */
.related-articles {
  margin: var(--space-16) 0;
}

.related-articles-title {
  font-family: var(--font-heading);
  font-size: var(--text-2xl);
  font-weight: 600;
  margin-bottom: var(--space-8);
}
```

---

## 🎨 圖片生成提示詞清單

### 使用 FAL AI 生成圖片

**API 端點**：`https://fal.run/fal-ai/fast-lightning-sdxl`

---

### 1. Hero 背景圖（首頁主視覺）

**用途**：首頁 Hero Section 背景，全寬漸層疊加

**尺寸**：1920 × 1080px（16:9）

**提示詞**：
```
Modern Thai university campus with traditional Thai architecture, 
golden spires and ornate roofs, bright sunny day with blue sky, 
diverse international students walking on green lawn, vibrant 
orange and blue color scheme, professional education website 
hero image, high quality, photorealistic, 16:9 aspect ratio
```

**負面提示詞**：
```
blurry, low quality, dark, gloomy, text overlay, watermark
```

---

### 2. 泰國大學卡片圖

**用途**：Quick Links - 泰國大學分類卡片

**尺寸**：800 × 600px（4:3）

**提示詞**：
```
Prestigious Thai university building, golden hour lighting, 
elegant Thai architecture with modern facilities, academic 
atmosphere, students in graduation gowns, warm orange tones, 
professional photography, high quality, 4:3 aspect ratio
```

---

### 3. 國際學程卡片圖

**用途**：Quick Links - 國際學程分類卡片

**尺寸**：800 × 600px（4:3）

**提示詞**：
```
International students in modern classroom, diverse group of 
Asian and Western students, collaborative learning environment, 
bright and airy space, educational setting, warm lighting, 
professional photography, high quality, 4:3 aspect ratio
```

---

### 4. 國際學校卡片圖

**用途**：Quick Links - 國際學校分類卡片

**尺寸**：800 × 600px（4:3）

**提示詞**：
```
International school campus in Bangkok, modern architecture 
with green spaces, children playing in playground, colorful 
and inviting atmosphere, blue sky, professional photography, 
high quality, 4:3 aspect ratio
```

---

### 5. 夏令營卡片圖

**用途**：Quick Links - 夏令營分類卡片

**尺寸**：800 × 600px（4:3）

**提示詞**：
```
Thai summer camp activities, children learning English outdoors, 
group of happy kids in outdoor activities, lush tropical 
environment, adventure and fun, bright sunny day, professional 
photography, high quality, 4:3 aspect ratio
```

---

### 6. Why Thailand 區塊背景圖（選用）

**用途**：Why Thailand Section 背景，增加視覺層次

**尺寸**：1920 × 800px

**提示詞**：
```
Aerial view of Bangkok cityscape with Chao Phraya river, 
modern skyscrapers and traditional temples, vibrant city life, 
warm sunset colors, orange and blue color palette, professional 
photography, high quality, panoramic aspect ratio
```

---

## 📊 圖片生成總覽

| 序號 | 圖片名稱 | 尺寸 | 用途 | 優先級 |
|------|---------|------|------|--------|
| 1 | hero-bg.jpg | 1920×1080 | Hero Section 背景 | ⭐⭐⭐ 高 |
| 2 | thai-university.jpg | 800×600 | 泰國大學卡片 | ⭐⭐⭐ 高 |
| 3 | international-program.jpg | 800×600 | 國際學程卡片 | ⭐⭐⭐ 高 |
| 4 | international-school.jpg | 800×600 | 國際學校卡片 | ⭐⭐⭐ 高 |
| 5 | summer-camp.jpg | 800×600 | 夏令營卡片 | ⭐⭐⭐ 高 |
| 6 | why-thailand-bg.jpg | 1920×800 | Why Thailand 背景（選用） | ⭐⭐ 中 |

**建議生成數量**：5-6 張
**必須生成**：前 5 張（Hero + 4 張分類卡片）
**選用**：第 6 張（視覺增強用）

---

## 🛠️ 技術建議

### 圖片優化
- 使用 WebP 格式（兼容 JPG fallback）
- Hero 圖：壓縮至 200-300KB
- 卡片圖：壓縮至 80-120KB
- 使用 `srcset` 提供多種解析度

### 效能優化
- 圖片 lazy loading
- Critical CSS inline
- 字體預載（preload）
- 使用 CDN 分發靜態資源

### 無障礙設計
- 所有圖片提供 `alt` 文字
- 色彩對比度符合 WCAG 2.1 AA 標準
- 鍵盤導航支援
- 適當的 focus 狀態

---

## 📝 設計原則

1. **品牌一致性**：貫徹學無界品牌橙色（#E85D04）與泰國藍（#0066CC）
2. **專業可信**：乾淨的排版、適當的留白、清晰的層級
3. **行動導向**：每個頁面都有明確的 CTA，引導諮詢
4. **響應式優先**：Mobile First 設計，確保手機體驗流暢
5. **視覺吸引力**：大量使用高品質圖片，增強說服力

---

**文件版本**：v1.0
**最後更新**：2026-03-21
**設計者**：Andrea (AI Assistant)
