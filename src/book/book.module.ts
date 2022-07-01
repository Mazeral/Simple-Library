import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { Book } from 'src/entities/book.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  //to import an entity, you should use the forFeature,TypeOrmModule.forFeature([Book]) registers a provider by the string name BookRepository. When you use @InjectRepository(Book) this is an alias for @Inject('BookRepository'), so Nest now knows what you're trying to inject here
  imports: [TypeOrmModule.forFeature([Book])],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
