import { AdminRepository } from "@/lib/admin-repository";
import { toPlainJson } from "@/lib/toPlainJson";
import { CategoriesClient, type CategoryRow } from "./CategoriesClient";

const CategoriesPage = async () => {
  const categories = toPlainJson(
    await AdminRepository.find<any>("categories", {}, { sort: { name: 1 } })
  ).map((cat: any) => ({
    ...cat,
    name: typeof cat.name === 'object' ? cat.name.en || cat.name.hr || cat.name.zh || "Untitled category" : cat.name
  }));

  return (
    <CategoriesClient categories={categories} />
  );
};

export default CategoriesPage;
