# 📘 Programação Orientada a Objetos (POO)
## Guia Completo — Do Básico ao Avançado

Este repositório apresenta **Programação Orientada a Objetos (POO)** de forma **progressiva**, começando do zero absoluto até conceitos **avançados e arquiteturais**, com foco em **TypeScript**.

O objetivo é:
- Entender **todos os conceitos de POO**
- Saber **quando usar cada um**
- Aplicar em **projetos reais**
- Escrever código **limpo, escalável e profissional**

---

## 📌 O que é Programação Orientada a Objetos?

POO é um **paradigma de programação** que organiza o código em **objetos**, que representam entidades do mundo real, contendo:
- **Estado (dados)**
- **Comportamento (ações)**

Ela resolve problemas como:
- Código difícil de manter
- Muitos `if/else`
- Alto acoplamento
- Baixa reutilização

---

# 🧱 PARTE 1 — CONCEITOS FUNDAMENTAIS DE POO (NÚCLEO)


Sem esses conceitos, **não existe POO**.
Eles são a base de tudo que vem depois (SOLID, Design Patterns, Clean Architecture).

Vamos usar o código **tax.ts** como exemplo.

---

## 1️⃣ Classe

**Classe é um molde, um modelo, um blueprint**.
Ela define **como algo deve ser e se comportar**, mas não é o “algo” em si.

### 📌 No código

```ts
class TaxCLT { ... }
class TaxPJ { ... }
class Payment { ... }
```

Essas classes dizem:
  -quais dados existem
  -quais ações podem ser feitas

**💡 Classe não executa nada sozinha.**
Ela só define regras.

**🧠 Analogia**

Planta de uma casa 🏠
Você pode construir várias casas a partir da mesma planta.

---

## 2️⃣ Objeto

**Objeto é uma instância da classe.**
É a classe **ganhando vida na memória.**

### 📌 No código

```ts
const paymentCLT = new Payment(new TaxCLT());
```

Aqui:

  -Payment é a classe
  -paymentCLT é o objeto

Agora sim:

  -existe algo na memória
  -que pode executar métodos

**🧠 Analogia**

A casa construída a partir da planta.

---

### 3️⃣ Atributo (Propriedade / Estado)

**Atributo é o dado interno do objeto.**
Ele representa o **estado** daquele objeto.

### 📌 No código

```ts
constructor(private readonly tax: Tax) {}
```

Aqui:

  -tax é um **atributo**
  -ele guarda qual imposto o Payment usa

Esse atributo define o **comportamento final** do objeto.

**🧠 Importante**

Dois objetos da mesma classe podem ter **estados diferentes**:

```ts
new Payment(new TaxCLT());
new Payment(new TaxPJ());
```

Mesma classe, **estado diferente**.

---

## 4️⃣ Método (Comportamento)

**Método é o comportamento do objeto.**
É o que ele sabe fazer.

### 📌 No código

```ts
calculateTax(salary: number): number {
  return this.tax.calculate(salary);
}
```

Esse método:

  -recebe um valor
  -executa uma ação
  -retorna um resultado

📌 Método = **verbo**
📌 Atributo = **substantivo**

**🧠 Analogia**

A casa **abrir porta, fechar porta, acender luz.**

---

## 5️⃣ Encapsulamento

**Encapsulamento é proteger o estado interno do objeto.**
Você controla **como** os dados podem ser acessados ou alterados.

### 📌 No código

```ts
constructor(private readonly tax: Tax) {}
```

Aqui:

  -tax é private
  -ninguém de fora pode acessar ou trocar

Isso impede:
❌ uso errado
❌ mudanças inesperadas
❌ bugs difíceis de rastrear

**🧠 Regra mental**

  “O objeto cuida de si mesmo.”

Você conversa com o objeto **pelos métodos**, não mexendo por dentro.

## 6️⃣ Abstração

**Abstração é mostrar o que importa e esconder o resto.**

### 📌 No código

```ts
interface Tax {
  calculate(salary: number): number;
}
```

Aqui você sabe:

  -existe um cálculo de imposto

Você **não sabe:**

  -se é CLT
  -se é PJ
  -se é estágio

📌 Você conhece o **o quê**, não o **como.**

**🧠 Analogia**

Controle remoto:

  -você aperta o botão
  -não sabe o que acontece dentro da TV

## 7️⃣ Herança

**Herança é quando uma classe herda um comportamento definido por outra.**

No seu código, isso acontece via interface:

```ts
class TaxCLT implements Tax
```

Aqui:

  -TaxCLT **herda o contrato** de Tax
  -é obrigada a implementar calculate

📌 Interface é herança de **comportamento esperado**, não de código.

**🧠 Importante**

Herança **não é reutilizar código**, é **reutilizar uma ideia**.

## 8️⃣ Polimorfismo

**Polimorfismo = o mesmo método, comportamentos diferentes.**

### 📌 No código

```ts
this.tax.calculate(salary);
```

Esse código:

  -é sempre o mesmo
  -mas o resultado muda conforme o objeto real

```ts
new TaxCLT()         // 20%
new TaxPJ()          // 10%
new TaxInternship()  // 5%
```

📌 O Payment **não sabe qual imposto está usando**
📌 E não precisa saber

**🧠 Frase-chave**

  “Objetos diferentes respondem à mesma mensagem de formas diferentes.”

---

# 🧬 Resumo — o DNA da POO no código

| Conceito       | Onde aparece                    |
| -------------- | ------------------------------- |
| Classe         | `class Payment`, `class TaxCLT` |
| Objeto         | `new Payment(...)`              |
| Atributo       | `private tax`                   |
| Método         | `calculateTax()`                |
| Encapsulamento | `private readonly`              |
| Abstração      | `interface Tax`                 |
| Herança        | `implements Tax`                |
| Polimorfismo   | `tax.calculate()`               |

---

# PARTE 2 - 🧩 CONCEITOS ESTRUTURAIS (USADOS NO DIA A DIA)

  Esses conceitos **dão forma ao código**.
  Eles não criam a POO, mas **organizam e deixam ela saudável**.

---

## 1️⃣ Constructor

**Constructor é o método especial que roda quando o objeto nasce.**

Ele serve para:

  -inicializar atributos
  -garantir que o objeto já comece válido

### 📌 No código

```ts
constructor(private readonly tax: Tax) {}
```

Quando você cria:

```ts
new Payment(new TaxCLT());
```

O constructor:

  -recebe o tax
  -guarda dentro do objeto

📌 Sem constructor, o objeto nasceria “incompleto”.

---

## 2️⃣ Instanciação (new)

**Instanciar é criar um objeto a partir de uma classe.**

### 📌 No código

```ts
const paymentCLT = new Payment(new TaxCLT());
```

Aqui:

  -Payment é o molde
  -new cria um objeto real
  -o objeto ocupa memória

📌 Sem new, não existe objeto, só classe.

---

## 3️⃣ this (referência ao objeto atual)

**this aponta para o objeto que está executando o método.**

### 📌 No código

```ts
return this.tax.calculate(salary);
```

this.tax significa:

“o tax **desse objeto específico**”

Se existem vários Payment, cada um tem seu próprio this.

**🧠 Analogia**

Pessoa falando:

  “**meu** CPF”, “**meu** nome”

---

## 4️⃣ Visibilidade / Modificadores de acesso

Eles definem **quem pode acessar o quê** dentro da classe.

🔓 public

  -Acessível de qualquer lugar
  -É o padrão se você não escrever nada

```ts
calculateTax(salary: number): number { ... }
```

🔒 private

  -Só a própria classe pode acessar

```ts
private tax: Tax
```

Protege o estado interno do objeto.

🟡 protected

  -A própria classe
  -E classes filhas

(Não aparece no código, mas faz parte do conceito.)

**📌 Encapsulamento usa esses modificadores para existir.**

---

## 5️⃣ Imutabilidade (readonly)

**Depois de criado, não muda.**

### 📌 No código

```ts
private readonly tax: Tax
```

Isso garante:

  -o imposto não pode ser trocado
  -o objeto permanece consistente

❌ Não dá pra fazer:

```ts
payment.tax = new TaxPJ();
```

📌 Menos bugs, mais segurança.

---

## 6️⃣ Estado vs Comportamento

  -**Estado** → dados internos
  -**Comportamento** → ações

### 📌 No código

**Estado**

```ts
private readonly tax: Tax
```

**Comportamento**

```ts
calculateTax(salary: number): number
```

📌 Um objeto é **dados + ações sobre esses dados.**

## 7️⃣ Responsabilidade da classe

**Cada classe deve ter um papel claro.**

📌 No código

  -TaxCLT → sabe calcular imposto CLT
  -TaxPJ → sabe calcular imposto PJ
  -Payment → coordena o cálculo

📌 Payment **não sabe regras fiscais**
📌 Tax **não sabe de pagamento**

Isso é **design saudável.**

---

## 8️⃣ Associação

**Uma classe conhece outra.**

### 📌 No código

```ts
class Payment {
  constructor(tax: Tax) {}
}
```

Payment está associado a Tax.

📌 Associação é o conceito mais genérico.

---

## 9️⃣ Composição

**A classe possui outra como parte essencial.**

### 📌 No código

```ts
constructor(private readonly tax: Tax) {}
```

Aqui:

  -Payment **tem** um Tax
  -sem Tax, o Payment não funciona

📌 Relação forte
📌 Vida útil ligada

---

## 🔟 Agregação

**Relação mais fraca que composição.**

O objeto:

  -usa outro
  -mas não é dono dele

**🧠 No seu exemplo (conceitual)**

```ts
const tax = new TaxCLT();
const payment = new Payment(tax);
```

Se payment morrer:

  -tax continua existindo

📌 Isso caracteriza agregação.

---

## 1️⃣1️⃣ Dependência

**Uma classe depende de outra para funcionar.**

### 📌 No código

```ts
calculateTax(salary: number): number {
  return this.tax.calculate(salary);
}
```

Payment depende de Tax.

📌 Dependência não é ruim.
📌 Dependência **forte** é ruim.

Aqui ela é **abstrata**, então está saudável.

--- 

# 🧠 Resumo mental rápido

| Conceito       | Ideia-chave       |
| -------------- | ----------------- |
| Constructor    | Nascer válido     |
| new            | Criar objeto      |
| this           | “Eu mesmo”        |
| public/private | Quem pode acessar |
| readonly       | Não muda          |
| Estado         | Dados             |
| Comportamento  | Ações             |
| Associação     | Conhece           |
| Composição     | Possui            |
| Agregação      | Usa               |
| Dependência    | Precisa de        |

---

# PARTE 3 - 🧠 CONCEITOS DE COMPORTAMENTO (VARIAÇÃO DE LÓGICA)

  Esses conceitos explicam **como o sistema se adapta**
  sem if, sem switch, sem gambiarra.

---

## 1️⃣ Polimorfismo em tempo de execução

**O comportamento só é decidido quando o programa está rodando.**

O código é o mesmo.
O resultado muda conforme o objeto real.

### 📌 No código

```ts
this.tax.calculate(salary);
```
Em tempo de execução, tax pode ser:

  -TaxCLT
  -TaxPJ
  -TaxInternship

O Payment **não sabe qual é.**

📌 A decisão acontece **em runtime**

**🧠 Tradução humana**

  “Descubro o comportamento quando o programa está rodando.”

---

## 2️⃣ Polimorfismo em tempo de compilação

**A decisão do comportamento acontece antes do código rodar.**

Normalmente acontece via:

  -sobrecarga de métodos
  -tipos diferentes

**📌 No contexto (TypeScript)**

TypeScript **quase não usa** esse tipo de polimorfismo como Java/C#.

Exemplo conceitual:

```ts
calculate(value: number): number;
calculate(value: string): number;
```

Aqui:

  -o compilador já sabe qual método chamar
  -baseado no tipo

📌 Diferente do seu código, que decide **em runtime.**

**🧠 Regra prática**
**👉 POO moderna usa muito mais polimorfismo em tempo de execução.**

---

## 3️⃣ Delegação de comportamento

**Um objeto não faz o trabalho — ele delega para outro.**

### 📌 No código

```ts
calculateTax(salary: number): number {
  return this.tax.calculate(salary);
}
```
O Payment:

  -não calcula imposto
  -não conhece regras fiscais
  -apenas delegou para Tax

📌 Ele coordena, não executa.

**🧠 Analogia**

Gerente:

  -não faz o trabalho técnico
  -delega para o especialista

---

## 4️⃣ Inversão de Controle (IoC)

**O objeto não decide o que ele vai usar. Alguém decide por ele.**

**❌ Sem IoC (errado)**

```ts
class Payment {
  private tax = new TaxCLT();
}
```

Aqui:

  -Payment manda em tudo
  -acoplamento alto

**✅ Com IoC (seu código)**

```ts
new Payment(new TaxCLT());
```

O controle:

  -está fora da classe
  -quem cria decide qual imposto usar

📌 O Payment **não controla o fluxo.**

**🧠 Frase-chave**

  “Não me diga o que usar. Me entregue pronto.”

---

## 5️⃣ Inversão de Dependência (DIP)

**Depender de abstrações, não de implementações.**

### 📌 No código

```ts
constructor(private readonly tax: Tax) {}
```

Payment depende de:

  -Tax (interface)

Não depende de:

  -TaxCLT
  -TaxPJ
  -TaxInternship

📌 A implementação pode mudar
📌 A classe continua intacta

**🧠 Importante**

DIP **não é IoC.**
Eles se complementam.

  -IoC → quem controla
  -DIP → de quem você depende

---

# Tudo conectado (olha a arquitetura acontecendo)

| Conceito                  | Onde aparece             |
| ------------------------- | ------------------------ |
| Polimorfismo runtime      | `tax.calculate()`        |
| Polimorfismo compile-time | tipos / overload         |
| Delegação                 | `Payment → Tax`          |
| IoC                       | imposto injetado         |
| DIP                       | dependência da interface |
