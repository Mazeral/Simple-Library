import { Test, TestingModule } from '@nestjs/testing';
import { AuthorsToBooksService } from './authors-to-books.service';

describe('AuthorsToBooksService', () => {
  let service: AuthorsToBooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthorsToBooksService],
    }).compile();

    service = module.get<AuthorsToBooksService>(AuthorsToBooksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
