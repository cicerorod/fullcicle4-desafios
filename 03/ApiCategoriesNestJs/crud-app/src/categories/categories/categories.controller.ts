import { Controller, Get } from '@nestjs/common';
import { Categories } from '../categories.entity';
import { categoriesService } from '../categories.service';
import { Post, Put, Delete, Body, Param } from '@nestjs/common';

// export class categoriesController {
//   constructor(private categoriesService: categoriesService){}

@Controller('categories')
export class categoriesController {
  constructor(private categoriesService: categoriesService) {}

  @Get()
  index(): Promise<Categories[]> {
    return this.categoriesService.findAll();
  }

  @Post('create')
  async create(@Body() categoriesData: Categories): Promise<any> {
    return this.categoriesService.create(categoriesData);
  }

  @Put(':id/update')
  async update(
    @Param('id') id,
    @Body() categoriesData: Categories,
  ): Promise<any> {
    categoriesData.id = Number(id);
    console.log('Update #' + categoriesData.id);
    categoriesData;
  }
  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.categoriesService.delete(id);
  }
}
