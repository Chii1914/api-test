import { PartialType } from '@nestjs/mapped-types';
import { CreateVtuberDto } from './create-vtuber.dto';

export class UpdateVtuberDto extends PartialType(CreateVtuberDto) {}
