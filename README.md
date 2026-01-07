# 📘 Programação Orientada a Objetos (POO)
## Guia Prático com JavaScript e TypeScript

Este repositório é um **guia completo e prático sobre Programação Orientada a Objetos (POO)**, utilizando **JavaScript** e **TypeScript**, com foco em **entendimento real**, **exemplos do mundo real** e **aplicação no dia a dia profissional**.

---

## 📌 Sobre o repositório

### 🎯 Objetivo
Ensinar **POO do zero**, de forma clara e progressiva, conectando:
- Conceitos teóricos
- Exemplos reais
- Código aplicável em projetos reais

### 👥 Público-alvo
- Iniciantes em programação
- Desenvolvedores JavaScript migrando para TypeScript
- Devs que “usam POO” mas querem **entender de verdade**
- Quem trabalha com backend, frontend ou APIs

### 🛠 Tecnologias utilizadas
- JavaScript (ES6+)
- TypeScript

---

## 🧠 O que é Programação Orientada a Objetos (POO)

POO é um **paradigma de programação** que organiza o código em torno de **objetos**, representando **entidades do mundo real**.

Em vez de escrever código com:
- Funções soltas
- Variáveis espalhadas
- Regras duplicadas

Passamos a trabalhar com:
- **Classes**
- **Objetos**
- **Responsabilidades bem definidas**
- **Código reutilizável e fácil de manter**

### 💡 Por que usar POO?
- Código mais organizado
- Facilita manutenção e evolução
- Reduz duplicação
- Modela melhor regras de negócio
- Muito usada em projetos profissionais

### 🧩 POO no dia a dia do desenvolvimento
POO aparece em:
- APIs REST
- Sistemas financeiros
- E-commerces
- Aplicações web e mobile
- Sistemas corporativos

---

### 🌍 Exemplos do mundo real

| Mundo real        | Código (Classe) |
|------------------|------------------|
| Usuário          | User             |
| Produto          | Product          |
| Pedido           | Order            |
| Fatura           | Invoice          |
| Conta bancária   | BankAccount      |

Cada um desses conceitos pode (e deve) virar uma **classe**.

---

## 🧱 Os 4 pilares da POO

1. **Classe e Objeto** – estrutura e instância  
2. **Encapsulamento** – proteção dos dados  
3. **Herança** – reaproveitamento de código  
4. **Polimorfismo** – comportamentos diferentes para o mesmo método  

Esses pilares trabalham **juntos**, não separados.

---

## 1️⃣ Classe e Objeto

### 📌 Conceitos

- **Classe**  
  É o **molde**, a definição de como algo deve ser.

- **Objeto**  
  É a **instância real**, criada a partir da classe.

### 💡 Exemplo real

Classe:
- ContaBancaria

Objetos:
- Conta do Rodrigo
- Conta da Maria

---

### 📌 Exemplo em JavaScript

```js
class ContaBancaria {
  constructor(titular, saldoInicial) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  sacar(valor) {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente");
      return;
    }
    this.saldo -= valor;
  }
}
```

### Criando objetos:

```js

const contaRodrigo = new ContaBancaria("Rodrigo", 1000);
const contaMaria = new ContaBancaria("Maria", 500);

```

---

### 📌 Exemplo em TypeScript

```js

class ContaBancaria {
  titular: string;
  saldo: number;

  constructor(titular: string, saldoInicial: number) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  depositar(valor: number): void {
    this.saldo += valor;
  }
}

```
---

### ✅ Vantagens do TypeScript

- Tipagem estática

- Menos bugs

- Autocomplete

- Código mais confiável e profissional

--- 

## 2️⃣ Encapsulamento

### 📌 Conceito

Encapsulamento significa proteger os dados internos da classe e permitir acesso apenas por métodos controlados.

No mundo real, você não altera o saldo direto — você deposita ou saca.

### 📌 Encapsulamento em JavaScript


```js

class ContaBancaria {
  constructor(titular, saldo) {
    this.titular = titular;
    this._saldo = saldo;
  }

  getSaldo() {
    return this._saldo;
  }
}
```

### ⚠️ Em JS, _saldo é apenas uma convenção.

### 📌 Encapsulamento em TypeScript

```js

class ContaBancaria {
  public titular: string;
  private saldo: number;

  constructor(titular: string, saldo: number) {
    this.titular = titular;
    this.saldo = saldo;
  }

  getSaldo(): number {
    return this.saldo;
  }
}

conta.saldo;      // ❌ Erro
conta.getSaldo(); // ✅ Correto
// 
```

---

## 3️⃣ Herança
### 📌 Conceito

Herança permite que uma classe herde atributos e métodos de outra classe.

Evita duplicação e melhora reutilização.

### 💡 Exemplo do mundo real

-ContaBancaria

-ContaCorrente

-ContaPoupanca

### 📌 Herança em JavaScript

```js
class ContaCorrente extends ContaBancaria {
  sacar(valor) {
    const taxa = 2;
    super.sacar(valor + taxa);
  }
}
```

### 📌 Herança em TypeScript

```js
class ContaCorrente extends ContaBancaria {
  sacar(valor: number): void {
    const taxa = 2;
    super.sacar(valor + taxa);
  }
}
```

---

## 4️⃣ Polimorfismo

### 📌 Conceito

Polimorfismo significa que objetos diferentes respondem de forma diferente ao mesmo método.

### 📌 Exemplo em TypeScript

```js

class Order {
  calculateTotal(): number {
    return 0;
  }
}

class OnlineOrder extends Order {
  calculateTotal(): number {
    return 120;
  }
}

class StoreOrder extends Order {
  calculateTotal(): number {
    return 100;
  }
}

function checkout(order: Order) {
  console.log(order.calculateTotal());
}

```

A função não precisa saber o tipo exato do objeto.

### 🧠 Como pensar em POO no dia a dia
### 🧩 Modelagem de domínio

Transforme regras de negócio em classes.

### 🧭 Responsabilidades

Cada classe deve ter uma responsabilidade clara.

### 🧱 Separação de interesses

Não misture:

-Regra de negócio

-Acesso a dados

-Interface