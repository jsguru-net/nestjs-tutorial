import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Post()
  create(@Body() createDto: any) {
    return 'This action adds a new post';
  }

  @Get()
  findAll(@Query() query: any) {
    return `This action returns all posts (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} post`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDto: any) {
    return `This action updates a #${id} post`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} post`;
  }
}
