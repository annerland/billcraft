// src/services/api/customerService.ts
import { AxiosInstance } from "axios";
import { Customer, Data } from "../../types/customers";
import CacheService from "./chacheService";

export default class Customers {
  private httpWrapper: AxiosInstance;
  private cacheService: CacheService;

  constructor(httpWrapper: AxiosInstance) {
    this.httpWrapper = httpWrapper;
    this.cacheService = new CacheService();
  }

  private async fetchData<T>(url: string, cacheKey: string): Promise<T> {
    const cachedData = this.cacheService.get(cacheKey);

    if (cachedData) {
      return cachedData;
    }

    const res = await this.httpWrapper.get(url);
    this.cacheService.set(cacheKey, res.data);
    return res.data;
  }

  async list(): Promise<Data> {
    return this.fetchData<Data>('/customers', 'customers_list');
  }

  async get(id: string | string[]): Promise<Customer> {
    return this.fetchData<Customer>(`/customers/${id}`, `customer_${id}`);
  }

  async edit(id: string | string[], data: any): Promise<Customer> {
    const url = `/customers/${id}`;
    const res = await this.httpWrapper.put(url, data);

    this.cacheService.remove(`customer_${id}`);
    this.cacheService.remove('customers_list');

    return res.data;
  }
}