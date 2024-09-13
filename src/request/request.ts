import { GetRequest } from './interface/getRequest';

export class Fetch implements GetRequest {
  private baseUrl;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public async getProducts() {
    try {
      const response = await fetch(`${this.baseUrl}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  public async getProduct(id: number) {
    try {
      const response = await fetch(`${this.baseUrl}/${id}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
