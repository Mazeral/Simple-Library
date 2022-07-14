import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { BookService } from 'src/book/book.service';
import { Author, Book } from '.prisma/client';
import { PrismaService } from 'src/prisma.service';
@Injectable()
export class AuthorService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly bookService: BookService,
  ) {}

  async create(createAuthorDto: CreateAuthorDto) {
    try {
      const found: Author = await this.prisma.author.findFirst({
        where: {
          FirstName: createAuthorDto.FirstName,
          LastName: createAuthorDto.LastName,
        },
      });
      if (found) throw Error('This author already exists');
      else {
        let booklist: any = undefined;
        if (
          createAuthorDto.Books != null &&
          createAuthorDto.Books != undefined
        ) {
          booklist = await this.createArray(createAuthorDto.Books);
        }
        return await this.prisma.author.create({
          data: {
            FirstName: createAuthorDto.FirstName,
            LastName: createAuthorDto.LastName,
            books: booklist,
          },
        });
      }
    } catch (error) {
      return error.message;
    }
  }

  async findAll() {
    try {
      return await this.prisma.author.findMany({
        select: {
          id: true,
          FirstName: true,
          LastName: true,
          books: true,
        },
      });
    } catch (error) {
      return error.message;
    }
  }

  async findOne({ firstName, lastName }): Promise<Author | undefined> {
    try {
      return await this.prisma.author.findFirstOrThrow({
        where: { FirstName: firstName, LastName: lastName },
      });
    } catch (error) {
      return error.message;
    }
  }

  async findOneID(wanted: number) {
    try {
      return await this.prisma.author.findFirstOrThrow({
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
    console.log(books);
    try {
      const author: { books: Book[]; id: number } =
        await this.prisma.author.findFirstOrThrow({
          where: {
            FirstName: firstName,
            LastName: lastName,
          },
          select: {
            id: true,
            books: true,
          },
        });
      console.log(author);
      const list = await this.createArray(books);
      const authorbooklist: Book[] = author.books;
      const booklist: Book[] = authorbooklist.concat(list);
      const cleanarray: any = booklist.filter(
        (item, index) => booklist.indexOf(item) === index,
      );
      console.log(cleanarray);
      const object: any = { cleanarray };
      console.log(object['cleanarray']);
      //needs to be fixed: if a book title exists, add it.
      //These update functions only add a title, not a book object.
      // Has been fixed.
      const id: number = author.id;
      console.log(id + 'this is the id');
      return this.prisma.author.updateMany({
        where: {
          id: id,
        },
        data: {
          books: cleanarray,
        },
      });
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }
  async updateFirstName({ firstName, lastName }, newFirstName: string) {
    //Changed the first name
    try {
      const author: Author = await this.prisma.author.findFirstOrThrow({
        where: {
          FirstName: firstName,
          LastName: lastName,
        },
      });
      const ID = author.id;
      return this.prisma.author.update({
        where: { id: ID },
        data: { FirstName: newFirstName },
      });
    } catch (error) {
      return error.message;
    }
  }

  async updateLastName({ firstName, lastName }, newLastName: string) {
    //changes the last name
    try {
      const author: Author = await this.prisma.author.findFirstOrThrow({
        where: {
          FirstName: firstName,
          LastName: lastName,
        },
      });
      const ID = author.id;
      //Return keyboard is VERY IMPORTANT for the update api to work
      return this.prisma.author.update({
        where: { id: ID },
        data: { LastName: newLastName },
      });
    } catch (error) {
      return error.message;
    }
  }

  async remove({ firstName, lastName }) {
    try {
      const author = await this.findOne({ firstName, lastName });
      await this.prisma.author.delete({
        where: {
          id: author.id,
        },
      });
      return { deleted: true };
    } catch (err) {
      return err.message;
    }
  }

  //Creates an array of books
  async createArray(booknames: string[]) {
    const books = [];
    for (const bookname of booknames) {
      const book = await this.prisma.book.findFirstOrThrow({
        where: {
          Title: bookname,
        },
        select: {
          Title: true,
          Description: true,
          authors: true,
        },
      });
      books.push(book);
      //console.log(books); This was for testing
    }
    //console.log('The returned value: ' + books); This was for testing
    return books;
  }
}
