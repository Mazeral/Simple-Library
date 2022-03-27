import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '../../src/entities/book.entity';// I import it this way when I import from src so it doesn't cause errors
import { BookService } from '../../src/book/book.service';// I import it this way when I import from src so it doesn't cause errors

//needs to be examined later:
// export const repositoryMockFactory: () => MockType<Repository<Book>> = jest.fn(() => {
//     findOne: jest.fn(entity => entity)
// })

//I need values in order to test on them the services.
const testTitle1 = 'Test title 1';
const testDescription = 'Test description 1';
const oneBook = new Book('One book title', 'One book description');
const bookArray = [
    new Book(testTitle1, testDescription),
    new Book('Test Title 2', 'Test description 2'),
    new Book('Test title 3', 'Test description 3'),
]
const testBook = { id: 50, title: 'Test book title', descirption: 'The description of test book' }
const mockService = {}
describe('BookService', () => {
    let service: BookService;
    let repo: Repository<Book>;

    beforeEach(async () => {
        //needs to be examined later:
        //export const repositoryMockFactory: () => MockType<Repository<Book>> = jest.fn(() => ({}))
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                BookService,
                {
                    provide: getRepositoryToken(Book),
                    // define all the methods that you use from the BookRepo
                    // give proper return values as expected or mock implementations, your choice
                    //These are the api's of the repo, not the functions of the service
                    useValue: {
                        find: jest.fn().mockResolvedValue(bookArray),
                        findOne: jest.fn().mockResolvedValue(oneBook),
                        create: jest.fn().mockReturnValue(oneBook),
                        // as these do not actually use their return values in our sample
                        // we just make sure that their resolve is true to not crash
                        update: jest.fn().mockResolvedValue(true),
                        // as these do not actually use their return values in our sample
                        // we just make sure that their resolve is true to not crash
                        delete: jest.fn().mockResolvedValue(true),
                    },
                },
            ],
        }).compile();
        service = module.get<BookService>(BookService);
        repo = module.get<Repository<Book>>(getRepositoryToken(Book));
    });
    //TESTS MUST BE INSIDE THE DESCRIBE BOOK SERVICE SCOPE FOR THEM TO WORK!
    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    //a test to check if the repo is defined or not.
    describe('Book repo', () => {
        it('Book repo should be defined', () => {
            expect(repo).toBeDefined()
        })
    })
    //testing findAll
    describe('findAll', () => {
        it('should return an array of books', async () => {
            const books = await service.findAll()
            expect(books).toEqual(bookArray)
        })
    })

    describe('deleteOne', () => {
        it('should return {deleted:true}', () => {
            expect(service.remove(0)).resolves.toEqual({ deleted: true })
        })
        it('should return {deleted: false, message: err.message}', () => {
            const repoSpy = jest.spyOn(repo, 'delete').mockRejectedValue(new Error('Bad Delete Method.'))
            expect(service.remove(1234544444.3699)).resolves.toEqual({
                deleted: false,
                message: 'Bad Delete Method.'
            })
            expect(repoSpy).toBeCalledWith({ id: 1234544444.3699 });
            expect(repoSpy).toBeCalledTimes(1);
        })
    })


})
