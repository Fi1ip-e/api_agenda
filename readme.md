# API de Contatos:
Aplicação desenvolvida com a utilização de sequelize orm.

## Construção de uma api que cadastra contatos, uma agenda. Lista todos ou específicos, atualiza e exclui contatos.

## A estrutura:

first_name: STRING Obrigatorio,
last_name: STRING Obrigatorio,
email: STRING Obrigatorio,
telephone_1: INTEGER Obrigatorio,
telephone_2: INTEGER Opicional,

## Iniciando o projeto:

### npm init -y

## instalar as dependencias necessarias:

### npm install express mysql2 sequelize cors --save
### npm install dotenv --save

## Iniciar orm sequelize:

### npx sequelize-cli init

## Sequelize-cli:

### criando o banco:
### npx sequelize-cli db:create

### Gerando o arquivo da tabela:
### npx sequelize-cli migration:generate --name create-pessoas

### Executando a criação da tabela:
### npx sequelize-cli db:migrate