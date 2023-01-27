import { CreateAuthorDto } from './dto/create-author.dto';
import { Author } from '.prisma/client';
import { PrismaService } from 'src/prisma.service';
import { AuthorsToBooksService } from 'src/authors-to-books/authors-to-books.service';
import { addBooksToAuthors } from 'src/authors-to-books/dto/add-books-to-authors.dto';
export declare class AuthorService {
    private readonly prisma;
    private readonly authorbooks;
    constructor(prisma: PrismaService, authorbooks: AuthorsToBooksService);
    create(createAuthorDto: CreateAuthorDto): Promise<Author>;
    findAll(): Promise<any>;
    findOne({ firstName, lastName }: {
        firstName: any;
        lastName: any;
    }): Promise<Author | undefined>;
    findOneID(wanted: number): Promise<any>;
    updateFirstName({ firstName, lastName }: {
        firstName: any;
        lastName: any;
    }, newFirstName: string): Promise<any>;
    updateLastName({ firstName, lastName }: {
        firstName: any;
        lastName: any;
    }, newLastName: string): Promise<any>;
    updateAuthorBooks(updateAuthorBooks: addBooksToAuthors): Promise<void>;
    remove({ firstName, lastName }: {
        firstName: any;
        lastName: any;
    }): Promise<any>;
    createArray(booknames: string[]): Promise<number[]>;
}
