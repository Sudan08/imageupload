import { Injectable } from '@nestjs/common';

@Injectable({})
export class ImageService {
  upload() {
    return { msg: 'WElcome' };
  }
}
