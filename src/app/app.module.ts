import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { BusinessModule } from 'src/business/business.module';
import { ApiModule } from './api/api.module';
import { WebModule } from './web/web.module';
import { ConsoleModule } from './console/console.module';

@Module({
  imports: [
    BusinessModule,
    ApiModule,
    WebModule,
    ConsoleModule,
    RouterModule.register([{ path: 'api', module: ApiModule }]),
  ],
})
export class AppModule {}
