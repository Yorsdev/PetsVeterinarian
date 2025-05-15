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
exports.ApprovePetPostService = void 0;
const data_1 = require("../../../data");
class ApprovePetPostService {
    constructor(finderPetPostWervice) {
        this.finderPetPostWervice = finderPetPostWervice;
    }
    execute(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const petPost = yield this.finderPetPostWervice.executeByFindOne(id);
            if (petPost.status === 'approved') {
                return {
                    message: 'Pet post already approved',
                };
            }
            petPost.status = data_1.PetPostStatus.APPROVED;
            try {
                yield petPost.save();
                return {
                    message: 'Pet post approved successfully',
                };
            }
            catch (error) {
                throw new Error('Error approving pet post');
            }
        });
    }
}
exports.ApprovePetPostService = ApprovePetPostService;
