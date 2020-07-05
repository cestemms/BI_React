# BI_React
Front-end de proposta para o novo layout do BI em React, utilizando styled-components

## Requisitos
* [Node](https://nodejs.org/en/) versão 12.18.2 ou versão estável mais atual
* [Yarn](https://yarnpkg.com/) _Opcional_, pode-se utilizar o npm (utilizo o yarn por questões de afinidade, o npm costuma gerar o erro _npm err code elifecycle_)

## Facilitadores
Algumas extensões do VS Code para facilitar a edição do código:
* Rocketseat ReactJS Snippets
`ext install rocketseat.RocketseatReactJS`
* vscode-styled-components
`ext install vscode-styled-components`
* Highlight Matching Tag
`ext install vincaslt.highlight-matching-tag`
* Auto Close Tag
`ext install formulahendry.auto-close-tag`
* Auto Rename Tag
`ext install formulahendry.auto-rename-tag`

### Dependencias
Estão listadas no package.json, após clonar o projeto, na pasta root, rodar `yarn add` ou `npm install` para baixar as dependências

### Ícones
Serão instalados com o pacote de dependências, fazem parte do [React Icons](https://react-icons.github.io/).
Para incluir novos ícones deve-se importar ícone da pasta correta.

Ex: ícone facebook **FaFacebook**:

import { FaFacebook} from 'react-icons/fa'

as duas primeiras letras do componente representam a pasta na qual ele se encontra no pacote.

### Rodando o projeto
Como não há nenhuma Api de backend vinculaada ao projeto, por hora, basta rodar `yarn start`
