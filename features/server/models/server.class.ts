import { Item } from '@core/models/item.interface';

export class Server implements Item {
  private _id: string;
  private _label: string;

  constructor(id: string, label: string) {
    this.id = id;
    this.label = label;
  }

  public get id(): string {
    return this._id;
  }

  public set id(value: string) {
    this._id = value;
  }

  public get label(): string {
    return this._label;
  }

  public set label(value: string) {
    this._label = value;
  }
}
