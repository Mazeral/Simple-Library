import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { PrismaService } from 'src/prisma.service';
import { Book } from '@prisma/client';
@Injectable()
export class BookService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createBookDto: CreateBookDto) {
    try {
      const found: Book = await this.prisma.book.findFirst({
        where: {
          title: createBookDto.title,
          details: createBookDto.description,
        },
      });
      if (found) throw Error('This book already exists');
      else {
        if (createBookDto.title !== '') {
          const title: string = createBookDto.title;
          const description: string = createBookDto.description;
          return await this.prisma.book.create({
            data: {
              title: title,
              details: description,
            },
          });
        }
        throw Error('No title!');
      }
    } catch (Error) {
      console.log(Error.message);
      throw new BadRequestException
    }
  }

  async findAll(): Promise<Book[]> {
    return this.prisma.book.findMany({
      select: {
        id: true,
        title: true,
        details: true,
        AuthorsBooks:true
      },
    });
  }

  async findOne(Title: string): Promise<Book> {
    const found: Book = await this.prisma.book.findFirst({
      where: { title: Title },
    });
    return found;
  }

  async findOneID(wanted: number): Promise<Book> {
    try {
      return await this.prisma.book.findFirst({ where: { id: wanted } });
    } catch (error) {
      return error.message;
    }
  }
  //Create multiple update services to make mutliple update endpoints, DIVIDE AND CONQUOER
  async updateTitle(Title: string, newTitle: string) {
    try {
      const book: Book = await this.prisma.book.findFirst({
        where: { title: Title },
      });
      const ID = book.id;
      if (book) {
        return this.prisma.book.update({
          where: { id: ID },
          data: {
            title: newTitle,
          },
        });
      } else throw Error(`This book doesn't exist!`);
    } catch (Error) {
      return Error.message;
    }
  }

  async updateDesc(title: string, newDesc: string) {
    const updatedDesc: string = newDesc;
    try {
      const book: Book = await this.prisma.book.findFirstOrThrow({
        where: { title: title },
      });
      const ID: number = book.id;
      await this.prisma.book.update({
        where: { id: ID },
        data: {
          details: updatedDesc,
        },
      });
    } catch (error) {
      return error.message;
    }
  }

  async remove(title: string) {
    try {
      if (title === '' || title === undefined)
        throw Error('The title is empty!');
      const bookID: {
        id: number;
      } = await this.prisma.book.findFirst({
        where: {
          title: title,
        },
        select: {
          id: true,
        },
      });
      await this.prisma.book.delete({
        where: {
          id: bookID.id,
        },
      });
      return { deleted: true };
    } catch (Error) {
      console.log(Error);
      return Error;
    }
  }
}
