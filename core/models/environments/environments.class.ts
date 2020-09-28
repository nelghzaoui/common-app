import { ApiConfig } from './api-config.class';
import { BaseEnvironment } from './base-environment.class';

export class Environment extends BaseEnvironment {
  constructor(public name: string, public logLevel: number, public production: boolean, public server: ApiConfig) {
    super();
  }
}
