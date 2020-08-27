import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Categories } from './categories.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class categoriesService {
  constructor(
    @InjectRepository(Categories)
    private categoriesRepository: Repository<Categories>,
  ) {}

  async findAll(): Promise<Categories[]> {
    return await this.categoriesRepository.find();
  }

  async create(categories: Categories): Promise<Categories> {
    return await this.categoriesRepository.save(categories);
  }

  async update(categories: Categories): Promise<UpdateResult> {
    return await this.categoriesRepository.update(categories.id, categories);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.categoriesRepository.delete(id);
  }
}
