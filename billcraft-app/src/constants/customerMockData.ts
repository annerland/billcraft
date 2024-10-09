import { Customer } from "../types/customers";

export const customers: Customer[] = [
  {
    object_type: "CUSTOMER",
    id: "cust_bwDvTb0tF9F8C9BZeD1T",
    created_at: "2023-05-24T06:51:09Z",
    reference: "customer_individual_homer-simpson",
    status: "ACTIVE",
    timezone: "UTC",
    type: "INDIVIDUAL",
    email: "homer@thesimpsons.com",
    individual: {
      name: {
        first_name: "Homer",
        last_name: "Simpson",
        infix: null
      },
      residential_address: {
        line1: "Nachtwachtplein",
        line2: null,
        city: "RamenTown",
        postal_code: "1111AA",
        state: null,
        country: "BY"
      }
    }
  },
  {
    object_type: "CUSTOMER",
    id: "cust_LwDvj40tzlkHFDBVBO1v",
    created_at: "2023-03-23T15:51:58Z",
    reference: "parneraccount_001",
    status: "ACTIVE",
    timezone: "America/Phoenix",
    type: "ORGANIZATION",
    email: "support@idcheckup.com",
    organization: {
      legal_name: "IDCheckup LLC",
      tax_id: "NL123456789",
      tax_exempt: false,
      registered_address: {
        line1: "ASW",
        line2: null,
        city: "Utrecht",
        postal_code: "8500XD",
        state: "UT",
        country: "NL"
      }
    }
  },
  {
    object_type: "CUSTOMER",
    id: "cust_AwDvDb0tzHhneSBXeN1a",
    created_at: "2023-03-27T09:56:44Z",
    parent_customer_id: "cust_LwDvj40tzlkHFDBVBO1v",
    reference: "subcustomer_001",
    status: "ACTIVE",
    timezone: "Europe/Berlin",
    type: "ORGANIZATION",
    email: "invoices@superstore.de",
    organization: {
      legal_name: "SuperStore GmbH",
      tax_id: "12/345/67890",
      registered_address: {
        line1: "Hasengarten 14",
        city: "Berlin",
        postal_code: "79341",
        state: null,
        country: "DE"
      }
    }
  }
];