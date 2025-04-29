
# 📊 API de Gerenciamento de Tarefas

[![Status](https://img.shields.io/badge/status-finalizado-green.svg)]()  
[![License](https://img.shields.io/badge/license-MIT-blue.svg)]()  
[![Java](https://img.shields.io/badge/Java-11+-red.svg)]()  
[![Spring](https://img.shields.io/badge/Spring%20Boot-2.5+-green.svg)]()  
[![Maven](https://img.shields.io/badge/Maven-Dependências%20gerenciadas-orange.svg)]()

> A **API de Gerenciamento de Tarefas** é uma aplicação construída com o framework **Spring Boot** para fornecer uma interface RESTful de gerenciamento de tarefas. Com ela, você pode criar, ler, atualizar e excluir tarefas de forma simples e eficiente.

---

## 📚 Descrição

A **API de Gerenciamento de Tarefas** permite que os usuários realizem operações CRUD (Create, Read, Update, Delete) em tarefas. O sistema facilita o gerenciamento de tarefas com validação de dados, autenticação, e autorização, garantindo uma API segura e eficiente.

---

## 🔧 Tecnologias Utilizadas

| Componente      | Tecnologia                   |
|-----------------|------------------------------|
| Framework       | Spring Boot                  |
| Banco de Dados  | H2 ou outro DB configurável  |
| Interface       | RESTful                      |
| Autenticação    | JWT                          |
| Gerenciamento   | Maven                        |

---

## 🚀 Funcionalidades Principais

- **CRUD de Tarefas**: Criação, leitura, atualização e exclusão de tarefas.
- **Validação de Dados**: Garante que os dados inseridos sejam corretos e válidos.
- **Autenticação e Autorização**: Protege os endpoints com JWT, permitindo apenas o acesso de usuários autorizados.
- **Endpoints RESTful**: Todos os endpoints seguem os princípios REST para comunicação eficiente entre cliente e servidor.

---

## 🛠️ Como Utilizar

### Pré-requisitos

| Ferramenta     | Versão Recomendada |
|----------------|--------------------|
| Java           | 11+                |
| Maven          | 3.x                |

### Passos para Execução

1. **Clonar o Repositório**:
   ```bash
   git clone https://github.com/seuusuario/nome-do-repositorio.git
   ```

2. **Instalar Dependências**:  
   Certifique-se de que o Java JDK e o Maven estão instalados. Em seguida, instale as dependências do projeto executando:
   ```bash
   mvn install
   ```

3. **Executar a Aplicação**:  
   Inicie o projeto com o comando:
   ```bash
   mvn spring-boot:run
   ```

---

## 📡 Endpoints da API

A API possui os seguintes endpoints:

| Método  | Endpoint                    | Descrição                                       |
|---------|-----------------------------|-------------------------------------------------|
| `GET`   | `/api/tarefas`              | Retorna todas as tarefas cadastradas.           |
| `GET`   | `/api/tarefas/{id}`         | Retorna detalhes de uma tarefa específica.      |
| `POST`  | `/api/tarefas`              | Cria uma nova tarefa.                          |
| `PUT`   | `/api/tarefas/{id}`         | Atualiza os dados de uma tarefa existente.     |
| `DELETE`| `/api/tarefas/{id}`         | Exclui uma tarefa com o ID fornecido.           |

---

## 🌐 Acessando a Interface de Usuário

Para acessar a interface da API, basta abrir o navegador e ir para:

```
http://localhost:8080
```

---

## 🧑‍💻 Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma **issue** ou enviar um **pull request**.

---

## 📜 Licença

Distribuído sob a licença **MIT**.  

---

## 📫 Autor

- **Nome**: Enzo Brito  
- **Email**: [Enzoj820@gmail.com](mailto:enzoj820@gmail.com)  
- [![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin&style=for-the-badge)](https://www.linkedin.com/in/enzo-brito-b85471284)

---

Feito com ❤️ e muito café!  
