# GitHub Repository 建立指令

## 步驟 1：初始化 Git

```bash
cd /root/.openclaw/workspace/projects/thai-study-website
git init
git add .
git commit -m "Initial commit: Thai Study Website

- Next.js 14 with App Router
- Tailwind CSS styling
- Notion API integration (5 databases)
- 8 reusable components
- All route pages created
- Build successful"
```

## 步驟 2：建立 GitHub Repository

```bash
gh repo create thai-study-website --public --source=. --push --description "泰國留學資訊網站 - Thai Study Information Website"
```

## 步驟 3：確認推送成功

```bash
git remote -v
git log --oneline
```

## 預期結果

- GitHub repo URL: `https://github.com/aceonaceon/thai-study-website`
- 可在瀏覽器查看所有檔案

## 下一步

建立完成後，前往 Cloudflare Pages 設定部署：
1. 連結 GitHub repo
2. Framework preset: Next.js
3. Build command: `npm run build`
4. Output directory: `.next`
5. 環境變數：`NOTION_API_KEY`
6. 域名：`thai.studywb.com`
