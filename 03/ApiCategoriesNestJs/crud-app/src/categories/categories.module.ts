import { Module } from '@nestjs/common';
import { categoriesService } from './categories.service';
import { categoriesController } from './categories/categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categories } from './categories.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Categories])],
  providers: [categoriesService],
  controllers: [categoriesController],
})
export class categoriesModule {}
