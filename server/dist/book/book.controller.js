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
exports.BookController = void 0;
const common_1 = require("@nestjs/common");
const book_service_1 = require("./book.service");
const create_book_dto_1 = require("./dto/create-book.dto");
const update_book_desc_dto_1 = require("./dto/update-book-desc.dto");
const update_book_title_dto_1 = require("./dto/update-book-title.dto");
let BookController = class BookController {
    constructor(bookService) {
        this.bookService = bookService;
    }
    create(createBookDto) {
        return this.bookService.create(createBookDto);
    }
    findAll() {
        return this.bookService.findAll();
    }
    findOne(id) {
        return this.bookService.findOneID(+id);
    }
    updateTitle(updateBookTitle) {
        const title = updateBookTitle.title;
        const newTitle = updateBookTitle.newTitle;
        return this.bookService.updateTitle(title, newTitle);
    }
    async updateDesc(updateBookDesc) {
        await this.bookService.updateDesc(updateBookDesc.Title, updateBookDesc.NewDesc);
    }
    async remove(data) {
        const theTitle = data.title;
        await this.bookService.remove(theTitle);
    }
};
__decorate([
    (0, common_1.Post)('new'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_book_dto_1.CreateBookDto]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BookController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('changetitle'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_book_title_dto_1.UpdateBookTitle]),
    __metadata("design:returntype", void 0)
], BookController.prototype, "updateTitle", null);
__decorate([
    (0, common_1.Post)('details'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_book_desc_dto_1.UpdateBookDesc]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "updateDesc", null);
__decorate([
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "remove", null);
BookController = __decorate([
    (0, common_1.Controller)('book'),
    __metadata("design:paramtypes", [book_service_1.BookService])
], BookController);
exports.BookController = BookController;
//# sourceMappingURL=book.controller.js.map