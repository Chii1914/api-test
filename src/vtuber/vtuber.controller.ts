import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VtuberService } from './vtuber.service';
import { CreateVtuberDto } from './dto/create-vtuber.dto';
import { UpdateVtuberDto } from './dto/update-vtuber.dto';

@Controller('vtuber')
export class VtuberController {
  constructor(private readonly vtuberService: VtuberService) { }

  @Post()
  create(@Body() createVtuberDto: CreateVtuberDto) {
    return this.vtuberService.create(createVtuberDto);
  }

  @Get()
  findAll() {
    return this.vtuberService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vtuberService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVtuberDto: UpdateVtuberDto) {
    return this.vtuberService.update(+id, updateVtuberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vtuberService.remove(+id);
  }
  @Post('send-email')
  sendWelcomeEmail(@Body('email') email: string) {
    return this.vtuberService.sendWelcomeEmail(email);
  }

}
