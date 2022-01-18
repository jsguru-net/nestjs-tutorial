import { Module } from '@nestjs/common';
import { PostsController } from './posts/posts.controller';
import { CategoriesController } from './categories/categories.controller';

@Module({
  controllers: [PostsController, CategoriesController],
})
export class ApiModule {}
