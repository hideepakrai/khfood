import Link from "next/link";
import { redirect } from "next/navigation";

import { AdminProductForm } from "@/components/admin-next/AdminProductForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAuthenticatedAdministrator } from "@/data/storefront/adminAuth";

const NewProductPage = async () => {
  const administrator = await getAuthenticatedAdministrator();

  if (!administrator) {
    redirect("/admin/login");
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <header className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Admin Products</p>
            <h1 className="text-3xl font-semibold text-slate-900">Add New Product</h1>
            <p className="text-sm text-slate-600">
              Create a new simple product. You can add images, categories, and variants later after creation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="text-sm font-medium text-slate-700 underline-offset-4 hover:underline" href="/admin/products">
              Back to products
            </a>
          </div>
        </header>

        <section className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Product Details</CardTitle>
              <CardDescription>Enter the basic information for your new product.</CardDescription>
            </CardHeader>
            <CardContent>
              <AdminProductForm
                canEditStock={true}
                canEditWeight={true}
                id="new"
                initialHighlight=""
                initialSlug=""
                initialStatus="draft"
                initialStock={0}
                initialTitle=""
                initialWeight={0}
              />
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
};

export default NewProductPage;
