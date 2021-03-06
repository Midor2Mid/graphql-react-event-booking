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
# Buổi 3: Types và Data
* Lưu ý với query và mutation cũng như subscription, ta trả về kiểu dữ liệu đã xác định lúc khai báo schema, ví dụ: 
	`type RootQuery {
        events:  [Event!]!
    }
    type RootMutation {
        createEvent(eventInput: EventInput): Event
    }` thì phải trả về một mảng với query và một object có kiểu dữ liệu là Event với mutation.
# Buổi 4: GraphQL + MongoDB
* npm install mongoose
* save() => vào database và write data vào đó.
* return {...result._doc}: 
  * `...` spread operator => chuyển chuỗi thành nhiều arguments (trong trường hợp gọi với hàm) hoặc thành nhiều phần tử (cho array).
  * `._doc` property được cung cấp bởi mongoose trả về các thuộc tính (properties) của document hay object không bao gồm metadata.
* Lưu ý: nên thêm return trước `event.save()` => `return event.save()` để GraphQL Express, GraphQL biết resolver này thực thi một async operation ở cuối cùng và sẽ chờ cho nó chạy xong. Nếu không nó sẽ thực thi ngay lập tức và không nhận được giá trị hợp lệ trả về.
* _id là field của mongodb, do đó GraphQL có thể sẽ không hiểu, ta có thể chuyển thành String bằng cách: 
  * result._doc._id.toString() 
  * _id: event.id (.id là phương thức có sẵn)
* Lưu ý: Cách import { /module/}  = required('//'): Import chỉ 1 module có tên tương ứng trong required [import trong JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
# Buổi 5: Adding Relations
* Tạo thêm model user trong /models/user.js
  * model này có field password => không thể lưu password dưới dạng plain text để chống hack => 
* Lưu ý: 
  * Hiện tại model User sử dụng collection users trùng với users trong kpitest nên sẽ yêu cầu email unique (mặc dù trong project này không kiểm tra field email)