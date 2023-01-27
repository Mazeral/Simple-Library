import { AuthorsToBooksService } from './authors-to-books.service';
import { CreateAuthorsToBookDto } from './dto/create-authors-to-book.dto';
import { UpdateAuthorsToBookDto } from './dto/update-authors-to-book.dto';
export declare class AuthorsToBooksController {
    private readonly authorsToBooksService;
    constructor(authorsToBooksService: AuthorsToBooksService);
    create(createAuthorsToBookDto: CreateAuthorsToBookDto[]): Promise<{
        created: boolean;
    }>;
    findAll(): Promise<import(".prisma/client").AuthorsBooks[]>;
    findOne(id: CreateAuthorsToBookDto): Promise<import(".prisma/client").AuthorsBooks>;
    update(id: CreateAuthorsToBookDto, updateAuthorsToBookDto: UpdateAuthorsToBookDto): Promise<import(".prisma/client").AuthorsBooks>;
    remove(id: CreateAuthorsToBookDto): Promise<import(".prisma/client").AuthorsBooks>;
}
