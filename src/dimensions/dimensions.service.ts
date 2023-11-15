import { Injectable } from '@nestjs/common';
import { CreateDimensionDto } from './dto/create-dimension.dto';
import { UpdateDimensionDto } from './dto/update-dimension.dto';

@Injectable()
export class DimensionsService {
  create(createDimensionDto: CreateDimensionDto) {
    return 'This action adds a new dimension';
  }

  findAll() {
    return `This action returns all dimensions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dimension`;
  }

  update(id: number, updateDimensionDto: UpdateDimensionDto) {
    return `This action updates a #${id} dimension`;
  }

  remove(id: number) {
    return `This action removes a #${id} dimension`;
  }
}
