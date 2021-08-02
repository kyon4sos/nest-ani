import {
  BadRequestException,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import * as multer from 'multer';
import { ok } from 'src/util';
import { FileUploadDto } from './dto';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload');
  },
  filename: function (req, file, cb) {
    const { originalname } = file;
    const exendName = originalname.substring(originalname.lastIndexOf('.'));
    cb(null, `${file.fieldname}-${Date.now()}${exendName}`);
  },
});
const option = {
  storage,
  limits: {
    fileSize: 100 * 100 * 100,
  },
  fileFilter,
};

@ApiTags('图片上传')
@Controller('file')
export class FileController {
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    type: FileUploadDto,
  })
  @Post('upload')
  @UseInterceptors(FileInterceptor('file', option))
  upload(@UploadedFile() file): Resp {
    return ok(file);
  }
}

function fileFilter(req, file, cb) {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new BadRequestException('不支持的文件'));
  }
}
