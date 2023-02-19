import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';
import { join } from 'path';

@Module({
  controllers: [ImageController],
  providers: [ImageService],
})
export class ImageModule {}
