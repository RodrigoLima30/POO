// Classe base (Classe + Encapsulamento)

class OrderT {
  public customerName: string;
  protected total: number;

  constructor(customerName: string) {
    this.customerName = customerName;
    this.total = 0;
  }

  addItem(price: number): void {
    if (price <= 0) {
      throw new Error("Preço inválido");
    }

    this.total += price;
  }

  getTotal(): number {
    return this.total;
  }

  calculateTotal(): number {
    return this.total;
  }
}

// Herança + Polimorfismo

class OnlineOrderT extends OrderT {
  calculateTotal(): number {
    const shippingFee = 20;
    return this.total + shippingFee;
  }
}

class StoreOrderT extends OrderT {
  calculateTotal(): number {
    return this.total;
  }
}

// Uso do polimorfismo

function checkoutT(order: OrderT): void {
  console.log(`Cliente: ${order.customerName}`);
  console.log(`Total: R$ ${order.calculateTotal()}`);
}

const onlineOrderT = new OnlineOrderT("Rodrigo");
onlineOrder.addItem(100);
onlineOrder.addItem(50);

const storeOrderT = new StoreOrderT("Maria");
storeOrderT.addItem(80);

checkoutT(onlineOrderT);
checkoutT(storeOrderT);
