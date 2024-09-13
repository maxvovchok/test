export interface GetRequest {
  getProducts(url: string): Promise<Response>;
  getProduct(id: number): Promise<Response>;
}
