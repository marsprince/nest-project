import { Module } from '@nestjs/common';
import { PhotoController } from './photo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoEntity } from '../../../orm/photo.entity';
import { PhotoService } from './photo.service';

@Module({
  imports: [TypeOrmModule.forFeature([PhotoEntity])],
  providers: [PhotoService],
  controllers: [PhotoController],
})
export class PhotoModule {}