import { Module } from '@nestjs/common';
import { SecurityModule } from 'src/security/security.module';

@Module({
  imports: [SecurityModule],
})
export class GuardModule {}
