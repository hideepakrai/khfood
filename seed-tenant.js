require('dotenv').config();
const { MongoClient, ObjectId } = require('mongodb');

async function run() {
  let uri = process.env.DATABASE_URI || process.env.MONGODB_URI;
  const client = new MongoClient(uri);
  await client.connect();
  const dbName = process.env.TENANT_DB_NAME || 'kalp_tenant_khfoods';
  const db = client.db(dbName);
  
  console.log(`Connecting to database: ${dbName}...`);

  let anyMedia = await db.collection('media').findOne({});
  let mediaId = anyMedia ? anyMedia._id : new ObjectId();
  if (!anyMedia) {
    await db.collection('media').insertOne({
      _id: mediaId,
      alt: 'Dummy',
      url: '/assets/2Q6A4963.jpg',
      filename: '2Q6A4963.jpg',
      mimeType: 'image/jpeg',
      filesize: 1024,
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }

  // Clear exact existing dummy ones if they exist to prevent duplication if we run multiple times
  await db.collection('products').deleteMany({ slug: { $in: ['roasted-peanuts-8-packs', 'roasted-peanuts-14-packs', 'roasted-peanuts-21-packs', 'roasted-peanuts-6-bags'] } });

  const prods = [
    {
      title: { en: 'Roasted Peanuts: 8 Packs (Taiwan)', hr: 'Roasted Peanuts: 8 Packs (Taiwan)' },
      slug: 'roasted-peanuts-8-packs',
      sku: 'KH-001',
      _status: 'published',
      pricing: [{ value: 36, currency: 'USD' }],
      stock: 100,
      weight: 1000,
      Highlight: { en: '8 Packs' },
      images: [mediaId.toString()],
      enableVariantPrices: false,
      enableVariantWeights: false,
      enableVariants: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: { en: 'Roasted Peanuts: 14 Packs (Taiwan)', hr: 'Roasted Peanuts: 14 Packs (Taiwan)' },
      slug: 'roasted-peanuts-14-packs',
      sku: 'KH-002',
      _status: 'published',
      pricing: [{ value: 55, currency: 'USD' }],
      stock: 100,
      weight: 1500,
      Highlight: { en: '14 Packs' },
      images: [mediaId.toString()],
      enableVariantPrices: false,
      enableVariantWeights: false,
      enableVariants: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: { en: 'Roasted Peanuts: 21 Packs (Taiwan)', hr: 'Roasted Peanuts: 21 Packs (Taiwan)' },
      slug: 'roasted-peanuts-21-packs',
      sku: 'KH-003',
      _status: 'published',
      pricing: [{ value: 75, currency: 'USD' }],
      stock: 100,
      weight: 2000,
      Highlight: { en: '21 Packs' },
      images: [mediaId.toString()],
      enableVariantPrices: false,
      enableVariantWeights: false,
      enableVariants: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: { en: 'Roasted Peanuts: 6 Bags (Taiwan)', hr: 'Roasted Peanuts: 6 Bags (Taiwan)' },
      slug: 'roasted-peanuts-6-bags',
      sku: 'KH-004',
      _status: 'published',
      pricing: [{ value: 65, currency: 'USD' }],
      stock: 100,
      weight: 1200,
      Highlight: { en: '6 Bags' },
      images: [mediaId.toString()],
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
