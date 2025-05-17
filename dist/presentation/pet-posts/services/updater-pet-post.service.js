"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdaterPetPostService = void 0;
const data_1 = require("../../../data");
class UpdaterPetPostService {
    execute(id, updates) {
        return __awaiter(this, void 0, void 0, function* () {
            const petPost = yield data_1.PetPost.findOneBy({ id });
            const allowedStatus = ['pending', 'approved', 'rejected'];
            if (updates.status && !allowedStatus.includes(updates.status)) {
                throw new Error('Invalid status value');
            }
            if (!petPost)
                throw new Error('The pet was not found');
            Object.assign(petPost, updates);
            return yield petPost.save();
        });
    }
}
exports.UpdaterPetPostService = UpdaterPetPostService;
