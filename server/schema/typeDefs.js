import { gql } from "apollo-server";

export const typeDefs = gql`
  type User{
    id: ID!
    email: String!
    token: String
    username: String
    createdAt : String
    updatedAt : String
  }
  type Query {
    getUser: [User]!
  }
`;

