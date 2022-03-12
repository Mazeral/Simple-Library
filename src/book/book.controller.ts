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
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}
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
  findOne(@Param('title') title: string) {
    return this.bookService.findOne(title);
  }
  @Version('0')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(+id, updateBookDto);
  }
  @Version('0')
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.bookService.remove(id);
  }
}
