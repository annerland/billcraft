import { Data } from './types';

export const customerData: Data = {
  data: [
    {
      object_type: "CUSTOMER",
      id: "cust_A1B2C3D4E5F6G7H8I9J0",
      created_at: "2024-02-14T10:22:35Z",
      reference: "customer_individual_anna-smith",
      img: "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/15701871/homer-simpson.0.0.1455717812.jpg?quality=90&strip=all&crop=0%2C5.5555555555556%2C100%2C88.888888888889&w=750",
      status: "ACTIVE",
      timezone: "UTC+2",
      type: "INDIVIDUAL",
      email: "anna.smith@example.com",
      individual: {
        name: {
          first_name: "Anna",
          last_name: "Smith",
          infix: null
        },
        residential_address: {
          line1: "Baker Street",
          line2: "Apartment 221B",
          city: "London",
          postal_code: "NW1 6XE",
          state: null,
          country: "GB"
        }
      }
    },
    {
      object_type: "CUSTOMER",
      id: "cust_Z1Y2X3W4V5U6T7S8R9Q0",
      created_at: "2024-01-12T08:15:47Z",
      reference: "partneraccount_002",
      img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      status: "ACTIVE",
      timezone: "America/New_York",
      type: "ORGANIZATION",
      email: "contact@cybercorp.com",
      organization: {
        legal_name: "CyberCorp Inc.",
        tax_id: "US987654321",
        tax_exempt: true,
        registered_address: {
          line1: "456 Silicon Valley",
          line2: "Suite 300",
          city: "San Francisco",
          postal_code: "94016",
          state: "CA",
          country: "US"
        }
      }
    },
    {
      object_type: "CUSTOMER",
      id: "cust_X1W2V3U4T5S6R7Q8P9O0",
      created_at: "2024-03-05T14:30:22Z",
      parent_customer_id: "cust_Z1Y2X3W4V5U6T7S8R9Q0",
      reference: "subcustomer_002",
      img: "https://images.unsplash.com/photo-1502083896352-259ab9e342d7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      status: "ACTIVE",
      timezone: "Asia/Tokyo",
      type: "ORGANIZATION",
      email: "billing@techworld.co.jp",
      organization: {
        legal_name: "TechWorld KK",
        tax_id: "JP123456789",
        registered_address: {
          line1: "Minato-ku",
          city: "Tokyo",
          postal_code: "105-0011",
          state: null,
          country: "JP"
        }
      }
    }
  ]
};
