# 📘 Programação Orientada a Objetos (POO)
## Guia Prático com JavaScript e TypeScript

Este repositório tem como objetivo explicar **Programação Orientada a Objetos (POO)** de forma **simples, prática e aplicada ao mundo real**, utilizando **JavaScript** e **TypeScript**.

A ideia é sair da teoria abstrata e mostrar **como e por que usar POO no dia a dia**, seja em **backend**, **frontend** ou **APIs**.

---

## 🧠 O que é Programação Orientada a Objetos?

POO é um **paradigma de programação** que organiza o código em torno de **objetos**, representando **entidades do mundo real**.

Em vez de trabalhar apenas com:

- Funções soltas  
- Variáveis globais  

Passamos a trabalhar com:

- Classes  
- Objetos  
- Responsabilidades bem definidas  
- Código reutilizável e fácil de manter  

### 🌍 Exemplos do mundo real

- Usuário  
- Produto  
- Pedido  
- Fatura  
- Conta bancária  

Cada um desses conceitos pode virar uma **classe**.

---

## 🧱 Os 4 pilares da POO

1. Classe e Objeto  
2. Encapsulamento  
3. Herança  
4. Polimorfismo  

---

## 1️⃣ Classe e Objeto

### 📌 Conceitos

- **Classe** → é o molde  
- **Objeto** → é uma instância criada a partir do molde  

### 💡 Exemplo real

- Classe: `ContaBancaria`  
- Objetos: conta do Rodrigo, conta da Maria  

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

