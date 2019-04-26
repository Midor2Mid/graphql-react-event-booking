const feathers = require('@feathersjs/feathers');
const bodyParser = require('body-parser');
const express = require('@feathersjs/express');
const graphQLHttp = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express(feathers());

const events = [];

app.use(bodyParser.json());

// app.get('/', (req, res, next) => {
//     res.send("Hello")
// });

app.use('/graphql', graphQLHttp({
    schema: buildSchema(`
    type Event {
        _id: ID!
        title: String!
        description: String!
        price: Float!
        date: String!
    }

    input  EventInput {
            title: String!
            description: String!
            price: Float!
            date: String!
    }

    type RootQuery {
        events:  [Event!]!
    }

    type RootMutation {
        createEvent(eventInput: EventInput): Event
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
    `),
    rootValue: {
        events: () => {
            return events;
        },
        createEvent: (args) => {
            // const eventName = args.name;
            // return eventName;
            const event = {
                _id: Math.random().toString(),
                title: args.eventInput.title,
                description: args.eventInput.description,
                price: +args.eventInput.price,
                date: args.eventInput.date
            }
            events.push(event);
            return event
        }
    },
    graphiql: true
})
);

app.listen(3000);