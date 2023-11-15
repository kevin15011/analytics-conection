import { Module } from '@nestjs/common';
import { DimensionsService } from './dimensions.service';
import { DimensionsController } from './dimensions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dimension } from './entities/dimension.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dimension])],
  controllers: [DimensionsController],
  providers: [DimensionsService],
})
export class DimensionsModule {}
