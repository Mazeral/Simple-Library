import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAuthorsToBookDto } from './dto/create-authors-to-book.dto';
import { UpdateAuthorsToBookDto } from './dto/update-authors-to-book.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AuthorsToBooksService {
  constructor(private prisma: PrismaService) { }
  async create(createArray: CreateAuthorsToBookDto[]) {
    try {
      for (const element of createArray) {
        await this.prisma.authorsBooks.create({
          data: {
            bookId: element.bookId,
            authorId: element.authorId
          }
        })
      }
    } catch (Error) {
      throw new BadRequestException("There's something wrong with the inputs...")
    }

    return { created: true };
  }

  async findAll() {
    return await this.prisma.authorsBooks.findMany();
  }

  //Since this is a many-to-many table, the id is a compound key, which makes the search is for multiple values.
  async findOne(id: CreateAuthorsToBookDto) {
    try {
      return await this.prisma.authorsBooks.findFirst({
        where: {
          bookId: id.bookId,
          authorId: id.authorId
        }
      })
    } catch (error) {
      throw new BadRequestException("It doesn't exist!")
    };
  }

  async update(id: CreateAuthorsToBookDto, updateAuthorsToBookDto: UpdateAuthorsToBookDto) {
    try {
      //depedning on which update is wanted.
      if (updateAuthorsToBookDto.authorId) {
        return await this.prisma.authorsBooks.update({
          where: {
            authorId_bookId: id
          },
          data: {
            authorId: updateAuthorsToBookDto.authorId,
          }
        })
      }
      if (updateAuthorsToBookDto.bookId) {
        return await this.prisma.authorsBooks.update({
          where: {
            authorId_bookId: id
          },
          data: {
            bookId: updateAuthorsToBookDto.bookId
          }
        })
      }
    } catch (error) {
      throw new BadRequestException("There's something wrong with the data!")
    };
  }

  async remove(id: CreateAuthorsToBookDto) {
    try {
      return await this.prisma.authorsBooks.delete({
        where: {
          authorId_bookId: id
        }
      })
    } catch (error) {
      throw new BadRequestException("This relation doesn't exist!")
    }
  }
}
