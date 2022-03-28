import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author } from '../../src/entities/author.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private authorRepo: Repository<Author>,
  ) {}

  create(createAuthorDto: CreateAuthorDto) {
    try {
      if (this.authorRepo.find(createAuthorDto))
        return 'This author already exists';
      else {
        return this.authorRepo.create(createAuthorDto);
      }
    } catch (error) {
      return error.message;
    }
  }

  findAll() {
    return this.authorRepo.find();
  }

  findOne(title: string) {
    return this.authorRepo.findOne({ where: { title: title } });
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto) {
    try {
      return await this.authorRepo.update(id, updateAuthorDto);
    } catch (error) {
      return error.message;
    }
  }

  async remove(id: number) {
    try {
      await this.authorRepo.delete({ id });
      return { deleted: true };
    } catch (err) {
      return { deleted: false, message: err.message };
    }
  }
}
