// import { graphql } from 'graphql'
// import { addMocksToSchema } from '@graphql-tools/mock'
// import { makeExecutableSchema } from '@graphql-tools/schema'
 
// // Fill this in with the schema string
// const schemaString = `...`
 
// // Make a GraphQL schema with no resolvers
// //const schema = makeExecutableSchema({ typeDefs: schemaString })
 
// // Create a new schema with mocks
// // const schemaWithMocks = addMocksToSchema({ schema })
 
// // const query = /* GraphQL */ `
// //   query tasksForUser {
// //     user(id: 6) {
// //       id
// //       name
// //     }
// //   }
// // `
 
// // graphql({
// //   schema: schemaWithMocks,
// //   source: query
// // }).then(result => console.log('Got result', result))









// // import {
// //     makeExecutableSchema,
// //     addMockFunctionsToSchema
// //   } from 'graphql-tools';
// //   import { graphql } from 'graphql';
// //   import { addMocksToSchema as _df } from '@graphql-tools/mock'

// //   // Fill this in with the schema string
// //   const schemaString = `
// //     type books {title: String }
// //     type Query { books: [books] }
// //   `;
  
// //   // Make a GraphQL schema with no resolvers
// //   const schema = makeExecutableSchema({ typeDefs: schemaString });
  
// //   // Add mocks, modifies schema in place
// //   addMockFunctionsToSchema({ schema });
  
// //   const query = `{
// //     user(id: 6) { id, name }
// //   }`;
  
// //   graphql(schema, query).then((result) =>
// //     console.log('Got result', result));
  
// //   // Result will fill in fake data for all the fields:
// //   // { "data": { "user": {
// //   //   "id": "Hello, world!", "name": "Hello, world"
// //   // }}}




