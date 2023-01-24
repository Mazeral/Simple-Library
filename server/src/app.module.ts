import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static'; // New for VueJS client
import { join } from 'path'; // New for VueJS client
import { BookModule } from './book/book.module';
import { AuthorModule } from './author/author.module';
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'client', 'dist'),
    }),
    BookModule,
    AuthorModule,
  ],
  providers: [],
})
export class AppModule {}
