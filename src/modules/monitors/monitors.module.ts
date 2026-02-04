import { Module } from '@nestjs/common';
import { MonitorsController } from './monitors.controller';
import { MonitorService } from './monitors.service';

@Module({
  controllers: [MonitorsController],
  providers: [MonitorService],
})
export class MonitorModule {}
