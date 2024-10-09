export interface Address {
  line1: string;
  line2?: string | null;
  city: string;
  postal_code: string;
  state: string | null;
  country: string;
}

export interface Individual {
  name: {
    first_name: string;
    last_name: string;
    infix: string | null;
  };
  residential_address: Address;
}

export interface Organization {
  legal_name: string;
  tax_id: string;
  tax_exempt?: boolean;
  registered_address: Address;
}

export interface Customer {
  object_type: string;
  id: string;
  created_at: string;
  reference: string;
  status: string;
  timezone: string;
  type: string;
  email: string;
  individual?: Individual;
  organization?: Organization;
  parent_customer_id?: string;
  [key: string]: any;
}

export interface Data {
  data: Customer[];
}