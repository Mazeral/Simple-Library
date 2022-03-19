import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Version,
} from '@nestjs/common';
import { BookService } from './book.service';
import { BookDTO } from './dto/book.dto';
import { CreateBookDto } from './dto/create-book.dto';
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) { }
  @Version('0')
  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }
  @Version('0')
  @Get()
  findAll() {
    return this.bookService.findAll();
  }
  @Version('0')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(+id);
  }

  @Version('0')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBook: BookDTO): Promise<BookDTO> {
    return this.bookService.update(+id, updateBook)
  }


  @Version('0')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(+id);
  }
}
