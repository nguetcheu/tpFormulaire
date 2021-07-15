export class IngredientsModel {
  public name:string;
  public amount:number;
  public quantity: number;

  constructor(name:string, amount:number, quantity: number) {
    this.name = name;
    this.amount = amount;
    this.quantity = quantity;
  }
}
