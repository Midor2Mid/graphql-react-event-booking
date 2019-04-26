const feathers = require('@feathersjs/feathers');
const bodyParser = require('body-parser');
const express = require('@feathersjs/express');
const graphQLHttp = require('express-graphql');
const  { buildSchema }= require('graphql');

const app = express(feathers());;

app.use(bodyParser.json());

// app.get('/', (req, res, next) => {
//     res.send("Hello")
// });

app.use('/graphql', graphQLHttp({
    schema: buildSchema(`
    type RootQuery {
        events:  [String!]!
    }

    type RootMutation {
        createEvent(name: String): String
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
    `),
    rootValue: { 
        events: () => {
            return ["Romantic Cooking", "Sailing", "All-Night Coding"]
        },
        createEvent: (args) => {
            const eventName = args.name;
            return eventName;
        }
    },
    graphiql: true
})
);

app.listen(3000);