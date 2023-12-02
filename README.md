# Agrifarm

Projeto que simula um ecommerce de produtos agrícolas.

## Visão Geral

## Funcionalidades

### - Responsividade:
Toda o menu é responsivo, logo você pode acessar em qualquer dispositivo desde computadores e laptops á tablets e smartphones.
Ferramentas Utilizadas

### - React/vite com typeScript:
Uma biblioteca JavaScript para construir interfaces de usuário. Ela foi escolhida pela facilidade na criação e navegação de páginas dentro do projeto, além disso, deixa a aplicação mais performática o que melhora a experiência do usuário dentro do site. Ao iniciar um projeto React dentro dele já possui HTML / CSS / JavaScript integrado.

### - Styles-Components:
é uma biblioteca que possibilita escrever códigos CSS dentro do JavaScript. Ela foi utilizada pela sua facilidade em criar “class”, o que é feito automaticamente por ele.

### - Git e GitHub:
O controle de versão do projeto é gerenciado pelo Git e hospedado no GitHub, permitindo um fluxo de trabalho colaborativo e o controle de alterações ao longo do tempo.

## Instalação

Se você deseja executar o ecommerce Agrifarm localmente, siga estas etapas:

1- Clone este repositório em sua máquina local usando o seguinte comando Git:
git clone: https://github.com/Higor-Santanna/menu-teste.git

2- Depois de criado a pasta acesse o diretório do projeto:
cd (nome da pasta)

3- Instale as dependências do projeto usando um gerenciador de pacotes, como o npm ou yarn:
Npm install ou yarn isntall

4- Após a instalação de todas as dependências basta fazer um (npm run dev ou yarn dev) e acessar a aplicação em alguma porta que será disponibilizada em forma de URL.

5 – Para que o projeto funcione será necessário fazer uma conta na agroAPI que é o portal onde ficam hospedadas as APIs da embrapa:
https://www.agroapi.cnptia.embrapa.br/store/

6 – Depois de feito a conta e o login, clique no baner BIOInsumo e vá em DOCUMENTATION, baixe os dois pdfs e siga EXATAMENTE o que ambos os pdfs dizem.

7 – Após seguirem o que o PDF da Embrapa propôs (tem que fazer aquele passo a passo para funcionar), você terá duas chaves pegue a primeira e vá no seu projeto na pasta servises > api > index.tsx, e coloque a chave da API no const apiKey: string = ' sua chave aqui ‘.

8 – Retorne no site da API e vá na aba API Console, dentro dela você irá clicar na palavra GET (primeiro get), logo abaixo de produtos biológicos. Procure pela frase REQUEST URL e copie aquela URL.

9 – Com a url copiada entre no seu projeto na pasta servises > api > index.tsx, e coloque a chave da API no const apiUrl: string = ' sua url aqui ‘.

OBS: Esse projeto foi criado usando o vite, caso não esteja rodando em sua máquina verifique se essas dependências estão instaladas

## Link do deploy do site:

https://agrifarm.vercel.app/
