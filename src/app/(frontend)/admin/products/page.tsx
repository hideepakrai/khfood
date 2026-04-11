import { AdminRepository } from "@/lib/admin-repository";
import { toPlainJson } from "@/lib/toPlainJson";
import { ProductsClient, type ProductRow } from "./ProductsClient";

const ProductsPage = async () => {
  const products = toPlainJson(
    await AdminRepository.find<any>("products", {}, { sort: { updatedAt: -1 } })
  ).map((p: any) => ({
    ...p,
    title: typeof p.title === 'object' ? p.title.en || p.title.hr || p.title.zh || "Untitled product" : p.title
  }));

  return (
    <ProductsClient products={products} />
  );
};

export default ProductsPage;
