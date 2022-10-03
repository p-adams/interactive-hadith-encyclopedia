import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Biography {
    id: String
    data: String
  }
  type Query {
    biographies: [Biography]
  }
`;
