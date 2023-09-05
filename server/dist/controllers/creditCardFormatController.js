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
const creditCardHelper_1 = require("../helpers/creditCardHelper");
let CreditCardFormatController = class CreditCardFormatController extends runtime_1.Controller {
    checkFormat(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, creditCardHelper_1.validateCreditCard)(id);
        });
    }
};
exports.CreditCardFormatController = CreditCardFormatController;
__decorate([
    (0, runtime_1.Get)('{id}'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CreditCardFormatController.prototype, "checkFormat", null);
exports.CreditCardFormatController = CreditCardFormatController = __decorate([
    (0, runtime_1.Route)("credit-card-format")
], CreditCardFormatController);
//# sourceMappingURL=creditCardFormatController.js.map