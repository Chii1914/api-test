import { Module } from '@nestjs/common';
import { VtuberService } from './vtuber.service';
import { VtuberController } from './vtuber.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vtuber } from './entities/vtuber.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vtuber])],
  controllers: [VtuberController],
  providers: [VtuberService],
})
export class VtuberModule {}
