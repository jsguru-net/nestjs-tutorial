import { Module } from '@nestjs/common';
import { BusinessModule } from 'src/business/business.module';
import { ApiModule } from './api/api.module';
import { WebModule } from './web/web.module';
import { ConsoleModule } from './console/console.module';

@Module({
  imports: [BusinessModule, ApiModule, WebModule, ConsoleModule],
})
export class AppModule {}
