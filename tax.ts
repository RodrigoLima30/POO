interface Tax {
  calculate(salary: number): number;
}

class TaxCLT implements Tax {
  calculate(salary: number): number {
    return salary * 0.2;
  }
}

class TaxPJ implements Tax {
  calculate(salary: number): number {
    return salary * 0.1;
  }
}

class TaxInternship implements Tax {
  calculate(salary: number): number {
    return salary * 0.05;
  }
}

class Payment {
  constructor(private readonly tax: Tax) {}

  calculateTax(salary: number): number {
    return this.tax.calculate(salary);
  }
}

const paymentCLT = new Payment(new TaxCLT());
const paymentPJ = new Payment(new TaxPJ());
const paymentInternship = new Payment(new TaxInternship());

paymentCLT.calculateTax(1000); // 200
paymentPJ.calculateTax(1000); // 100
paymentInternship.calculateTax(1000); // 50
