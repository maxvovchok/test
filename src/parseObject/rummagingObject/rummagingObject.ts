import { MapObject } from '../interface/mapObject/mapObject';

export class RummagingObject implements MapObject {
  private object: any;

  constructor(object: any) {
    this.object = object;
  }

  public takingProducts() {
    return this.object.products;
  }
}
