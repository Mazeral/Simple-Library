import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { DeleteAuthor } from './dto/delete-author.dto';
import { NewFirstName } from './dto/new-firstName.dto';
import { NewLastName } from './dto/new-lastName.dto';
import { addBooksToAuthors } from 'src/authors-to-books/dto/add-books-to-authors.dto';
@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}
  //creates an author
  @Post('new')
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorService.create(createAuthorDto);
  }
  @Get()
  findAll() {
    return this.authorService.findAll();
  }
  //finds an author by ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorService.findOneID(+id);
  }
  //Create update endpoints that work well witht the services.

  //update the firstname of the author
  @Post('firstname')
  updateFirstName(@Body() updateFirstName: NewFirstName) {
    //Gets the original first and last name, and then passes it in the update function
    const firstName = updateFirstName.FirstName;
    const lastName = updateFirstName.LastName;
    return this.authorService.updateFirstName(
      { firstName, lastName },
      updateFirstName.NewFirstName,
    );
  }

  //update the lastname of the author
  @Post('lastname')
  async updateLastName(@Body() updateLastName: NewLastName) {
    //Gets the original first and last name, and then passes it in the update function
    const firstName: string = updateLastName.FirstName;
    const lastName: string = updateLastName.LastName;
    const nln: string = updateLastName.NewLastName;
    return await this.authorService.updateLastName(
      { firstName, lastName },
      nln,
    );
  }

  //updates the authors books
  @Post('books')
  updateAuthorBooks(@Body() updateAuthorBooks: addBooksToAuthors) {
    this.authorService.updateAuthorBooks(updateAuthorBooks);
  }

  //removes an author from the database.
  @Post('deleteAuthor')
  remove(@Body() author: DeleteAuthor) {
    const firstName = author.FirstName;
    const lastName = author.LastName;
    return this.authorService.remove({ firstName, lastName });
  }

  //If I want to edit the array of books in the autor entity, I will find the author first, and then save the array in a different var, delete the existing array and replace it with the the array after filtering it. It will be a patch http, not Delete.
}
