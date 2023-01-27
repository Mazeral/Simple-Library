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
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let BookService = class BookService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createBookDto) {
        try {
            const found = await this.prisma.book.findFirst({
                where: {
                    title: createBookDto.title,
                    details: createBookDto.description,
                },
            });
            if (found)
                throw Error('This book already exists');
            else {
                if (createBookDto.title !== '') {
                    const title = createBookDto.title;
                    const description = createBookDto.description;
                    return await this.prisma.book.create({
                        data: {
                            title: title,
                            details: description,
                        },
                    });
                }
                throw Error('No title!');
            }
        }
        catch (Error) {
            console.log(Error.message);
            throw new common_1.BadRequestException();
        }
    }
    async findAll() {
        const booksandauthors = await this.prisma.book.findMany({
            include: { AuthorsBooks: { include: { author: true } } },
        });
        const betterver = booksandauthors.map((book) => {
            return {
                id: book.id,
                title: book.title,
                detail: book.details,
                Authors: book.AuthorsBooks.map((item) => item.author),
            };
        });
        return betterver;
    }
    async findOne(Title) {
        const found = await this.prisma.book.findFirst({
            where: { title: Title },
        });
        return found;
    }
    async findOneID(wanted) {
        try {
            return await this.prisma.book.findFirst({ where: { id: wanted } });
        }
        catch (error) {
            return error.message;
        }
    }
    async updateTitle(Title, newTitle) {
        try {
            const book = await this.prisma.book.findFirst({
                where: { title: Title },
            });
            const ID = book.id;
            if (book) {
                return this.prisma.book.update({
                    where: { id: ID },
                    data: {
                        title: newTitle,
                    },
                });
            }
            else
                throw Error(`This book doesn't exist!`);
        }
        catch (Error) {
            return Error.message;
        }
    }
    async updateDesc(title, newDesc) {
        const updatedDesc = newDesc;
        try {
            const book = await this.prisma.book.findFirstOrThrow({
                where: { title: title },
            });
            const ID = book.id;
            await this.prisma.book.update({
                where: { id: ID },
                data: {
                    details: updatedDesc,
                },
            });
        }
        catch (error) {
            return error.message;
        }
    }
    async remove(title) {
        try {
            if (title === '' || title === undefined)
                throw Error('The title is empty!');
            const bookID = await this.prisma.book.findFirst({
                where: {
                    title: title,
                },
                select: {
                    id: true,
                },
            });
            await this.prisma.book.delete({
                where: {
                    id: bookID.id,
                },
            });
            return { deleted: true };
        }
        catch (Error) {
            console.log(Error);
            return Error;
        }
    }
};
BookService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map