import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from '../entities/book.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BookDTO } from './dto/book.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepo: Repository<Book>,
  ) { }

  create(createBookDto: CreateBookDto) {
    return this.bookRepo.create(createBookDto);
  }

  async findAll() {
    try {
      return await this.bookRepo.find();
    } catch (error) {
      return error.message;
    }
  }

  async findOne(id: number) {
    try {
      return await this.bookRepo.findOne({ where: { id: id } });
    } catch (error) {
      return error.message;
    }
  }

  //How to create an update function:
  //1:decalre 2 parameters, the id and the body
  //2:await the update function
  //3:return entity by using a find function
  async update(id: number, book: BookDTO): Promise<BookDTO> {
    this.bookRepo.update({ id }, book)
    return this.findOne(id)
  }


  async remove(id: number) {
    try {
      await this.bookRepo.delete({ id });
      return { deleted: true };
    } catch (err) {
      return { deleted: false, message: err.message };
    }
  }

}
