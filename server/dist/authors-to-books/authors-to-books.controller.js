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
exports.AuthorsToBooksController = void 0;
const common_1 = require("@nestjs/common");
const authors_to_books_service_1 = require("./authors-to-books.service");
const create_authors_to_book_dto_1 = require("./dto/create-authors-to-book.dto");
const update_authors_to_book_dto_1 = require("./dto/update-authors-to-book.dto");
let AuthorsToBooksController = class AuthorsToBooksController {
    constructor(authorsToBooksService) {
        this.authorsToBooksService = authorsToBooksService;
    }
    async create(createAuthorsToBookDto) {
        return await this.authorsToBooksService.create(createAuthorsToBookDto);
    }
    async findAll() {
        return await this.authorsToBooksService.findAll();
    }
    async findOne(id) {
        return await this.authorsToBooksService.findOne(id);
    }
    async update(id, updateAuthorsToBookDto) {
        return await this.authorsToBooksService.update(id, updateAuthorsToBookDto);
    }
    remove(id) {
        return this.authorsToBooksService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], AuthorsToBooksController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthorsToBooksController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('search'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_authors_to_book_dto_1.CreateAuthorsToBookDto]),
    __metadata("design:returntype", Promise)
], AuthorsToBooksController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('update'),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_authors_to_book_dto_1.CreateAuthorsToBookDto,
        update_authors_to_book_dto_1.UpdateAuthorsToBookDto]),
    __metadata("design:returntype", Promise)
], AuthorsToBooksController.prototype, "update", null);
__decorate([
    (0, common_1.Post)('delete'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_authors_to_book_dto_1.CreateAuthorsToBookDto]),
    __metadata("design:returntype", void 0)
], AuthorsToBooksController.prototype, "remove", null);
AuthorsToBooksController = __decorate([
    (0, common_1.Controller)('authors-to-books'),
    __metadata("design:paramtypes", [authors_to_books_service_1.AuthorsToBooksService])
], AuthorsToBooksController);
exports.AuthorsToBooksController = AuthorsToBooksController;
//# sourceMappingURL=authors-to-books.controller.js.map