import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { Author } from '.prisma/client';
import { PrismaService } from 'src/prisma.service';
import { AuthorsToBooksService } from 'src/authors-to-books/authors-to-books.service';
import { addBooksToAuthors } from 'src/authors-to-books/dto/add-books-to-authors.dto';
@Injectable()
export class AuthorService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly authorbooks: AuthorsToBooksService,
  ) {}

  async create(createAuthorDto: CreateAuthorDto) {
    return await this.prisma.author.create({
      data: {
        firstname: createAuthorDto.FirstName,
        lastname: createAuthorDto.LastName,
      },
    });
  }

  async findAll() {
    try {
      return await this.prisma.author.findMany({
        select: {
          id: true,
          firstname: true,
          lastname: true,
          AuthorsBooks: true,
        },
      });
    } catch (error) {
      return error.message;
    }
  }

  async findOne({ firstName, lastName }): Promise<Author | undefined> {
    try {
      return await this.prisma.author.findFirstOrThrow({
        where: { firstname: firstName, lastname: lastName },
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

  async updateFirstName({ firstName, lastName }, newFirstName: string) {
    //Changed the first name
    try {
      const author: Author = await this.prisma.author.findFirstOrThrow({
        where: {
          firstname: firstName,
          lastname: lastName,
        },
      });
      const ID = author.id;
      if (newFirstName === '')
        throw Error("The new first doesn't have a value");
      return this.prisma.author.update({
        where: { id: ID },
        data: { firstname: newFirstName },
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
          firstname: firstName,
          lastname: lastName,
        },
      });
      const ID = author.id;
      //Return keyboard is VERY IMPORTANT for the update api to work
      if (newLastName === '')
        throw Error('The new last name is an empty string');
      return this.prisma.author.update({
        where: { id: ID },
        data: { lastname: newLastName },
      });
    } catch (error) {
      return error.message;
    }
  }

  //A function to update the list of books for an Author.
  async updateAuthorBooks(updateAuthorBooks: addBooksToAuthors) {
    try {
      const author: Author | null = await this.prisma.author.findFirst({
        where: {
          firstname: updateAuthorBooks.firstname,
          lastname: updateAuthorBooks.lastname,
        },
      });

      updateAuthorBooks.books.forEach(async (item) => {
        const bookId = await this.prisma.book.findFirst({
          where: {
            title: item,
          },
          select: { id: true },
        });
        await this.prisma.authorsBooks.create({
          data: {
            authorId: author.id,
            bookId: bookId.id,
          },
        });
      });
    } catch (error) {
      console.error(error);
      throw new BadRequestException('There something wrong with the data!');
    }
  }

  async remove({ firstName, lastName }) {
    try {
      const author: { id: number } = await this.prisma.author.findFirstOrThrow({
        where: {
          firstname: firstName,
          lastname: lastName,
        },
        select: { id: true },
      });
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
    const books: number[] = [];
    for (const bookname of booknames) {
      const book = await this.prisma.book.findFirstOrThrow({
        where: {
          title: bookname,
        },
        select: {
          id: true,
        },
      });
      books.push(book.id);
    }
    return books;
  }
}
