import Currency from './3-currency'

export default class Pricing extends Currency(){
    constructor(amount, currency) {
      this.amount = amount;
      this.currency = currency;
    }
}
