interface Field {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  col: string;
}

export const fields: Field[] = [
  { name: "email", label: "Email Address", type: "text", placeholder: "Email", col: "col-span-2" },
  {
    name: "firstName",
    label: "First name",
    type: "text",
    placeholder: "Full Name",
    col: "col-span-1"
  },
  {
    name: "lastName",
    label: "Last name",
    type: "text",
    placeholder: "Last Name",
    col: "col-span-1"
  },
  { name: "address", label: "Address", type: "text", placeholder: "Address", col: "col-span-2" },
  {
    name: "address2",
    label: "Address 2",
    type: "text",
    placeholder: "Address line 2",
    col: "col-span-2"
  },
  { name: "city", label: "City", type: "text", placeholder: "City", col: "col-span-1" },
  {
    name: "postalCode",
    label: "Postal Code",
    type: "text",
    placeholder: "Postal Code",
    col: "col-span-1"
  },
  { name: "state", label: "State", type: "text", placeholder: "State", col: "col-span-1" },
  { name: "country", label: "Country", type: "text", placeholder: "Country", col: "col-span-1" },
];