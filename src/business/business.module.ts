import { Module } from '@nestjs/common';
import { DataModule } from 'src/data/data.module';

@Module({
  imports: [DataModule],
})
export class BusinessModule {}
