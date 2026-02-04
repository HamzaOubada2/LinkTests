import { Body, Controller, Get, Post } from '@nestjs/common';
import { MonitorService } from './monitors.service';
import { CreateMonitorDto } from './dto/create-monitor.dto';

@Controller('monitors')
export class MonitorsController {
  constructor(private readonly monitorsService: MonitorService) {}

  @Post()
  create(@Body() createDto: CreateMonitorDto) {
    return this.monitorsService.create(createDto);
  }

  @Get()
  findAll() {
    return this.monitorsService.findAll();
  }
}
