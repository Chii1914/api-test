import { Controller } from '@nestjs/common';
import { DockService } from './dock.service';

@Controller('dock')
export class DockController {
  constructor(private readonly dockService: DockService) {}
}
