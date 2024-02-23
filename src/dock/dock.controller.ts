import { Controller, Get, Param, Post } from '@nestjs/common';
import { DockService } from './dock.service';
import { DockDto } from './dto/dock.dto';

@Controller('dock')
export class DockController {
  constructor(private readonly dockService: DockService) { }

  @Post(':doc_name')
  createDock(@Param('doc_name') doc_name: string) {
    return this.dockService.createDock(doc_name);
  }
}