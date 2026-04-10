const fs = require('fs');
fs.writeFileSync('src/app/(frontend)/admin-dashboard/orders/[id]/page.tsx', fs.readFileSync('src/app/(frontend)/admin-dashboard/orders/[id]/page.tsx', 'utf8').replace('import { Link } from "@/i18n/routing";', 'import Link from "next/link";'));
fs.writeFileSync('src/app/(frontend)/admin-dashboard/products/[id]/page.tsx', fs.readFileSync('src/app/(frontend)/admin-dashboard/products/[id]/page.tsx', 'utf8').replace('import { Link } from "@/i18n/routing";', 'import Link from "next/link";'));
