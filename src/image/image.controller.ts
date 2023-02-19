import { Controller, Get, Post, StreamableFile } from '@nestjs/common';
import { UploadedFile, UseInterceptors } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { join, extname } from 'path';
import { BASEURL } from 'src/helper/helper';

const storage = diskStorage({
  destination: './assests',
  filename: (req, file, cb) => {
    const name = file.originalname;
    cb(null, `${name}`);
  },
});

@Controller('image')
export class ImageController {
  @Post('upload')
  @UseInterceptors(FileInterceptor('image', { storage: storage }))
  uploadfile(@UploadedFile() file: Express.Multer.File) {
    if (file) {
      return { imageUrl: `${BASEURL}/${file.filename}` };
    } else {
      return 'Error uploading file';
    }
  }
}

// @Post('upload')
