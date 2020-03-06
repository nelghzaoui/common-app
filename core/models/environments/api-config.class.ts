import { SslPinning } from './sslpinning.enum';

export class ApiConfig {
  constructor(public url: string, public sslPinning: SslPinning) {}
}
