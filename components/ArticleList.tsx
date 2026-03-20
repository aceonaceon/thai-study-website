'use client';

import { useState } from 'react';
import ArticleCard from './ArticleCard';
import TagFilter from './TagFilter';
import CTABanner from './CTABanner';

interface Article {
  title: string;
  excerpt?: string;
  featureImage?: string;
  category: string;
  author?: string;
  publishedAt?: string;
  slug: string;
  [key: string]: any; // For filter properties
}

interface ArticleListProps {
  articles: Article[];
  basePath: string;
  filterOptions?: {
    label: string;
    property: string;
    options: string[];
  }[];
}

export default function ArticleList({
  articles,
  basePath,
  filterOptions = [],
}: ArticleListProps) {
  const [filters, setFilters] = useState<Record<string, string>>({});

  const filteredArticles = articles.filter((article) => {
    return Object.entries(filters).every(([property, value]) => {
      if (!value) return true;
      return article[property] === value;
    });
  });

  const handleFilterChange = (property: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [property]: value,
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="lg:col-span-1">
          {/* Search */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-foreground mb-3">
              🔍 搜尋文章
            </h3>
            <input
              type="text"
              placeholder="輸入關鍵字..."
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Filters */}
          {filterOptions.map((filter) => (
            <TagFilter
              key={filter.property}
              label={filter.label}
              options={filter.options}
              selected={filters[filter.property]}
              onChange={(value) => handleFilterChange(filter.property, value)}
            />
          ))}

          {/* Sidebar CTA */}
          <CTABanner variant="sidebar" />
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-3">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted">沒有找到符合條件的文章</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <ArticleCard
                  key={article.slug}
                  title={article.title}
                  excerpt={article.excerpt}
                  featureImage={article.featureImage}
                  category={article.category}
                  author={article.author}
                  publishedAt={article.publishedAt}
                  slug={article.slug}
                  basePath={basePath}
                />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
