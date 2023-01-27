"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorController = void 0;
const common_1 = require("@nestjs/common");
const author_service_1 = require("./author.service");
const create_author_dto_1 = require("./dto/create-author.dto");
const delete_author_dto_1 = require("./dto/delete-author.dto");
const new_firstName_dto_1 = require("./dto/new-firstName.dto");
const new_lastName_dto_1 = require("./dto/new-lastName.dto");
const add_books_to_authors_dto_1 = require("../authors-to-books/dto/add-books-to-authors.dto");
let AuthorController = class AuthorController {
    constructor(authorService) {
        this.authorService = authorService;
    }
    create(createAuthorDto) {
        return this.authorService.create(createAuthorDto);
    }
    findAll() {
        return this.authorService.findAll();
    }
    findOne(id) {
        return this.authorService.findOneID(+id);
    }
    updateFirstName(updateFirstName) {
        const firstName = updateFirstName.FirstName;
        const lastName = updateFirstName.LastName;
        return this.authorService.updateFirstName({ firstName, lastName }, updateFirstName.NewFirstName);
    }
    async updateLastName(updateLastName) {
        const firstName = updateLastName.FirstName;
        const lastName = updateLastName.LastName;
        const nln = updateLastName.NewLastName;
        return await this.authorService.updateLastName({ firstName, lastName }, nln);
    }
    updateAuthorBooks(updateAuthorBooks) {
        this.authorService.updateAuthorBooks(updateAuthorBooks);
    }
    remove(author) {
        const firstName = author.FirstName;
        const lastName = author.LastName;
        return this.authorService.remove({ firstName, lastName });
    }
};
__decorate([
    (0, common_1.Post)('new'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_author_dto_1.CreateAuthorDto]),
    __metadata("design:returntype", void 0)
], AuthorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('firstname'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [new_firstName_dto_1.NewFirstName]),
    __metadata("design:returntype", void 0)
], AuthorController.prototype, "updateFirstName", null);
__decorate([
    (0, common_1.Post)('lastname'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [new_lastName_dto_1.NewLastName]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "updateLastName", null);
__decorate([
    (0, common_1.Post)('books'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_books_to_authors_dto_1.addBooksToAuthors]),
    __metadata("design:returntype", void 0)
], AuthorController.prototype, "updateAuthorBooks", null);
__decorate([
    (0, common_1.Post)('deleteAuthor'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_author_dto_1.DeleteAuthor]),
    __metadata("design:returntype", void 0)
], AuthorController.prototype, "remove", null);
AuthorController = __decorate([
    (0, common_1.Controller)('author'),
    __metadata("design:paramtypes", [author_service_1.AuthorService])
], AuthorController);
exports.AuthorController = AuthorController;
//# sourceMappingURL=author.controller.js.map