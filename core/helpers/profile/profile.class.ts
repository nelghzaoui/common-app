export class Profile {
  constructor(
    public device: string,
    public id: string,
    public name: string,
    public seedDevice?: string,
    public creation?: Date,
    public lastConnection?: Date
  ) {
    this.creation = new Date(creation) || new Date();
    this.lastConnection = new Date(lastConnection) || new Date();
  }

  public toJSON(): Record<string, string | number> {
    return {
      creation: this.creation.getTime(),
      device: this.device,
      lastConnection: this.lastConnection.getTime(),
      seedDevice: this.seedDevice,
      id: this.id,
      name: this.name
    };
  }

  public toString(): string {
    return JSON.stringify({
      creation: this.creation.getTime(),
      device: this.device,
      lastConnection: this.lastConnection.getTime(),
      seedDevice: this.seedDevice,
      id: this.id,
      name: this.name
    });
  }
}
