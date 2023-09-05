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
exports.CreditCardService = void 0;
class CreditCardService {
    validateCreditCard(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const numberRegex = /^\d+$/;
            if (!numberRegex.test(input)) {
                return false;
            }
            const size = input.length;
            //Credit Card numbers should be 16 digits
            //TODO not sure if correct
            if (size !== 16) {
                return false;
            }
            let sum = 0;
            //Loop over each digit in the credit card
            for (let i = size - 1; i >= 0; i--) {
                //Every second digit should be doubled
                if (i % 2 == 0) {
                    let value = parseInt(input[i]);
                    value = value * 2;
                    //If the doubled value is 10 or higher
                    //We should add the digits together
                    if (value >= 10) {
                        sum += Math.floor(value / 10);
                        sum += value % 10;
                    }
                    else {
                        sum += value;
                    }
                    //The other digits get added directly
                }
                else {
                    sum += parseInt(input[i]);
                }
            }
            //If the final sum is divisible by 10
            //We are valid
            if (sum % 10 === 0) {
                return true;
            }
            else {
                return false;
            }
        });
    }
}
exports.CreditCardService = CreditCardService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlZGl0Q2FyZFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZXMvY3JlZGl0Q2FyZFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsTUFBYSxpQkFBaUI7SUFDYixrQkFBa0IsQ0FBQyxLQUFhOztZQUN6QyxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUM7WUFFNUIsSUFBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUM7Z0JBQ3hCLE9BQU8sS0FBSyxDQUFDO2FBQ2hCO1lBRUQsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUUxQix5Q0FBeUM7WUFDekMsMEJBQTBCO1lBQzFCLElBQUcsSUFBSSxLQUFLLEVBQUUsRUFBQztnQkFDWCxPQUFPLEtBQUssQ0FBQzthQUNoQjtZQUVELElBQUksR0FBRyxHQUFXLENBQUMsQ0FBQztZQUNwQix5Q0FBeUM7WUFDekMsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUM7Z0JBQy9CLHNDQUFzQztnQkFDdEMsSUFBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQztvQkFDVixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQy9CLEtBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO29CQUNsQixzQ0FBc0M7b0JBQ3RDLG1DQUFtQztvQkFDbkMsSUFBRyxLQUFLLElBQUksRUFBRSxFQUFDO3dCQUNYLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQzt3QkFDOUIsR0FBRyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7cUJBQ3JCO3lCQUFNO3dCQUNILEdBQUcsSUFBSSxLQUFLLENBQUM7cUJBQ2hCO29CQUNMLHFDQUFxQztpQkFDcEM7cUJBQU07b0JBQ0gsR0FBRyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDN0I7YUFDSjtZQUNELHFDQUFxQztZQUNyQyxjQUFjO1lBQ2QsSUFBRyxHQUFHLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBQztnQkFDZCxPQUFPLElBQUksQ0FBQzthQUNmO2lCQUFNO2dCQUNILE9BQU8sS0FBSyxDQUFDO2FBQ2hCO1FBRUwsQ0FBQztLQUFBO0NBQ0o7QUE3Q0QsOENBNkNDIn0=