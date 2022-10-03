import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
const typeDefs = gql`
  type Biography {
    id: String
    data: String
  }
  type Query {
    biographies: [Biography]
  }
`;

const biographies = [
  {
    id: "1",
    data: " أحمد ابن إبراهيم ابن خالد الموصلي أبو علي نزيل بغداد صدوق من العاشرة مات سنة ست وثلاثين د فق",
  },
  {
    id: "2",
    data: " أحمد ابن إبراهيم ابن فيل باسم الحيوان المعروف أبو الحسن البالسي نزيل أنطاكية صدوق من الثانية عشرة مات سنة أربع وثمانين كن",
  },
  {
    id: "3",
    data: " أحمد ابن إبراهيم ابن كثير ابن زيد الدورقي النكري بضم النون البغدادي ثقة حافظ من العاشرة مات سنة ست وأربعين م د ت ق",
  },
  {
    id: "4",
    data: " أحمد ابن إبراهيم ابن محمد ابن عبد الله ابن بكار ابن عبد الملك ابن الوليد ابن بسر ابن أبي أرطاة البسري بضم الموحدة بعدها مهملة يكنى أبا عبد الملك صدوق من الحادية عشرة مات سنة تسع وثمانين س",
  },
];

const resolvers = {
  Query: {
    biographies: () => biographies,
  },
};

export const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
  plugins: [ApolloServerPluginLandingPageLocalDefault],
});

server.listen().then(({ url }) => {
  console.log(`connected on port: ${url}`);
});
