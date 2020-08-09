'use strict';

const { gql } = require('apollo-server-lambda');

const typeDefs = gql`
    type Query {
        hello: String
    }
`;

const resolvers = {
    Query: {
        hello: () => 'Hello world!',
    },
};

module.exports = {};
module.exports.typeDefs = typeDefs;
module.exports.resolvers = resolvers;