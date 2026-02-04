import { Module } from '@nestjs/common';
import { MonitorsController } from './monitors.controller';
import { MonitorService } from './monitors.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Monitor } from './entities/monitor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Monitor])],
  controllers: [MonitorsController],
  providers: [MonitorService],
  exports: [MonitorService],
})
export class MonitorModule {}
