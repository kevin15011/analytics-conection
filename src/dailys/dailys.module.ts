import { Module } from '@nestjs/common';
import { DailysService } from './dailys.service';
import { DailysController } from './dailys.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Daily } from './entities/daily.entity';
import { AnalyticsModule } from 'src/analytics/analytics.module';

@Module({
  imports: [TypeOrmModule.forFeature([Daily]), AnalyticsModule],
  controllers: [DailysController],
  providers: [DailysService],
})
export class DailysModule {}
