import { Module } from '@nestjs/common';
import { AuthorsToBooksService } from './authors-to-books.service';
import { AuthorsToBooksController } from './authors-to-books.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AuthorsToBooksController],
  providers: [AuthorsToBooksService, PrismaService],
})
export class AuthorsToBooksModule {}
