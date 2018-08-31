import { Module } from '@nestjs/common';
import { ApiV1Controller } from './api.v1.controller';
import { PhotoModule } from './photo/photo.module';

@Module({
  imports: [PhotoModule],
  controllers: [ApiV1Controller],
})
export class ApiV1Module {}