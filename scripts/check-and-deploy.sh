#!/bin/bash
# 檢查 Notion 是否有新文章，有則觸發部署

NOTION_TOKEN="${NOTION_API_KEY}"
DATABASE_ID="3292b55d-2c6a-81ed-bfe5-ec6b5ac809e5"
STATE_FILE="/tmp/notion-last-check.json"

# 取得最後檢查時間
if [ -f "$STATE_FILE" ]; then
  LAST_CHECK=$(cat "$STATE_FILE")
else
  LAST_CHECK=$(date -u -d "1 hour ago" +"%Y-%m-%dT%H:%M:%S.000Z")
fi

# 查詢 Notion 資料庫
RESPONSE=$(curl -s -X POST "https://api.notion.com/v1/databases/${DATABASE_ID}/query" \
  -H "Authorization: Bearer ${NOTION_TOKEN}" \
  -H "Notion-Version: 2022-06-28" \
  -H "Content-Type: application/json" \
  -d "{
    \"filter\": {
      \"timestamp\": \"last_edited_time\",
      \"last_edited_time\": {
        \"after\": \"${LAST_CHECK}\"
      }
    },
    \"page_size\": 100
  }")

# 檢查是否有更新
HAS_CHANGES=$(echo "$RESPONSE" | jq '.has_more == true or (.results | length) > 0')

if [ "$HAS_CHANGES" == "true" ]; then
  echo "🔄 偵測到 Notion 有新文章或更新，觸發部署..."
  
  # 觸發 GitHub Actions
  curl -X POST \
    -H "Authorization: token ${GITHUB_TOKEN}" \
    -H "Accept: application/vnd.github.v3+json" \
    "https://api.github.com/repos/${GITHUB_REPO}/actions/workflows/deploy.yml/dispatches" \
    -d '{"ref":"main"}'
  
  echo "✅ 已觸發部署"
else
  echo "ℹ️ 沒有新文章，跳過部署"
fi

# 更新最後檢查時間
date -u +"%Y-%m-%dT%H:%M:%S.000Z" > "$STATE_FILE"
