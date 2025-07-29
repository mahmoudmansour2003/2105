"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prisma = exports.PrismaClient = void 0;
const t = require("@prisma/client/runtime/library");
const e = {
    PrismaClient: "PrismaClient",
    Prisma: "Prisma",
};
class PrismaClient {
    constructor(options) {
        return new t.PrismaClient(options);
    }
}
exports.PrismaClient = PrismaClient;
exports.Prisma = t.Prisma;
"__esModule" in t.Prisma || Object.defineProperty(t.Prisma, "__esModule", { value: true });
for (const r in e) {
    const s = e[r];
    Object.defineProperty(exports, s, {
        get: () => t[s],
        enumerable: true
    });
}
"__esModule" in exports || Object.defineProperty(exports, "__esModule", { value: true }); 