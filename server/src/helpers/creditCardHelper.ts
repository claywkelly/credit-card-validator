export function validateCreditCard(input: string): boolean{
    const size = input.length;

    //Credit Card numbers should be 16 digits
    //TODO not sure if correct
    if(size !== 16){
        return false;
    }

    let sum: number = 0;
    //Loop over each digit in the credit card
    for (let i = size - 1; i >= 0; i--){
        //Every second digit should be doubled
        if(i % 2 == 0){
            let value = parseInt(input[i]);
            value = value * 2;
            //If the doubled value is 10 or higher
            //We should add the digits together
            if(value >= 10){
                sum += Math.floor(value / 10);
                sum += value % 10;
            } else {
                sum += value;
            }
        //The other digits get added directly
        } else {
            sum += parseInt(input[i]);
        }
    }
    //If the final sum is divisible by 10
    //We are valid
    if(sum % 10 === 0){
        return true;
    } else {
        return false;
    }
    
}