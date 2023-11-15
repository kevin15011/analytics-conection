import { Injectable } from '@nestjs/common';
import { CreateDailyDto } from './dto/create-daily.dto';
import { UpdateDailyDto } from './dto/update-daily.dto';
import { AnalyticsService } from 'src/analytics/analytics.service';

@Injectable()
export class DailysService {
  constructor(private readonly analyticsService: AnalyticsService){}

  async updateAll(updateAllDailyDto) {
    return await this.analyticsService.getByDimension(updateAllDailyDto);
  }

  create(createDailyDto: CreateDailyDto) {
    return 'This action adds a new daily';
  }

  findAll() {
    return `This action returns all dailys`;
  }

  findOne(id: number) {
    return `This action returns a #${id} daily`;
  }

  update(id: number, updateDailyDto: UpdateDailyDto) {
    return `This action updates a #${id} daily`;
  }

  remove(id: number) {
    return `This action removes a #${id} daily`;
  }
}
