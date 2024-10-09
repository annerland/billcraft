export default class CacheService {
  private cache: Map<string, any>;

  constructor() {
    this.cache = new Map();
  }

  get(key: string): any | null {
    return this.cache.get(key) || null;
  }

  set(key: string, value: any): void {
    this.cache.set(key, value);
  }

  remove(key: string): void {
    this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }
}