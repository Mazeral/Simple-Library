import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { AuthorController } from './author.controller';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Author } from '../../src/entities/author.entity'; // I import it this way when I import from src so it doesn't cause errors
import { AuthorService } from '../../src/author/author.service'; // I import it this way when I import from src so it doesn't cause errors
import { Book } from '../../src/entities/book.entity';

const book1 = new Book('book1', 'book1 for testing');
const book2 = new Book('book2', 'book2 for testing');
const author1 = new Author('firstname1', 'lastname1', [book1]);
const author2 = new Author('firstname2', 'lastname2', [book2]);

const authorArray = [author1, author2];
//I need values in order to test on them the services.

describe('AuthorService', () => {
  let service: AuthorService;
  let repo: Repository<Author>;
  //This is a fake moddule for our tests, that means that the test doesn't use the author.module file.
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthorService,
        {
          provide: getRepositoryToken(Author), //We can't test the functions without the token
          useValue: {
            find: jest.fn().mockResolvedValue(authorArray),
            findOne: jest.fn().mockResolvedValue(author1),
            create: jest.fn().mockReturnValue(author2),
            // as these do not actually use their return values in our sample
            // we just make sure that their resolve is true to not crash
            update: jest.fn().mockResolvedValue(true),
            // as these do not actually use their return values in our sample
            // we just make sure that their resolve is true to not crash
            delete: jest.fn().mockResolvedValue(true),
          },
        },
      ],
      controllers: [AuthorController],
    }).compile();

    service = module.get<AuthorService>(AuthorService);
    repo = module.get<Repository<Author>>(getRepositoryToken(Author));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  //TESTS MUST BE INSIDE THE DESCRIBE AUTHOR SERVICE SCOPE FOR THEM TO WORK!
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  //a test to check if the repo is defined or not.
  describe('Author repo', () => {
    it('Author repo should be defined', () => {
      expect(repo).toBeDefined();
    });
  });
  //testing findAll
  describe('findAll', () => {
    it('should return an array of authors', async () => {
      const authors = await service.findAll();
      expect(authors).toEqual(authorArray);
    });
  });
  //testing the delete
  describe('deleteOne', () => {
    it('should return {deleted:true}', () => {
      expect(service.remove(0)).resolves.toEqual({ deleted: true });
    });
    it('should return {deleted: false, message: err.message}', () => {
      const repoSpy = jest
        .spyOn(repo, 'delete')
        .mockRejectedValue(new Error('Bad Delete Method.'));
      expect(service.remove(1234544444.3699)).resolves.toEqual({
        deleted: false,
        message: 'Bad Delete Method.',
      });
      expect(repoSpy).toBeCalledWith({ id: 1234544444.3699 });
      expect(repoSpy).toBeCalledTimes(1);
    });
  });
});
