import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DailysService } from './dailys.service';
import { CreateDailyDto } from './dto/create-daily.dto';
import { UpdateDailyDto } from './dto/update-daily.dto';

@Controller('dailys')
export class DailysController {
  constructor(private readonly dailysService: DailysService) {}

  @Post()
  create(@Body() createDailyDto: CreateDailyDto) {
    return this.dailysService.create(createDailyDto);
  }

  @Get()
  findAll() {
    return this.dailysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dailysService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDailyDto: UpdateDailyDto) {
    return this.dailysService.update(+id, updateDailyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dailysService.remove(+id);
  }
}
