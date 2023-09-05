import { Controller, Get, Route} from "@tsoa/runtime";
import { validateCreditCard } from "../helpers/creditCardHelper";

@Route("credit-card-format")
export class CreditCardFormatController extends Controller {
    @Get('{id}')
    public async checkFormat(id: string): Promise<boolean> {
        return validateCreditCard(id);
    }
}