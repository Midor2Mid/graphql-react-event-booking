# graphql-react-event-booking
Learning GraphQL
# Buổi 1: Project Setup
* Tạo thư mục chứa project: 
  * npm init
  * npm install --save express body-parser (npm install --save feathers body-parser) `Feathers v3 is out and this module has moved to @feathersjs/commons. See https://docs.feathersjs.com/migrating.html for more information. => npm uninstall feathers-cli -g => feathers upgrade` 
  * npm install --save-dev nodemon
* Tạo file app.js để setup node server
* Ghi chú: 
`const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const app = express(feathers());;`
  * Trong package.json thêm: "@feathersjs/express": "^1.2.3", và npm i
# Buổi 2: Use graphQL
* npm install --save express-graphql graphql
  * express-graphql: GraphQL package can be used as a middleware in express, allow us to point at schema at resolvers and automatically connect all of that, route requests to a parser and handle them according to schema and forward them to the resolvers.
  * graphql: allow us to define the schema and setup a schema that follows the official graphQL specification and definition that will give us a valid schema. Parse our schema and convert it and we can then use this parsed.
* Lưu ý: 
  * GraphQL, we have only one endpoint to which all requests are sent. (/graphql).
  * events matches events (rootValue).
  * resolver là 1 function.
  * graphiql: true => special URL we can visit: User Interface.