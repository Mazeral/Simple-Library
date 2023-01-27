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
exports.AuthorService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const authors_to_books_service_1 = require("../authors-to-books/authors-to-books.service");
let AuthorService = class AuthorService {
    constructor(prisma, authorbooks) {
        this.prisma = prisma;
        this.authorbooks = authorbooks;
    }
    async create(createAuthorDto) {
        return await this.prisma.author.create({
            data: {
                firstname: createAuthorDto.FirstName,
                lastname: createAuthorDto.LastName,
            },
        });
    }
    async findAll() {
        try {
            const anb = await this.prisma.author.findMany({
                include: { AuthorsBooks: { include: { book: true } } },
            });
            const result = anb.map((author) => {
                return {
                    id: author.id,
                    firstname: author.firstname,
                    lastname: author.lastname,
                    books: author.AuthorsBooks.map((item) => item.book),
                };
            });
            return result;
        }
        catch (error) {
            return error.message;
        }
    }
    async findOne({ firstName, lastName }) {
        try {
            return await this.prisma.author.findFirstOrThrow({
                where: { firstname: firstName, lastname: lastName },
            });
        }
        catch (error) {
            return error.message;
        }
    }
    async findOneID(wanted) {
        try {
            return await this.prisma.author.findFirstOrThrow({
                where: { id: wanted },
            });
        }
        catch (error) {
            return error.message;
        }
    }
    async updateFirstName({ firstName, lastName }, newFirstName) {
        try {
            const author = await this.prisma.author.findFirstOrThrow({
                where: {
                    firstname: firstName,
                    lastname: lastName,
                },
            });
            const ID = author.id;
            if (newFirstName === '')
                throw Error("The new first doesn't have a value");
            return this.prisma.author.update({
                where: { id: ID },
                data: { firstname: newFirstName },
            });
        }
        catch (error) {
            return error.message;
        }
    }
    async updateLastName({ firstName, lastName }, newLastName) {
        try {
            const author = await this.prisma.author.findFirstOrThrow({
                where: {
                    firstname: firstName,
                    lastname: lastName,
                },
            });
            const ID = author.id;
            if (newLastName === '')
                throw Error('The new last name is an empty string');
            return this.prisma.author.update({
                where: { id: ID },
                data: { lastname: newLastName },
            });
        }
        catch (error) {
            return error.message;
        }
    }
    async updateAuthorBooks(updateAuthorBooks) {
        try {
            const author = await this.prisma.author.findFirst({
                where: {
                    firstname: updateAuthorBooks.firstname,
                    lastname: updateAuthorBooks.lastname,
                },
            });
            updateAuthorBooks.books.forEach(async (item) => {
                const bookId = await this.prisma.book.findFirst({
                    where: {
                        title: item,
                    },
                    select: { id: true },
                });
                await this.prisma.authorsBooks.create({
                    data: {
                        authorId: author.id,
                        bookId: bookId.id,
                    },
                });
            });
        }
        catch (error) {
            console.error(error);
            throw new common_1.BadRequestException('There something wrong with the data!');
        }
    }
    async remove({ firstName, lastName }) {
        try {
            const author = await this.prisma.author.findFirstOrThrow({
                where: {
                    firstname: firstName,
                    lastname: lastName,
                },
                select: { id: true },
            });
            await this.prisma.author.delete({
                where: {
                    id: author.id,
                },
            });
            return { deleted: true };
        }
        catch (err) {
            return err.message;
        }
    }
    async createArray(booknames) {
        const books = [];
        for (const bookname of booknames) {
            const book = await this.prisma.book.findFirstOrThrow({
                where: {
                    title: bookname,
                },
                select: {
                    id: true,
                },
            });
            books.push(book.id);
        }
        return books;
    }
};
AuthorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        authors_to_books_service_1.AuthorsToBooksService])
], AuthorService);
exports.AuthorService = AuthorService;
//# sourceMappingURL=author.service.js.map