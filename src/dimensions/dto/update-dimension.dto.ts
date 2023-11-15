import { PartialType } from '@nestjs/mapped-types';
import { CreateDimensionDto } from './create-dimension.dto';

export class UpdateDimensionDto extends PartialType(CreateDimensionDto) {}
