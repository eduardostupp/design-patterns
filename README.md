# **Design Patterns App**

## **Autores**
- Eduardo Stupp
- Lucas Eduardo Mendonça

---

## **Descrição do Projeto**
Este projeto implementa um sistema de **Cadastro de Usuários** e **Gerenciamento de Formas Geométricas** utilizando os padrões de projeto **Singleton** e **Factory Method**.

### Funcionalidades:
1. Cadastro de usuários com nome e e-mail, utilizando o padrão **Singleton** para garantir uma única instância do registro de usuários.
2. Cálculo da área de formas geométricas e exibição dos respectivos desenhos, utilizando o padrão **Factory Method** para criar as formas de maneira modular e extensível.

---

## **Padrões de Projeto Utilizados**

### **Singleton**
- **Aplicação**: O padrão Singleton foi usado para gerenciar o registro de usuários.
- **Como funciona**:
  - A classe `UserRegistry` garante que apenas uma instância de registro de usuários seja criada.
  - Todas as operações (como adicionar usuários ou listar usuários) são realizadas na mesma instância.

#### **Exemplo no código:**
```javascript
const UserRegistry = require('./models/UserRegistry');

const registry1 = new UserRegistry();
const registry2 = new UserRegistry();

console.log(registry1 === registry2); // true
```

### **Factory Method**
- **Aplicação**: O padrão Factory Method foi utilizado para criar formas geométricas como círculo, quadrado e retângulo.
- **Como funciona**:
  - A classe `ShapeFactory` abstrai o processo de criação das formas.
  - Novas formas podem ser adicionadas ao sistema facilmente, sem alterar o código existente, apenas criando uma nova classe de forma e atualizando o mapeamento no `ShapeFactory`.

#### **Exemplo no código:**
```javascript
const ShapeFactory = require('./models/ShapeFactory');

const circle = ShapeFactory.createShape('circle', 5); // Cria um círculo com raio 5
console.log(circle.getArea()); // 78.5398...

const rectangle = ShapeFactory.createShape('rectangle', 4, 6); // Cria um retângulo com largura 4 e altura 6
console.log(rectangle.getArea()); // 24
```

---

## **Como Usar**

### **Pré-requisitos**
1. Certifique-se de ter o **Node.js** instalado (versão 18 ou superior).
2. Clone este repositório:
   ```bash
   git clone https://github.com/eduardostupp/design-patterns.git
   cd design-patterns
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

---

### **Rodando o Projeto**
1. Inicie o servidor:
   ```bash
   npm start
   ```

2. Acesse a aplicação no navegador:
   ```
   http://localhost:3000
   ```

---

### **Funcionalidades Disponíveis**

#### **Cadastro de Usuários**
1. Preencha o formulário com nome e e-mail.
2. Clique em "Cadastrar".
3. Os usuários cadastrados aparecerão em uma lista abaixo do formulário.

#### **Gerenciamento de Formas**
1. Escolha o tipo de forma geométrica (Círculo, Quadrado ou Retângulo).
2. Insira os parâmetros necessários:
   - **Círculo**: Raio (ex: `5`).
   - **Quadrado**: Lado (ex: `4`).
   - **Retângulo**: Largura,Altura (ex: `4,6`).
3. Clique em "Desenhar".
4. A área será calculada e exibida, juntamente com o desenho da forma.

---

### **Extensibilidade**
O sistema pode ser facilmente expandido:
1. **Adicionar uma nova forma geométrica**:
   - Crie uma nova classe no diretório `shapes` (ex: `Triangle.js`).
   - Adicione o mapeamento correspondente no `ShapeFactory`.
