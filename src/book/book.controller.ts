import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BookService } from './book.service';
import { BookDTO } from './dto/book.dto';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDesc } from './dto/update-book-desc.dto';
import { UpdateBookTitle } from './dto/update-book-title.dto';
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}
  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }
  @Get()
  findAll() {
    return this.bookService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookService.findOneID(+id);
  }

  @Patch('title')
  updateTitle(@Body() updateBookTitle: UpdateBookTitle): Promise<BookDTO> {
    const title = updateBookTitle.title;
    const newTitle = updateBookTitle.newTitle;
    return this.bookService.updateTitle(title, newTitle);
  }
  @Patch('desc')
  updateDesc(@Body() updateBookDesc: UpdateBookDesc): Promise<BookDTO> {
    const title = updateBookDesc.title;
    const newDesc = updateBookDesc.newDesc;
    return this.bookService.updateTitle(title, newDesc);
  }

  @Delete(':title')
  remove(@Param('title') title: string) {
    return this.bookService.remove(title);
  }
}
