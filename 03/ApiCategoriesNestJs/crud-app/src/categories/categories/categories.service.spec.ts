import { Test, TestingModule } from '@nestjs/testing';
import { categoriesService } from './categories.service';

describe('categoriesService', () => {
  let service: categoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [categoriesService],
    }).compile();

    service = module.get<categoriesService>(categoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
