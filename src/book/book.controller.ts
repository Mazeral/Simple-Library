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
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDesc } from './dto/update-book-desc.dto';
import { UpdateBookTitle } from './dto/update-book-title.dto';
import { Book } from '.prisma/client';
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}
  @Post('new')
  create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.bookService.create(createBookDto);
  }
  @Get('/')
  findAll(): Promise<Book[]> {
    return this.bookService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Book> {
    return this.bookService.findOneID(+id);
  }

  @Patch('changetitle')
  updateTitle(@Body() updateBookTitle: UpdateBookTitle) {
    const title = updateBookTitle.title;
    const newTitle = updateBookTitle.newTitle;
    return this.bookService.updateTitle(title, newTitle);
  }
  @Patch('desc')
  updateDesc(@Body() updateBookDesc: UpdateBookDesc) {
    const title = updateBookDesc.title;
    const newDesc = updateBookDesc.newDesc;
    return this.bookService.updateDesc(title, newDesc);
  }

  @Delete('delete')
  remove(@Body() title: string) {
    return this.bookService.remove(title);
  }
}
