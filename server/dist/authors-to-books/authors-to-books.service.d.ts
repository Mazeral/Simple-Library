import { CreateAuthorsToBookDto } from './dto/create-authors-to-book.dto';
import { UpdateAuthorsToBookDto } from './dto/update-authors-to-book.dto';
import { PrismaService } from 'src/prisma.service';
export declare class AuthorsToBooksService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createArray: CreateAuthorsToBookDto[]): Promise<{
        created: boolean;
    }>;
    findAll(): Promise<import(".prisma/client").AuthorsBooks[]>;
    findOne(id: CreateAuthorsToBookDto): Promise<import(".prisma/client").AuthorsBooks>;
    update(id: CreateAuthorsToBookDto, updateAuthorsToBookDto: UpdateAuthorsToBookDto): Promise<import(".prisma/client").AuthorsBooks>;
    remove(id: CreateAuthorsToBookDto): Promise<import(".prisma/client").AuthorsBooks>;
}
