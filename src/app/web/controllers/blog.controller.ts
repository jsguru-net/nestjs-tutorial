import { Controller, Get, Param } from '@nestjs/common';
import { View } from '../decorators';

@Controller()
export class BlogController {
  @Get(':categorySlug([^/]+)')
  @View({ path: 'index' })
  listPost(@Param('categorySlug') categorySlug: string): any {
    return { categorySlug };
  }

  @Get(':categorySlug([^/]+)/:postSlug([^/]+).html')
  @View({ path: 'index' })
  viewPost(
    @Param('categorySlug') categorySlug: string,
    @Param('postSlug') postSlug: string,
  ): any {
    return {
      categorySlug,
      postSlug,
    };
  }
}
