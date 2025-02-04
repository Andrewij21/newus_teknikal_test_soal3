import { columns } from "@/components/table/Columns";
import { DataTable } from "@/components/table/DataTable";
import { produk } from "@/data/Produk";

export default async function Home() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={produk} />
    </div>
  );
}
