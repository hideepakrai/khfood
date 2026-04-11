require('dotenv').config();
const { MongoClient, ObjectId } = require('mongodb');

async function run() {
  let uri = process.env.DATABASE_URI || process.env.MONGODB_URI;
  const client = new MongoClient(uri);
  await client.connect();
  const dbName = process.env.TENANT_DB_NAME || 'kalp_tenant_khfoods';
  const db = client.db(dbName);
  
  console.log(`Connecting to database: ${dbName}...`);

  const mediaId = "69d8b35fcf5eeb8f20cc5d4e";

  // Clean up any previous attempts with these specific slugs
  await db.collection('products').deleteMany({ slug: { $in: [
    'roasted-peanuts-8-packs-kh', 
    'roasted-peanuts-14-packs-kh', 
    'roasted-peanuts-21-packs-kh', 
    'roasted-peanuts-6-bags-kh'
  ] } });

  const prods = [
    {
      title: { en: 'Roasted Peanuts: 8 Packs (Taiwan)', hr: 'Roasted Peanuts: 8 Packs (Taiwan)', zh: 'Roasted Peanuts: 8 Packs (Taiwan)' },
      slug: 'roasted-peanuts-8-packs-kh',
      sku: 'PEANUT-8P',
      _status: 'published',
      price: 36.00,
      stock: 100,
      weight: 1000,
      pricing: [{ value: 36.00, currency: 'USD' }],
      Highlight: { en: '8 Packs', hr: '8 Packs', zh: '8 Packs' },
      images: [mediaId],
      enableVariantPrices: false,
      enableVariantWeights: false,
      enableVariants: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: { en: 'Roasted Peanuts: 14 Packs (Taiwan)', hr: 'Roasted Peanuts: 14 Packs (Taiwan)', zh: 'Roasted Peanuts: 14 Packs (Taiwan)' },
      slug: 'roasted-peanuts-14-packs-kh',
      sku: 'PEANUT-14P',
      _status: 'published',
      price: 55.00,
      stock: 100,
      weight: 1500,
      pricing: [{ value: 55.00, currency: 'USD' }],
      Highlight: { en: '14 Packs', hr: '14 Packs', zh: '14 Packs' },
      images: [mediaId],
      enableVariantPrices: false,
      enableVariantWeights: false,
      enableVariants: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: { en: 'Roasted Peanuts: 21 Packs (Taiwan)', hr: 'Roasted Peanuts: 21 Packs (Taiwan)', zh: 'Roasted Peanuts: 21 Packs (Taiwan)' },
      slug: 'roasted-peanuts-21-packs-kh',
      sku: 'PEANUT-21P',
      _status: 'published',
      price: 75.00,
      stock: 100,
      weight: 2000,
      pricing: [{ value: 75.00, currency: 'USD' }],
      Highlight: { en: '21 Packs', hr: '21 Packs', zh: '21 Packs' },
      images: [mediaId],
      enableVariantPrices: false,
      enableVariantWeights: false,
      enableVariants: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: { en: 'Roasted Peanuts: 6 Bags (Taiwan)', hr: 'Roasted Peanuts: 6 Bags (Taiwan)', zh: 'Roasted Peanuts: 6 Bags (Taiwan)' },
      slug: 'roasted-peanuts-6-bags-kh',
      sku: 'PEANUT-6B',
      _status: 'published',
      price: 65.00,
      stock: 100,
      weight: 1200,
      pricing: [{ value: 65.00, currency: 'USD' }],
      Highlight: { en: '6 Bags', hr: '6 Bags', zh: '6 Bags' },
      images: [mediaId],
      enableVariantPrices: false,
      enableVariantWeights: false,
      enableVariants: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  await db.collection('products').insertMany(prods);
  console.log(`Products seeded successfully to db: ${dbName}`);
  process.exit(0);
}

run().catch(console.dir);
