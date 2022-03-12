import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from '../entities/book.entity';
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
      if (this.findOne(createBookDto.title)) {
        return 'This book does already exist';
      } else {
        return this.bookRepo.create(createBookDto);
      }
    } catch (error) {
      return error.message;
    }
  }

  async findAll() {
    try {
      return await this.bookRepo.find();
    } catch (error) {
      return error.message;
    }
  }

  async findOne(title: string) {
    try {
      return await this.bookRepo.findOne({ where: { title: title } });
    } catch (error) {
      return error.message;
    }
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    try {
      return await this.bookRepo.update(id, updateBookDto);
    } catch (error) {
      return error.message;
    }
  }

  remove(id: number) {
    return this.bookRepo.delete(id);
  }
}
