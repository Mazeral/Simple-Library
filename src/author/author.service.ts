import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author } from '../../src/entities/author.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from 'src/entities/book.entity';
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

  async findAll() {
    try {
      return await this.authorRepo.find();
    } catch (error) {
      return error.message;
    }
  }

  async findOne({ firstName, lastName }) {
    try {
      return await this.authorRepo.findOne({
        where: { FirstName: firstName, LastName: lastName },
      });
    } catch (error) {
      return error.message;
    }
  }

  //Create multiple update services to make mutliple update endpoints, DIVIDE AND CONQUOER

  async updateBooks({ firstName, lastName }, books: Book[]) {
    //Search for an author that matches these options, if he does exist update him with the books
    //Array, if not return error.
    try {
      const author: Author = await this.authorRepo.findOneOrFail({
        where: {
          FirstName: firstName,
          LastName: lastName,
        },
      });
      if (author) {
        this.authorRepo.update(author.id, { Books: books });
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
}
