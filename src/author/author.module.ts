import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';
import { Author } from 'src/entities/author.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  //to import an entity, you should use the forFeature,TypeOrmModule.forFeature([Book]) registers a provider by the string name BookRepository. When you use @InjectRepository(Book) this is an alias for @Inject('BookRepository'), so Nest now knows what you're trying to inject here
  imports: [TypeOrmModule.forFeature([Author])],
  controllers: [AuthorController],
  providers: [AuthorService],
})
export class AuthorModule {}
