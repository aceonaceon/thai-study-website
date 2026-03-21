import { Client } from '@notionhq/client';
import { NotionAPI } from 'notion-client';
import type { ExtendedRecordMap } from 'notion-types';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

// react-notion-x API instance
const notionX = new NotionAPI();

// Database IDs
export const DATABASE_IDS = {
  THAI_UNIVERSITY: '3292b55d-2c6a-812b-8735-e914c144d512',
  THAI_PROGRAM: '3292b55d-2c6a-81fd-95e5-f58e2a2fab78',
  THAI_SCHOOL: '3292b55d-2c6a-815f-9abb-d34d09aad1d6',
  THAI_CAMP: '3292b55d-2c6a-8185-93dc-cb1cd377f6a9',
  BLOG: '3292b55d-2c6a-8179-84fc-f175595e478d',
} as const;

// Types
export interface ThaiUniversity {
  id: string;
  slug: string;
  name: string;
  type: string;
  city: string;
  qsRanking?: number;
  website?: string;
  logo?: string;
  featureImage?: string;
  introduction?: string;
  status: string;
  publishedAt?: string;
}

export interface ThaiProgram {
  id: string;
  slug: string;
  name: string;
  degreeLevel: string;
  field: string;
  duration?: string;
  language?: string;
  gpaRequirement?: string;
  toeflRequirement?: string;
  ieltsRequirement?: string;
  tuitionPerYear?: number;
  curriculum?: string;
  careerPath?: string;
  featureImage?: string;
  status: string;
  publishedAt?: string;
}

export interface ThaiSchool {
  id: string;
  slug: string;
  name: string;
  curriculum: string;
  gradeLevel: string;
  city: string;
  tuitionPerYear?: number;
  boarding: string;
  website?: string;
  featureImage?: string;
  status: string;
  publishedAt?: string;
}

export interface ThaiCamp {
  id: string;
  slug: string;
  name: string;
  campType: string;
  ageRange: string;
  city: string;
  durationWeeks?: number;
  fee?: number;
  organizer?: string;
  website?: string;
  featureImage?: string;
  status: string;
  publishedAt?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  articleType: string;
  category: string;
  tags: string[];
  showCTA: boolean;
  ctaType?: string;
  featureImage?: string;
  excerpt?: string;
  content?: string;
  author?: string;
  status: string;
  publishedAt?: string;
  seoTitle?: string;
  seoDescription?: string;
}

// Helper functions
function getRichTextProperty(property: any): string {
  if (!property || !property.rich_text) return '';
  return property.rich_text.map((t: any) => t.plain_text).join('');
}

function getSelectProperty(property: any): string {
  return property?.select?.name || '';
}

function getMultiSelectProperty(property: any): string[] {
  if (!property?.multi_select) return [];
  return property.multi_select.map((s: any) => s.name);
}

function getNumberProperty(property: any): number | undefined {
  return property?.number ?? undefined;
}

function getDateProperty(property: any): string | undefined {
  return property?.date?.start || undefined;
}

function getUrlProperty(property: any): string | undefined {
  return property?.url || undefined;
}

function getCheckboxProperty(property: any): boolean {
  return property?.checkbox || false;
}

// Fetch functions
export async function getThaiUniversities(): Promise<ThaiUniversity[]> {
  try {
    // 嘗試抓 Published 文章
    let response = await notion.databases.query({
      database_id: DATABASE_IDS.THAI_UNIVERSITY,
      filter: {
        property: 'Status',
        select: { equals: 'Published' },
      },
    });

    let results = response.results;
    
    // 如果沒有 Published 文章，嘗試抓 Ready（審核中）
    if (results.length === 0) {
      const readyResponse = await notion.databases.query({
        database_id: DATABASE_IDS.THAI_UNIVERSITY,
        filter: {
          property: 'Status',
          select: { equals: 'Ready' },
        },
      });
      results = readyResponse.results;
    }
    
    // 如果還是沒有，嘗試抓審核中
    if (results.length === 0) {
      const reviewResponse = await notion.databases.query({
        database_id: DATABASE_IDS.THAI_UNIVERSITY,
        filter: {
          property: 'Status',
          select: { equals: '審核中' },
        },
      });
      results = reviewResponse.results;
    }
    
    // 如果還是沒有，嘗試抓草稿（開發階段）
    if (results.length === 0) {
      const draftResponse = await notion.databases.query({
        database_id: DATABASE_IDS.THAI_UNIVERSITY,
        filter: {
          property: 'Status',
          select: { equals: 'Draft' },
        },
      });
      results = draftResponse.results;
    }
    
    // 如果還是沒有，嘗試抓草稿（中文）
    if (results.length === 0) {
      const draftTwResponse = await notion.databases.query({
        database_id: DATABASE_IDS.THAI_UNIVERSITY,
        filter: {
          property: 'Status',
          select: { equals: '草稿' },
        },
      });
      results = draftTwResponse.results;
    }

    return results.map((page: any) => ({
      id: page.id,
      slug: getRichTextProperty(page.properties.Slug),
      name: page.properties.Name?.title?.[0]?.plain_text || '',
      type: getSelectProperty(page.properties.Type),
      city: getSelectProperty(page.properties.City),
      qsRanking: getNumberProperty(page.properties.QS_Ranking),
      website: getUrlProperty(page.properties.Website),
      logo: getUrlProperty(page.properties.Logo),
      featureImage: getUrlProperty(page.properties.FeatureImage),
      introduction: getRichTextProperty(page.properties.Introduction),
      status: getSelectProperty(page.properties.Status),
      publishedAt: getDateProperty(page.properties.PublishedAt),
    }));
  } catch (error) {
    console.error('Error fetching Thai universities:', error);
    return [];
  }
}

export async function getThaiPrograms(): Promise<ThaiProgram[]> {
  try {
    const response = await notion.databases.query({
      database_id: DATABASE_IDS.THAI_PROGRAM,
      filter: {
        property: 'Status',
        select: { equals: 'Published' },
      },
    });

    return response.results.map((page: any) => ({
      id: page.id,
      slug: getRichTextProperty(page.properties.Slug),
      name: page.properties.Program_Name?.title?.[0]?.plain_text || '',
      degreeLevel: getSelectProperty(page.properties.Degree_Level),
      field: getSelectProperty(page.properties.Field),
      duration: getRichTextProperty(page.properties.Duration),
      language: getSelectProperty(page.properties.Language),
      gpaRequirement: getRichTextProperty(page.properties.GPA_Requirement),
      toeflRequirement: getRichTextProperty(page.properties.TOEFL_Requirement),
      ieltsRequirement: getRichTextProperty(page.properties.IELTS_Requirement),
      tuitionPerYear: getNumberProperty(page.properties.Tuition_Per_Year),
      curriculum: getRichTextProperty(page.properties.Curriculum),
      careerPath: getRichTextProperty(page.properties.Career_Path),
      featureImage: getUrlProperty(page.properties.FeatureImage),
      status: getSelectProperty(page.properties.Status),
      publishedAt: getDateProperty(page.properties.PublishedAt),
    }));
  } catch (error) {
    console.error('Error fetching Thai programs:', error);
    return [];
  }
}

export async function getThaiSchools(): Promise<ThaiSchool[]> {
  try {
    const response = await notion.databases.query({
      database_id: DATABASE_IDS.THAI_SCHOOL,
      filter: {
        property: 'Status',
        select: { equals: 'Published' },
      },
    });

    return response.results.map((page: any) => ({
      id: page.id,
      slug: getRichTextProperty(page.properties.Slug),
      name: page.properties.School_Name?.title?.[0]?.plain_text || '',
      curriculum: getSelectProperty(page.properties.Curriculum),
      gradeLevel: getSelectProperty(page.properties.Grade_Level),
      city: getSelectProperty(page.properties.City),
      tuitionPerYear: getNumberProperty(page.properties.Tuition_Per_Year),
      boarding: getSelectProperty(page.properties.Boarding),
      website: getUrlProperty(page.properties.Website),
      featureImage: getUrlProperty(page.properties.FeatureImage),
      status: getSelectProperty(page.properties.Status),
      publishedAt: getDateProperty(page.properties.PublishedAt),
    }));
  } catch (error) {
    console.error('Error fetching Thai schools:', error);
    return [];
  }
}

export async function getThaiCamps(): Promise<ThaiCamp[]> {
  try {
    const response = await notion.databases.query({
      database_id: DATABASE_IDS.THAI_CAMP,
      filter: {
        property: 'Status',
        select: { equals: 'Published' },
      },
    });

    return response.results.map((page: any) => ({
      id: page.id,
      slug: getRichTextProperty(page.properties.Slug),
      name: page.properties.Camp_Name?.title?.[0]?.plain_text || '',
      campType: getSelectProperty(page.properties.Camp_Type),
      ageRange: getSelectProperty(page.properties.Age_Range),
      city: getSelectProperty(page.properties.City),
      durationWeeks: getNumberProperty(page.properties.Duration_Weeks),
      fee: getNumberProperty(page.properties.Fee),
      organizer: getRichTextProperty(page.properties.Organizer),
      website: getUrlProperty(page.properties.Website),
      featureImage: getUrlProperty(page.properties.FeatureImage),
      status: getSelectProperty(page.properties.Status),
      publishedAt: getDateProperty(page.properties.PublishedAt),
    }));
  } catch (error) {
    console.error('Error fetching Thai camps:', error);
    return [];
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await notion.databases.query({
      database_id: DATABASE_IDS.BLOG,
      filter: {
        property: 'Status',
        select: { equals: 'Published' },
      },
    });

    return response.results.map((page: any) => ({
      id: page.id,
      slug: getRichTextProperty(page.properties.Slug),
      title: page.properties.Title?.title?.[0]?.plain_text || '',
      articleType: getSelectProperty(page.properties.Article_Type),
      category: getSelectProperty(page.properties.Category),
      tags: getMultiSelectProperty(page.properties.Tags),
      showCTA: getCheckboxProperty(page.properties.Show_CTA),
      ctaType: getSelectProperty(page.properties.CTA_Type),
      featureImage: getUrlProperty(page.properties.FeatureImage),
      excerpt: getRichTextProperty(page.properties.Excerpt),
      content: getRichTextProperty(page.properties.Content),
      author: getRichTextProperty(page.properties.Author),
      status: getSelectProperty(page.properties.Status),
      publishedAt: getDateProperty(page.properties.PublishedAt),
      seoTitle: getRichTextProperty(page.properties.SEO_Title),
      seoDescription: getRichTextProperty(page.properties.SEO_Description),
  }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

// Get single item by slug
export async function getThaiUniversityBySlug(slug: string): Promise<ThaiUniversity | null> {
  // 嘗試所有可能的狀態值
  const statusOptions = ['Published', 'Ready', '審核中', 'Draft', '草稿'];
  
  for (const status of statusOptions) {
    const response = await notion.databases.query({
      database_id: DATABASE_IDS.THAI_UNIVERSITY,
      filter: {
        and: [
          { property: 'Slug', rich_text: { equals: slug } },
          { property: 'Status', select: { equals: status } },
        ],
      },
    });
    
    if (response.results.length > 0) {
      const page = response.results[0] as any;
      return {
        id: page.id,
        slug: getRichTextProperty(page.properties.Slug),
        name: page.properties.Name?.title?.[0]?.plain_text || '',
        type: getSelectProperty(page.properties.Type),
        city: getSelectProperty(page.properties.City),
        qsRanking: getNumberProperty(page.properties.QS_Ranking),
        website: getUrlProperty(page.properties.Website),
        logo: getUrlProperty(page.properties.Logo),
        featureImage: getUrlProperty(page.properties.FeatureImage),
        introduction: getRichTextProperty(page.properties.Introduction),
        status: getSelectProperty(page.properties.Status),
        publishedAt: getDateProperty(page.properties.PublishedAt),
      };
    }
  }
  
  return null;
}

export async function getThaiProgramBySlug(slug: string): Promise<ThaiProgram | null> {
  const response = await notion.databases.query({
    database_id: DATABASE_IDS.THAI_PROGRAM,
    filter: {
      and: [
        { property: 'Slug', rich_text: { equals: slug } },
        { property: 'Status', select: { equals: 'Published' } },
      ],
    },
  });

  if (response.results.length === 0) return null;

  const page = response.results[0] as any;
  return {
    id: page.id,
    slug: getRichTextProperty(page.properties.Slug),
    name: page.properties.Program_Name?.title?.[0]?.plain_text || '',
    degreeLevel: getSelectProperty(page.properties.Degree_Level),
    field: getSelectProperty(page.properties.Field),
    duration: getRichTextProperty(page.properties.Duration),
    language: getSelectProperty(page.properties.Language),
    gpaRequirement: getRichTextProperty(page.properties.GPA_Requirement),
    toeflRequirement: getRichTextProperty(page.properties.TOEFL_Requirement),
    ieltsRequirement: getRichTextProperty(page.properties.IELTS_Requirement),
    tuitionPerYear: getNumberProperty(page.properties.Tuition_Per_Year),
    curriculum: getRichTextProperty(page.properties.Curriculum),
    careerPath: getRichTextProperty(page.properties.Career_Path),
    featureImage: getUrlProperty(page.properties.FeatureImage),
    status: getSelectProperty(page.properties.Status),
    publishedAt: getDateProperty(page.properties.PublishedAt),
  };
}

export async function getThaiSchoolBySlug(slug: string): Promise<ThaiSchool | null> {
  const response = await notion.databases.query({
    database_id: DATABASE_IDS.THAI_SCHOOL,
    filter: {
      and: [
        { property: 'Slug', rich_text: { equals: slug } },
        { property: 'Status', select: { equals: 'Published' } },
      ],
    },
  });

  if (response.results.length === 0) return null;

  const page = response.results[0] as any;
  return {
    id: page.id,
    slug: getRichTextProperty(page.properties.Slug),
    name: page.properties.School_Name?.title?.[0]?.plain_text || '',
    curriculum: getSelectProperty(page.properties.Curriculum),
    gradeLevel: getSelectProperty(page.properties.Grade_Level),
    city: getSelectProperty(page.properties.City),
    tuitionPerYear: getNumberProperty(page.properties.Tuition_Per_Year),
    boarding: getSelectProperty(page.properties.Boarding),
    website: getUrlProperty(page.properties.Website),
    featureImage: getUrlProperty(page.properties.FeatureImage),
    status: getSelectProperty(page.properties.Status),
    publishedAt: getDateProperty(page.properties.PublishedAt),
  };
}

export async function getThaiCampBySlug(slug: string): Promise<ThaiCamp | null> {
  const response = await notion.databases.query({
    database_id: DATABASE_IDS.THAI_CAMP,
    filter: {
      and: [
        { property: 'Slug', rich_text: { equals: slug } },
        { property: 'Status', select: { equals: 'Published' } },
      ],
    },
  });

  if (response.results.length === 0) return null;

  const page = response.results[0] as any;
  return {
    id: page.id,
    slug: getRichTextProperty(page.properties.Slug),
    name: page.properties.Camp_Name?.title?.[0]?.plain_text || '',
    campType: getSelectProperty(page.properties.Camp_Type),
    ageRange: getSelectProperty(page.properties.Age_Range),
    city: getSelectProperty(page.properties.City),
    durationWeeks: getNumberProperty(page.properties.Duration_Weeks),
    fee: getNumberProperty(page.properties.Fee),
    organizer: getRichTextProperty(page.properties.Organizer),
    website: getUrlProperty(page.properties.Website),
    featureImage: getUrlProperty(page.properties.FeatureImage),
    status: getSelectProperty(page.properties.Status),
    publishedAt: getDateProperty(page.properties.PublishedAt),
  };
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const response = await notion.databases.query({
    database_id: DATABASE_IDS.BLOG,
    filter: {
      and: [
        { property: 'Slug', rich_text: { equals: slug } },
        { property: 'Status', select: { equals: 'Published' } },
      ],
    },
  });

  if (response.results.length === 0) return null;

  const page = response.results[0] as any;
  return {
    id: page.id,
    slug: getRichTextProperty(page.properties.Slug),
    title: page.properties.Title?.title?.[0]?.plain_text || '',
    articleType: getSelectProperty(page.properties.Article_Type),
    category: getSelectProperty(page.properties.Category),
    tags: getMultiSelectProperty(page.properties.Tags),
    showCTA: getCheckboxProperty(page.properties.Show_CTA),
    ctaType: getSelectProperty(page.properties.CTA_Type),
    featureImage: getUrlProperty(page.properties.FeatureImage),
    excerpt: getRichTextProperty(page.properties.Excerpt),
    content: getRichTextProperty(page.properties.Content),
    author: getRichTextProperty(page.properties.Author),
    status: getSelectProperty(page.properties.Status),
    publishedAt: getDateProperty(page.properties.PublishedAt),
    seoTitle: getRichTextProperty(page.properties.SEO_Title),
    seoDescription: getRichTextProperty(page.properties.SEO_Description),
  };
}

// Fetch full page content with blocks using react-notion-x
export async function getPageContent(pageId: string): Promise<ExtendedRecordMap | null> {
  try {
    // 使用 NotionAPI 需要頁面是公開的
    // 如果失敗，返回 null，頁面會顯示簡介
    const recordMap = await notionX.getPage(pageId);
    return recordMap;
  } catch (error) {
    console.error('Error fetching page content with react-notion-x:', error);
    console.log('Note: react-notion-x requires pages to be public. Falling back to metadata only.');
    return null;
  }
}

// Alternative: Fetch blocks using official Notion API
export async function getPageBlocks(pageId: string): Promise<any[]> {
  try {
    const blocks = [];
    let cursor: string | undefined = undefined;
    
    do {
      const response: any = await notion.blocks.children.list({
        block_id: pageId,
        start_cursor: cursor,
        page_size: 100,
      });
      
      blocks.push(...response.results);
      cursor = response.has_more ? response.next_cursor : undefined;
    } while (cursor);
    
    return blocks;
  } catch (error) {
    console.error('Error fetching page blocks:', error);
    return [];
  }
}
