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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorsToBooksService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let AuthorsToBooksService = class AuthorsToBooksService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createArray) {
        try {
            for (const element of createArray) {
                await this.prisma.authorsBooks.create({
                    data: {
                        bookId: element.bookId,
                        authorId: element.authorId,
                    },
                });
            }
        }
        catch (Error) {
            throw new common_1.BadRequestException("There's something wrong with the inputs...");
        }
        return { created: true };
    }
    async findAll() {
        return await this.prisma.authorsBooks.findMany();
    }
    async findOne(id) {
        try {
            return await this.prisma.authorsBooks.findFirst({
                where: {
                    bookId: id.bookId,
                    authorId: id.authorId,
                },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException("It doesn't exist!");
        }
    }
    async update(id, updateAuthorsToBookDto) {
        try {
            if (updateAuthorsToBookDto.authorId) {
                return await this.prisma.authorsBooks.update({
                    where: {
                        authorId_bookId: id,
                    },
                    data: {
                        authorId: updateAuthorsToBookDto.authorId,
                    },
                });
            }
            if (updateAuthorsToBookDto.bookId) {
                return await this.prisma.authorsBooks.update({
                    where: {
                        authorId_bookId: id,
                    },
                    data: {
                        bookId: updateAuthorsToBookDto.bookId,
                    },
                });
            }
        }
        catch (error) {
            throw new common_1.BadRequestException("There's something wrong with the data!");
        }
    }
    async remove(id) {
        try {
            return await this.prisma.authorsBooks.delete({
                where: {
                    authorId_bookId: id,
                },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException("This relation doesn't exist!");
        }
    }
};
AuthorsToBooksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AuthorsToBooksService);
exports.AuthorsToBooksService = AuthorsToBooksService;
//# sourceMappingURL=authors-to-books.service.js.map