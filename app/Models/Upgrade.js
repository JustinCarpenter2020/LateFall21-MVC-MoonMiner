export class Upgrade {
  constructor(name, price, multiplier, quantity, type, description, color){
    this.name = name,
    this.price = price,
    this.multiplier = multiplier,
    this.quantity = quantity,
    this.type = type,
    this.description = description
    this.color = color
  }

  get buttonTemplate(){
    return `<div class="col-6">
    <button class="btn ${this.color} btn-height w-75" onclick="app.upgradeController.buyUpgrade('${this.name}')">${this.name} | ${this.price} <br>
    ${this.description} <br>
    ${this.quantity}
    </button>
  </div>`
  }
}