import { Controller, Get, Post } from '@nestjs/common';
import { PhotoService } from './photo.service';

@Controller()
export class PhotoController {
  constructor(
    private readonly photoService: PhotoService,
  ) {
  }

  @Post('add')
  async add() {
    const x = this.photoService.create();
    return '1';
  }

  @Get('photo')
  async healthCheck() {
    const x = await this.photoService.findAll();
    return x[0].name;
  }

  @Get()
  root(): string {
    return 'root';
  }
}