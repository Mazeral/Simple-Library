import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';
import { BookService } from 'src/book/book.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  //to import an entity, you should use the forFeature,TypeOrmModule.forFeature([Book]) registers a provider by the string name BookRepository. When you use @InjectRepository(Book) this is an alias for @Inject('BookRepository'), so Nest now knows what you're trying to inject here
  imports: [],
  controllers: [AuthorController],
  providers: [AuthorService, BookService, PrismaService],
})
export class AuthorModule {}
