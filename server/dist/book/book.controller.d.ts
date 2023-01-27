import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDesc } from './dto/update-book-desc.dto';
import { UpdateBookTitle } from './dto/update-book-title.dto';
import { Book } from '.prisma/client';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    create(createBookDto: CreateBookDto): Promise<Book>;
    findAll(): Promise<{
        id: number;
        title: string;
        detail: string;
        Authors: import(".prisma/client").Author[];
    }[]>;
    findOne(id: string): Promise<Book>;
    updateTitle(updateBookTitle: UpdateBookTitle): Promise<any>;
    updateDesc(updateBookDesc: UpdateBookDesc): Promise<void>;
    remove(data: {
        title: string;
    }): Promise<void>;
}
