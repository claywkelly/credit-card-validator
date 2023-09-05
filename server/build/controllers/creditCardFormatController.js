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
exports.CreditCardFormatController = void 0;
const runtime_1 = require("@tsoa/runtime");
const creditCardService_1 = require("../services/creditCardService");
let CreditCardFormatController = class CreditCardFormatController extends runtime_1.Controller {
    checkFormatPost(bodyData) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(bodyData);
            return true;
        });
    }
    checkFormat(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const creditCardService = new creditCardService_1.CreditCardService();
            return creditCardService.validateCreditCard(id);
        });
    }
};
exports.CreditCardFormatController = CreditCardFormatController;
__decorate([
    (0, runtime_1.Post)(),
    __param(0, (0, runtime_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CreditCardFormatController.prototype, "checkFormatPost", null);
__decorate([
    (0, runtime_1.Get)('{id}'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CreditCardFormatController.prototype, "checkFormat", null);
exports.CreditCardFormatController = CreditCardFormatController = __decorate([
    (0, runtime_1.Route)("credit-card-format")
], CreditCardFormatController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlZGl0Q2FyZEZvcm1hdENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlcnMvY3JlZGl0Q2FyZEZvcm1hdENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQWtFO0FBQ2xFLHFFQUFrRTtBQUkzRCxJQUFNLDBCQUEwQixHQUFoQyxNQUFNLDBCQUEyQixTQUFRLG9CQUFVO0lBRXpDLGVBQWUsQ0FBUyxRQUE4Qjs7WUFDL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO0tBQUE7SUFFWSxXQUFXLENBQUMsRUFBVTs7WUFDL0IsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLHFDQUFpQixFQUFFLENBQUM7WUFDbEQsT0FBTyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwRCxDQUFDO0tBQUE7Q0FDSixDQUFBO0FBWFksZ0VBQTBCO0FBRXRCO0lBRFosSUFBQSxjQUFJLEdBQUU7SUFDdUIsV0FBQSxJQUFBLGNBQUksR0FBRSxDQUFBOzs7O2lFQUduQztBQUVZO0lBRFosSUFBQSxhQUFHLEVBQUMsTUFBTSxDQUFDOzs7OzZEQUlYO3FDQVZRLDBCQUEwQjtJQUR0QyxJQUFBLGVBQUssRUFBQyxvQkFBb0IsQ0FBQztHQUNmLDBCQUEwQixDQVd0QyJ9