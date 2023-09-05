import { Controller, Route, Post, Body} from "@tsoa/runtime";
import { CreditCardService } from "../services/creditCardService";
import { CreditCardFormatBody } from "../models/creditCardFormat";

@Route("credit-card-format")
export class CreditCardFormatController extends Controller {
    @Post()
    public async checkFormat(@Body() body: CreditCardFormatBody): Promise<boolean> {
        const creditCardService = new CreditCardService();
        return creditCardService.validateCreditCard(body.creditCardNumber);
    }
}