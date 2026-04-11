import { getPayload } from "payload";
import configPromise from "@payload-config";
import { getMongoDb } from "@/data/mongo/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const payload = await getPayload({ config: configPromise });
    
    // First, verify if products already exist
    const existingProducts = await payload.find({
      collection: "products",
      limit: 1,
    });

    if (existingProducts.totalDocs > 0) {
      return NextResponse.json({ message: "Products already seeded" });
    }

    // Since media is required, and we don't have a reliable file upload handy in API,
    // we will directly insert media records into MongoDB to bypass file upload validations temporarily
    // OR try to create dummy ones via Payload
    const db = await getMongoDb();
    
    // Check if there is any media at all
    const anyMedia = await db.collection("media").findOne({});
    let mediaId = anyMedia?._id?.toString();

    if (!mediaId) {
       // Insert a dummy media through mongodb
       const res = await db.collection("media").insertOne({
          alt: "Dummy",
          url: "/assets/2Q6A4963.jpg",
          filename: "2Q6A4963.jpg",
          mimeType: "image/jpeg",
          filesize: 1024,
          createdAt: new Date(),
          updatedAt: new Date()
       });
       mediaId = res.insertedId.toString();
    }

    const payloadProducts = [
      {
        title: "Roasted Peanuts: 8 Packs (Taiwan)",
        slug: "roasted-peanuts-8-packs",
        _status: "published",
        pricing: [{ value: 36, currency: "USD" }],
        stock: 100,
        weight: 1000,
        Highlight: "8 Packs",
        images: [mediaId],
      },
      {
        title: "Roasted Peanuts: 14 Packs (Taiwan)",
        slug: "roasted-peanuts-14-packs",
        _status: "published",
        pricing: [{ value: 55, currency: "USD" }],
        stock: 100,
        weight: 1500,
        Highlight: "14 Packs",
        images: [mediaId],
      },
      {
        title: "Roasted Peanuts: 21 Packs (Taiwan)",
        slug: "roasted-peanuts-21-packs",
        _status: "published",
        pricing: [{ value: 75, currency: "USD" }],
        stock: 100,
        weight: 2000,
        Highlight: "21 Packs",
        images: [mediaId],
      },
      {
        title: "Roasted Peanuts: 6 Bags (Taiwan)",
        slug: "roasted-peanuts-6-bags",
        _status: "published",
        pricing: [{ value: 65, currency: "USD" }],
        stock: 100,
        weight: 1200,
        Highlight: "6 Bags",
        images: [mediaId],
      }
    ];

    for (const prod of payloadProducts) {
      await payload.create({
        collection: "products",
        data: prod as any,
      });
    }

    return NextResponse.json({ message: "Seeded successfully!" });
  } catch (error: any) {
    console.error("Seed error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
