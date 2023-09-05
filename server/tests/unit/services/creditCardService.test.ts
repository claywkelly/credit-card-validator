import { CreditCardService } from "../../../src/services/creditCardService";

describe("CreditCard Service", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    const service = new CreditCardService();

    it("should be defined", () => {
        expect(service).toBeDefined();
    });

    test("Valid credit card number entered", async () => {
        const data = await service.validateCreditCard("5105105105105100");
        console.log(data);
        expect(data && typeof data === "boolean").toBe(true);
        expect(data).toEqual(true);
    });

    test("Invalid credit card number entered", async () => {
        const data = await service.validateCreditCard("hfdskhfkjsd");
        console.log(data);
        expect(typeof data === "boolean").toBe(true);
        expect(data).toEqual(false);
    });

    test("Incorrect credit card number entered", async () => {
        const data = await service.validateCreditCard("1234567890123456");
        console.log(data);
        expect(typeof data === "boolean").toBe(true);
        expect(data).toEqual(false);
    })
})