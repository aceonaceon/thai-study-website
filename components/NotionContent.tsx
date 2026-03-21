'use client';

import { NotionRenderer } from 'react-notion-x';
import type { ExtendedRecordMap } from 'notion-types';

// Import react-notion-x styles
import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';

interface NotionContentProps {
  recordMap: ExtendedRecordMap | null;
}

export default function NotionContent({ recordMap }: NotionContentProps) {
  // 如果 recordMap 為 null（例如頁面不是公開的），不渲染任何內容
  if (!recordMap) {
    return null;
  }

  return (
    <div className="notion-content">
      <NotionRenderer recordMap={recordMap} />
    </div>
  );
}
