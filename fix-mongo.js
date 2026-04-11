require('dotenv').config();
const { MongoClient } = require('mongodb');

async function run() {
  let uri = process.env.DATABASE_URI || process.env.MONGODB_URI;
  const client = new MongoClient(uri);
  await client.connect();
  const dbName = uri.includes('khfood') ? undefined : 'khfoods';
  const db = client.db(dbName);

  await db.collection('products').updateMany(
    { 'title': { $type: 'string' } },
    [
      {
        $set: {
          title: { en: '$title', hr: '$title', zh: '$title' },
          Highlight: { en: '$Highlight', hr: '$Highlight', zh: '$Highlight' }
        }
      }
    ]
  );
  console.log('Products localization fields fixed.');
  process.exit(0);
}

run().catch(console.dir);
