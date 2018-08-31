import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiV1Module } from './api/v1/api.v1.module';
import { RouterModule, Routes } from 'nest-router';
import { PhotoModule } from './api/v1/photo/photo.module';
import { TypeOrmModule } from '@nestjs/typeorm';

const routes: Routes = [
  {
    path: '/api/v1',
    module: ApiV1Module,
    children: [
      {
        path: '/photo',
        module: PhotoModule,
      },
    ],
  },
];

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'test',
      entities: [__dirname + '/orm/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ApiV1Module,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
