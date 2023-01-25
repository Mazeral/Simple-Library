import { IsInt } from "class-validator";

export class CreateAuthorsToBookDto {
    @IsInt()
    bookId: number;
    @IsInt()
    authorId: number;
}
