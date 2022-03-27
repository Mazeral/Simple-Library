import { Test, TestingModule } from '@nestjs/testing';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { BookDTO } from './dto/book.dto';
describe('BookController', () => {
  let controller: BookController;

  //If we have a DI in the controller or the service, natural approach that comes with the generated file with the CLI will fail because the dependencies that are used by the controller or the services wont be injected.
  //There are 2 possible solutions :
  // 1:inject them
  // 2:mock them
  //In this file I'm going to inject them.
  //For injeting go to this website : https://stackoverflow.com/questions/61733060/unit-testing-nestjs-controller-with-injection`

  //This is a fake moddule for our tests, that means that the test doesn't use the author.module file.

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookController],
      //using custom providers for using a the controller with it's injected dependencies
      providers: [{
        provide: BookService, //moking the services of the BookService file.
        useValue: {
          create: jest.fn(dto => {
            return {
              id: Math.random(),
              ...dto
            }
          }),
          findAll: jest.fn(() => {
            return [
              {
                id: 1, "title": "sometitle1", "desciprtion": "somedescription1"
              },
              {
                id: 2, "title": "sometitle2", "desciprtion": "somedescription2"
              },
              {
                id: 3, "title": "sometitle3", "desciprtion": "somedescription3"
              }]
          }),
          findOne: jest.fn((id: string) => {
            return {
              id: id,
              title: "a title",
              description: "a description"
            }
          }),
          remove: jest.fn().mockResolvedValue({ deleted: true }),
          update: jest.fn().mockImplementation((id, book: BookDTO) => Promise.resolve({ ...book })),//This can be shortend
          //using the mockResolvedValue
        }
      }],
    }).compile();

    controller = module.get<BookController>(BookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create an entity', () => {
    expect(controller.create({ title: 'some title', description: 'some description' })).toEqual({ id: expect.any(Number), title: 'some title', description: 'some description' })
  });
  it('should return an array of object', () => {
    expect(controller.findAll()).toEqual([
      {
        id: 1, "title": "sometitle1", "desciprtion": "somedescription1"
      },
      {
        id: 2, "title": "sometitle2", "desciprtion": "somedescription2"
      },
      {
        id: 3, "title": "sometitle3", "desciprtion": "somedescription3"
      }])
  })

  it('should return a book', () => {
    expect(controller.findOne('5')).toEqual(
      {
        id: 5,
        title: "a title",
        description: "a description",
      }
    )
  })

  describe('updateBook', () => {
    it('should update a book', async () => {
      const newBook: BookDTO = {
        id: 9,
        title: 'some title',
        description: 'some description',
      };
      await expect(controller.update('9', newBook)).resolves.toEqual({
        ...newBook,
      });
    });
  });



});
