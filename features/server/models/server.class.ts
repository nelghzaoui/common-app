import { Item } from '@core/models/item.interface';

export class Server implements Item {
  constructor(public name: string, public url: string, public port: number) {}
}
