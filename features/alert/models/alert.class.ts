import { AlertPriority } from './priority.enum';
import { AlertType } from './type.enum';

export class Alert {
  constructor(
    public name: string,
    public location: string,
    public date: Date,
    public type: AlertType,
    public priority: AlertPriority,
    public description: string,
    public reporter: string,
    public assignee: string
  ) {}
}
