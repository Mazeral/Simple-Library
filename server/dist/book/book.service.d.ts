import { CreateBookDto } from './dto/create-book.dto';
import { PrismaService } from 'src/prisma.service';
import { Book } from '@prisma/client';
export declare class BookService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createBookDto: CreateBookDto): Promise<Book>;
    findAll(): Promise<{
        id: number;
        title: string;
        detail: string;
        Authors: import(".prisma/client").Author[];
    }[]>;
    findOne(Title: string): Promise<Book>;
    findOneID(wanted: number): Promise<Book>;
    updateTitle(Title: string, newTitle: string): Promise<any>;
    updateDesc(title: string, newDesc: string): Promise<any>;
    remove(title: string): Promise<any>;
}
