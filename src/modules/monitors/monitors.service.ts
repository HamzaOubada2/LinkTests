import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Monitor } from './entities/monitor.entity';
import { Repository } from 'typeorm';
import { CreateMonitorDto } from './dto/create-monitor.dto';

@Injectable()
export class MonitorService {
  constructor(
    @InjectRepository(Monitor)
    private monitorRepo: Repository<Monitor>,
  ) {}

  /**
   * Create New Monitor
   * @param createMonitorDto
   * @returns New WebSite
   */
  async create(createMonitorDto: CreateMonitorDto): Promise<Monitor> {
    const newMonitor = this.monitorRepo.create(createMonitorDto);
    return await this.monitorRepo.save(newMonitor);
  }

  /**
   * Find All WebSits
   * @returns All Websits
   */
  async findAll(): Promise<Monitor[]> {
    return await this.monitorRepo.find();
  }

  /**
   * Find Active WebSits
   * @returns Active WebSits
   */
  async findActive(): Promise<Monitor[]> {
    return this.monitorRepo.find({ where: { isActive: true } });
  }
}
