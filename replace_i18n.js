const fs = require('fs');
const files = [
  'src/app/(frontend)/admin-dashboard/products/[id]/page.tsx',
  'src/app/(frontend)/admin-dashboard/products/create/page.tsx',
  'src/app/(frontend)/admin-dashboard/posts/page.tsx',
  'src/app/(frontend)/admin-dashboard/pages/page.tsx',
  'src/app/(frontend)/admin-dashboard/media/page.tsx',
  'src/app/(frontend)/admin-dashboard/orders/[id]/page.tsx'
];
files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const newContent = content.replace(/import\s*\{\s*Link\s*\}\s*from\s*['"]@\/i18n\/routing['"]/g, 'import Link from "next/link"');
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Updated ' + file);
  }
});
