import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);

  handleCron() {
    this.logger.debug('Called when the current second is 5');
  }
}
