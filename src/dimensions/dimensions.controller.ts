import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DimensionsService } from './dimensions.service';
import { CreateDimensionDto } from './dto/create-dimension.dto';
import { UpdateDimensionDto } from './dto/update-dimension.dto';

@Controller('dimensions')
export class DimensionsController {
  constructor(private readonly dimensionsService: DimensionsService) {}

  @Post()
  create(@Body() createDimensionDto: CreateDimensionDto) {
    return this.dimensionsService.create(createDimensionDto);
  }

  @Get()
  findAll() {
    return this.dimensionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dimensionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDimensionDto: UpdateDimensionDto) {
    return this.dimensionsService.update(+id, updateDimensionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dimensionsService.remove(+id);
  }
}
