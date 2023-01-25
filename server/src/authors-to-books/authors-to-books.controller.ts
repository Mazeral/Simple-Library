import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthorsToBooksService } from './authors-to-books.service';
import { CreateAuthorsToBookDto } from './dto/create-authors-to-book.dto';
import { UpdateAuthorsToBookDto } from './dto/update-authors-to-book.dto';

@Controller('authors-to-books')
export class AuthorsToBooksController {
  constructor(private readonly authorsToBooksService: AuthorsToBooksService) {}

  @Post()
  async create(@Body() createAuthorsToBookDto: CreateAuthorsToBookDto[]) {
    return await this.authorsToBooksService.create(createAuthorsToBookDto);
  }

  @Get()
  async findAll() {
    return await this.authorsToBooksService.findAll();
  }

  //it's a post request since the id is a compount key, not a candidate key.
  @Post('search')
  async findOne(id: CreateAuthorsToBookDto) {
    return await this.authorsToBooksService.findOne(id);
  }

  //it's a post request since the id is a compount key, not a candidate key.
  @Post('update')
  async update(
    id: CreateAuthorsToBookDto,
    @Body() updateAuthorsToBookDto: UpdateAuthorsToBookDto,
  ) {
    return await this.authorsToBooksService.update(id, updateAuthorsToBookDto);
  }

  //it's a post request since the id is a compount key, not a candidate key.
  @Post('delete')
  remove(id: CreateAuthorsToBookDto) {
    return this.authorsToBooksService.remove(id);
  }
}
