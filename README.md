# E-Commerce
[![Netlify](https://img.shields.io/netlify/27bf4c75-f056-4fe4-811d-ad5f602fd61b?label=Build&style=plastic)](https://ecommerce-prod.netlify.com/)

This project is based on the study of [React](https://reactjs.org/), so it may contain some errors. Will be a pleasure receive your code review, suggestions and/or tips. :raised_hands:

This project use some patterns like [BEM](http://getbem.com/), [ITCSS](https://speakerdeck.com/dafed/managing-css-projects-with-itcss), [Semantic Commit Messages](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716) and [Git flow](https://nvie.com/posts/a-successful-git-branching-model/).

If you want a live version [click here](https://ecommerce-prod.netlify.com/). But if you want to run the application in your pc, follow the Installation and Start Application section.

## Installation
This project was bootstrapped with [React Create App](https://github.com/facebook/create-react-app)

**1 -** Clone the project and install the dependencies:
```bash
$ git clone https://github.com/Eduk29/ecommerce.git
$ cd ecommerce
$ npm install
```
**2 -** Keep hacking! :metal:

## Start Application

If you want to run the application in your pc, follow these instructions. 

1 - You need to start the JSON server to get access to a fake API. Open the terminal in project root directory and run the following instruction:
```bash 
json-server --watch db.json --port 3001
```
**This command terminal must be open during application execution.**

2 - After the start the JSON server, you need to start the application. So, open another command terminal in the project root directory and run the following instruction:
```bash
npm start
```

3 - Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Folder structure
	.
    ├── public/
    ├── src/
    |   ├── App/
    |   ├── assets/
    |   ├── components/
    |   |   └── Badge/
    |   |   └── Button/
    |   |   └── CustomersInformation/
    |   |   └── FilterPanel/
    |   |   └── InputSelect/
    |   |   └── InputText/
    |   |   └── Navbar/
    |   |   └── ProductCard/
    |   |   └── Table/
    |   ├── containers/
    |   |   └── ItemList/
    |   |   └── OrderCart/
    |   |   └── OrderCheckout/
    |   ├── pages/
    |   |   └── Cart/
    |   |   └── Checkout/
    |   |   └── Home/
    |   ├── services/
    |   |   └── Brands/
    |   |   └── Categories/
    |   |   └── config/
    |   |   └── Products/
    |   ├── store/
    |   |   └── actions/
    |   |   └── reducers/
    |   |   └── states/
    |   |   └── types/
    |   ├── style/
    |   |   └── components/
    |   |   └── containers/
    |   |   └── pages/
    |   |   └── settings/
    |   |   └── tools/
    ├── .editorconfig
    ├── .eslintignore
    ├── .eslintrc.js
    ├── .gitignore
    ├── .prettierrc
    ├── db.json
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── yarn-lock

## Dependecies
  
  - ES Lint
  - Font Awesome
  - Husky
  - Json Server
  - Node Sass
  - Prettier
  - React
  - Redux

## Deploy Plataform and CI
- [Netlify](https://www.netlify.com/)

## Developer :computer:

José Eduardo Trindade E Marques  
edu.temarques@gmail.com
