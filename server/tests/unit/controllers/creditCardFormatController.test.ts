import { CreditCardFormatController } from "../../../src/controllers/creditCardFormatController";
import { CreditCardService } from "../../../src/services/creditCardService";

describe("CreditCardFormat Controller", () => {
  const controller = new CreditCardFormatController();

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
  test("should test for GET /credit-card-format success", async () => {
    jest
      .spyOn(CreditCardService.prototype, "validateCreditCard")
      .mockReturnValue(Promise.resolve(true));

    const data = await controller.checkFormat({
      creditCardNumber: "1234567890123456",
    });
    expect(data && typeof data === "boolean").toBe(true);
  });

  test("should test for GET /credit-card-format failure", async () => {
    jest
      .spyOn(CreditCardService.prototype, "validateCreditCard")
      .mockReturnValue(Promise.resolve(false));

    const data = await controller.checkFormat({
      creditCardNumber: "1234567890123456",
    });
    expect(data && typeof data === "boolean").toBe(false);
  });
});
