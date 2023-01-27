import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { DeleteAuthor } from './dto/delete-author.dto';
import { NewFirstName } from './dto/new-firstName.dto';
import { NewLastName } from './dto/new-lastName.dto';
import { addBooksToAuthors } from 'src/authors-to-books/dto/add-books-to-authors.dto';
export declare class AuthorController {
    private readonly authorService;
    constructor(authorService: AuthorService);
    create(createAuthorDto: CreateAuthorDto): Promise<import(".prisma/client").Author>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    updateFirstName(updateFirstName: NewFirstName): Promise<any>;
    updateLastName(updateLastName: NewLastName): Promise<any>;
    updateAuthorBooks(updateAuthorBooks: addBooksToAuthors): void;
    remove(author: DeleteAuthor): Promise<any>;
}
