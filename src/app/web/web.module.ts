import { Module } from '@nestjs/common';
import { BlogController } from './blog/blog.controller';

@Module({
  controllers: [BlogController],
})
export class WebModule {}
