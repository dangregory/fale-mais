# Fale Mais

## Rodando o projeto

Execute o comando `npm install` para instalar as dependências;
Execute `ng serve` para iniciar o projeto em http://localhost:4200/.

## Teste Automatizado

Para rodar o teste, execute `ng test` no terminal
O Jasmine será executado em http://localhost:9876/#




## Fale Mais
FaleMais é o novo produto da CI&T Telecomunicações. Com ele, o cliente adquire um plano e pode falar de graça até um determinado tempo (em minutos) e só paga os minutos excedentes. Dessa forma, foi criada uma página web onde o cliente pode calcular o valor da ligação. Ali, ele pode escolher os códigos das cidades de origem e destino, o tempo da ligação em minutos e comparar os planos FaleMais. O sistema mostrar também os valores da ligação sem nenhum plano. 

## Motivação
Esse projeto foi feito como parte do processo seletivo da CI&T, onde busco mostrar meus conhecimentos e boas práticas de desenvolvimento e modelagem. Além da versão desktop, também foi desenvolvido uma versão móvel/responsiva da plataforma.

## Como Usar

Para clonar e rodar essa aplicação, você precisará de [Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/download/) (que vem com [npm](http://npmjs.com)) isntalados no seu computador. Pelo terminal:

```bash
# Clone esse repositório
$ git clone https://github.com/dangregory/fale-mais.git

# Entre no repositório
$ cd fale-mais

# Instale as dependências
$ npm install

# Rode o app
$ ng serve
```
Nota: Se você está usando Linux Bash no windows, [veja esse guia](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) ou use `node` do prompt de comando.

* `npm install`

![npm install](/screenshots/npm-install.png?raw=true "npm install")

* `ng serve`

![ng serve](/screenshots/ng-serve1.png?raw=true "ng serve")

![ng serve](/screenshots/ng-serve2.png?raw=true)

## Tech

Para os dialogs, foi usada a biblioteca [Angular Material](https://material.angular.io/).

Como pré-processador de css, foi usado [Sass](https://sass-lang.com/), sendo possível a criação de mixins e o uso de variáveis.

![sass](/screenshots/sass.png?raw=true)

## Testes
Para executar os testes automatizados, é necessário executar o comando `ng test`. O Karma será executado no endereço http://localhost:9876/.

* `ng test`
![ng test](/screenshots/ng-test.png?raw=true)

* Karma sem erros:
![karma](/screenshots/jasmine-ok.png?raw=true)

* Karma com erro forçado:
![karma error](/screenshots/jasmine-error.png?raw=true)

Foram criados 9 testes. Entre eles, alguns para verificar as funções que calculam os valores dos planos:

![test](/screenshots/test.png?raw=true)

## Screenshots

* Tela inicial:
![home](/screenshots/home1.png?raw=true)

* Valores preenchidos:
![home](/screenshots/home2.png?raw=true)

* Mobile:
![mobile](/screenshots/mobile.png?raw=true)

#### Troubleshooting

Caso encontre algum erro referente a permissão de EACCESS, siga o seguinte tutorial para alterar o diretório padrão do npm.

https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally


MIT © [DanielGregory]()