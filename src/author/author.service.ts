import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { Author } from 'src/entities/author.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from 'src/entities/book.entity';
import { BookService } from 'src/book/book.service';
@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private authorRepo: Repository<Author>,
    private readonly bookService: BookService,
  ) {}

  async create(createAuthorDto: CreateAuthorDto) {
    try {
      const found: Author[] = await this.authorRepo.find({
        where: {
          FirstName: createAuthorDto.FirstName,
          LastName: createAuthorDto.LastName,
        },
      });
      if (found.length != 0) throw Error('This author already exists');
      else {
        let booklist: Book[] | null = [];
        if (createAuthorDto.Books != null) {
          booklist = await this.createArray(createAuthorDto.Books);
          console.log('The book list is : ' + booklist);
        }
        return await this.authorRepo.save(
          this.authorRepo.create({
            FirstName: createAuthorDto.FirstName,
            LastName: createAuthorDto.LastName,
            Books: booklist,
          }),
        );
      }
    } catch (error) {
      return error.message;
    }
  }

  async findAll() {
    try {
      return await this.authorRepo.find();
    } catch (error) {
      return error.message;
    }
  }

  async findOne({ firstName, lastName }): Promise<Author | undefined> {
    try {
      return await this.authorRepo.findOne({
        where: { FirstName: firstName, LastName: lastName },
      });
    } catch (error) {
      return error.message;
    }
  }

  async findOneID(wanted: number) {
    try {
      return await this.authorRepo.findOne({
        where: { id: wanted },
      });
    } catch (error) {
      return error.message;
    }
  }

  //Create multiple update services to make mutliple update endpoints, DIVIDE AND CONQUOER

  async updateBooks({ firstName, lastName }, books: string[]) {
    //Search for an author that matches these options, if he does exist update him with the books
    //Array, if not return error.
    try {
      const author: Author = await this.authorRepo.findOneOrFail({
        where: {
          FirstName: firstName,
          LastName: lastName,
        },
      });
      //needs to be fixed: if a book title exists, add it.
      //These update functions only add a title, not a book object.
      // Has been fixed.
      if (author) {
        const bookArray: Book[] = await this.createArray(books);
        this.authorRepo.update(author.id, { Books: bookArray });
      }
    } catch (error) {
      return error.message;
    }
  }
  async updateFirstName({ firstName, lastName }, newFirstName: string) {
    //Changed the first name
    try {
      const author: Author = await this.authorRepo.findOneOrFail({
        where: {
          FirstName: firstName,
          LastName: lastName,
        },
      });
      if (author) {
        this.authorRepo.update(author.id, { FirstName: newFirstName });
      }
    } catch (error) {
      return error.message;
    }
  }

  async updateLastName({ firstName, lastName }, newLastName: string) {
    //changes the last name
    try {
      const author: Author = await this.authorRepo.findOneOrFail({
        where: {
          FirstName: firstName,
          LastName: lastName,
        },
      });
      if (author) {
        this.authorRepo.update(author.id, { LastName: newLastName });
      }
    } catch (error) {
      return error.message;
    }
  }

  async remove({ firstName, lastName }) {
    try {
      const author = await this.findOne({ firstName, lastName });
      await this.authorRepo.remove(author);
      return { deleted: true };
    } catch (err) {
      return { deleted: false, message: err.message };
    }
  }

  //Creates an array of books
  async createArray(booknames: string[]) {
    const books: Book[] = [];
    for (const bookname of booknames) {
      const book: Book | undefined = await this.bookService.findOne(bookname);
      books.push(book);
      console.log(books);
    }
    console.log('The returned value: ' + books);
    return books;
  }
}
