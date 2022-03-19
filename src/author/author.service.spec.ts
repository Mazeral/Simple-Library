import { Test, TestingModule } from '@nestjs/testing';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';
describe('AuthorService', () => {
  let service: AuthorService;

  //This is a fake moddule for our tests, that means that the test doesn't use the author.module file.
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthorService],
      controllers: [AuthorController],
    }).compile();

    service = module.get<AuthorService>(AuthorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
