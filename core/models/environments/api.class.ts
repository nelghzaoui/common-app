import { SslPinning } from './sslpinning.enum';

export class Api {
  constructor(public url: string, public sslPinning: SslPinning) {}
}
