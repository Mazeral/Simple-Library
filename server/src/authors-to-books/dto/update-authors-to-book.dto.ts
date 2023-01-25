import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthorsToBookDto } from './create-authors-to-book.dto';

export class UpdateAuthorsToBookDto extends PartialType(CreateAuthorsToBookDto) {}
