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