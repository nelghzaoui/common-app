export class Request {
  constructor(
    public url: string,
    public parameters: {
      [param: string]: string | string[];
    },
    public headers: {
      [name: string]: string | string[];
    },
    public showLoading: boolean
  ) {}
}
