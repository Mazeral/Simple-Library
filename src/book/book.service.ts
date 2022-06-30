import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from 'src/entities/book.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepo: Repository<Book>,
  ) {}

  create(createBookDto: CreateBookDto) {
    try {
      if (this.bookRepo.find(createBookDto))
        throw Error('This book already exists');
      else {
        return this.bookRepo.create(createBookDto);
      }
    } catch (Error) {
      console.log(Error.message);
    }
  }

  async findAll() {
    try {
      return await this.bookRepo.find();
    } catch (error) {
      return error.message;
    }
  }

  async findOne(Title: string): Promise<Book> {
    try {
      return await this.bookRepo.findOne({ where: { title: Title } });
    } catch (error) {
      return error.message;
    }
  }

  async findOneID(wanted: number): Promise<Book> {
    try {
      return await this.bookRepo.findOne({ where: { id: wanted } });
    } catch (error) {
      return error.message;
    }
  }
  //Create multiple update services to make mutliple update endpoints, DIVIDE AND CONQUOER
  async updateTitle(Title: string, newTitle: string) {
    try {
      return await this.bookRepo.update(Title, { title: newTitle });
    } catch (error) {
      return error.message;
    }
  }

  async updateDesc(Title: string, newDesc: string) {
    try {
      return await this.bookRepo.update(Title, { description: newDesc });
    } catch (error) {
      return error.message;
    }
  }

  async remove(title: string) {
    try {
      const book = await this.bookRepo.findOne(title);
      this.bookRepo.remove(book);
      return { deleted: true };
    } catch (err) {
      return { deleted: false, message: err.message };
    }
  }
}
