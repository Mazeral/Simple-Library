import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static'; // New for VueJS client
import { join } from 'path'; // New for VueJS client
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './book/book.module';
import { AuthorModule } from './author/author.module';
import * as ormconfig from 'ormconfig';
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '../client/dist'),
    }),
    TypeOrmModule.forRoot(ormconfig),
    BookModule,
    AuthorModule,
  ],
  providers: [AppService],
})
export class AppModule {}
