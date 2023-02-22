import {
  Controller,
  Get,
  Post,
  StreamableFile,
  Query,
  Res,
} from '@nestjs/common';
import {
  Param,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { join, extname } from 'path';
import { BASEURL } from 'src/helper/helper';
import { Observable, of } from 'rxjs';

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

  @Get(':imageName')
  getImage(@Param('imageName') imageName: string, @Res() res): Observable<any> {
    return of(res.sendFile(join(process.cwd(), `assests/${imageName}`)));
  }
}
