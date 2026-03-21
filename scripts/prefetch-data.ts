#!/usr/bin/env ts-node
/**
 * 預先抓取 Notion 資料並存成 JSON 檔案
 * 在 build 前執行：npm run prefetch
 */

import { Client } from '@notionhq/client';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const DATABASE_IDS = {
  THAI_UNIVERSITY: '3292b55d-2c6a-812b-8735-e914c144d512', // 🎓 泰國大學
  THAI_PROGRAM: '3292b55d-2c6a-81fd-95e5-f58e2a2fab78',
  THAI_SCHOOL: '3292b55d-2c6a-815f-9abb-d34d09aad1d6',
  THAI_CAMP: '3292b55d-2c6a-8185-93dc-cb1cd377f6a9',
  BLOG: '3292b55d-2c6a-8179-84fc-f175595e478d',
};

async function fetchDatabase(databaseId: string) {
  const response = await notion.databases.query({
    database_id: databaseId,
    // 移除 Status 過濾，抓取所有資料
  });

  return response.results.map((page: any) => {
    const props = page.properties;
    return {
      id: page.id,
      slug: props.Slug?.rich_text?.[0]?.plain_text || '',
      name: props.Name?.title?.[0]?.plain_text || props.Title?.title?.[0]?.plain_text || '',
      title: props.Name?.title?.[0]?.plain_text || props.Title?.title?.[0]?.plain_text || '',
      type: props.Type?.select?.name || '',
      city: props.City?.select?.name || '',
      category: props.Category?.select?.name || '',
      articleType: props.Article_Type?.select?.name || '',
      tags: props.Tags?.multi_select?.map((t: any) => t.name) || [],
      featureImage: props.FeatureImage?.url || props.FeatureImage?.files?.[0]?.file?.url || '',
      excerpt: props.Excerpt?.rich_text?.[0]?.plain_text || props.Introduction?.rich_text?.[0]?.plain_text || '',
      introduction: props.Introduction?.rich_text?.[0]?.plain_text || '',
      status: props.Status?.select?.name || '',
      publishedAt: props.PublishedAt?.date?.start || '',
      degreeLevel: props.Degree_Level?.select?.name || '',
      field: props.Field?.select?.name || '',
      curriculum: props.Curriculum?.select?.name || '',
      gradeLevel: props.Grade_Level?.select?.name || '',
      campType: props.Camp_Type?.select?.name || '',
      ageRange: props.Age_Range?.select?.name || '',
      showCTA: props.Show_CTA?.checkbox || false,
      ctaType: props.CTA_Type?.select?.name || '',
      author: props.Author?.rich_text?.[0]?.plain_text || 'Jason Huang',
    };
  });
}

async function main() {
  console.log('預先抓取 Notion 資料...');

  const dataDir = path.join(__dirname, '../public/data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  // 抓取各資料庫
  console.log('抓取泰國大學資料...');
  const universities = await fetchDatabase(DATABASE_IDS.THAI_UNIVERSITY);
  fs.writeFileSync(path.join(dataDir, 'universities.json'), JSON.stringify(universities, null, 2));
  console.log(`✓ 泰國大學：${universities.length} 筆`);

  console.log('抓取泰國國際學程資料...');
  const programs = await fetchDatabase(DATABASE_IDS.THAI_PROGRAM);
  fs.writeFileSync(path.join(dataDir, 'programs.json'), JSON.stringify(programs, null, 2));
  console.log(`✓ 泰國國際學程：${programs.length} 筆`);

  console.log('抓取泰國國際學校資料...');
  const schools = await fetchDatabase(DATABASE_IDS.THAI_SCHOOL);
  fs.writeFileSync(path.join(dataDir, 'schools.json'), JSON.stringify(schools, null, 2));
  console.log(`✓ 泰國國際學校：${schools.length} 筆`);

  console.log('抓取泰國夏令營資料...');
  const camps = await fetchDatabase(DATABASE_IDS.THAI_CAMP);
  fs.writeFileSync(path.join(dataDir, 'camps.json'), JSON.stringify(camps, null, 2));
  console.log(`✓ 泰國夏令營：${camps.length} 筆`);

  console.log('抓取部落格文章資料...');
  const blogs = await fetchDatabase(DATABASE_IDS.BLOG);
  fs.writeFileSync(path.join(dataDir, 'blogs.json'), JSON.stringify(blogs, null, 2));
  console.log(`✓ 部落格文章：${blogs.length} 筆`);

  console.log('預先抓取完成！');
}

main().catch(console.error);
