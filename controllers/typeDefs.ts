import { gql } from "apollo-server";

export const typeDefs = gql`
  type Friends {
    _id: String
    index: Int
    picture: String
    age: Int
    eyeColor: String
    name: String
    company: String
    email: String
    phone: String
  }

  type List {
    _id: ID
    index: Int
    picture: String
    age: Int
    eyeColor: String
    name: String
    company: String
    email: String
    phone: String
    friends: [Friends]
    greeting: String
  }

  type Query {
    list: [List]
    findUser(name: String!): List
    findFriends(name: String!): List
  }
`;
