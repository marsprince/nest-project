import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PhotoEntity } from '../../../orm/photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(PhotoEntity)
    private readonly photoRepository: Repository<PhotoEntity>,
  ) {
  }

  findAll(): Promise<PhotoEntity[]> {
    return this.photoRepository.find();
  }

  async create(): Promise<PhotoEntity> {
    const photo = new PhotoEntity();
    photo.name = 't4est';
    photo.id = 1;
    return await this.photoRepository.save(photo);
  }
}