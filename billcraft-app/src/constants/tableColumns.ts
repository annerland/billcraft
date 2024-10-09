import { Customer } from "@/types/customers";
import { Column } from "@/types/table";

export const columns: Column[] = [
  {
    header: "Customer",
    field: "Customer",
    isCustom: true,
    customRender: (row: Customer) =>
      row.type === "INDIVIDUAL"
        ? `${row.individual?.name.first_name} ${row.individual?.name.last_name}`
        : row.organization?.legal_name || "",
  },
  { header: "Email", field: "email" },
  { header: "Type", field: "type" },
  { header: "Timezone", field: "timezone" },
  {
    header: "City",
    field: "city",
    isCustom: true,
    customRender: (row: Customer) =>
      row.type === "INDIVIDUAL"
        ? row.individual?.residential_address.city || ""
        : row.organization?.registered_address.city || "",
  },
];