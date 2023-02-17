import { Controller, Get, Post, StreamableFile } from '@nestjs/common';
import { UploadedFile, UseInterceptors } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { createReadStream } from 'fs';
import { diskStorage } from 'multer';
import { join, extname } from 'path';
import { ImageService } from './image.service';

const storage = diskStorage({
  destination: './assests',
  filename: (req, file, cb) => {
    const name = 'test';
    cb(null, `${name}${extname(file.originalname)}`);
  },
});

@Controller('image')
export class ImageController {
  //   constructor(private imageService: ImageService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('image', { storage: storage }))
  uploadfile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    if (file) {
      return 'done';
    } else {
      return 'Hello world!';
    }
  }

  @Get('download')
  getFile(): StreamableFile {
    const file = createReadStream(join(process.cwd(), './assests/test.jpg'));
    return new StreamableFile(file);
  }
}

// @Post('upload')
