import { Controller, Get, Param } from '@nestjs/common';

@Controller()
export class BlogController {
  @Get(':categorySlug([^/]+)')
  listPost(@Param('categorySlug') categorySlug: string): any {
    return `Find category with ${categorySlug}.`;
  }

  @Get(':categorySlug([^/]+)/:postSlug([^/]+).html')
  viewPost(
    @Param('categorySlug') categorySlug: string,
    @Param('postSlug') postSlug: string,
  ): any {
    return `Find post with ${categorySlug} - ${postSlug}.`;
  }
}
