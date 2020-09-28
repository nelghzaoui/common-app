import { Server } from '../models/server.class';

export const SERVER_API = {
  ADD: 'servers/'
};

export interface AddServerRequest {
  server: Server;
}
