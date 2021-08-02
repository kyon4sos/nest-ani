import { ApiProperty } from '@nestjs/swagger';

export class PermissCreateDto {
  @ApiProperty()
  url: string;

  @ApiProperty()
  action: string;

  @ApiProperty()
  subjectId: number;
}
