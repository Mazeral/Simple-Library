"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAuthorsToBookDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_authors_to_book_dto_1 = require("./create-authors-to-book.dto");
class UpdateAuthorsToBookDto extends (0, mapped_types_1.PartialType)(create_authors_to_book_dto_1.CreateAuthorsToBookDto) {
}
exports.UpdateAuthorsToBookDto = UpdateAuthorsToBookDto;
//# sourceMappingURL=update-authors-to-book.dto.js.map