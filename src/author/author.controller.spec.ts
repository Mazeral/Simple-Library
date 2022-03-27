import { Test, TestingModule } from '@nestjs/testing';
import { AuthorController } from './author.controller';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto'

describe('AuthorController', () => {
  let controller: AuthorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthorController],
      providers: [{
        provide: AuthorService,
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
                id: 1, "FirstName": "some name", "LastName": "some last-name", Books: []
              },
              {
                id: 2, "FirstName": "some name", "LastName": "some last-name", Books: []
              },
              {
                id: 3, "FirstName": "some name", "LastName": "some last-name", Books: []
              }]
          }),
          findOne: jest.fn((id: string) => {
            return {
              id: id,
              FirstName: 'First Name',
              LastName: 'Last Name',
              Books: []   //All books arrays are empty in the test
            }
          }),
          remove: jest.fn().mockResolvedValue({ deleted: true }),
          update: jest.fn().mockImplementation((id, author: CreateAuthorDto) => Promise.resolve({ ...author }))
        }
      }],
    }).compile();

    controller = module.get<AuthorController>(AuthorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });



  it('should create an entity', () => {
    expect(controller.create({ FirstName: 'the first name', LastName: 'the last name', Books: [] })).
      toEqual
      ({
        id: expect.any(Number),
        FirstName: 'the first name',
        LastName: 'the last name',
        Books: []
      })
  });

  it('should return an array of object', () => {
    expect(controller.findAll()).toEqual([
      {
        id: 1, "FirstName": "some name", "LastName": "some last-name", Books: []
      },
      {
        id: 2, "FirstName": "some name", "LastName": "some last-name", Books: []
      },
      {
        id: 3, "FirstName": "some name", "LastName": "some last-name", Books: []
      }])
  })

  it('should return an author', () => {
    expect(controller.findOne('1')).toEqual(
      {
        id: "1",
        FirstName: "First Name",
        LastName: "Last Name",
        Books: []
      }
    )
  })

  describe('updateBook', () => {
    it('should update an author', async () => {
      const newAuthor = {
        id: 1,
        FirstName: 'FirstName',
        LastName: 'LastName',
        Books: []
      };
      await expect(controller.update('1', newAuthor)).resolves.toEqual({
        ...newAuthor,
      });
    });
  });


});
