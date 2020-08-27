import { Test, TestingModule } from '@nestjs/testing';
import { categoriesController } from './categories.controller';

describe('categoriesController', () => {
  let controller: categoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [categoriesController],
    }).compile();

    controller = module.get<categoriesController>(categoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
