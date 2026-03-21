// Test script to verify Notion API connection
const { Client } = require('@notionhq/client');
const fs = require('fs');
const path = require('path');

// Read .env.local manually
const envPath = path.join(__dirname, '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const apiKey = envContent.split('\n').find(line => line.startsWith('NOTION_API_KEY=')).split('=')[1];

const notion = new Client({
  auth: apiKey,
});

async function testConnection() {
  try {
    console.log('Testing Notion API connection...');
    console.log('API Key:', apiKey ? 'Set (length: ' + apiKey.length + ')' : 'Not set');
    
    // Test database query
    const response = await notion.databases.query({
      database_id: '3292b55d-2c6a-812b-8735-e914c144d512',
      page_size: 1,
    });
    
    console.log('✅ Successfully connected to Notion API');
    console.log('Found', response.results.length, 'page(s)');
    
    if (response.results.length > 0) {
      const page = response.results[0];
      console.log('Sample page ID:', page.id);
      console.log('Sample page title:', page.properties.Name?.title?.[0]?.plain_text || 'No title');
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error('Details:', error.body || error);
  }
}

testConnection();
