import { Test, TestingModule } from '@nestjs/testing';
import { AuthorsToBooksController } from './authors-to-books.controller';
import { AuthorsToBooksService } from './authors-to-books.service';

describe('AuthorsToBooksController', () => {
  let controller: AuthorsToBooksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthorsToBooksController],
      providers: [AuthorsToBooksService],
    }).compile();

    controller = module.get<AuthorsToBooksController>(AuthorsToBooksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
